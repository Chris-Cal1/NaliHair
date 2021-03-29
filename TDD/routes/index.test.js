var app = require("../app")
var request = require("supertest")

/*test("Réservation d'un trajet - Body correct", async (done) => {
 await request(app).post('/orderRide')
   .send({ token: 1234, depart: "56 Boulevard Pereire 75017 Paris", destination: "145 Avenue de Villiers 75017 Paris" })
   .expect(200)
   .expect({ result: true, tempsAttente: 10 });
 done();
});

test("Réservation d'un trajet - Body incomplet", async (done) => {
  await request(app).post('/orderRide')
    .send({ depart: "56 Boulevard Pereire 75017 Paris", destination: "145 Avenue de Villiers 75017 Paris" })
    .expect(200)
    .expect({ result: false });
  done();
 });

 test("Liste des précédentes courses - Query correct", async (done) => {
  await request(app).get('/passedRides')
    .query({ token: 1234 })
    .expect(200)
    .expect({ result: true, rides: [{
      courseId: 55,
      depart: '56 Boulevard Pereire 75017 Paris',
      destination: '145 Avenue de Villiers 75017 Paris'
    }] });
  done();
 });*/


 test("Inscription d'un utilisateur - Body correct", async (done) => {
 await request(app).post('/sign-up')
   .send({ userName: "Phy", email: "phy@gmail.com", password: "pass" })
   .expect(200)
   .expect({ result: true});
 done();
});

test("Identification - Body correct", async (done) => {
  await request(app).post('/sign-in')
    .send({email: "phy@gmail.com", password: "pass" })
    .expect(200)
    .expect({ result: true});
  done();
 });

 test("Recherche d'article en bdd - Body correct", async (done) => {
  await request(app).post('/find-article')
    .send({article: "crème"})
    .expect(200)
    .expect({ result: true, article: "crème"});
  done();
 });

 test("ajout d'un article à la wishlist - Body correct", async (done) => {
  await request(app).get('/add-article?article=shampoo')
    .expect(200)
    .expect({ result: true, article: "shampoo"});
  done();
 });

 test("Add pics & comments - Body correct", async (done) => {
  await request(app).post('/add-pics')
    .send({data: "Mon_url", commentaire: "mon_com"})
    .expect(200)
    .expect({ result: true, photo: "Mon_url", commentaire: "mon_com"});
  done();
 });

