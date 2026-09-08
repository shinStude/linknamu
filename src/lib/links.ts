export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "신재민",
  bio: "풀스택 개발자 : 요즘에는 AI 개발에 관심이 많아요. ",
  avatarUrl: "/profile.jpg",
};

export const links: LinkItem[] = [
  { id: "github", label: "🐙 GitHub", url: "https://github.com/shinStude" },
  { id: "blog", label: "📝 블로그", url: "https://godwebstory.tistory.com/" },
  { id: "email", label: "📧 이메일", url: "mailto:tlswoals87@naver.com" },
];
