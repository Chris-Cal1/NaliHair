//REDUCER
export default function(wishlist = [], action) {
    if(action.type == 'loadingPhoto'){
     return  action.photo;
    } else if(action.type == 'sendPics'){
        console.log(' + PICS ====>', action.pics)
       return  [...wishlist, action.pics]
      
   } else {
     return wishlist;
  }
  }