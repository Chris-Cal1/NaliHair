export default function(done = false, action) {
    if(action.type == 'doneTwo') {
        //var newDone1 = done1.action
        console.log(action.done, 'DOnnnnnne2')
        return action.done;
    }  else {
        return done
    }
} 