import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getArticle} from "../api";
import { Link } from "react-router-dom";
import { patchArticle } from "../api";




const ArticleCard = () => {
    
    const {article_id} = useParams();
    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [err, setErr] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        getArticle(article_id).then((article) => {
            setArticle(article)
            setIsLoading(false)
        })
    }, [article_id])


    const heartArticle = (article_id, increment) => {
        
        setArticle((currArticle) => {
            setErr(null)
            const for_votes = {...currArticle}
                 for_votes.votes += increment
                return for_votes
        })

        patchArticle(article_id, increment).catch((err) => {
            setArticle((currArticle) => {
                const for_votes = {...currArticle}
                     for_votes.votes -= increment
                    return for_votes
            })
            setErr(true)
        })
        

    }


    if (isLoading) return <p>Your article will be with you in 3...2...1...</p>


    return (
        <main className="single_article">
            <h2> {article.title}</h2>
            <p > 
            <span> By {article.author}</span> <br />
             <span>VBC {article.topic} Correspondent</span> <br /><br />
            <span className="article_content">{article.body} </span></p> <br />
            <span>{article.votes} people 💓 this</span> <br />

            {err? <h4>'Your opinion is currently irrelevant - try again'</h4> : null}

            <button className="upsingle_votes" onClick={() => heartArticle(article.article_id, 1)}
            >❤️</button> 
            <button className="downsingle_votes" onClick={() => heartArticle(article.article_id, -1)}
            >💔</button>
            <br /> <br />

            <button><Link to={`/articles/${article.article_id}/comments`}>View Comments</Link></button>

        </main>
    );

};

export default ArticleCard
