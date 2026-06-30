🤖 AGPT Project

AGPT Project is a lightweight, web-based AI Chat application. It provides a seamless interface to interact with advanced Large Language Models (LLMs) via a clean and responsive web UI, powered by Python and the Flask web framework.


✨ Features

💬 Real-time Chat: Engage in fluid, conversational AI interactions.


🌐 Modern Web Interface: A clean, minimalist, and responsive UI built with HTML, CSS, and JavaScript.


🚀 Fast & Lightweight: Minimal overhead, making it extremely fast to deploy and run.


🛠 Easy Configuration: Simple setup to plug in your own API keys.

🚀 Getting Started

Follow these simple steps to get the project running on your local machine.

1. Prerequisites

Make sure you have Python 3.10 or higher installed on your system.

2. Clone the Repository

Open your terminal or command prompt and run:

git clone https://github.com/AmirprogrammerA/A_gpt.git
cd A_gpt


3. Install Dependencies

We use Flask for the backend and openai for the AI logic. Install them using pip:

pip install flask openai


4. Configuration

Before running the app, ensure you have your OpenAI API Key ready.





Open app.py.



Locate the API key variable and paste your key there.

5. Run the Application

Start the server with the following command:

python app.py


Once started, the terminal will show the local address. Open your browser and go to:
👉 http://127.0.0.1:5320



📂 Project Structure

agpt_project/
├── app.py              # The heart of the project (Flask Backend & AI Logic)
├── static/             # Frontend assets
│   ├── style.css       # Custom styling for the chat interface
│   └── script.js       # Frontend logic for handling chat requests
├── templates/           # HTML files
│   └── index.html      # The main user interface
└── README.md           # Project documentation (This file)


🛠 Troubleshooting

ProblemSolutionModuleNotFoundErrorYou missed a library. Run pip install flask openai.Port 5320 is already in useAnother app is using this port. Change the port number in app.py.AI not responding / API ErrorCheck your internet connection and ensure your OpenAI API key is valid and has credits.

🙋 FAQ

Q: Can I use this with other AI models?
A: Yes! You can modify the app.py file to connect to different API endpoints (like Anthropic or local LLMs via Ollama).

Q: Do I need a virtual environment?
A: It is not required for this project, but it is always a good practice for larger Python projects to keep your global environment clean.



Made with ❤️ by Amir-93
