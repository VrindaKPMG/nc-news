import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getArticle} from "../api";



const ArticleCard = () => {
    
    const {article_id} = useParams();
    const [article, setArticle] = useState([])

    useEffect(() => {
        getArticle(article_id).then((article) => {
            setArticle(article)

        })
    }, [article_id])


    return (
        <main>
            <h2> {article.title}</h2>
             <span> By {article.author}</span> <br />
             <span>VBC {article.topic} Correspondent</span>
            <p> {article.body}</p>
            <button>❤ {article.votes}</button>

            
           
        </main>
    );

};

export default ArticleCard
