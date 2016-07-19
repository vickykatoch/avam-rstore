import Axios from 'axios';

export default class ArticleApi{
    static loadArticles(user){
        return Axios.get('/api/articles/'+user);
    }
    static saveArticle(article){
        return Axios.post('/api/article',article);
    }
}