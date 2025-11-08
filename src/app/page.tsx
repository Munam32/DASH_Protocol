
import { HeroSection } from '@/components/dash-decoded/hero-section';
import { AnalogySection } from '@/components/dash-decoded/analogy-section';
import { ComponentsSection } from '@/components/dash-decoded/components-section';
import { VisualizerSection } from '@/components/dash-decoded/visualizer-section';
import { DetectiveSection } from '@/components/dash-decoded/detective-section';
import { TakeawaysSection } from '@/components/dash-decoded/takeaways-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 max-w-screen-2xl items-center px-4 md:px-6">
          <h1 className="text-xl font-bold text-primary">DASH Decoded</h1>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <AnalogySection />
        <ComponentsSection />
        <VisualizerSection />
        <DetectiveSection />
        <TakeawaysSection />
      </main>
      <footer className="py-6 md:px-8 md:py-0 border-t border-border/40">
        <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
          <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            
          </p>
        </div>
      </footer>
    </div>
  );
}
