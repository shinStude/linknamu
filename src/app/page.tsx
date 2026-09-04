import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/lib/links";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center bg-background px-4 py-10">
      <div className="relative w-full max-w-sm rounded-2xl border border-card-border bg-card p-6 shadow-sm sm:p-8">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center gap-8 pt-6">
          <Profile name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
          <LinkList links={links} />
        </div>
      </div>
    </main>
  );
}
