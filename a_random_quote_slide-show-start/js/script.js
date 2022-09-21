/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/
let quotes = [];

quotes =[{quote:"Build your own dreams, or someone else will hire you to build theirs",source:" Farrah Gray",citation:"150+ Best Badass Quotes for You [Most Badass Collection].."},{quote:"I would rather have questions that can't be answered than answers that can't be questioned",source:"Richard Feynman",citation:"150+ Best Badass Quotes for You [Most Badass Collection].."},{quote:"Falling down is how we grow while staying down is how we die",source:"Brian Vaszily"},{quote:"Appear weak when you are strong, and strong when you are weak.",source:"Sun Tzu, The Art of War ",year:" 2500 years ago"},{quote:"You can waste your lives drawing lines. Or you can live your life crossing them.",source:"Shonda Rhimes",citation:"Inspirational War Quotes: top 100 famous quotes about Inspirational War.."},{quote:"Don't spend time beating on a wall, hoping to transform it into a door.",source:"Coco Chanel"},{quote:"What you get by achieving your goals is not as important as what you become by achieving your goals.",source:"Henry David Thoreau"},{quote:"SEALs…fight in teams, only in teams, each man relying entirely on the others to do exactly the right thing. That's how we do it, fighting as one in a team of four or maybe even 10 or even 20, but always as one unit, one mind, one strategy. We are, instinctively, always backing up, always covering, always moving to plug the gap or pave the way. That's what makes us great.",source:"Navy SEAL Mark Owen, No Easy Day"},{quote:"People tell me I saved hundreds and hundreds of people. But I have to tell you: It's not the people you saved that you remember. It's the ones you couldn't save.",source:"Chris Kyle"},{quote:"If you can't explain it to a six-year-old, you don't understand it yourself.",source:"Albert Einstein"}]



/***
 * `getRandomQuote` function
***/

let getRandomQuote = ()=>{
    let picked = Math.floor(Math.random()*quotes.length);

    return quotes[picked];
}


/***
 * `printQuote` function
***/
let printQuote = ()=>{
    //get the quote index from getRandomQuote() function
    chosen = getRandomQuote();

    //Check whether the array has citation and year property
    //Store the return value in a variable
    let exist = chosen.hasOwnProperty("citation");
    let exist1 = chosen.hasOwnProperty("year");

    //create a string variable to implement to the HTML
    let str ="";
    
    //Create an element of the first <p></p> tag
    let new_element = document.createElement("p");
    new_element.className = "quote";
    new_element.textContent = chosen.quote;
    
    //Append the outerHtml to the string
str += `${new_element.outerHTML}`;

 //Create an element of the second <p></p> tag
    let new_element2 = document.createElement("p");
    new_element2.className = "source";
    new_element2.textContent = chosen.source;
    if(exist == true)
    {
        let new_element3 = document.createElement("span");
        new_element3.className = "citation";
        new_element3.textContent = chosen.citation;
       //Append the element to the 2nd p element         
        new_element2.appendChild(new_element3);
     
    }
    if(exist1 == true)
    {
        let new_element4 = document.createElement("span");
        new_element4.className = "citation";
        new_element4.textContent = chosen.year;   
        //Append the element to the 2nd p element        
        new_element2.appendChild(new_element4);
        
    }
  
    let x =document.getElementById("quote-box");
     //Append the outerHtml to the string
   str += `${new_element2.outerHTML}`;
   //Add the string variable to the HTML
x.innerHTML = str;
 
     
  
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/

document.getElementById('load-quote').addEventListener("click",printQuote);