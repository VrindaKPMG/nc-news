import { getTopics } from "../api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Topics = () => {

    const [topics, setTopics] = useState([])
    
    

    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })

    }, [])


    return (
        <main> <br /> <br />
            {topics.map((topic) => <section key={topic.slug}>
                <span>#<Link to={`/articles?topic=${topic.slug}`}> <strong>{topic.slug}</strong> </Link> : {topic.description}</span>
                 <br /> <br /> <br />
            </section> )}
        </main>
    )

}


export default Topics;