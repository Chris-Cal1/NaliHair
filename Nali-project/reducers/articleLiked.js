export default function(wishlist = [], action) {
    if(action.type == 'likeArticle'){
      console.log('WISHLIST COPY ====>', action.articlesLiked)
     return  [...wishlist, action.articlesLiked]
    
 } else {
   return wishlist;
}
}