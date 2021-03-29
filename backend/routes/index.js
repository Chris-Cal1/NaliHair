//Chris

var express = require('express');
var router = express.Router();
const request = require('sync-request');

//  import of the two modules needed for encryption
var uid2 = require('uid2');
var bcrypt = require('bcrypt');
// import of the necessary modules for the backup in cloudinary
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



// creation of a new road named /sign-up which will add a new user to the database
router.post('/sign-up', async function(req, res, next){
 
  // générez le hash via bcrypt.
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
// Modification of the request to take into account the recording of the password now encrypted.
 // modification of the request to add the new property which will be initialized with an id generated with the uid2 module.
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
 // Sending the response back to the frontend
  res.json({result, userSave, error, token});


});

// creation of a new road named /sign-in which will check the existence in the database of a user
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
// request to search for a user in a database
  const user = await userModel.findOne({ 
    email: req.body.email,
    //password: req.body.password,

  })

  // Verification that the encrypted password matches the one stored in the database.
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
// Sending the response back to the frontend
   res.json({result, user, error, token});

})



// add fake recipe in database
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


// Recipe search in database
router.post('/find-recipe', async function(req, res, next) { 

  var result = false
  var recipe = await recipeModel.findOne({day: req.body.day})
  console.log(recipe, 'MA RECETTE =======>>>>>>')

            if(recipe){       
             result = true     
             }   
            res.json({result, recipe: recipe})   
       });



// adding fake articles to the database
router.post('/fake-articles', async function(req, res, next) {

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



// deletion of an fake article of the db
router.delete('/delete-articles/:name', async function(req, res, next) {
  
  var returnDb = await articleModel.deleteOne({name: req.params.name})

  var result = false;
  if(returnDb.deletedCount == 1) {
    result = true;
  }
  res.json({result});
})




// search for an article in a database
router.post('/find-article', async function(req, res, next) { 

  var result = false
  var article = await articleModel.findOne({name: req.body.name})
  console.log(article.name, 'MON ARTICLE =======>>>>>>')

            if(article){       
             result = true     
             }   
            res.json({result, article: article})   
       });



// add an article in foreign keys of the user collection 
router.post('/add-article', async function(req, res, next) { 

  var result = false
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


// extraction of products like from the database
router.get('/wishlist-articles', async function(req, res, next){

  var articles = []
 var user = await userModel.findOne({token: req.query.token})
 // console.log("USER", user)
  
  if(user){
    articles = await userModel.find({token: req.query.token})
                            .populate('articleId')
                            .exec();
   // console.log("ART ===>>", articles[0].articleId)
  }
     
  
  
 res.json({articles: articles[0].articleId })
})  



// Deleting an article in the foreign key of a user collection in database
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


//adding information from new photo cards to the database
router.post('/add-pics', async function(req, res, next) {

var result = false;

  var pictureName = './tmp/'+uniqid()+'.jpg';
  var resultCopy = await req.files.avatar.mv(pictureName);
 
  if(!resultCopy) {
  var resultCloudinary = await cloudinary.uploader.upload(pictureName);
} else {
  console.log('else', resultCloudinary);
 console.log('else', pictureName); 
}

  var userPhoto = await userModel.findOne({token: req.body.token})
 
  var date = new Date().toLocaleString()
  
  if(userPhoto){
    userPhoto.photo.push({url: resultCloudinary.url, date: date, comment: req.body.comment});
   
    var photoSave = await userPhoto.save()
    console.log("PHOTOSAVE",photoSave.photo[photoSave.photo.length - 1])
   if(photoSave){       
    result = true     
    } 
  }
// sending to the frontend the last photo cards information taken by the user
  res.json({result, photoSave: photoSave.photo[photoSave.photo.length - 1]});
  fs.unlinkSync(pictureName);
});

// extraction of photo card information from the database
router.get('/card-picture', async function(req, res, next){

  var photos = []
 var user = await userModel.findOne({token: req.query.token})

     console.log(user.photo, "USERRR")

  if(user){
    photos = user.photo
   // photos = await userModel.find({photo: user.photo})
                         console.log('PHOTOOOO', photos)
  
  }
// sending photo cards information to the frontend
 res.json(photos)
})

// Deleting photo card information from the user's database
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
