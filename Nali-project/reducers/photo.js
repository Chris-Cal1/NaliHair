export default function(photox = [], action) {
    if(action.type == 'sendPhoto') {
        return [...photox, action.photo];
    } else {
        return photox;
    }
}