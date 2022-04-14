// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons){
    //   if(bullets>=(dragons*2)){
    //     return true;
    //   }
    //   else{
    //     return false;
    //   }
      
      return (bullets>=(dragons*2)) ? true : false // apparently return is boolean so we can just write 'return bullets >= dragons * 2' and this will return true if its fullfiled or return false if it isnt
    }


    //arrow functions as seen on codewars
    //const heroine = (bullets, dragons) => dragons * 2 <= bullets; here parameters are written first and then there is an arroe after which you write what the fn is supposed to do. the function is within a variable and doesnt have the term fn. it also has implicit return so no need to write return

    console.log(hero(12,8));
    console.log(hero(12,4));

