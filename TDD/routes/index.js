var express = require('express');
var router = express.Router();

/*
  Réservation d'un trajet
  Body : token (1234), depart (56 Boulevard Pereire 75017 Paris), destination (145 Avenue de Villiers 75017 Paris)
  Response : result (true), tempsAttente (10)
*/
/*router.post('/orderRide', (req, res) => {
  let token = req.body.token;
  let depart = req.body.depart;
  let destination = req.body.destination;

  if (!token || !depart || !destination) {
    res.json({ result: false });
  } else {
    // Traitement de la réservation
    res.json({ result: true, tempsAttente: 10 });
  }
});*/

/*
  Liste des précédentes courses
  Query : token (1234)
  Response : result (true), rides [courseId (55), depart (56 Boulevard Pereire 75017 Paris), destination (145 Avenue de Villiers 75017 Paris) ...]
*/
/*router.get('/passedRides', (req, res) => {
  let token = req.query.token;

  if (!token) {
    res.json({ result: false });
  } else {
    // Récupération des précédentes courses
    res.json({ result: true, rides: [{
      courseId: 55,
      depart: '56 Boulevard Pereire 75017 Paris',
      destination: '145 Avenue de Villiers 75017 Paris'
    }] });
  }
});*/


// inscription d'un utilisateur
// body : userName (Phy) email (phy@gmail.com) paswword (pass)
// response : result (true)

router.post('/sign-up', function(req, res, next) {
    
  let userName = req.body.userName;
  let email = req.body.email;
  let password = req.body.password;

  if(userName == ''
      || email == ''
     || password == ''
  ){
   error.push('champs vides')
 } else {
    // Traitement de la réservation
    res.json({ result: true});
  }

})

// Vérification d'un utilisateur présent en bdd
// body : email (phy@gmail.com) password (pass)

router.post('/sign-in', function(req, res, next) {
    
  let email = req.body.email;
  let password = req.body.password;

  if( email == ''
     || password == ''
  ){
   error.push('champs vides')
 } else {
    
    res.json({ result: true });
  }

})


// Envoi d'une photo en base de donnée
// faire un fetch (écran photo du jour)coté front qui déclencherait la route coté backend qui ferait un envoi en base de donnée
router.post('/upload', function(req, res, next) {
    
    
    res.json({ result: true });
  })

  
  // Enregistrement d'une photo et des commentaires en bdd 
  router.post('/add-pics', function(req, res, next) {
    let photo = req.body.data;
    let commentaire = req.body.commentaire;
     
    if(photo && commentaire){
    res.json({ result: true, photo: "Mon_url", commentaire: "mon_com"});
   } 
   
   
 
 })

// Recherche d'un article en base de donnée
  router.post('/find-article', function(req, res, next) {
    let article = req.body.article;
    let error = []
     
    if(!article){
    error.push('article not found')
   } else {
   
   res.json({ result: true, article: "crème"});
 }
 })


 // add article in wishlist
 router.get('/add-article', function(req, res, next) {

  let article = req.query.article

  if(article){
    res.json({result: true, article: "shampoo"} )
  }
 })



module.exports = router;
