const responseGenerator = {
    greetings: [
        'Hi there!',
        'Hello!',
        'How can I help you today?',
    ],
    farewells: [
        'Goodbye!',
        'See you later!',
        'Have a great day!',
    ],
    howAreYous: [
        " I'm doing well, thanks for asking!",
        "I'm always ready to help!",
        "I'm learning new things every day!",
    ],
    generalResponses: [
        'I understand.',
        'Interesting.',
        'Tell me more.',
    ],
    creatorResponses: [
        'You should contact my creator @ jesusmollineda88@gmail.com',
        'You should contact my creator @ www.linkedin.com/in/jesus-d-mollineda-713894251',
        'You should contact my creator @ https://github.com/JDMollineda',        
    ],
    defaultResponse: [
        "Sorry, I didn't understand.",
        "Sorry, my responses are limited",
    ],
};

const generateResponse = (message) => {
    const messageType = detectMessageType(message);

    switch (messageType) {
        case 'greeting':
            return getRandomResponse(responseGenerator.greetings);
        case 'farewell':
            return getRandomResponse(responseGenerator.farewells);
        case 'howAreYou':
            return getRandomResponse(responseGenerator.howAreYous);
        case 'creatorResponses':
            return getRandomResponse(responseGenerator.creatorResponses);
        case 'question':
            // Process the question and generate a more specific response
            return getRandomResponse(responseGenerator.defaultResponse)
        case 'statement':
            return getRandomResponse(responseGenerator.generalResponses);
        default:
            return getRandomResponse(responseGenerator.defaultResponse);
    }
};

const detectMessageType = (message) => {
    const greetingsRegex = /(hi|hello|good morning|good afternoon|good evening)/gi;
    const farewellsRegex = /(bye|goodbye|see you later|hasta la vista)/gi;
    const howAreYouRegex = /(how are you|how is it going|how do you do)/gi;
    const questionRegex = /(what|when|where|why|who|how)/gi;
    const creatorRegex = /(dad|man|developer|author|help|assistance|creator)/gi;

    if (greetingsRegex.test(message)) {
        return 'greeting';
    } else if (farewellsRegex.test(message)) {
        return 'farewell';
    } else if (howAreYouRegex.test(message)) {
        return 'howAreYou';
    } else if (creatorRegex.test(message)) {
        return 'creatorResponses';
    } else if (questionRegex.test(message)) {
        return 'question';
    } else {
        return 'statement';
    }
};

const getRandomResponse = (responses) => {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
};
