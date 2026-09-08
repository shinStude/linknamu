import type { LinkItem } from "@/lib/links";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/40 bg-white/40 px-6 py-4 text-center font-medium text-foreground shadow-[0_4px_24px_-8px_rgba(120,80,40,0.18)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/55 active:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {link.label}
    </a>
  );
}
