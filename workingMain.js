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
    const all= document.querySelector(".allButton");
    const dog= document.querySelector(".dogButton");
    const cat= document.querySelector(".catButton");
    const fish= document.querySelector(".fishButton");

    all.addEventListener("click", ()=>{
        let allCards=document.querySelectorAll('.card');
    
        for (let i = 0; i < allCards.length; i++) {
            // allCards[i].classList.add("show"); 
            // allCards[i].classList.remove("hide");  
            allCards[i].classList.replace("hide", "show");         
        }
        
    });

    
    dog.addEventListener("click",()=>{
        const dogs= document.querySelectorAll(".Dog");
        const cats= document.querySelectorAll(".Cat");
        const fishs= document.querySelectorAll(".Fish");

        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i].classList.contains("hide")){
                dogs[i].classList.replace("hide", "show");
            } else {
                dogs[i].classList.add("show");
            }                           
            }

            for (let i = 0; i < cats.length; i++) {
                if (cats[i].classList.contains("show")){
                    cats[i].classList.replace("show", "hide");
                } else {
                    cats[i].classList.add("hide");
                }                           
                }
           

            for (let i = 0; i < fishs.length; i++) {
                if (fishs[i].classList.contains("show")){
                    fishs[i].classList.replace("show", "hide");
                } else {
                    fishs[i].classList.add("hide");
                }                           
                }   
            })

    
    cat.addEventListener("click",()=>{
        const dogs= document.querySelectorAll(".Dog");
        const cats= document.querySelectorAll(".Cat");
        const fishs= document.querySelectorAll(".Fish");

        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i].classList.contains("show")){
                dogs[i].classList.replace("show", "hide");
            } else {
                dogs[i].classList.add("hide");
            }                           
            }

            for (let i = 0; i < cats.length; i++) {
                if (cats[i].classList.contains("hide")){
                    cats[i].classList.replace("hide", "show");
                } else {
                    cats[i].classList.add("show");
                }                           
                }
           

            for (let i = 0; i < fishs.length; i++) {
                if (fishs[i].classList.contains("show")){
                    fishs[i].classList.replace("show", "hide");
                } else {
                    fishs[i].classList.add("hide");
                }                           
                }   
            })

    fish.addEventListener("click",()=>{
        const dogs= document.querySelectorAll(".Dog");
        const cats= document.querySelectorAll(".Cat");
        const fishs= document.querySelectorAll(".Fish");

        for (let i = 0; i < dogs.length; i++) {
            if (dogs[i].classList.contains("show")){
                dogs[i].classList.replace("show", "hide");
            } else {
                dogs[i].classList.add("hide");
            }                           
            }

            for (let i = 0; i < cats.length; i++) {
                if (cats[i].classList.contains("show")){
                    cats[i].classList.replace("show", "hide");
                } else {
                    cats[i].classList.add("hide");
                }                           
                }
           

            for (let i = 0; i < fishs.length; i++) {
                if (fishs[i].classList.contains("hide")){
                    fishs[i].classList.replace("hide", "show");
                } else {
                    fishs[i].classList.add("show");
                }                           
                }   
            })    
    
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

