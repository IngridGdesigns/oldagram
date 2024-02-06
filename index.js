const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? \npost below and WAGMI!",
        likes: 152
    }
]

const postEl = document.getElementById("post-el")

function oldagram(){

return posts.map((post, index) => {
    let section = document.createElement("section");
    section.className = "container flex";
    section.innerHTML =` <img src="${post.avatar}" class="img-round">
                <span>
                    <h1>${post.name}</h2>
                    <p>${post.location}</p>
                </span>`;
    
     postEl.append(section);
     
     let section2 = document.createElement("section");
     section2.className = "container";
     section2.innerHTML = `<img src="${post.post}" class="img-post">`;
    
    postEl.append(section2);
    
    let section3 = document.createElement("section");
    section3.className = "container";
   
    section3.innerHTML = `
                <div class="flex space">
                    <input id="btn-heart" type="image" src="images/icon-heart.png" class="icon heart" alt="Submit">
                    <img src="images/icon-comment.png" class="icon">
                    <img src="images/icon-dm.png" class="icon">
                </div>
                <h2 class="space likes">${post.likes} likes</h2>
                <p class="padding-btm space"><span class="bold">${post.username} </span>${post.comment}</p>`;
            
     postEl.append(section3);

    
    const btnHeart = document.getElementById("btn-heart");
    let likesEl = document.getElementsByClassName("likes");
    
   let counts = post.likes

    let allInputs = document.querySelectorAll("input");
    allInputs[index].addEventListener("click", function(e){
       
        counts = counts + 1
        
        likesEl[index].innerHTML = `${counts} likes`;
    
    });
  
});

}

//loads function when page loads
window.addEventListener('load', () => { 
  oldagram()
})
