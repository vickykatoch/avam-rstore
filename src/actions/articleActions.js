import ArticleApi from '../services/ArticleApi';
import * as actionTypes from '../constants/actionTypes';


export function loadArticles(user){
    return function(dispatch){
        return ArticleApi.loadArticles(user)
            .then(function(response){
                dispatch(onLoadArticlesSuccess(response.data));
            })
            .catch(function(error){
                throw error;
            });
    };
}
export function onLoadArticlesSuccess(articles){
    return {
        type : actionTypes.LOAD_ARTICLES,
        articles
    };
}

export function saveArticle(article){
    return function(dispatch){
        return ArticleApi.saveArticle(article)
            .then(function (response) {
                dispatch(onSaveArticleSuccess(response.data));
            })
            .catch(function(error){
                throw error;
            });
    };
}
export function onSaveArticleSuccess(article){
    return {
        type : actionTypes.SAVE_ARTICLE,
        article
    };
}