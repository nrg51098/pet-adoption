const pets= [{
    Image: "https://bit.ly/2KtDTjl",
    Name: "Jina",
    Color: "Yellow",
    'Special Skill': "Swimming",
    'Type of Pet': "Fish",
    Friends: ["Nina", "Jane"]
},
{
    Image: "https://bit.ly/2S22pfy",
    Name: "Jia",
    Color: "Blue",
    'Special Skill': "Jumping",
    'Type of Pet': "Fish",
    Friends: ["Ina", "Sone"]
},
{
    Image: "https://bit.ly/351j3Rz",
    Name: "Tiger",
    Color: "Brown",
    'Special Skill': "Barking",
    'Type of Pet': "Dog",
    Friends: ["Sona", "Sia"]
},
{
    Image: "https://bit.ly/3bwYZcs",
    Name: "Summmer",
    Color: "Blue",
    'Special Skill': "Eating",
    'Type of Pet': "Dog",
    Friends: ["SIna", "Curry"]
},
{
    Image: "https://bit.ly/2VwTjcC",
    Name: "Augus",
    Color: "Yellow",
    'Special Skill': "Meowing",
    'Type of Pet': "Cat",
    Friends: ["Hoina", "Rocy"]
},
{
    Image: "https://bit.ly/3as7mog",
    Name: "pops",
    Color: "green",
    'Special Skill': "Hiding",
    'Type of Pet': "Cat",
    Friends: ["Pria", "esen"]
}
]



const printToDom = (selector, domString)=>{
 document.querySelector(selector).innerHTML= domString;
}


const PetLoop = (petObj)=>{
    let petString = "";
    for (let i = 0; i < petObj.length; i++) {
        petString += `<div class="${petObj[i]["Type of Pet"]} card">`;
        petString += `<header>${petObj[i].Name}</header>`;
        petString += `<img src="${petObj[i].Image}">`;
        petString += `<h2>${petObj[i]["Special Skill"]}</h2>`;
        petString += `<h3>My Friends: ${petObj[i].Friends[0]} and ${petObj[i].Friends[1]}</h3>`;
        petString += `<footer>${petObj[i]["Type of Pet"]}</footer>`;
        petString += `</div>`
    }

    const selector = "#pets";
    printToDom(selector, petString);
    console.log(petString);

    
}

const init = ()=>{
    PetLoop(pets);
    buttonEventHandler();
    
}

window.onload = function() {
    init();
    
   
  };



const buttonEventHandler = () =>{
    const buttons = document.querySelectorAll("li button");
    //console.log(buttons);

    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i].className);
        buttons[i].addEventListener("click", buttonClickEvent);
        
           
    }
}

const buttonClickEvent = (event) => {
    const petButton = event.target.className; 
    if (petButton === "allButton"){
        show('card');
    } else if (petButton === "dogButton"){
        show('Dog');
    } else if (petButton === "catButton"){
        show('Cat');
    } else if (petButton === "fishButton"){
        show('Fish');
    }    
}

const show = (pet)=>{
    const allCards = document.querySelectorAll('.card');
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList.add("hide"); 
        allCards[i].classList.remove("show"); 
        console.log(allCards[i]) ;      
    }
  const petCards = document.querySelectorAll(`.${pet}`);
  for (let i = 0; i < petCards.length; i++) {
      petCards[i].classList.replace('hide', 'show');      
  }

}


































// fish
// https://bit.ly/2S22pfy
// https://bit.ly/2S2qH8Z

// Dog 
// https://bit.ly/351j3Rz
// https://bit.ly/3bwYZcs
// https://bit.ly/3cGON0V
// https://bit.ly/2RZSiaP

// cat
// https://bit.ly/2VwTjcC
// https://bit.ly/3as7mog

