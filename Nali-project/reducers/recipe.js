export default function(recipe = [], action){
    if(action.type == 'sendRecipe'){
        return action.recipe
    } else {
        return recipe
    }
}