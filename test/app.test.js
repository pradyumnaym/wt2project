const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require("../index")
var token = ""  //will be used by all the other tests to access the protected routes

describe("Unit testing the /user/login route", function(){
    this.timeout(5000);
    it('should return 400 on getting invalid username', function(){
        return request(app)
        .post('/user/login')
        .send({user:{username : "pradyumnaym1", password :"password"}})
        .set('Content-Type', 'application/json')
        .then(function(response){
            assert.equal(response.status, 400)
        })
    })

    it('should return 400 on getting wrong passwird', function(){
        return request(app)
        .post('/user/login')
        .send({user:{username : "pradyumnaym", password :"wrongpasswd"}})
        .set('Content-Type', 'application/json')
        .then(function(response){
            assert.equal(response.status, 400)
        })
    })

    it("returns a json object with token on getting right creds", function(){
        return request(app)
        .post('/user/login')
        .send({user:{username : "pradyumnaym", password :"pradyumnaym"}})
        .set('Content-Type', 'application/json')
        .then(function(response){
            assert.equal(response.status, 200)
            token = response.body.token;
        })
    })

    
})

describe("Unit testing the /user/logout route", function(){
    it("returns a 201 status for logout", function(){
        return request(app)
        .post('/user/login')
        .send({user:{username : "pradyumnaym", password :"pradyumnaym"}})
        .then(function(response){
            assert.equal(response.status, 200)
        })
    })
})

describe("Unit testing the index route", function(){
    it('should return 403 status without login', function(){
        return request(app)
        .get('chess.html')
        .then(function(response){
            assert.equal(response.status, 403);
        })
    });

    it('should return 200 status with login', function(){
        return request(app)
        .get('/chess.html')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
        })
    });

    it('should return HTML code of the chess game', function(){
        return request(app)
        .get('/chess.html')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            expect(response.text).to.contain("<html>")
        })
    });
});

describe("Unit testing /user/userdetails route", function(){
    it("is protected with token, and uses token to get username", function(){
        return request(app)
        .get('/user/userdetails')
        .then(function(response){
            assert.equal(response.status, 403);
        })
    });

    it("Returns all the required user details using username", function(){
        const pattern = {
            firstname: String,
            lastname: String,
            username: String,
            img: String,
            email: String
        };
        return request(app)
        .get('/user/userdetails')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            expect(response.status).to.be.equal(200);
            for(var key in pattern){
                expect(response.body).to.have.property(key);
            }
            
        });
    });
});

describe("Unit testing /user/pofile/:username route", function(){
    it("verifies the current user to make sure he has access", function(){
        return request(app)
        .get('/user/profile/anushkini')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    it("Makes sure the required user exists", function(){
        return request(app)
        .get('/user/profile/anushkini')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });

    it("returns all the required fields of the friend/user", function(){
        const pattern = {
            firstname: String,
            lastname: String,
            username: String,
            img: String,
            email: String, 
        };
        return request(app)
        .get('/user/profile/pradyumnaym')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            for(var key in pattern){
                expect(response.body).to.have.property(key);
            }
        });
    });
});

describe("Unit testing the /user/friendslist route", function(){
    it("takes the current user ID from the body", function(){
        return request(app)
        .post('/user/friendslist')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    it("returns error on empty body", function(){
        return request(app)
        .post('/user/friendslist')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });

    it("returns error on invalid user", function(){
        return request(app)
        .post("/user/friendslist")
        .send({username : "anaccountthatdoesntexist"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            expect(response.status).to.be.equal(404);
        })
    });

    it("returns the friends list of the current user", function(){
        return request(app)
        .post("/user/friendslist")
        .send({username : "pradyumnaym"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            expect(response.body).to.have.lengthOf(3);
        })
    });
})

describe("Unit testing the /user/friendrequests route", function(){
    it("should return error if invalid user", function(){
        return request(app)
        .get("/user/friendrequests")
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    it("should return a list of friend requests pending", function(){
        return request(app)
        .get("/user/friendrequests")
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            expect(response.body).to.have.lengthOf(0);
        })
    });
})


describe("Unit testing the /user/sendrequest", function(){
    it("should acquire username from the token", function(){
        return request(app)
        .post('/user/sendrequest')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    it("should return 405 if user not specified", function(){
        return request(app)
        .post('/user/sendrequest')
        .send({username: ""})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    });

    it("should return 404 if user not found", function(){
        return request(app)
        .post('/user/sendrequest')
        .send({username: "someuserthatdoesntexist"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });

    it("should return 201 status if user is already friend", function(){
        return request(app)
        .post('/user/sendrequest')
        .send({username: "anushkini1"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 201);
        });
    });

    it("should return 200 status if friend request is sent successfully", function(){
        return request(app)
        .post('/user/sendrequest')
        .send({username: "anushkini1"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 201); //user gets added every time the test runs
        });
    });
});



describe("Unit testing /addfriend (not possible to test positive as it needs to be reset every time)", function(){

    it("should acquire username from the token", function(){
        return request(app)
        .post('/user/addfriend')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });


    it("should return 405 if user not specified", function(){
        return request(app)
        .post('/user/addfriend')
        .send({username: ""})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    });

    it("should return 404 if user is invalid", function(){
        return request(app)
        .post('/user/addfriend')
        .send({username: "wronguser"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });
});

describe("Unit testing /rejectrequest route", function(){
    
})

