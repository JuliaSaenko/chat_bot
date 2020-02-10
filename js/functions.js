function getRandomTimeout (message)  {
    const randomSecondsQuantity = getRandomNumber(maxTimeout) *  1000;
    return new Promise(done => {
        setTimeout(() => done(message), randomSecondsQuantity);
    });
}

const getRandomMessage = async () => {
    const randomMessage = getRandomElementFromArray(messages);
    return getRandomTimeout(randomMessage);
};


const getBrowserMessage = async () => {
    let message;
    let userLastMessageText = chatList.lastChild.textContent;

    if(chatList.childNodes.length < 3) {
        const messageText = `Hi! My name is BB-8. Nice to meet you!`;
        message = await getRandomTimeout(messageText);

    } else if (userLastMessageText.includes(userLastMessage)) {
        const messageText = `May the Force be with you!`;

        message = await getRandomTimeout(messageText);
        userMessage.setAttribute(`readonly`, true);
    } else {
        message = await getRandomMessage();
    }

    if(message === `I'm sorry, but I have a lot of important droid stuff. See you later.`) {
        userMessage.setAttribute(`readonly`, true);
    }

    audio.pause();

    return renderElement(`li`, `chat__message chat__message--browser`, message);
};

async function getUserMessage () {
    const confirmBtn = document.querySelector(`.chat__btn`);
    console.log(1);

    confirmBtn.addEventListener(`click`, async () => {
        let userMessageValue = userMessage.value;
        if (userMessageValue) {
            let newUserMessage = renderElement(`li`, `chat__message chat__message--user`, userMessageValue);
            chatList.appendChild(newUserMessage);
            userMessage.value = "";
            audio.play();

            const result = await getBrowserMessage();
            chatList.appendChild(result);
            audio.pause();
            console.log(14);

        }
    });
}