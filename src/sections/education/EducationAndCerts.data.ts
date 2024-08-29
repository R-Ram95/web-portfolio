export interface EducationAndCertsType {
  title: string;
  subTitle?: string;
  year: string;
  cert: boolean;
  link: string;
}

export const educationAndCertsData: EducationAndCertsType[] = [
  {
    title: "MEng. Software Engineer",
    subTitle: "University of Calgary",
    year: "2021 - 2022",
    cert: false,
    link: "https://grad.ucalgary.ca/future-students/explore-programs/electrical-and-computer-engineering-meng-software-course",
  },
  {
    title: "BSc. Software Engineer",
    subTitle: "University of Alberta",
    year: "2014 - 2018",
    cert: false,
    link: "https://www.ualberta.ca/en/engineering/mechanical-engineering/index.html",
  },
  {
    title: "AWS Certified Solutions Architect Associate",
    year: "2023 - 2026",
    cert: true,
    link: "https://www.credly.com/badges/8b477d19-dead-45e4-a9a7-8f1430f34777/public_url",
  },
  {
    title: "AWS Certified Developer Associate",
    year: "2022 - 2025",
    cert: true,
    link: "https://www.credly.com/badges/4b410ea5-1eaf-4823-b630-5eaa5a1b0b1e/linked_in_profile",
  },
];
