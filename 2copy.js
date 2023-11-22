const quotesJaNames = {
    calm: {
Plato: 'Yes it is',
tyyppi2: 'jee',
    },
    strong: {
Plato: 'jes!',
tyyppi2: 'Good day',
    }

}

const philosophers = {
    Plato: 'dude from past',
    tyyppi2: 'He is another philosopher'
}






   var randomCalm= ()  => {

    var keys = Object.values(quotesJaNames.calm);
    let kokeilu = keys[Math.floor(Math.random() * keys.length)];
    console.log(kokeilu);  


  };



var randomStrong= () => {

    var keys = Object.values(quotesJaNames.strong);
    let kokeilu = keys[Math.floor(Math.random() * keys.length)];
    console.log(kokeilu);  


  };



const chooseCategory = (category) => {

    if (category === 'calm'){
     return randomCalm;
      
    } 
    else if (category === 'strong'){
       return randomStrong;
    }
    else {
        console.log('choose category')
    }
}


const selectCategory = chooseCategory('strong');
selectCategory();