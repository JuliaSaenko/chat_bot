const chatList = document.querySelector(`.chat__messages`);
const userMessage = document.querySelector(`.chat__textarea`);
const userLastMessage = `Bye!`;
const audio = document.querySelector(`.chat__sound`);

const messages = [
    `How are you?`,
    `What’s new?`,
    `I am your father!`,
    `A long time ago in a galaxy far, far away...`,
    `You underestimate my power!`,
    `Do, or do not. There is no "try"`,
    `I'm sorry, but I have a lot of important droid stuff. See you later. May the Force be with you.`,
];

const maxTimeout = 10;