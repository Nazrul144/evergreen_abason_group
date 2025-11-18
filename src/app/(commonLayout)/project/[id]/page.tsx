export const metadata = {
    title: "Project Details | Evergreen Abason Group",
    description:
      "Explore complete details about our ongoing and completed real estate projects, including features, layouts, amenities, and location insights. Discover how Evergreen Abason Group is shaping modern living.",
  };
  
  const ProjectDetailsPage = async({params}: {params: Promise<{id: string}>}) => {
  
    const {id} = await params;

   
  
    return (
      <div>
        <h1>Project Details</h1>
        <p>
          id: {id}
        </p>
      </div>
    );
  };
  
  export default ProjectDetailsPage;
  