type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="rounded-full bg-gradient-to-br from-white/90 to-orange-100/70 p-[3px] shadow-[0_10px_30px_-8px_rgba(194,120,60,0.45)] dark:from-white/10 dark:to-orange-500/10">
        <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-500 ring-1 ring-white/70 dark:bg-zinc-700 dark:text-zinc-300 dark:ring-white/10">
          {avatarUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
          ) : (
            <span>{initial}</span>
          )}
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{name}</h1>
        <p className="mt-2 text-sm leading-relaxed text-muted">{bio}</p>
      </div>
    </div>
  );
}
