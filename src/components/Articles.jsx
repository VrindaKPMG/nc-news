import {getArticles} from "../api";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";



const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let [searchParams, setSearchParams] = useSearchParams();
    

    const searchByTopic = searchParams.get(`topic`)
    

    useEffect(() => {
        setIsLoading(true)
        getArticles(searchByTopic).then((article) => {
            setArticles(article)
            setIsLoading(false)
        })
    }, [searchByTopic])

    if (isLoading) return <p>The latest juicy articles are on their way...</p>
    
    return (
        <main className="article_body"> 
            {articles.map((article) => <p key={article.article_id} className="all_articles" >
                <br />
                <br />
                <Link to={`/articles/${article.article_id}`}> <span className="article_name"> <strong>{article.title}</strong></span></Link>
                 <br />
                 <span className="author">By <strong>{article.author}</strong></span>
                  <br />
                  <span className="tags">#{article.topic}</span>
                  <br />
                  <button className="votes">❤ {article.votes}</button>
                  <br />
                 
            </p>)
            }   
        </main>
    )}

export default Articles;