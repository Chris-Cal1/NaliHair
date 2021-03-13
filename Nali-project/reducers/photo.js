export default function(photox = [], action) {
    if(action.type == 'sendPhoto') {
        //return [...photox, action.photo];
        console.log("ACTION PHOTO", action.photo)
        return action.photo
    } else {
        return photox;
    }
}