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


export {getArticles, getArticle};