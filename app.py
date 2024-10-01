from flask import Flask, request, jsonify, render_template, send_from_directory
from flask_cors import CORS
from menu_choice import choice_lunch_menu
import requests
import json
import os
from dotenv import load_dotenv
import sys

app = Flask(__name__, static_url_path='/static')

CORS(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        items = request.form.getlist('items')
        n = int(request.form.get('n', 1))
        if isinstance(n, int): 
          n = int(request.form.get('n', 1))
        else:
          message = "뽑기 횟수란에는 숫자만 입력 가능합니다."
          return jsonify(message), 400
          
        result = choice_lunch_menu(*items, n=n)
        return jsonify(result), 200
    return render_template('index.html')
      

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
