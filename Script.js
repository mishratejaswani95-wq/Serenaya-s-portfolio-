/*==========================================
    PAGE FADE-IN
==========================================*/

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});


/*==========================================
    PAGE TRANSITIONS
==========================================*/

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", function(e){

        const destination = this.getAttribute("href");

        if(
            destination.startsWith("#") ||
            destination.startsWith("http")
        ){
            return;
        }

        e.preventDefault();

        document.body.classList.remove("loaded");

        setTimeout(() => {

            window.location.href = destination;

        },400);

    });

});


/*==========================================
    CUSTOM CURSOR
==========================================*/

const cursor = document.querySelector(".cursor");

if(cursor){

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

const hoverItems = document.querySelectorAll(
"a, button, .card, .achievement-card, img"
);

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});

}


/*==========================================
    NAVBAR SHADOW
==========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 15){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});


/*==========================================
    PROFILE IMAGE FLOAT
==========================================*/

const profile = document.querySelector(".hero-image img");

if(profile){

let angle = 0;

function animate(){

    angle += 0.015;

    profile.style.transform =

    `translateY(${Math.sin(angle)*8}px)
     rotate(${Math.sin(angle)}deg)`;

    requestAnimationFrame(animate);

}

animate();

}


/*==========================================
    TULIP SWAY
==========================================*/

const flowers = document.querySelectorAll(".corner");

flowers.forEach((flower,index)=>{

    flower.animate([

        {

            transform:"rotate(-2deg)"

        },

        {

            transform:"rotate(2deg)"

        },

        {

            transform:"rotate(-2deg)"

        }

    ],{

        duration:5000 + index*1000,

        iterations:Infinity,

        easing:"ease-in-out"

    });

});


/*==========================================
    CARD TILT
==========================================*/

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY =

        (x - rect.width/2)/18;

        const rotateX =

        -(y - rect.height/2)/18;

        card.style.transform =

        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/*==========================================
    ACHIEVEMENT CARDS
==========================================*/

document.querySelectorAll(".achievement-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform =

        "translateY(-10px) rotate(-1deg)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =

        "translateY(0) rotate(0deg)";

    });

});


/*==========================================
    BUTTON RIPPLE
==========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

const radius=diameter/2;

circle.style.width=

circle.style.height=

`${diameter}px`;

circle.style.left=

`${e.clientX-this.offsetLeft-radius}px`;

circle.style.top=

`${e.clientY-this.offsetTop-radius}px`;

circle.classList.add("ripple");

const ripple=this.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});
