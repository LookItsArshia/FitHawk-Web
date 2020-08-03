import time
import os
from flask import Flask, render_template, Response, jsonify, send_file, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import glob
from pathlib import Path
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip

UPLOAD_FOLDER = "/home/kamran_tayyab99/FitHawk-Web/src/UserVids"
ALLOWED_EXTENSIONS = {'mp4'}

#This is a test!
app = Flask(__name__)
app.secret_key = os.urandom(24)

@app.route('/time')
def get_current_time():
    return jsonify(('time',time.time()))


@app.route("/video/video=<originalVid>+t=<int:startTime>:<int:endTime>")
def getvidlocation(originalVid, startTime, endTime):
    print(originalVid, startTime, endTime)
    if os.path.isfile(f"/home/kamran_tayyab99/FitHawk-Web/src/ShortVids/{originalVid}-time={startTime}:{endTime}.mp4"):
        print("Existing video with similar parameters found, sending existing file...")
        return send_file(f"/home/kamran_tayyab99/FitHawk-Web/src/ShortVids/{originalVid}-time={startTime}:{endTime}.mp4", attachment_filename=f"{originalVid}-Sliced.mp4")
    else:
        print("No existing video found with parameters given, creating new subclip...")
        ffmpeg_extract_subclip(f"/home/kamran_tayyab99/openpose/outputs/{originalVid}.mp4", startTime, endTime, targetname=f"/home/kamran_tayyab99/FitHawk-Web/src/ShortVids/{originalVid}-time={startTime}:{endTime}.mp4")
        return send_file(f"/home/kamran_tayyab99/FitHawk-Web/src/ShortVids/{originalVid}-time={startTime}:{endTime}.mp4", attachment_filename=f"{originalVid}-Sliced.mp4")
    #return send_file(f"/home/kamran_tayyab99/openpose/outputs/{originalVid}.mp4", attachment_filename=f"{originalVid}.mp4")

"""
@app.route("/video/video=<originalVid>")
def getvidlocation(originalVid):
    return send_file(f"/home/kamran_tayyab99/FitHawk-Web/src/ShortVids/{originalVid}-time={startTime}:{endTime}.mp4", attachment_filename=f"{originalVid}-Sliced.mp4")
"""

@app.route('/video/upload', methods=['GET', 'POST'])
def upload_file():
    def allowed_file(filename):
        return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS
    if request.method == 'POST':
        print("Post Request Success")
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = file.filename
            file.save(os.path.join(UPLOAD_FOLDER, filename))
            return redirect(f"video/verify={filename}")
    return 

@app.route('/video/verify=<vidName>')
def User_Video(vidName):
    return send_file(f"/home/kamran_tayyab99/FitHawk-Web/src/UserVids/{vidName}", attachment_filename=f"{vidName}.mp4")
    

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80, debug=True)


'''
import time
from flask import Flask

app = Flask(__name__)

@app.route('/name=<userName>')
def get_name(userName):
    return {
        #'time': time.time()  
        'time': userName 
    }
'''

"""
@app.route('/video')
def get_video_location():
    for file_path in Path('../openpose/outputs').glob('**/*.mp4'):
        return jsonify(('video',file_path))
"""