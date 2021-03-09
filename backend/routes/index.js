//Chris

var express = require('express');
var router = express.Router();
const request = require('sync-request');

// (4.1) importation des deux modules nécessaires au chiffrement
var uid2 = require('uid2');
var bcrypt = require('bcrypt');
// importation des modules nécéssaires pour la sauvegarde dans cloudinary
var uniqid = require('uniqid');
var fs = require('fs');

var userModel = require('../models/user')
var articleModel = require('../models/article');
var recipeModel = require('../models/recipe')



var cloudinary = require('cloudinary').v2;
const { url } = require('inspector');
cloudinary.config({ 
  cloud_name: 'dzcx4fqfn', 
  api_key: '787861123319936', 
  api_secret: 'P1oll6tedOXfKRk27mQl3fXRaeA' 
});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/sign-up', async function(req, res, next){
 
  //(4.2) générez le hash via bcrypt.
  const hash = bcrypt.hashSync(req.body.password, 10);

  var error = []
  var result = false
  var userSave = null
  var token = null

  const data = await userModel.findOne({
    email: req.body.email,
  })

 if(data != null){
   error.push('Utilisateur déjà présent')
 }

 if(req.body.username == ''
 || req.body.email == ''
 || req.body.password == ''
 ){
   error.push('champs vides')
 }

 if(error.length == 0) {
    var newUser = new userModel({
    userName: req.body.username,
    email: req.body.email,
    password: hash,
    token: uid2(32)
 
  })
   userSave = await newUser.save();
   console.log("USERSAVE ======>>",userSave)

  
    if(userSave){
    result = true
    token = userSave.token
  }
 }
 
  res.json({result, userSave, error, token});


});

router.post('/sign-in', async function(req,res,next){

  
  var result = false
  var user = null
  var error = []
  var token = null

  if(req.body.email == ''
  || req.body.password == ''
  ){
    error.push('champs vides')
  }
  if(error.length == 0) {

  const user = await userModel.findOne({ 
    email: req.body.email,
    //password: req.body.password,

  })

  //(4.4) Vérifiecation que le mot de passe chiffré correspond à celui enregistré en base de données.
  if(user) {
    if(bcrypt.compareSync(req.body.password, user.password)){
  result = true
  token = user.token
   } else {
   result = false
   error.push('mot de passe incorrect')
  } 
  }  else {
    error.push('email incorrect')
  }
}
   res.json({result, user, error, token});

})



// ajout de recette fake en db
router.post('/fake-recipe', async function(req, res, next) {

  var newRecipe = new recipeModel({
    day: req.body.day,
    title: req.body.title,
    benefits: req.body.benefits,
    ingredients: req.body.ingredients,
    image: req.body.image,
    emploi: req.body.emploi,
    btn: req.body.btn,
  })


  var recipeSave = await newRecipe.save();

  var result = false;
  if(recipeSave){
    result = true;
  } 
  res.json({result});

})


// recherche d'une recette en db
router.post('/search-recipe', async function(req, res, next) { 

  var result = false
  var recipe = await recipeModel.findOne({day: req.body.day})
  console.log(recipe, 'MA RECETTE =======>>>>>>')

            if(recipe){       
             result = true     
             }   
            res.json({result, recipe: recipe})   
       });



// ajout des articles fake en db
router.post('/wishlist-articles', async function(req, res, next) {

  var newArticle = new articleModel({
    name: req.body.name,
    rating: req.body.rating,
    composition: req.body.composition,
    image: req.body.image,
    type: req.body.type,
  })


  var articleSave = await newArticle.save();

  var result = false;
  if(articleSave){
    result = true;
  } 
  res.json({result});

})



// suppression d'un article fake en bdd
router.delete('/wishlist-articles/:name', async function(req, res, next) {
  
  var returnDb = await articleModel.deleteOne({name: req.params.name})

  var result = false;
  if(returnDb.deletedCount == 1) {
    result = true;
  }
  res.json({result});
})




// recherche d'un article en db
router.post('/wishlist-article', async function(req, res, next) { 

  var result = false
  var article = await articleModel.findOne({name: req.body.name})
  console.log(article.name, 'MON ARTICLE =======>>>>>>')

            if(article){       
             result = true     
             }   
            res.json({result, article: article})   
       });


// =======>>> TEST <<<<<=============
// ajout d'un article en cles étrangère de la collection user au like sur le btn coeur
router.post('/add-article', async function(req, res, next) { 

  var result = false
  //var article = await articleModel.findOne({name: req.query.name})
  var user = await userModel.findOne({token: req.body.token})
 


    if(user != null){
          user.articleId.push(req.body.name)       
          var articleSave = await user.save()
          
          //console.log('ARTICLESAVE',articleSave)      
            
           if(articleSave){       
             result = true     
             }   
           }    
            res.json({result})   
          });

// ========>> TEST <<<<<===========

// Suppression d'un article dans la db
router.delete('/delete-article', async function(req, res, next) {

  var result = false
  var user = await userModel.findOne({token: req.body.token})
  
  if(user != null){
    user.articleId.splice(req.body.id.position,1);
    var articleSave = await user.save()

    if(articleSave){       
      result = true     
      }   
   }
  // console.log("RESULT===>>", result)
  res.json({result});
})

// extraction des produits liké dans la db pour les ajouter dans la wishlist
router.get('/wishlist-articles', async function(req, res, next){

  var articles = []
 var user = await userModel.findOne({token: req.query.token})
                          
  //var article = await articleModel.findById(user.articleId)
 // console.log("USER", user)
  
  if(user){
    articles = await userModel.find({token: req.query.token})
                            .populate('articleId')
                            .exec();
   // console.log("ART ===>>", articles[0].articleId)
  }
     
  
  
 res.json({articles: articles[0].articleId })
})

router.post('/dailypics', async function(req, res, next) {

var result = false;

  var pictureName = './tmp/'+uniqid()+'.jpg';
  var resultCopy = await req.files.avatar.mv(pictureName);
  console.log("RESULTCOPY", resultCopy)
  if(!resultCopy) {
  
  var resultCloudinary = await cloudinary.uploader.upload(pictureName);
} else {
  console.log('else', resultCloudinary);
 console.log('else', pictureName); 
}

console.log('resultcloudinary', resultCloudinary.url);
console.log('pictureName', pictureName);

  var userPhoto = await userModel.findOne({token: req.body.token})
  console.log("USER", userPhoto.photo)
  var date = new Date().toLocaleString()
  console.log("DATE =====>>", date)
  if(userPhoto){
    userPhoto.photo.push({url: resultCloudinary.url, date: date, comment: req.body.comment});
   
    var photoSave = await userPhoto.save()
   if(photoSave){       
    result = true     
    } 
  }

  res.json(result);
  fs.unlinkSync(pictureName);
});

// extraction des cards  dans la db pour les ajouter dans MyDiary
router.get('/card-picture', async function(req, res, next){

  var photos = []
 var user = await userModel.findOne({token: req.query.token})

     console.log(user.photo, "USERRR")

  if(user){
    photos = user.photo
   // photos = await userModel.find({photo: user.photo})
                         console.log('PHOTOOOO', photos)
  
  }

 res.json(photos)
})

// Suppression d'une photo dans la db
router.delete('/delete-photo', async function(req, res, next) {

  var result = false
  var user = await userModel.findOne({token: req.body.token})
  
  if(user != null){
    user.photo.splice(req.body.id.position,1);
    var photoSave = await user.save()

    if(photoSave){       
      result = true     
      }   
   }
  // console.log("RESULT===>>", result)
  res.json({result});
})


module.exports = router;
