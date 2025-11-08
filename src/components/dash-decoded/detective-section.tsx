
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Terminal } from "lucide-react";

const steps = [
  {
    title: "Go to a streaming site",
    description: "Navigate to YouTube, Netflix, or any major streaming service."
  },
  {
    title: "Open Developer Tools",
    description: "Press F12 on your keyboard (or Cmd+Opt+I on Mac)."
  },
  {
    title: "Click the 'Network' tab",
    description: "This tab shows all network requests made by the page."
  },
  {
    title: "Filter the requests",
    description: "In the filter box, type .mpd to find the 'menu' or .m4s to find the video 'segments'."
  },
  {
    title: "Play the video",
    description: "Press play and watch the segments roll in! You'll see the player requesting new chunks every few seconds."
  }
];

export function DetectiveSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Be a DASH Detective</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              You can use your browser's built-in tools to see this on any major streaming site.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-4xl mt-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-6 w-6 text-primary" />
                See It in the Wild
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
