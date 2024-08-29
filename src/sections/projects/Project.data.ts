export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  thumbnailLink: string;
  link: string;
}

export const projectData: ProjectType[] = [
  {
    title: "Web Portfolio - Rohinesh Ram",
    description:
      "A web portfolio introducing me and show-casing my skills and talents. Built with React + Typescript and deployed on AWS.",
    technologies: [
      "Typescript",
      "React",
      "IaC",
      "CloudFront",
      "SSL/TLS",
      "S3",
      "Terraform",
      "tailwindcss",
    ],
    thumbnailLink: "/web-portfolio.png",
    link: "https://github.com/R-Ram95/web-portfolio",
  },
  {
    title: "EarnNLearn",
    description:
      "Fullstack web application enabling parents to assign chores and award rewards to their children. Deployed on Render.com",
    technologies: ["Javascript", "ExpressJS", "MongoDB"],
    thumbnailLink: "/earn-n-learn.png",
    link: "https://earnnlearn.onrender.com",
  },
  {
    title: "rarlibc - C++ Library",
    description:
      "Custom C++ library built to support an HTTP server implemented in C++. Includes abstractions for socket communication built on top of the sys/socket.h system calls.",
    technologies: ["C++", "TCP Communication"],
    thumbnailLink: "/cpp.png",
    link: "https://github.com/R-Ram95/rar_libc",
  },
];
