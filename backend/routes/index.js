var express = require('express');
var router = express.Router();

// (4.1) importation des deux modules nécessaires au chiffrement
var uid2 = require('uid2');
var bcrypt = require('bcrypt');

var userModel = require('../models/user')
var articleModel = require('../models/article')

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
  })


  var articleSave = await newArticle.save();

  var result = false;
  if(articleSave.name){
    result = true;
  } 
  res.json({result});

})



// suppression d'un article en bdd
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
            res.json({result, article: article.name})   
       });


/*

router.post('/wishlist-article', async function(req, res, next) { 

  var result = false
  var user = await userModel.findOne({token: req.body.token})
  var article = await articleModel.findOne({name: req.body.name})
  console.log(article.name, 'MON ARTICLE =======>>>>>>')

  if(article != null && user != null) {
    var newUser = new userModel({      
      userName: req.body.name, 
      email: req.body.rating,   
      password: req.body.composition,
      token: req.body.token,
      articleId: article,
            
    })        
    var articleSave = await newUser.save()
       
            
           if(articleSave.articleId){       
             result = true     
             }   
           }    
            res.json({result, article: article.name})   
          });

*/ 


// ajout d'un article en bdd
router.get('/wishlist-article', async function(req,res,next){
  
  var article = await articleModel.findOne({name: req.query.name})

  if(article != null){
    
      articles =  userModel({articleId:article._id})
    } else {
      //articles = await articleModel.find({userId:user._id})
    }
    
  

  res.json({articles})
})





// Suppression d'un article dans la db
router.delete('/wishlist-artilce', async function(req, res, next) {

  var result = false
  var user = await userModel.findOne({token: req.body.token})

  if(user != null){
  var returnDb = await articleModel.deleteOne({title: req.body.title, userId: user._id})

  
  if(returnDb.deletedCount == 1) {
    result = true; 
   }
}
  res.json({result});
})



// ================>>>>>>>
// ajout d'une photo en bdd & com
router.post('/add-pics', async function(req, res, next) { 

  var result = false
  var user = await userModel.findOne({token: req.body.token})

    if(user != null){
         var newArticle = new articleModel({      
            title: req.body.name, 
            description: req.body.desc,   
            content: req.body.content,
            urlToImage: req.body.img,       
            userId: user._id,          
          })        
          var articleSave = await newArticle.save()       
            
           if(articleSave.title){       
             result = true     
             }   
           }    
            res.json({result})   
          });

   // Suppression d'une photo en bdd la db
router.delete('/delete-pics', async function(req, res, next) {

  var result = false
  var user = await userModel.findOne({token: req.body.token})

  if(user != null){
  var returnDb = await articleModel.deleteOne({title: req.body.title, userId: user._id})

  
  if(returnDb.deletedCount == 1) {
    result = true; 
   }
}
  res.json({result});
})


//extraction d'une photo en db
router.get('/wishlist-pics', async function(req,res,next){
  var articles = []
  var user = await userModel.findOne({token: req.query.token})
  
  if(user != null){
    
      articles = await articleModel.find({userId:user._id})
    } else {
      articles = await articleModel.find({userId:user._id})
    }

  res.json({articles})
})






module.exports = router;
