export type CarouselProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
};

const carouselItems: CarouselProps[] = [
  {
    id: 1,
    title: "AI Revolution",
    description:
      "And what, how we will be evaluating is number one - the integration of AI into every aspect of development",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    category: "Artificial Intelligence",
  },
  {
    id: 2,
    title: "Full-Stack Dominance",
    description:
      "Modern developers master React, Node.js, databases, and cloud infrastructure for end-to-end solutions",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=center",
    category: "Full-Stack Development",
  },
  {
    id: 3,
    title: "Frontend Evolution",
    description:
      "Next.js 14, Server Components, and TypeScript are reshaping how we build user interfaces",
    image:
      "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=400&h=300&fit=crop&crop=center",
    category: "Frontend Technologies",
  },
  {
    id: 4,
    title: "Cloud-First Development",
    description:
      "AWS, Vercel, and Supabase enable rapid deployment and infinite scalability",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=center",
    category: "Cloud Computing",
  },
  {
    id: 5,
    title: "AI Coding Assistants",
    description:
      "GitHub Copilot, Cursor, and Claude are transforming developer productivity by 10x",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop&crop=center",
    category: "Developer Tools",
  },
  {
    id: 6,
    title: "Remote-First Market",
    description:
      "Tech companies embrace global talent with 6-figure salaries for skilled developers",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop&crop=center",
    category: "Tech Career",
  },
  {
    id: 7,
    title: "API Economy Boom",
    description:
      "Microservices, GraphQL, and REST APIs create interconnected digital ecosystems",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
    category: "Backend Architecture",
  },
  {
    id: 8,
    title: "Developer Experience",
    description:
      "Hot reload, TypeScript, and modern tooling make coding faster and more enjoyable",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center",
    category: "Development Tools",
  },
  {
    id: 9,
    title: "Web3 & Blockchain",
    description:
      "Smart contracts, DeFi, and decentralized apps open new frontiers in tech innovation",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=300&fit=crop&crop=center",
    category: "Blockchain Technology",
  },
];

export default carouselItems;
