import { useParams } from "react-router-dom";


const ArticleCard = () => {

    const {article_id} = useParams();
    console.log(article_id, "I am in params")

    return (
        <main>
            <h2>Individual Article Timeeeeee</h2>
        </main>
    );

};

export default ArticleCard
