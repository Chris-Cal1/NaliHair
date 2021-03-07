//Chris

var express = require('express');
var router = express.Router();
const request = require('sync-request');

// (4.1) importation des deux modules nécessaires au chiffrement
var uid2 = require('uid2');
var bcrypt = require('bcrypt');

var userModel = require('../models/user')
var articleModel = require('../models/article');


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
   console.log("RESULT===>>", result)
  res.json({result});
})

// extraction des produits liké dans la db pour les ajouter dans la wishlist
router.get('/wishlist-articles', async function(req, res, next){

  var articles = []
 var user = await userModel.findOne({token: req.query.token})
                          
  //var article = await articleModel.findById(user.articleId)
  console.log("USER", user)
  
  if(user){
    articles = await userModel.find({token: req.query.token})
                            .populate('articleId')
                            .exec();
   // console.log("ART ===>>", articles[0].articleId)
  }
     
    
      // user.articleId.name
     // console.log("ARTICLES BDD", articles)
  
    // articles = await userModel.find({articles: user.articleId})

  
 res.json({articles: articles[0].articleId })
})

//


module.exports = router;
