export default function(done = false, action) {
    if(action.type == 'doneThree') {
        console.log(action.done, 'DOnnnnnne3')
        return action.done;
    }  else {
        return done
    }
} 