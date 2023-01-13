import axios from 'axios';

const myNewsApi = axios.create({
    baseURL: 'https://be-review-news.onrender.com/api'
});


const getArticles = (topic, sort_by, order) => {
    
    return myNewsApi.get('/articles', {params: {topic: topic, sort_by: sort_by, order_by: order}}).then((res) => {
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

const postComment = (article_id, comment) => {
    const postBody = {
        username: 'jessjelly',
        body: comment,
    };
    return myNewsApi.post(`/articles/${article_id}/comments`, postBody)
    .then(({data}) => {
        return data.article
    })
}

const getTopics = () => {
    return myNewsApi.get('/topics').then((res) => {
        return res.data.topics
    })
}

const deleteComment = (comment_id) => {
    return myNewsApi.delete(`/comments/${comment_id}`).then((res) => {
        return res.data
    })
}
    

export {getArticles, getArticle, getComments, patchArticle, postComment, getTopics, deleteComment};