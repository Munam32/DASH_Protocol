
import { Button } from "@/components/ui/button";
import { AnimatedIcon } from "@/components/dash-decoded/animated-icon";

export function HeroSection() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-card border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                Stop the Stutter.
                <br />
                <span className="text-primary">See How Modern Video Streaming Works.</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                An interactive guide to DASH (Dynamic Adaptive Streaming over HTTP), the tech that powers Netflix, YouTube, and stops the buffering wheel.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="#visualizer">See it in Action</a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <AnimatedIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
