import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Welcome to SkillOrbit</h1>
      <Button>Get Started</Button>
    </div>
  );
}
