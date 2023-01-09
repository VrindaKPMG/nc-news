import axios from 'axios';

const myNewsApi = axios.create({
    baseURL: 'https://be-review-news.onrender.com/api'
});


const getArticles = () => {
    return myNewsApi.get(`/articles`).then((res) => {
        
        return res.data.articles
    })
}

export default getArticles;