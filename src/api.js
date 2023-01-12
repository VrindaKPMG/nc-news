import axios from 'axios';

const myNewsApi = axios.create({
    baseURL: 'https://be-review-news.onrender.com/api'
});


const getArticles = () => {
    return myNewsApi.get(`/articles`).then((res) => {
        
        return res.data.articles
    })
}

const getArticle = (article_id) => {
    return myNewsApi.get(`/articles/${article_id}`).then((res) => {
        
        return res.data.article
    })
}

const getComments = (article_id) => {
    return myNewsApi.get(`/articles/${article_id}/comments`).then((res) => {
        return res.data.comments
    })
}

const patchArticle = (article_id, buttonValue) => {
    const patchBody = {
        inc_votes: buttonValue,
    };
    return myNewsApi.patch(`/articles/${article_id}`, patchBody)
    .then(({data}) => {
        return data.article.votes
    })
}



export {getArticles, getArticle, getComments, patchArticle};