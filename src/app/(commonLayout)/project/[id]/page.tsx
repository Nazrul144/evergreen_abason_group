import ProjectDetails from "@/pages/subPages/allProjects/projectDetails/ProjectDetails";

export const metadata = {
  title: "Contact Us | Evergreen Abason Group",
  description:
    "Get in touch with Evergreen Abason Group for inquiries about our real estate projects, investment opportunities, or customer support. We're here to assist you with all your questions.",
};

const ProjectDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
   const res = await fetch(`http://10.10.12.53:8001/api/projects/${id}`);

  if (!res.ok) {
    return <div className="text-center py-20 text-red-500 text-2xl">News not found!</div>;
  }

  const work = await res.json();


  return (
    <div>
      <ProjectDetails work={work}/>
    </div>
  );
};

export default ProjectDetailsPage;
