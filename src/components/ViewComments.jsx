import { getComments } from "../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { postComment } from "../api";
import { deleteComment } from "../api";


const ViewComments = () => {

    const [comments, setComments] = useState();
    const {article_id} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false)
    const [newComment, setNewComment] = useState([]);
    const [posterr, setPostErr] = useState(null);
    const [deleted, setDeleted] = useState(null);
    const [deleteerr, setDeleteErr] = useState(null);
    const [user, setUser] = useState({username: 'jessjelly'})



    useEffect(() => {
        setIsLoading(true)
        getComments(article_id).then((comment, newComment) => {
            setComments(comment)
            setNewComment(newComment)
            setIsLoading(false)
        })
        
    }, [article_id])


    const noComment = (comment_id) => {
        setDeleted(false)
        setIsDeleting(true)
        deleteComment(comment_id).then((comment) => {
            setDeleteErr(null)
            setDeleted(true)
            setIsDeleting(false)
        }).catch((err) => {
            setDeleteErr(true)

        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempComment = {
            author: 'jessjelly',
            body: newComment,
            comment_id: Date.now()
        };
        postComment(article_id, newComment).then((myComment) => {
            setPostErr(null)
            setComments((currComments) => {
                return [tempComment, ...currComments]
            })
        }).catch((err)=> {
            setComments((currComments) => currComments = "");
            setPostErr(true)
        })
        
    }

    if (deleteerr) return <h4>'We are currently not allowing any take backs - please refresh the page and try again'</h4> 

    if (isDeleting) return <p>Comment deleting....</p>

    if (deleted) return <p>We don't usually allow take backs but we can make an exception. Your comment is deleted <br />
         <Link to={`/articles/${article_id}/comments`}> <button>Back to Comments</button></Link>
         <Link to={`/articles/${article_id}`}><button>Back to Article</button></Link>
    </p>

    if (isLoading) return <p>Gossip incoming....</p>

    if (posterr) return <h4>'Your opinion is currently irrelevant - please refresh the page and try again'</h4> 

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
                
                </form> <br /> <br />

            {comments.map((comment) => <article key={comment.comment_id}>
                
                <strong>{comment.author}</strong> says...
                 <div className="comments_body">
                    {comment.body} <br />
                    {comment.author === user.username ? <button onClick={(e) => noComment(comment.comment_id)}>Delete</button> : null}
                    </div>
                 <button>💓 {comment.votes}</button> <br /> <br /> <br />
                 
            </article>)}
            
        </main>
    )

    

};

export default ViewComments;