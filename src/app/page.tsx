import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/lib/links";

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center px-6 py-16 sm:py-20">
      <div className="absolute right-5 top-5 sm:right-8 sm:top-8">
        <ThemeToggle />
      </div>
      <div className="flex w-full max-w-sm flex-col items-center gap-12">
        <Profile name={profile.name} bio={profile.bio} avatarUrl={profile.avatarUrl} />
        <LinkList links={links} />
      </div>
    </main>
  );
}
