export interface ProjectType {
  title: string;
  description: string;
  technologies: string[];
  thumbnailLink: string;
  link: string;
}

export const projectData: ProjectType[] = [
  {
    title: "rDrive - Image and Video Hosting Web Application",
    description:
      "A secure, serverless web application for uploading, organizing, and downloading images and videos. Integrated AWS services, including API Gateway, Lambda, and S3, to provide presigned URLs for client uploads and downloads, with custom file management features.",
    technologies: [
      "HTTP Api",
      "AWS Gateway",
      "AWS Lambda",
      "AWS CloudFront",
      "AWS S3",
      "Serverless",
      "React",
      "Typescript",
    ],
    thumbnailLink: "/rdrive.png",
    link: "https://rdrive.rohineshram.com",
  },
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
      "AWS S3",
      "Terraform",
      "tailwindcss",
    ],
    thumbnailLink: "/web-portfolio.png",
    link: "https://github.com/R-Ram95/web-portfolio",
  },
  {
    title: "Terraform Modules",
    description: "A collection of reusable terraform modules.",
    technologies: ["Terraform", "IaC"],
    thumbnailLink: "/terraform.png",
    link: "https://github.com/R-Ram95/terraform-modules",
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
