// News.tsx
import NewsSectionHero from "./NewsSectionHero";
import WorkTogetherBanner from "./WorkTogetherBanner";

const News = ({ news }: { news: any[] }) => {
  return (
    <div>
      <NewsSectionHero news={news} />
      <WorkTogetherBanner />
    </div>
  );
};

export default News;
