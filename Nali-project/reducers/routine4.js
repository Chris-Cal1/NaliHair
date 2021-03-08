export default function(done = false, action) {
    if(action.type == 'doneFour') {
        console.log(action.done, 'DOnnnnnne4')
        return action.done;
    }  else {
        return done
    }
} 