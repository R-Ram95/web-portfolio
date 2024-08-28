export interface ExperienceType {
  position: string;
  year: string;
  description: string;
  skills: string[];
}

export const experienceData = [
  {
    position: "Fullstack Engineer - Accolite Digital",
    year: "2022 - 2024",
    description:
      "Build, style, and ship high-quality web applications for various clients. Notable achievements include refactoring code to reduce graph-building code by 82% while simultaneously enhancing user interactivity and optimizing web application performance with modern client-side caching techniques, reducing load times by 5 seconds. Additionally, collaborated with developers and product managers/owners to drive continuous improvements in user experience.",
    skills: ["React", "Javascript", "NodeJS", "AWS", "Terraform", "Docker"],
  },
  {
    position: "Design Engineer - Gentex Industries",
    year: "2018 - 2021",
    description:
      "Enhanced manufacturing processes, addressing defects, and refining product quality through design changes. Designed components and managed a team of welders and millwrights throughout the development of multi-million dollar projects.",
    skills: ["Solidworks", "Project Management", "VBA"],
  },
];