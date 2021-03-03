export default function(done1 = false, action) {
    if(action.type == 'doneOne') {
        //var newDone1 = done1.action
        console.log(done1, 'NEWDONE1')
        return action.done1;
    } else {
        return done1
    }
} 