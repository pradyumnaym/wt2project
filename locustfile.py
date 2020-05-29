from locust import HttpUser, TaskSet, task,  between
import requests
import datetime
import json

token = "1234"

class UserBehavior(TaskSet):

    def on_start(self):
        global token
        r = self.client.post('/user/login',json = {"user": {"username":"user1", "password": "user1"}})
        d = json.loads(r.content.decode('utf-8'))
        token = d["token"]
        
    def on_stop(self):
        r = self.client.post("/user/logout")
    
    @task
    def add_friend(self):
        r = self.client.post("/user/sendrequest", headers = {"Authorization": "Bearer "+token},json={"username":"user2"})

    @task
    def get_game_requests(self):
        r = self.client.get("/user/gamerequests", headers = {"Authorization": "Bearer "+token},json={"username":"user2"})

    @task
    def get_all_users(self):
        r = self.client.get("/user/allusers")

    @task
    def inc_count(self):
        r = self.client.post("/user/inccount", headers = {"Authorization": "Bearer "+token},json={"gameId":"0"})

    @task
    def get_similarity(self):
        r = self.client.post('/user/usersimilarity', headers = {"Authorization": "Bearer "+token},json={"username":"user2"})

    @task 
    def get_user_details(self):
        r = self.client.get("/user/userdetails", headers = {"Authorization": "Bearer "+token})

    @task
    def get_user_friends(self):
        r = self.client.post('/user/friendslist', headers = {"Authorization": "Bearer "+token},json={"username" : "user2"})

    @task
    def get_friend_request(self):
        r = self.client.get('/user/friendrequests', headers = {"Authorization": "Bearer "+token})

    @task
    def get_profile(self):
        r = self.client.get('user/profile/user2', headers = {"Authorization": "Bearer "+token})

    @task
    def update_fb(self):
        r = self.client.post('/user/addfacebook', headers = {"Authorization": "Bearer "+token},json={"link":"www.facebook.com"})

    @task
    def update_tw(self):
        r = self.client.post('/user/addtwitter', headers =  {"Authorization": "Bearer "+token},json={"link":"www.twitter.com"})

    @task
    def update_summary(self):
        r = self.client.post('/user/addsummary', headers = {"Authorization": "Bearer "+token},json={"text":"This is a summary"})

    @task
    def update_image(self):
        img = {'file': open('profile.jpg', 'rb')}
        r = self.client.post('/user/updateimage',files = img, headers = {"Authorization": "Bearer "+token})

    @task
    def send_msg(self):
        r = self.client.post('/chat/addmsg', headers = {"Authorization": "Bearer "+token}, json = {"timestamp":str(datetime.datetime.now().timestamp()), "msg":"hi"})

    @task
    def get_msg(self):
        r = self.client.get('/chat/msg', headers = {"Authorization": "Bearer "+token})
    
class WebsiteUser(HttpUser):
    tasks = [UserBehavior]
    wait_time = between(5, 9)


