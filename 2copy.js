const quotesJaNames = {
    calm: {
Plato: 'Kyllä vain hyvä on',
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

    var kaksikeys = Object.values(quotesJaNames.calm);
    let kokeilu = kaksikeys[Math.floor(Math.random() * kaksikeys.length)];
    console.log(kokeilu);  


  };



var randomStrong= () => {

    var kaksikeys = Object.values(quotesJaNames.strong);
    let kokeilu = kaksikeys[Math.floor(Math.random() * kaksikeys.length)];
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
