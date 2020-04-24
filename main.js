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
    // const all= document.querySelector(".allButton");
    // const dog= document.querySelector(".dogButton");
    // const cat= document.querySelector(".catButton");
    // const fish= document.querySelector(".fishButton");

    // all.addEventListener("click", ()=>{
    //     let allCards=document.querySelectorAll('.card');
    //     let allDogs=document.querySelectorAll('.Dog');
    //     let allCats=document.querySelectorAll('.Cat');
    //     let allFishs=document.querySelectorAll('.Fish');
    //     for (let i = 0; i < allCards.length; i++) {
    //         allCards[i].classList.add("hideAndShow");            
    //     }
        
    // });
    // dog.addEventListener("click", ()=>{
    //     let allCards=document.querySelectorAll('.Dog');
    //     for (let i = 0; i < allCards.length; i++) {
    //         allCards[i].classList.toggle("hideAndShow");            
    //     }
        
    // });
    // cat.addEventListener("click", ()=>{
    //     let allCards=document.querySelectorAll('.Cat');
    //     for (let i = 0; i < allCards.length; i++) {
    //         allCards[i].classList.toggle("hideAndShow");            
    //     }
        
    // });
    // fish.addEventListener("click", ()=>{
    //     let allCards=document.querySelectorAll('.Fish');
    //     for (let i = 0; i < allCards.length; i++) {
    //         allCards[i].classList.toggle("hideAndShow");            
    //     }
        
    // });

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

