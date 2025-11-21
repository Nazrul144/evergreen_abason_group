import { newsData } from "@/data/newsData";
import NewsDetails from "@/pages/newsPage/NewsDetails";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Details | Evergreen Abason Group",
  description:
    "Read the full details of the latest news, updates, and announcements from Evergreen Abason Group. Stay informed about our construction projects, real estate developments, and company insights.",
  keywords: [
    "Evergreen Abason Group news",
    "construction updates",
    "real estate news",
    "infrastructure development",
    "Bangladesh construction company",
  ],
};

const NewsDetailsPage = async({ params }: { params: { id: string } }) => {
  
  const id = Number((await params).id);

console.log("ID IS:", id);  // This prints 2 ✔️

  

  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return <div className="text-center py-20 text-red-500">News not found!</div>;
  }

  return <NewsDetails news={news} />;
};

export default NewsDetailsPage;
