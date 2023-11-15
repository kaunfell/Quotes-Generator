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
      //const randomN = Math.floor(Math.random() * st.length);
    return(calm[randomN]);
   }
    else if (arr === happy){
    //const randomN = Math.floor(Math.random() * st.length);
    return(happy[randomN]);
   }else{
    console.log('put array');
   }
   
  }

console.log(mGenerator(happy));



/*
const mGenerator = arr => {

  if(arr ='calm'){
    //const randomN = Math.floor(Math.random() * calm.length);
    console.log(calm);
  } else if(arr = 'st'){
    //const randomN = Math.floor(Math.random() * st.length);
    console.log(st);
 }
}


mGenerator(st);




/*
const messageGenerator = categ => {
    if(categ = 'calm'){
        switch (random){
                case 0:
                    console.log('quote1');
                    break;
                case 1:
                    console.log('quote2');
                    break;
                default:
                    console.log('quote3');
                    break;
                }
       
  } else if(categ = 'st'){
        switch (random){
                case 0:
                    console.log('strong1');
                    break;
                case 1:
                    console.log('strong2');
                    break;
                default:
                    console.log('strong3');
        }
        }
};

messageGenerator(st);
*/


