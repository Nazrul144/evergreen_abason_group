// app/news/page.tsx (or similar)
import News from "@/pages/mainPages/newsPage/News";

const NewsPage = async () => {
  const res = await fetch("http://10.10.12.53:8001/api/news", {
    cache: "no-store",
  });

  const news = await res.json();

  return (
    <div>
      <News news={news} />
    </div>
  );
};

export default NewsPage;
