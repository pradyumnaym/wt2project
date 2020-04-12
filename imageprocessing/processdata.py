import json
from skimage import io
import cv2
import os
import tensorflow as tf
import requests


physical_devices = tf.config.list_physical_devices('GPU') 
tf.config.experimental.set_memory_growth(physical_devices[0], True) 

with open('data.json', "r") as f:
    data = json.load(f)

placeholderimage = cv2.imread(os.path.join("..", "angular-gaming", "src", "assets", "profile_pic.jpg"))

for user in data:
    if 'img' not in user:
        user['image'] = cv2.resize(placeholderimage, (300, 300))
        if len(user['image'].shape) > 2 and user['image'].shape[2] == 4:
            #convert the image from RGBA2RGB
            user['image'] = cv2.cvtColor(user['image'], cv2.COLOR_BGRA2BGR)
    else:
        user['image'] = cv2.resize(io.imread("http://localhost:4000/images/logo/%s" % user['img']), (300, 300))
        if len(user['image'].shape) > 2 and user['image'].shape[2] == 4:
            #convert the image from RGBA2RGB
            user['image'] = cv2.cvtColor(user['image'], cv2.COLOR_BGRA2BGR)
        print(user['username'])




base_model = tf.keras.applications.MobileNetV2(input_shape=(300, 300, 3),
                                               include_top=False,
                                               weights='imagenet')
newmodel  = tf.keras.Sequential([
    base_model, 
    tf.keras.layers.Flatten()]
)

tensordict = {}

def euclideandistance(x1, x2):
    return tf.reduce_sum(tf.square(tf.math.subtract(x1, x2)))

for user in data:
    tensor = tf.expand_dims(tf.convert_to_tensor(user['image'], tf.float32), 0)
    tensordict[user['username']] = newmodel(tensor)

for user in data:
    user['friends'].sort(key  = lambda user1 : euclideandistance(tensordict[user['username']], tensordict[user1]))

for user in data:
    del user['image']

with open("data.json") as f:
    json.dump(data, f, indent = 6)