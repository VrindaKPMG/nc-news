import {getArticles} from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





const Articles = () => {
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    


    useEffect(() => {
        setIsLoading(true)
        getArticles().then((article) => {
            setArticles(article)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>The latest juicy articles are on their way...</p>
    
    return (
        <main> 
            {articles.map((article) => <p key={article.article_id} >
                <br />
                <br />
                <Link to={`/articles/${article.article_id}`}> <span className="article_name"> <strong>{article.title}</strong></span></Link>
                 <br />
                 <span className="author">By <strong>{article.author}</strong></span>
                  <br />
                  <span className="tags">#{article.topic}</span>
                  <br />
                  <span className="votes">Votes: {article.votes}</span>
                  <br />
                 
            </p>)
            }   
        </main>
    )
}

export default Articles;