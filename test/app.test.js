const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');
const app = require("../index")
var token = ""  //will be used by all the other tests to access the protected routes
var tokenuser = ""
var imageId = ""

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

    it("returns a json object with token on getting right creds - 2", function(){
        return request(app)
        .post('/user/login')
        .send({user:{username : "user2", password :"user2"}})
        .set('Content-Type', 'application/json')
        .then(function(response){
            assert.equal(response.status, 200)
            tokenuser = response.body.token;
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
        .get('index.html')
        .then(function(response){
            assert.equal(response.status, 403);
        })
    });

    it('should return 200 status with login', function(){
        return request(app)
        .get('/index.html')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
        })
    });

    it('should return HTML code of the chess game', function(){
        return request(app)
        .get('/index.html')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            expect(response.text).to.contain("<html")
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
            imageId = response.body.img;
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
            firstname: 'string',
            lastname: 'string',
            username: 'string',
            img: 'string',
            email: 'string' 
        };
        return request(app)
        .get('/user/profile/pradyumnaym')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            for(var key in pattern){
                expect(response.body).to.have.property(key).and.to.be.a(pattern[key]);
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
        .send({username: "wronguserthatdoesntexist"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });
});

describe("Unit testing /rejectrequest route", function(){
    it("should acquire username from the token", function(){
        return request(app)
        .post('/user/rejectrequest')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });
    
    it("should return 405 if user not specified", function(){
        return request(app)
        .post('/user/rejectrequest')
        .send({username: ""})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    });
});

describe("unit testing /addhandle route (facebook, twitter, summary)", function(){

    it("addfacebook and addtwitter should validate user token", function(){
        return request(app)
        .post('/user/addfacebook')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    })

    it("addfacebook should validate input and return 405 on wrong input", function(){
        return request(app)
        .post('/user/addfacebook')
        .send({link: ""})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    });

    it("addtwitter should validate input and return 405 on wrong input", function(){
        return request(app)
        .post('/user/addtwitter')
        .send({link: ""})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    });

    it("addsummary should return 405 if input is invalid", function(){
        return request(app)
        .post('/user/addsummary')
        .send({summary: ""})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    });

    it("addfacebook should return 200 on success", function(){
        return request(app)
        .post('/user/addfacebook')
        .send({link: "fb.co/in"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
        });
    });

    it("addfacebook should return 200 on success", function(){
        return request(app)
        .post('/user/addtwitter')
        .send({link: "fb.co/in"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
        });
    });

    it("addsummary should return 200 if successful", function(){
        return request(app)
        .post('/user/addsummary')
        .send({summary: "I am the best gamer, forget the rest"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    });
});

describe("unit testing updateimage (image not sent since it it done thru form)", function(){
    it("it should validate user", function(){
        return request(app)
        .post('/user/updateimage')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    })

    it("it should return 405 in case image not included", function(){
        return request(app)
        .post('/user/updateimage')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 405);
        });
    })
});

describe("Unit testing /allusers route", function(){
    it("should return a list of all the users (to be used by image processing), and their image IDs", function(){
        return request(app)
        .get('/user/allusers')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            expect(response.body).to.have.lengthOf(8);  //the current number of users we have
        });
    });
});


describe("Unit testing the /gamerequests route", function(){
    //TODO: add tests for GET and delete methods
    it("it should validate user", function(){
        return request(app)
        .get('/user/gamerequests')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    it("it should return the correct list of game requests on valid user, with status 200", function(){
        return request(app)
        .get('/user/gamerequests')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            expect(response.body).to.have.lengthOf(0);
        });
    });


    it("it should Delete the given game request on valid user", function(){
        return request(app)
        .delete('/user/gamerequests')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            expect(response.body).to.have.lengthOf(0);
        });
    });

    
});


describe("Unit testing /usersimilarity route", function(){
    it("should validate username to make sure it is valid", function(){
        return request(app)
        .post('/user/usersimilarity')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    it("should return 404 in case username is invalid", function(){
        return request(app)
        .post('/user/usersimilarity')
        .send({username : "someuserthatdoesntexist"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });

    it("should return 400 in case input is not specified properly", function(){
        return request(app)
        .post('/user/usersimilarity')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 400);
        });
    });

    it("should return a similarity score (0<=SS<=1) if successful", function(){
        return request(app)
        .post('/user/usersimilarity')
        .send({username : "anushkini1"})
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            expect(response.body[0]).to.be.gte(0);  //cosine should always have this condition true
            expect(response.body[0]).to.be.lte(1);
        });
    });
});


describe("Unit testing the /incrementcount route", function(){
    it("should validate the user", function(){
        return request(app)
        .post('/user/inccount')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });
    
    it("should validate the inputs", function(){
        return request(app)
        .post('/user/inccount')
        .send({gameId : 100}) //doesnt exist
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 400);
        });
    });

    it("should return 200 on successfully incrementing the counter", function(){
        return request(app)
        .post('/user/inccount')
        .send({gameId : 1}) //doesnt exist
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
        });
    });
});

describe("Unit testing the ProfilePic route", function(){
    it("should extract the username from the JWT token", function(){
        return request(app)
        .get('/images/profilepic')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    it("should return 200 in case user image is found", function(){
        return request(app)
        .get('/images/profilepic')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 200);
            expect(response.header).to.have.property('content-type');
            expect(response.header['content-type']).to.be.equal('image/png')
        });
    });

    it("should return 404 in case user does not have an image", function(){
        return request(app)
        .get('/images/profilepic')
        .set('Authorization', "Bearer "+tokenuser)
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });

});


describe("testing the /getimagebyid route", function(){

    it("should return 404 on invalid image ID", function(){
        request(assert)
        .get("/images/logo/somewrongimageID")
        .then(function(response){
            assert.equal(response.status, 404)
        });
    });

    it("should return the image on valid image ID", function(){
        request(assert)
        .get(`/images/logo/${imageId}`)
        .then(function(response){
            assert.equal(response.status, 200)
            expect(response.header).to.have.property('content-type');
            expect(response.header['content-type']).to.be.equal('image/png')
        });
    });
});

describe("Unit testing the /api/getboard route", function(){
    it("verifies the username to make sure he has access to the game", function(){
        it("should validate the user", function(){
            return request(app)
            .post('/api/getboard')
            .then(function(response){
                assert.equal(response.status, 403);
            });
        });
    })

    it("returns the game state as an object on success", function(){
        var pattern = {  //set of fields and datatypes the response should have
            w : "object",
            b : "object",
            wt : 'number',
            lm : "object",
            lc : "object"
        }
        it("should validate the user", function(){
            return request(app)
            .post('/api/getboard')
            .send({code : "e0f453c9-f3df-4605-be5a-072742fbebf8"})
            .set('Authorization', "Bearer "+tokenuser)
            .then(function(response){
                assert.equal(response.status, 200);
                for(var key in pattern){
                    expect(response.body).to.have.property(key).and.to.be.a(pattern[key]);
                }
            });
        });
    })
})

describe("Unit testing setboard route", function(){
    it("should extract the username from the JWT token", function(){
        return request(app)
        .get('/api/setboard')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });

    //NOT TESTING by actially setting it, as the object is really huge and is built by the client as the user plays the game
});

describe("Unit testing /game/sendrequest route", function(){

    it("should acquire username from the token", function(){
        return request(app)
        .post('/api/sendrequest')
        .then(function(response){
            assert.equal(response.status, 403);
        });
    });


    it("should return 400 if user not specified", function(){
        return request(app)
        .post('/api/sendrequest')
        .set('Authorization', "Bearer "+token)
        .then(function(response){
            assert.equal(response.status, 400);
        });
    });

    it("should return 404 if user is invalid", function(){
        return request(app)
        .post('/api/sendrequest')
        .set('Authorization', "Bearer "+token)
        .send({username : "invaliduser"})
        .then(function(response){
            assert.equal(response.status, 404);
        });
    });

    it("should return 200 on success", function(){
        return request(app)
        .post('/user/addfriend')
        .send({username: "anushkini1"})
        .set('Authorization', "Bearer "+tokenuser)
        .then(function(response){
            assert.equal(response.status, 200);
        });
    });
});


describe("Unit testing the /acceptrequest route", function(){
    it("should authenticate the user token", function(){
        
    })
})