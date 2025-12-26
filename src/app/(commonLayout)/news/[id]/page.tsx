import NewsDetails from "@/pages/mainPages/newsPage/NewsDetails";
import type { Metadata } from "next";


interface NewsItem {
  id: number;
  title: string;
  description: string;
  picture: string;
}

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

const NewsDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;  // ← Must await params!

  // Now fetch the news from your Django backend
  const res = await fetch(`http://10.10.12.53:8001/api/news/${id}`);

  if (!res.ok) {
    return <div className="text-center py-20 text-red-500 text-2xl">News not found!</div>;
  }

  const news: NewsItem = await res.json();

  
  return <NewsDetails work={news} />;
};

export default NewsDetailsPage;