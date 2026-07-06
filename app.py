
# pip install openai
# py -m pip install openai
import time
from flask import Flask, render_template, request, jsonify
from openai import OpenAI
print("starting server....")
time.sleep(2)


app = Flask(__name__)


client = OpenAI( 
    api_key=input ("Please Input your GapGPT Token"),
    base_url="https://api.gapgpt.app/v1" 
)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_response', methods=['POST'])
def get_response():
    user_message = request.json.get("message")
    try:
        response = client.chat.completions.create(
            model="gpt-4o", 
            messages=[{"role": "user", "content": user_message}]
        )
        return jsonify({"reply": response.choices[0].message.content})
    except Exception as e:
        return jsonify({"reply": "Error: " + str(e)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5320, debug=True)
