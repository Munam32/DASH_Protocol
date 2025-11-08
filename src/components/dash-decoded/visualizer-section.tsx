
"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, ArrowUpCircle, Info, Wifi, WifiOff } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dashjs: any;
  }
}

type LogType = 'info' | 'quality' | 'network' | 'event';

interface LogEntry {
  time: string;
  message: string;
  type: LogType;
}

export function VisualizerSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);
  const logContainerRef = useRef<HTMLDivElement>(null);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [currentQuality, setCurrentQuality] = useState("N/A");
  const [bufferLength, setBufferLength] = useState(0);
  const [isPlayerReady, setPlayerReady] = useState(false);

  const addLog = (msg: string, type: LogType = 'info') => {
    const time = new Date().toLocaleTimeString();
    setLogs(prevLogs => [...prevLogs.slice(-200), { time, message: msg, type }]);
  };

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.dashjs) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const url = "https://media.axprod.net/TestVectors/v7-Clear/Manifest.mpd";
      const player = window.dashjs.MediaPlayer().create();
      playerRef.current = player;
      
      player.initialize(videoElement, url, false);
      addLog("DASH player initializing...", 'info');

      player.on(window.dashjs.MediaPlayer.events.STREAM_INITIALIZED, () => {
        setPlayerReady(true);
        addLog("Stream initialized. Ready to play.", 'info');
      });
      
      const handleQualityChange = (event: any) => {
        const newQualityIndex = player.getQualityFor("video");
        const streamInfo = player.getActiveStream().getStreamInfo();
        if (!streamInfo) return;
        const bitrates = player.getBitrateInfoListFor("video", streamInfo.id);
        if (!bitrates || !bitrates[newQualityIndex]) return;
        
        const newQuality = bitrates[newQualityIndex];
        const qualityInfo = `${newQuality.height}p @ ${Math.round(newQuality.bitrate / 1000)} kbps`;
        
        setCurrentQuality(qualityInfo);
        if (event.type === "qualityChangeRendered") {
            addLog(`Quality changed to: ${qualityInfo}`, 'quality');
        } else {
             addLog(`Initial quality: ${qualityInfo}`, 'info');
        }
      };

      player.on(window.dashjs.MediaPlayer.events.QUALITY_CHANGE_RENDERED, handleQualityChange);
      player.on(window.dashjs.MediaPlayer.events.PLAYBACK_STARTED, handleQualityChange);
      
      player.on(window.dashjs.MediaPlayer.events.PLAYBACK_TIME_UPDATED, () => {
          const buffer = player.getBufferLength("video");
          setBufferLength(buffer);
      });
      
      player.on(window.dashjs.MediaPlayer.events.FRAGMENT_LOADING_STARTED, (e: any) => {
        if (e.mediaType === "video") {
          addLog(`Requesting segment: index ${e.request.index}`, 'event');
        }
      });

      player.on(window.dashjs.MediaPlayer.events.FRAGMENT_LOADING_COMPLETED, (e: any) => {
        if (e.mediaType === "video") {
          const duration = (e.request.duration / 1000).toFixed(2);
          addLog(`Downloaded segment in ${duration}s.`, 'event');
        }
      });

      return () => {
        addLog("Cleaning up player instance.", 'info');
        if (player) {
          player.reset();
        }
      };
    } else {
       setTimeout(() => {
        if (!playerRef.current) {
            addLog("Error: dash.js script not found.", 'info');
        }
       }, 3000);
    }
  }, []);

  const simulateBadNetwork = () => {
    if (!playerRef.current) return;
    const player = playerRef.current;
    
    addLog("SIMULATING BAD NETWORK: Limiting bandwidth to 500kbps for 30s...", 'network');
    player.updateSettings({
      'streaming': {
        'abr': {
          'maxBitrate': { 'video': 500 }
        }
      }
    });

    setTimeout(() => {
      addLog("NETWORK RESTORED: Removing bandwidth limit.", 'network');
      player.updateSettings({
        'streaming': {
          'abr': {
            'maxBitrate': { 'video': -1 } // -1 means no limit
          }
        }
      });
    }, 30000);
  };

  return (
    <section id="visualizer" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">See DASH in Action</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Press play on the video below. The "Live Log" will show you every decision the DASH player makes in real-time. Then, try the "Simulate Bad Network" button to see it adapt!
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl items-start gap-8 md:grid-cols-2 md:gap-12 mt-12">
          <div className="flex flex-col gap-4">
            <video ref={videoRef} controls className="w-full rounded-lg border bg-black aspect-video"></video>
            <Button onClick={simulateBadNetwork} disabled={!isPlayerReady} variant="destructive">
              <WifiOff className="mr-2 h-4 w-4" />
              Simulate Bad Network
            </Button>
          </div>
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Live Stats & Player Log</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 grid gap-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="font-semibold">Current Quality:</div>
                <div className="text-right text-accent font-mono">{currentQuality}</div>
                <div className="font-semibold col-span-2">Buffer Level ({bufferLength.toFixed(2)}s):</div>
                <div className="col-span-2">
                  <Progress value={(bufferLength / 30) * 100} className="h-3" />
                </div>
              </div>
              <div className="text-sm font-semibold">Live Action Log:</div>
              <div ref={logContainerRef} className="bg-background rounded-md p-3 text-sm font-mono border h-[300px] overflow-y-auto space-y-2">
                {logs.length > 0 ? (
                  logs.map((log, index) => {
                    let icon: React.ReactNode;
                    let colorClass = "text-muted-foreground";

                    if (log.type === 'quality') {
                      icon = <ArrowUpCircle className="h-4 w-4" />;
                      colorClass = "text-accent";
                    } else if (log.type === 'network') {
                      icon = log.message.includes("SIMULATING") ? <WifiOff className="h-4 w-4" /> : <Wifi className="h-4 w-4" />;
                      colorClass = "text-destructive";
                       if (log.message.includes("RESTORED")) {
                         colorClass = "text-green-400";
                       }
                    } else {
                       icon = <Info className="h-4 w-4" />;
                    }

                    return (
                      <div key={index} className={cn("flex items-start gap-2 text-xs", colorClass)}>
                        <span className="text-primary/70 shrink-0">{log.time}</span>
                        <div className="flex items-center gap-1 shrink-0">{icon}</div>
                        <span className="break-words">{log.message}</span>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    Waiting for player actions...
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
