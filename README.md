# A_GPT_1
Please extract the file agpt_project.zip first
------------


[![Python Version](https://img.shields.io/badge/python-3.10%2B-blue)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/framework-Flask-lightgrey)](https://flask.palletsprojects.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An interactive, web-based AI Q&A application designed to provide a seamless chat experience with advanced LLMs, powered by Python and Flask.

## ✨ Features
- 💬 Real-time Interaction: Engage in smooth, responsive AI-powered conversations.
- 🌐 Clean UI: A modern and minimalist interface for better usability.
- 🚀 Lightweight Backend: Built with Flask for speed and efficiency.

## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/AmirprogrammerA/A_gpt.git
cd A_gpt

### 2. Install dependencies
It is highly recommended to use a virtual environment:
python -m venv venv
# Windows:
venv\\Scripts\\activate
# Linux/macOS:
source venv/bin/activate

# Install requirements
pip install flask openai

### 3. Run the application
python app.py
Open your web browser and navigate to: http://127.0.0.1:5320

## 📂 Project Structure

agpt_project/
├── app.py                
├── static/              
(style.css, script.js)
├── templates/index.html      
└── README.html
           ReadmeFA.html(Persian)
           
## 🛠 Troubleshooting
| Issue | Solution |
| :--- | :--- |
| ModuleNotFoundError | Run pip install flask openai. |
| Port 5320 busy | Change the port number in app.py. |
| AI not responding | Verify your OpenAI API key in app.py. |

## 🙋 FAQ
- Q: Can I use this for other AI models?
  - A: Yes, you can modify the API endpoint and parameters in app.py.
- Q: Is it responsive?
  - A: Yes, the frontend is built to be mobile-friendly.

---
<p align="center">
  Made with ❤️ by Amir-93
</p>
"""


