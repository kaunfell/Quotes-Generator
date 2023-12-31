// 1. Object containing the quotes and authors:
const quotesJaNames = {
    calm: {
Seneca: 'We suffer more often in imagination than in reality.',
Epictetus: 'Any person capable of angering you becomes your master; he can anger you only when you permit yourself to be disturbed by him',
Aurelius: 'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
    },
    strong: {
Seneca: 'Difficulties strengthen the mind, as labor does the body.',
Molière: 'The greater the obstacle, the more glory in overcoming it.',
Aurelius: 'You have the power over your mind - not outside events. Realise this, and you will find strength.'
    },
    inspirational: {
Aurelius: 'When you arise in the morning, think of what a precious privilege it is to be alive – to breathe, to think, to enjoy, to love.'  ,
Seneca: 'While we are postponing, life speeds by.',
Epictetus: 'Make the best use of what is in your power, and take the rest as it happens.',
    }

}

const authors = {
    Seneca: 'Seneca the Younger. Roman philosopher and statesman. c 4 BC - 65 AD.',
    Epictetus: 'An Ancient Greek Philosopher~ 55 AD - 135 AD.',
    Molière: 'Jean-Baptiste Poquelin, known as Molière. French playwright, actror and poet. ~15 January 1622 - 17 February 1673.',
    Aurelius: 'Marcus Aurelius, Roman emperor, April 26, 121 ce - March 17, 180.',
}


// A function to calm quotes:
const randomCalm= ()  => {

    const calmQuotes = quotesJaNames.calm;
    const keys = Object.keys(calmQuotes);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const finalQuote = calmQuotes[randomKey];

    if (authors[randomKey]){
        console.log(`"${finalQuote}" - ${randomKey}`)
        console.log(`Author Info: ${authors[randomKey]}`)
    }
    else {
        console.log(`${randomKey}: ${finalQuote}`)
    }

 };

// A function to strong quotes:
const randomStrong= () => {
    const strongQuotes = quotesJaNames.strong;
    const keys = Object.keys(strongQuotes);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const finalQuote = strongQuotes[randomKey]; 

        if(authors[randomKey]) {
            console.log(`"${finalQuote}" - ${randomKey}`)
            console.log(`Author Info: ${authors[randomKey]}`)
        }
        else {
            console.log(`${randomKey}: ${finalQuote}`)            
        }

  };

// A function to inspirational quotes:
  const randomInspirational= () => {
    const inspirationalQuotes = quotesJaNames.inspirational;
    const keys = Object.keys(inspirationalQuotes);
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    const finalQuote = inspirationalQuotes[randomKey];

        if(authors[randomKey]){
            console.log(`"${finalQuote}" - ${randomKey}`)
            console.log(`Author Info: ${authors[randomKey]}`)
        }
        else {
            console.log(`${randomKey}: ${finalQuote}`)            
        }
  };


// The final function that returns functions based on desired category:
const chooseCategory = (category) => {

    if (category === 'calm'){
     return randomCalm;
      
    } 
    else if (category === 'strong'){
       return randomStrong;
    }
    else if (category === 'inspirational'){
        return randomStrong;
     }
    else {
        console.log('choose category')
    }
}


const selectCategory = chooseCategory('inspirational');
selectCategory();
