import { getComments } from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../api";

const ViewComments = () => {

    const [comments, setComments] = useState();
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [newComment, setNewComment] = useState([]);
    const [err, setErr] = useState(null);


    useEffect(() => {
        setIsLoading(true)
        getComments(article_id).then((comment, newComment) => {
            setComments(comment)
            setNewComment(newComment)
            setIsLoading(false)
            
        })


    }, [article_id])

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempComment = {
            author: 'jessjelly',
            body: newComment,
            comment_id: Date.now()
        };
        postComment(article_id, newComment).then((myComment) => {
            setErr(null)
            setComments((currComments) => {
                return [tempComment, ...currComments]
            })
        }).catch((err)=> {
            setComments((currComments) => currComments = "");
            setErr(true)
        })
        
    }


    if (isLoading) return <p>Gossip incoming....</p>

    if (err) return <h4>'Your opinion is currently irrelevant - please refresh the page and try again'</h4> 

    if (comments.length === 0) {
        return (
            <h3>It's very quiet here</h3>
        ) 
    } else {

    }

    return (
        <main>
            <h3>Comments</h3> 

            <form className="comment" onSubmit={handleSubmit}>
            <label>Have your say</label> <br />
                <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                ></textarea> <br />
                <button>Post comment</button>
                
                </form> <br />

            {comments.map((comment) => <article key={comment.comment_id}>
                <strong>{comment.author}</strong> says...
                 <div className="comments_body">{comment.body}</div>
                 <button>💓 {comment.votes}</button> <br /> <br />
            </article>)}
        </main>
    )

    

};

export default ViewComments;