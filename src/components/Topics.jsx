import { getTopics } from "../api";
import { useEffect, useState } from "react";



const Topics = () => {

    const [topics, setTopics] = useState([])



    useEffect(() => {
        getTopics().then((topics) => {
            setTopics(topics)
        })

    })


    return (
        <main> <br /> <br />
            {topics.map((topic) => <section key={topic.slug}>
                <span>#<strong>{topic.slug}</strong> : {topic.description}</span>
                 <br /> <br /> <br />
            </section> )}
        </main>
    )

}


export default Topics;