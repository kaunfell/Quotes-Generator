const calm = ['heippa', 'tänään on hyvä päivä', 'ole rohkea']
const strong = ['strong1', 'strong2', 'strong3']
const happy = ['be happy', 'do not worry', 'good day to you']

//const randomN = Math.floor(Math.random() * arr.length);
//console.log(calm[randomNum]);

const mGenerator = (arr) => {
    const randomN = Math.floor(Math.random() * arr.length);
    if (arr === strong) {
    
        return(strong[randomN])
    }
    else if (arr === calm){

    return(calm[randomN]);
   }
    else if (arr === happy){

    return(happy[randomN]);
   }else{
    console.log('put array');
   }
   
  }

console.log(mGenerator(happy));



