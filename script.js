let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span =document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity ="1";

let changeText =() =>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80)
    });

    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i *80);
    });

currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex +1;
};

changeText();
setInterval(changeText,3000)




// circle skills //////////////////////////////

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i= 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll(".points");
    for(let i=0; i<percent ; i++){
        pointsMarked[i].classList.add("marked");
    }

})


// mix it up portfolio section

var mixer = mixitup('.portfolio-gallery');


// active menu-------------------------

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY +97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar-------------------------

const header = document.querySelector("header");
 window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
 })

// Toggle icon navbar-------------------------
  let menuIcon = document.querySelector("#menu-icon");
  let navlist = document.querySelector(".navlist");

  menuIcon.onclick =()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  }


  window.onscroll =()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
  }


  // Toggle icon navbar-------------------------

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
  });

  const scrollScale = document.querySelectorAll(".scroll-scale");
  scrollScale.forEach((el)=>observer.observe(el));

  const scrollBottom = document.querySelectorAll(".scroll-bottom");
  scrollBottom.forEach((el)=>observer.observe(el));

  const scrollTop = document.querySelectorAll(".scroll-top");
  scrollTop.forEach((el)=>observer.observe(el));




//   submit button alert--------------

// let signinBtn = document.getElementById("submit-btn");

// let userData = JSON.parse(localStorage.getItem("userFormdata")) || [];




// let NameArr = [];

// signinBtn.addEventListener("click",(e)=>{
// e.preventDefault();

//     let logName = document.getElementById("name").value;
//     let logEmail = document.getElementById("email").value;
//     let logPhone = document.getElementById("phone").value;
//     let addRess =  document.getElementById("adress").value;
//     let sendMsg =  document.getElementById("msg").value;
    

//     var nameRegex = /^[A-Za-z\s'-]+$/;
//     //var emailRegex = /^\S+@\S+\.\S+$/;
//     var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     var mobileRegex = /^\d{10}$/;
//     var adressRegex = /^[A-Za-z0-9\s,.'-]+$/;


//     let userFormData = {
//         logName, logEmail, logPhone, addRess, sendMsg
//     }
// console.log(userFormData);


//     let isVaild = null ;
   

//     // loop on object and validate the user data 

//     for(let key in userFormData){
//         if( logName === "" || logName != nameRegex || logEmail==="" ||logEmail != emailRegex || logPhone ==="" || logPhone != mobileRegex || addRess==="" || addRess != adressRegex || sendMsg ==="" ){
//             alert (`Please enter valid Cardentials `);
//             break;
//         }else{
//             alert(`Thanks For your Valuable time, Your Message Has been sent to Shankar Bhore`);
//             isVaild = true ;
//             break;
//         }
        
//     }


//     userData.push (userFormData);


//   isVaild ?  localStorage.setItem ("userFormdata" , JSON.stringify(userData)) : "";
   


//     // for(let i=0;i<userData.length;i++){
//     //     alName =userData[i].firstName
//     //     if(userData[i].email==logEmail){
//     //         if(userData[i].password==logPass){
//     //             if(userData[i].phone==logPhone){
//     //                 if(userData[i].adress==addRess){
//     //                     if(userData[i].msg==sendMsg){
//     //                         isVaild=true
//     //                     }
//     //                 }
//     //             }
               
//     //         }
//     //     }
//     // }

//     // if(isVaild){
//     //     alert(`${alName} Thanks for your time, You'r Message has been sent to Shankar Bhore `);
//     //     NameArr.push(alName)
//     //     localStorage.setItem("Name" , JSON.stringify(NameArr))
//     //     //window.location.href = "./index.html"
//     // }else{
//     //     alert(`Sorry Check Your Details Again`)
//     // }
         
// })





// Contact Form Validation

function validateForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || mobile === '' || address === '' || message === '') {
        alert  (`All fields are required`);
        return false;
    }

    var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.match(emailPattern)) {
        //document.getElementById('error-msg').textContent = 'Invalid email address';
        alert (`Invalid Email id `);
        return false;
    }

    var mobilePattern = /^\d{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert (`Invalid mobile number `);
        return false;
    }



    // If all validations pass, the form is valid
    alert(` Your Message Has been sent succesfully to Shankar Bhore they will connect with you "ASAP"
    
Thank You  !!`)
    return true;
   
    ;
}




// Github status

document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://api.github.com/users/shankarb18"; 
    // Replace 'yourusername' with your GitHub username
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
    document.getElementById("repos").textContent = `Repositories: ${data.public_repos}`;
    document.getElementById("stars").textContent = `Stars: ${data.starred_url.length}`;
    document.getElementById("followers").textContent = `Followers: ${data.followers}`;
    })
    .catch(error => console.error("Error fetching GitHub data: ", error));
    });


