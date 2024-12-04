let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEL = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

function sendMsgToChatBot() {
    let userMsg = userInputEl.value;

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEL.appendChild(msgContainerEl);

    let userMsgEl = document.createElement("span");
    userMsgEl.textContent = userMsg;
    userMsgEl.classList.add("msg-to-chatbot");
    msgContainerEl.appendChild(userMsgEl);

    userInputEl.value = "";
    getReplyFromChatBot()
}

function getReplyFromChatBot() {
    let chatBotLength = chatbotMsgList.length;
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * chatBotLength) - 1];

    let msgContainerEl = document.createElement("div");
    msgContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEL.appendChild(msgContainerEl);

    let chatBotMsgEl = document.createElement("span");
    chatBotMsgEl.textContent = chatbotMsg;
    chatBotMsgEl.classList.add("msg-from-chatbot");
    msgContainerEl.appendChild(chatBotMsgEl);

}