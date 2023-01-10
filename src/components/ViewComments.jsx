import { getComments } from "../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ViewComments = () => {

    const [comments, setComments] = useState();
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        getComments(article_id).then((comment) => {
            setComments(comment)
            setIsLoading(false)
            
        })

    }, [article_id])

    if (isLoading) return <p>Gossip incoming....</p>

 

    if (comments.length === 0) {
        return (
            <h3>It's very quiet here</h3>
        ) 
    } else {

    }

    return (
        <main>
            <h3>Comments</h3> 
            <Link to={`/articles/${article_id}`}>⬅️Back to article</Link> <br /> <br /> <br />
            {comments.map((comment) => <article key={comment.comment_id}>
                <strong>{comment.author}</strong> says...
                 <div className="comments_body">{comment.body}</div>
                 <button>❤ {comment.votes}</button> <br /> <br />
            </article>)}
        </main>
    )

    

};

export default ViewComments;