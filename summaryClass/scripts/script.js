// const posts = [
//     {
//         title: "My first title",
//         descr: "My first descr",
//         likes: 100
//     },
//     {
//         title: "My second title",
//         descr: "My second descr",
//         likes: 50
//     }, 
//     {
//         title: "My third title",
//         descr: "My third descr",
//         likes: 120
//     }
// ]
// posts.forEach(function(post){
//     //console.log(post)
//     if (post.likes >= 70) {
//         console.log(`Заголовок: ${post.title}, Описание: ${post.descr}`)
//     }
    
//}) 
 //const item = document.querySelector(".item")
// item.addEventListener("click" , function(){
//     console.log("click")
// })

// function getRandomNumber() {
//     const randomNumber = Math.floor(Math.random() * 256) // 0 - 256
//     return randomNumber; 
// }

// item.addEventListener("click", function() {
//     item.style.backgroundColor = `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})` // rgb(100, 105, 45)
// })

// const item = document.querySelector(".item")
// item.addEventListener("mouseover", function() {
//     item.classList.add("mouseover");
// })


// item.addEventListener("mouseout", function() {
//     item.classList.remove("mouseout")
// })
const form = document.querySelector(".form")
const name = document.querySelector('.user-name');
    const address = document.querySelector('.user-address');
    const age = document.querySelector('.user-age');

form.addEventListener("submit", function(event) {
    event.preventDefault() 
    
    

    console.log(`Имя: ${name.value}`);
    console.log(`Адрес: ${address.value}`);
    console.log(`Возраст: ${age.value}`);

    console.log(event.target[0].value. event.target[1], event.target[2])
});

 





