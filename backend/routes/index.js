var express = require('express');
var router = express.Router();
const request = require('sync-request');

// (4.1) importation des deux modules nécessaires au chiffrement
var uid2 = require('uid2');
var bcrypt = require('bcrypt');

var userModel = require('../models/user')
var articleModel = require('../models/article');
const { findById } = require('../models/user');

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

 //(4.3) Modification de la requête pour prendre en compte l’enregistrement du mot de passe désormais chiffré.
 //(4.6) modification de la requête pour ajouter la nouvelle propriété qui sera initialisée avec un id généré grâce au module uid2.
 if(error.length == 0) {
    var newUser = new userModel({
    userName: req.body.username,
    email: req.body.email,
    password: hash,
    token: uid2(32)
 
  })
   userSave = await newUser.save();
  console.log(userSave)

  
    if(userSave){
    result = true
    token = userSave.token
  }
 }
 
  //(2.4) Renvoi de la réponse au Frontend
  res.json({result, userSave, error, token});


});
//(2.10) création d'une nouvelle route nommée /sign-in qui se chargera de vérifier l'existence en base de données d’un utilisateur
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
//(2.11) requête permettant de rechercher un utilisateur en base de données
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
//(2.12) Renvoi de la réponse au Frontend
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


 //article.name

/*
// ajout d'un article en bdd
router.get('/wishlist-article', async function(req,res,next){
  
  var article = await articleModel.findOne({name: req.query.name})

  if(article != null){
    
      articles =  userModel({articleId:article._id})
    } else {
      //articles = await articleModel.find({userId:user._id})
    }
    
  

  res.json({articles})
})*/



// =======>>> TEST <<<<<=============
// ajout d'un article en cles étrangère de la collection user au like sur le btn coeur
router.get('/add-article', async function(req, res, next) { 

  var result = false
  var article = await articleModel.findOne({name: req.query.name})
 console.log('ARTICLE ====>>',article)
    if(article != null){
         var newArticle = new userModel({      
            userName: req.body.name, 
            email: req.body.email,
            password: req.body.password,      
            articleId: article,       
                   
          })        
          var articleSave = await newArticle.save()
          //var user = userModel()
           //findById(user._id) 
          // .populate('article')
          // .exec();
          console.log('ARTICLESAVE',articleSave)      
            
           if(articleSave){       
             result = true     
             }   
           }    
            res.json({result, articleX: articleSave})   
          });

// ========>> TEST <<<<<===========

// Suppression d'un article dans la db
router.delete('/wishlist-artilce', async function(req, res, next) {

  var result = false
  var article = await articleModel.findOne({name: req.body.name})


  if(article != null){
  var returnDb = await userModel.deleteOne({userName: req.body.userName, articleId: article._id})

  
  if(returnDb.deletedCount == 1) {
    result = true; 
   }
}
  res.json({result});
})

// extraction des produits liké dans la db pour les ajouter dans la wishlist
router.get('/wishlist-articles', async function(req, res, next){

  var articles = []
  var article = await articleModel.findOne({name: req.query.name})

  if(article != null){
   
      articles = await userModel.find({articleId:article._id})
    } else {
      articles = await articleModel.find({userId:user._id})
    }
  
  res.json({articles})
})



module.exports = router;
