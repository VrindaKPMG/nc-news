import { getArticles } from "../api";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("title");
  const [order, setOrder] = useState("desc");
  let [searchParams, setSearchParams] = useSearchParams();

  const searchByTopic = searchParams.get(`topic`);

  useEffect(() => {
    setIsLoading(true);
    getArticles(searchByTopic, sortBy, order).then((article) => {
      setArticles(article);
      setIsLoading(false);
    });
  }, [searchByTopic, sortBy, order]);

  const dateFormat = () => {
    Intl.DateTimeFormat('en-GB', {year: "numeric", month: '2-digit', day: '2-digit'})
  }




  if (isLoading) return <p>The latest juicy articles are on their way...</p>;

  return (
    <main className="article_body">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
        <option value="title">Title</option>
      </select>

      <button onClick={() => setOrder("asc")}>Ascending</button>
      <button onClick={() => setOrder("desc")}>Descending</button>

      {articles.map((article) => (
        <p key={article.article_id} className="all_articles">
          <br />
          <br />
          <Link to={`/articles/${article.article_id}`}>
            {" "}
            <span className="article_name">
              {" "}
              <strong>{article.title}</strong>
            </span>
          </Link>
          <br />
          <span className="author">
            By <strong>{article.author}</strong>
          </span> <br />
          <span>On {article.created_at} </span>
          
          <br />
          <span className="tags">#{article.topic}</span>
          <br />
          <button className="votes">❤ {article.votes}</button>
          <br />

          <Link to={`/articles/${article.article_id}/comments`}> <button> {article.comment_count} comments </button> </Link> 
        </p>
      ))}
    </main>
  );
};

export default Articles;
