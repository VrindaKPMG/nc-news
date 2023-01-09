import getArticles from "../api";
import { useEffect, useState } from "react";


const Articles = () => {
    const [articles, setArticles] = useState([])


    useEffect(() => {
        getArticles().then((article) => {
            setArticles(article)

        })
    }, [])
    
    return (
        <div> 
            {articles.map((article) => <p key={article.article_id} >
                <br />
                 <strong>{article.title}</strong> <br />
                 By <strong>{article.author}</strong> <br />
                 #{article.topic} <br />
                 Votes: {article.votes} <br />
            </p>)
            }
        </div>
    )

}

export default Articles;