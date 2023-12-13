const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;

const createChatLi = (message, className) => {
    //Create a chat <li> element with passed message abd className</li>
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : ` <span class="material-symbols-outlined fa fa-robot"></span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message
    return chatLi;
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;
    chatInput.value = "";
    // chatInput.style.height = `${inputInitHeight}px`;

    //Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    setTimeout(() => {        
        //Display "thinking..." message while waiting for the response
        const incomingChatLi = createChatLi(generateResponse(userMessage), "incoming")
        chatbox.appendChild(incomingChatLi);           
    }, 900)
}

// chatInput.addEventListener("input", () => {
//     //adjust the height of the input textarea based on its content
//     chatInput.style.height = `${inputInitHeight}px`;
//     chatInput.style.height = `${chatInput.scrollHeight}px`;
// })

chatInput.addEventListener("keydown", (e) => {
    //if Enter key is pressed without Shift key and the window 
    //width is greater than 800px, handle the chat
    if (e.key === "Enter" && !e.shiftKey && window.innerHeight > 800) {
        e.preventDefault();
        handleChat();
    }
})

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"))
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"))