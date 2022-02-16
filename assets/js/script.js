let planet = document.querySelector(".planet");
let sub1 = document.querySelector(".planet__sub1");
let sub2 = document.querySelector(".planet__sub2");
let sub3 = document.querySelector(".planet__sub3");
let wave1 = document.querySelector(".wave1");
let wave2 = document.querySelector(".wave2");
let wave3 = document.querySelector(".wave3");


window.addEventListener("mousemove", (e)=>{
    let x = ((window.innerWidth / 2) - e.pageX);
    let y = ((window.innerWidth / 2) - e.pageY);
    planet.style.cssText = `--angle-y: ${((x / 100) * -1) - 20}deg ;
                            --angle-x: ${((y / 100) * -1) + 75}deg ;`;
    sub1.style.transform = `translateX(${((x / 50) * -1)}px) translateY(${((y / 30))}px)`;
    sub2.style.transform = `translateX(${((x / 30))}px) translateY(${((y / 50) * -1)}px)`;
    sub3.style.transform = `translateX(${((x / 50) * -1)}px) translateY(${((y / 30))}px)`;
    wave1.style.transform = `rotate(${(x / 7) * -1}deg)`;
    wave2.style.transform = `rotate(${(x / 8)}deg)`;
    wave3.style.transform = `rotate(${(x / 10) * -1}deg)`;
})