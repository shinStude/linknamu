export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "Shin Jaemin",
  bio: "세계 최강 바이브코더",
  avatarUrl: "",
};

export const links: LinkItem[] = [
  { id: "blog", label: "블로그", url: "https://example.com/blog" },
  { id: "github", label: "GitHub", url: "https://github.com" },
  { id: "instagram", label: "Instagram", url: "https://instagram.com" },
];
