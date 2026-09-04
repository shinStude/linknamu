type ProfileProps = {
  name: string;
  bio: string;
  avatarUrl?: string;
};

export default function Profile({ name, bio, avatarUrl }: ProfileProps) {
  const initial = name.trim().charAt(0).toUpperCase();

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-500 dark:bg-zinc-700 dark:text-zinc-300">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatarUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <span>{initial}</span>
        )}
      </div>
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="mt-1 text-sm text-muted">{bio}</p>
      </div>
    </div>
  );
}
