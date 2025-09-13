import AuthButton from "@/components/AuthButton";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">SkillOrbit</h1>
      <AuthButton />
    </div>
  );
}
