export default function(wishlist = [], action) {
    
  if(action.type == 'saveArticles'){
      console.log('ARTICLE.ACTION ==========>>>', action.articles)
    return action.articles
 
  }  else {
  return wishlist;
}
}