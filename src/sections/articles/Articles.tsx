import { useEffect, useState } from "react";
import { Card, CardTitle } from "../../components/card/Card";
import { MediumArticle, MediumFeed } from "./articles.model";
import { FaArrowRight } from "react-icons/fa6";

const MEDIUM_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Roh_Ram";

interface ArticleCardProps {
  article: MediumArticle;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const date = new Date(article.pubDate);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card
      className="group flex-wrap md:flex-nowrap cursor-pointer"
      onClick={() => {
        window.open(article.link, "_blank");
      }}
    >
      <div className="w-1/3 flex-shrink-0">
        <img
          className="object-cover w-full h-24 md:h-24 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
          src={article.thumbnail}
          alt={article.title}
        />
      </div>
      <div className="ml-0 md:ml-6">
        <div className="text-slate-400 text-nowrap text-sm">
          {formattedDate}
        </div>
        <CardTitle className="group-hover:text-emerald-300">
          {article.title}
        </CardTitle>
      </div>
    </Card>
  );
};

const Articles = () => {
  const [mediumFeed, setMediumFeed] = useState<MediumFeed>();
  const [articles, setArticles] = useState<MediumArticle[] | []>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(MEDIUM_URL);
      const json = await response.json();
      setArticles(json.items);
      setMediumFeed(json.feed);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      {articles &&
        articles?.map((article) => (
          <div className="mb-4" key={article.link}>
            <ArticleCard article={article} />
          </div>
        ))}
      <a
        className="flex flex-row items-center gap-2 hover:gap-4 text-slate-200 hover:text-emerald-300 text-md mt-4 cursor-pointer"
        href={mediumFeed?.link}
        target="_blank"
      >
        View more of my articles <FaArrowRight />
      </a>
    </div>
  );
};

export default Articles;
