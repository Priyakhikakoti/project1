// ============================
// CHATBOT ELEMENTS
// ============================

const chatOpen = document.getElementById("chatOpen");
const chatClose = document.getElementById("chatClose");
const chatBox = document.getElementById("chatBox");

const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendMessage");
const chatMessages = document.getElementById("chatMessages");

let isVoiceInput = false;


// ============================
// OPEN / CLOSE CHAT
// ============================

chatOpen.addEventListener("click", () => {
    chatBox.style.display = "flex";
});

chatClose.addEventListener("click", () => {
    chatBox.style.display = "none";
});


// ============================
// ADD MESSAGE
// ============================

function addMessage(text, sender) {

    const message = document.createElement("div");

    message.className = "ai-message " + sender;

    message.innerHTML = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop = chatMessages.scrollHeight;

}

// ============================
// MY PROFILE
// ============================

const profile = {

    name: "Priyakhi Kakoti",

    role: "Computer Science Engineering Student",

    university: "Dibrugarh University Institute of Engineering and Technology",

    location: "Assam, India",

    internship: "Technology Innovation and Development Foundation (TIH), IIT Guwahati",

    interests: [
        "Web Development",
        "Frontend Development",
        "UI/UX Design",
        "Problem Solving"
    ],

    career: "Software Engineer",

    github: "https://github.com/Priyakhikakoti",

    linkedin: "https://www.linkedin.com/in/priyakhi-kakoti/",

    email: "priyakhikakoti@gmail.com"

};

// ============================
// AI RESPONSES
// ============================

function getReply(message) {

    message = message.toLowerCase();

    // PROJECTS
    if (
        message.includes("project") ||
        message.includes("projects") ||
        message.includes("portfolio") ||
        message.includes("work") ||
        message.includes("build")
    ) {

        return `
💻 <b>My major projects include:</b><br><br>

• Portfolio Website<br>
• Grocery E-Commerce Website<br>
• Attendance Management System<br>
• Railway Incident Management System
`;
    }

    // SKILLS
    if (
        message.includes("skill") ||
        message.includes("skills") ||
        message.includes("technology") ||
        message.includes("tech") ||
        message.includes("language")
    ) {

        return `
🛠 <b>My Skills:</b><br><br>

• HTML<br>
• CSS<br>
• JavaScript<br>
• PHP<br>
• MySQL<br>
• Python<br>
• Flask<br>
• Git & GitHub
`;
    }

    // INTERNSHIP
    if (
        message.includes("intern") ||
        message.includes("internship") ||
        message.includes("experience") ||
        message.includes("iit")
    ) {

        return `
🚆 I completed my internship at <b>Technology Innovation and Development Foundation (TIH), IIT Guwahati</b>, where I worked on a Railway Incident Management and Safety Monitoring System.

`;
    }

    // RESUME
    if (
        message.includes("resume") ||
        message.includes("cv")
    ) {

        return `
📄 Here's my resume.<br><br>

<a href="resume.pdf" target="_blank" class="chat-link">
Download Resume ⬇
</a>
`;
    }

    // GITHUB
    if (
        message.includes("github") ||
        message.includes("code") ||
        message.includes("repository")
    ) {

        return `
🐙 Visit my GitHub profile.<br><br>

<a href="https://github.com/Priyakhikakoti" target="_blank" class="chat-link">
Open GitHub
</a>
`;
    }

    // CONTACT
    if (
        message.includes("contact") ||
        message.includes("email") ||
        message.includes("phone")
    ) {

        return `
📧 Email: priyakhikakoti@gmail.com <br> Phone No: 9864978232

<br><br>

Use the Contact form below to reach me.
`;
    }

    // GREETING
    if (
        message.includes("hi") ||
        message.includes("hello") ||
        message.includes("hey")
    ) {

        return `
👋 Hello! I'm <b>Priyakhi AI</b>.

Ask me about my projects, skills, internship, GitHub, or resume.
`;
    }

   if (
    message.includes("who are you") ||
    message.includes("about yourself") ||
    message.includes("introduce yourself")
) {

    return `
👋 I'm <b>${profile.name}</b>.

I'm a <b>${profile.role}</b> studying at
<b>${profile.university}</b>.

I'm passionate about building modern web applications and continuously improving my development skills.
`;

}
if (
    message.includes("study") ||
    message.includes("education") ||
    message.includes("college") ||
    message.includes("university")
) {

    return `
🎓 I'm currently pursuing Computer Science Engineering at

<b>${profile.university}</b>.
`;

}
if (
    message.includes("where are you") ||
    message.includes("location") ||
    message.includes("live")
) {

    return `
📍 I'm from <b>${profile.location}</b>.
`;

}
if (
    message.includes("goal") ||
    message.includes("career") ||
    message.includes("future")
) {

    return `
🎯 My goal is to become a skilled <b>${profile.career}</b> and build impactful software that solves real-world problems.
`;

}
if (
    message.includes("hobby") ||
    message.includes("interest") ||
    message.includes("passion")
) {

    return `
❤️ I'm passionate about:

• Web Development
• UI/UX Design
• Learning New Technologies
• Building Interactive Applications
`;

}
if (
    message.includes("hire") ||
    message.includes("job") ||
    message.includes("opportunity")
) {

    return `
💼 I'm currently looking for internships and software engineering opportunities where I can learn, contribute, and grow as a developer.
`;

}

 // DEFAULT
    return `
🤖 Sorry, I don't understand that yet.

Try asking about:

• Projects
• Skills
• Internship
• Resume
• GitHub
• Contact
`;

}


// ============================
// SEND MESSAGE
// ============================

function sendMessage() {

    const text = chatInput.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    chatInput.value = "";

    // Typing Animation

    const typing = document.createElement("div");

    typing.className = "ai-message bot typing";

    typing.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
    `;

    chatMessages.appendChild(typing);

    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {

        typing.remove();

        const reply = getReply(text);

        addMessage(reply, "bot");

        // Speak only if the user used the microphone
        if (isVoiceInput) {

            const speech = new SpeechSynthesisUtterance();

            let speakText = reply
                .replace(/<[^>]*>/g, "")
                .replace(/[\u{1F300}-\u{1FAFF}]/gu, "")
                .replace(/\s+/g, " ")
                .trim();

            speech.text = speakText;
            speech.lang = "en-US";

            window.speechSynthesis.speak(speech);

            isVoiceInput = false;
        }

    }, 1000);

}


// ============================
// SEND BUTTON
// ============================

sendBtn.addEventListener("click", sendMessage);


// ============================
// ENTER KEY
// ============================

chatInput.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {

        sendMessage();

    }

});


// ============================
// QUICK BUTTONS
// ============================

document.querySelectorAll(".quick-btn").forEach(button => {

    button.addEventListener("click", () => {

        chatInput.value = button.dataset.question;

        sendMessage();

    });

});


// ============================
// VOICE ASSISTANT
// ============================

const voiceBtn = document.getElementById("voiceBtn");

const SpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

if (SpeechRecognition) {

    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    voiceBtn.addEventListener("click", () => {

        recognition.start();

        voiceBtn.classList.add("listening");

    });

    recognition.onresult = (event) => {

        isVoiceInput = true;

        const transcript = event.results[0][0].transcript;

        chatInput.value = transcript;

        sendMessage();

    };

    recognition.onend = () => {

        voiceBtn.classList.remove("listening");

    };

} else {

    voiceBtn.style.display = "none";

}