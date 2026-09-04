import type { LinkItem } from "@/lib/links";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-card-border bg-card px-5 py-3 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
    >
      {link.label}
    </a>
  );
}
