// Header tagg

let Menubtn = document.getElementById('Menubtn')

Menubtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing effect
let typed = new Typed ('.auto-input',{
    strings: ['Front-End Developer!','Freelancer!','Programmer!'],
    typeSpeed: 60,
    backSpeed: 70,
    loop:true,
    

})

// Header tagg end

// project tag start

let loadMoreBtn = document.querySelector("#load-more");
let currentIte = 3;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll(".container .box-container .box")];
    for(var i =currentIte; i < currentIte + 3; i++){
        boxes[i].style.display = "inline-block";
    }
    currentIte += 3;

    if(currentIte>= boxes.length){
        loadMoreBtn.style.display = "none";
    }
}

