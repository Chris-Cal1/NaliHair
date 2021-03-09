export default function(done = false, action) {
    if(action.type == 'doneOne') {
        //var newDone1 = done1.action
        console.log(action.done, 'DOnnnnnne')
        return action.done;
    }  else {
        return done
    }
} 