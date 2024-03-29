import avatar1 from './images/avatar-vangogh.jpg';
import avatar2 from './images/avatar-courbet.jpg';
import avatar3 from './images/avatar-ducreux.jpg';
import post1 from './images/post-vangogh.jpg';
import post2 from './images/post-courbet.jpg';
import post3 from './images/post-ducreux.jpg';
import heart from './images/icon-heart.png';
import comment from './images/icon-comment.png';
import dm from './images/icon-dm.png';
import redHeart from './images/red-heart.png';
 

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: avatar1,
        post: post1,
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: avatar2,
        post: post2,
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: avatar3,
        post: post3,
        comment: "gm friends! which coin are YOU stacking up today?? \npost below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("all-posts");

function postElements() { /*...*/
    
    for (let i = 0; i < posts.length; i++) {
       
        postsEl.innerHTML += `<section class="container flex">
                <img src="${posts[i].avatar}" class="img-round avatar">
                <span>
                    <h1>${posts[i].name}</h2>
                    <p>${posts[i].location}</p>
                </span>
            </section>
            
            <section class="container" >
                <img src="${posts[i].post}" class="img-post" alt="image of ${posts[i].post}>
            </section>
            
            <section class="container">
                <div class="flex space">
                    <input id="btn-heart" type="button" class="icon heart" alt="Submit" role="icon" aria-label="a icon heart like button">
                    <img src="${comment}" class="icon">
                    <img src="${dm}" class="icon">
                </div>
                <h2 class="space likes">${posts[i].likes} likes</h2>
                <p class="padding-btm space"><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
            </section>`;
            
    };

    let numberOfLikesElement = document.getElementsByClassName("likes");
    
    posts.forEach((post, index) => {

    let allInputs = document.querySelectorAll("input");
        allInputs[index].addEventListener("click", function (e) {
            e.preventDefault();

            const btnHeart = document.getElementsByClassName("heart");  
            // btnHeart[index].classList.toggle("toggleHeart");
            btnHeart[index].style = `background: url('${redHeart}') center / cover no-repeat; height: 30px`

            let counts = post.likes + 1;

            numberOfLikesElement[index].innerHTML = `${counts} likes`;
    
        });
    })
  
};

document.onload = postElements()


// const postEl = document.getElementById("post-el")

// const users = posts.map((post, index) => {
//     let section = document.createElement("section");
//     section.className = "container flex";
//     section.innerHTML =` <img src="${post.avatar}" class="img-round">
//                 <span>
//                     <h1>${post.name}</h2>
//                     <p>${post.location}</p>
//                 </span>`;
    
//      postEl.append(section);
     
//      let section2 = document.createElement("section");
//      section2.className = "container";
//      section2.innerHTML = `<img src="${post.post}" class="img-post">`;
    
//     postEl.appendChild(section2);
    
    // let section3 = document.createElement("section");
    // section3.className = "container";
   
    // section3.innerHTML = `
    //             <div class="flex space">
    //                 <input id="btn-heart" type="image" src="images/icon-heart.png" class="icon heart" alt="Submit">
    //                 <img src="images/icon-comment.png" class="icon">
    //                 <img src="images/icon-dm.png" class="icon">
    //             </div>
    //             <h2 class="space likes">${post.likes} likes</h2>
    //             <p class="padding-btm space"><span class="bold">${post.username} </span>${post.comment}</p>`;
            
    //  postEl.append(section3);

    
    // const btnHeart = document.getElementById("btn-heart");
//     let likesEl = document.getElementsByClassName("likes");
    
//    let counts = post.likes

//     let allInputs = document.querySelectorAll("input");
//     allInputs[index].addEventListener("click", function(e){
       
//         counts = counts + 1
        
//         likesEl[index].innerHTML = `${counts} likes`;
    
//     });
  
// });

    

// //loads function when page loads
// window.onload('load', () => { 
//     return users;
// })