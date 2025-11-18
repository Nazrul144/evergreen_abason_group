"use client"
import { createContext, ReactNode, useEffect, useState } from "react";

export interface Project {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface ProjectContextType {
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  loading: boolean;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

interface ProviderProps {
  children: ReactNode;
}

const AllProjectsProvider = ({ children }: ProviderProps) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllProjects = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });
      const data = await res.json();
      setProjects(data);
      setLoading(false);
    };

    getAllProjects();
  }, []);

  console.log("Project from context", projects);

  return (
    <ProjectContext.Provider value={{ projects, setProjects, loading }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default AllProjectsProvider;
