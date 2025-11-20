import ProjectDetails from "@/pages/allProjects/projectDetails/ProjectDetails";

export const metadata = {
  title: "Contact Us | Evergreen Abason Group",
  description:
    "Get in touch with Evergreen Abason Group for inquiries about our real estate projects, investment opportunities, or customer support. We're here to assist you with all your questions.",
};

  const ProjectDetailsPage = async({params}: {params: Promise<{id: string}>}) => {
  
    const {id} = await params;

   
  
    return (
      <div>
        <ProjectDetails/>
        <p>
          id: {id}
        </p>
      </div>
    );
  };
  
  export default ProjectDetailsPage;
  