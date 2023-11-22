const calm = ['hey', 'it is a good day', 'calm your mind']
const strong = ['strong1', 'strong2', 'strong3']
const happy = ['be happy', 'do not worry', 'good day to you']


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

