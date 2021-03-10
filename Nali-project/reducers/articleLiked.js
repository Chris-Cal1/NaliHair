
export default function(wishlist = [], action) {
  if(action.type == 'loadingArticles'){
    //console.log('WISHLIST COPY ====>', action.articles)
   return  action.articles;
  } else if(action.type == 'likeArticle'){
      console.log(' + LIKE ====>', action.articlesLiked)
     return  [...wishlist, action.articlesLiked]
    
 } else {
   return wishlist;
}
}