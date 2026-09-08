import type { LinkItem } from "@/lib/links";

type LinkCardProps = {
  link: LinkItem;
  clickCount: number;
  onLinkClick?: () => void;
};

export default function LinkCard({ link, clickCount, onLinkClick }: LinkCardProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onLinkClick}
      className="flex w-full items-center justify-between rounded-2xl border border-white/40 bg-white/40 px-6 py-4 font-medium text-foreground shadow-[0_4px_24px_-8px_rgba(120,80,40,0.18)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/55 active:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span className="flex-1 text-center">{link.label}</span>
      <span className="ml-2 shrink-0 text-xs font-normal text-muted">{clickCount}회</span>
    </a>
  );
}
