
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, FileText, Puzzle } from "lucide-react";

const components = [
  {
    icon: <FileText className="h-10 w-10 text-accent" />,
    title: 'The MPD (The "Menu")',
    description: "Media Presentation Description (MPD): A small text file the player downloads first. It's the \"menu\" that tells the player all available video segments, their qualities (480p, 1080p), and where to find them."
  },
  {
    icon: <Puzzle className="h-10 w-10 text-accent" />,
    title: 'The Segments (The "Dishes")',
    description: "Segments: The video itself is broken into tiny, 2-10 second \"chunks.\" Each chunk is pre-encoded in multiple quality levels (e.g., a 480p version, a 720p version, a 1080p version)."
  },
  {
    icon: <Bot className="h-10 w-10 text-accent" />,
    title: 'The Player (The "Smart Customer")',
    description: "The Player Logic: The player's logic is the \"brains.\" It constantly checks your internet speed and buffer level. Its job: to decide which quality segment (480p or 1080p) to request next to ensure playback never stops."
  }
];

export function ComponentsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The 3 Parts of Every DASH Stream</h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-1 md:grid-cols-3 md:gap-12 lg:max-w-none mt-12">
          {components.map((component, index) => (
            <Card key={index} className="flex flex-col h-full transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20">
              <CardHeader className="items-center pt-8">
                {component.icon}
              </CardHeader>
              <CardContent className="flex-grow flex flex-col items-center text-center space-y-4 p-8">
                <CardTitle className="text-2xl">{component.title}</CardTitle>
                <p className="text-muted-foreground flex-grow">{component.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
