async function sendMessage() {
    const input = document.getElementById('user-input');
    const chatWindow = document.getElementById('chat-window');
    const loader = document.getElementById('loader');
    const message = input.value.trim();

    if (!message) return;

    appendMessage(message, 'user-msg');
    input.value = '';
 
    loader.style.display = 'block';
    chatWindow.scrollTop = chatWindow.scrollHeight;

    try {
        const response = await fetch('/get_response', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        loader.style.display = 'none';

        appendMessage(data.reply, 'bot-msg', true);
        
    } catch (error) {
        loader.style.display = 'none';
        appendMessage("خطا در ارتباط با سرور!", 'bot-msg');
    }
    
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function appendMessage(text, className, showCopy = false) {
    const chatWindow = document.getElementById('chat-window');
    const msgDiv = document.createElement('div');
    msgDiv.className = `msg ${className}`;
    
    const textSpan = document.createElement('span');
    textSpan.innerText = text;
    msgDiv.appendChild(textSpan);

    if (showCopy) {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerText = 'کپی متن';
        copyBtn.onclick = () => copyToClipboard(text, copyBtn);
        msgDiv.appendChild(copyBtn);
    }

    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'کپی شد!';
        btn.style.color = '#22c55e';
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.color = '#64748b';
        }, 2000);
    });
}
document.getElementById('user-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
