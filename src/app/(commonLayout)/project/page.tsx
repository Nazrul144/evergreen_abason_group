import AllProjects from "@/pages/subPages/allProjects/AllProjects";

export const metadata = {
  title: "Projects | Evergreen Abason Group",
  description:
    "Browse all ongoing, upcoming, and completed real estate projects by Evergreen Abason Group. Explore project details, locations, amenities, and development insights.",
};

const ProjectPage = () => {
  return (
    <div>
      <AllProjects />
    </div>
  );
};

export default ProjectPage;
