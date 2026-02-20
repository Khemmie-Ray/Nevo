import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExplorePools } from "@/components/ExplorePools";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 flex flex-col pt-20">
      <Navigation />
      <main className="flex-grow">
        <ExplorePools />
      </main>
      <Footer />
    </div>
  );
}
