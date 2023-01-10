import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getArticle} from "../api";



const ArticleCard = () => {
    
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [article_id])

    if (isLoading) return <p>Your article will be with you in 3...2...1...</p>

    return (
        <main className="single_article">
            <h2> {article.title}</h2>
            <p > 
            <span> By {article.author}</span> <br />
             <span>VBC {article.topic} Correspondent</span> <br /><br />
                <span className="article_content">{article.body} </span></p>
            <button className="single_votes">❤ {article.votes}</button>

           
        </main>
    );

};

export default ArticleCard
