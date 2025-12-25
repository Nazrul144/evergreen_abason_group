import Work from "@/pages/mainPages/workPage/Work";


export const metadata = {
  title: "Our Work | Evergreen Abason Group",
  description:
    "Explore the portfolio of Evergreen Abason Group, showcasing completed and ongoing construction, development, and real estate projects that reflect our commitment to quality and innovation.",
};

export interface ExtraPhoto {
  id: number;
  image: string;
}

export interface Project {
  id: number;
  category: number;
  category_name: string;
  title: string;
  description: string;
  builder_name: string;
  location: string;
  land_size: string;
  total_flat: number;
  status: string;
  profile_picture: string;
  cover_photo: string;
  extra_photos: ExtraPhoto[];
}


const WorkPage = async () => {
  let works: Project[] = [];

  try {
    const res = await fetch("http://10.10.12.53:8001/api/projects", {
      next: { revalidate: 3600 }, 
    });

    if (!res.ok) throw new Error("Failed to fetch");

    works = await res.json();
  } catch (error) {
    console.error("Failed to load projects:", error);
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-red-600">Unable to load projects</h2>
        <p className="mt-4 text-gray-600">Please check your connection and try again later.</p>
      </div>
    );
  }

  return (
    <div>
      <Work works={works} />
    </div>
  );
};

export default WorkPage;