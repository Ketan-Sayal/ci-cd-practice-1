import GithubButton from "@/components/GithubButton";
import { Button } from "@workspace/ui/components/button";
import { Card, CardContent } from "@workspace/ui/components/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-2xl font-bold">TaskFlow</h1>
        <GithubButton/>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight">
          Organize Your Life <br />
          <span className="text-primary">One Task at a Time</span>
        </h1>

        <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
          A modern todo app to manage tasks, boost productivity, and stay focused.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Start for Free</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Features */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Smart Tasks" 
            desc="Organize tasks with priorities and deadlines."
          />
          <FeatureCard 
            title="Daily Planner" 
            desc="Plan your day with a clean interface."
          />
          <FeatureCard 
            title="Cloud Sync" 
            desc="Access your tasks from anywhere."
          />
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-muted">
        <h2 className="text-4xl font-bold">Ready to boost productivity?</h2>
        <p className="text-muted-foreground mt-4">
          Join thousands of users managing tasks efficiently.
        </p>

        <Button size="lg" className="mt-6">
          Get Started Now
        </Button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-muted-foreground border-t">
        © 2026 TaskFlow
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2">{desc}</p>
      </CardContent>
    </Card>
  );
}