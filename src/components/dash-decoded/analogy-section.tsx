
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Sparkles } from "lucide-react";

export function AnalogySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">The "Old Way" vs. The "DASH Way"</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comparing traditional video loading with modern adaptive streaming.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-2 mt-12">
          <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <Download className="h-10 w-10 text-muted-foreground" />
              <CardTitle>The Old Way: Progressive Download</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Like ordering a 5-course meal on one giant platter. You can't start eating until the whole thing arrives, and if it's too big for the door (your internet), you just have to wait.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="flex flex-row items-center gap-4">
              <Sparkles className="h-10 w-10 text-primary" />
              <CardTitle>The DASH Way: Adaptive Streaming</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Like ordering from a 'small plates' menu. You get a menu (the MPD), order one small dish (a segment), and if the kitchen is slow (bad internet), you just order a smaller, faster dish next. You never stop eating.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
