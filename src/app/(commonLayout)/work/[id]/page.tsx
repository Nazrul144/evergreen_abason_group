
import ProjectDetails from "@/pages/subPages/allProjects/projectDetails/ProjectDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Details | Evergreen Abason Group",
  description:
    "Read the full details of the latest news, updates, and announcements from Evergreen Abason Group.",
  keywords: [
    "Evergreen Abason Group news",
    "construction updates",
    "real estate news",
    "Bangladesh construction company",
  ],
};

const WorkDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;  

 
  const res = await fetch(`http://10.10.12.53:8001/api/projects/${id}`);

  if (!res.ok) {
    return <div className="text-center py-20 text-red-500 text-2xl">News not found!</div>;
  }

  const work = await res.json();

  return <ProjectDetails work={work} />;
};

export default WorkDetailsPage;