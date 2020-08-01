import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}

'''import time
from flask import Flask

app = Flask(__name__)

@app.route('/name=<userName>')
def get_name(userName):
    return userName'''