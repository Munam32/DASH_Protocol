
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "No Buffering",
    description: "It proactively drops quality to keep the video playing, prioritizing continuous playback over a high-resolution freeze."
  },
  {
    title: "Fast Start-up",
    description: "It can start with a low-quality segment to begin playing immediately, then ramp up to higher quality as bandwidth allows."
  },
  {
    title: "Best Possible Quality",
    description: "It always tries to deliver the best quality your connection can handle at that exact second, maximizing your viewing experience."
  }
];

export function TakeawaysSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why DASH Wins</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              A quick recap of the major advantages.
            </p>
          </div>
        </div>
        <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-3 mt-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="grid gap-2 text-center sm:text-left">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold">{benefit.title}</h3>
              </div>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
