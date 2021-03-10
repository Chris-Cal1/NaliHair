export default function(pictureList = [], action) {
    if(action.type == 'addPicture') {
        return [...pictureList, action.url];
       //return action.url
    } else {
        return pictureList;
    }
}