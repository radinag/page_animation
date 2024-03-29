const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");

const timeline = new TimelineMax();

timeline.fromTo(
    hero, 
    1, 
    {height: "0%"}, 
    {height:"80%", ease: Power2.easeOut}
    ).fromTo(
        hero,
        1.2, 
        {width: "100%"}, 
        {width: "80%"}
    ).fromTo(
        slider,
        1.2,
        {x: "-100%"},
        {x: "0%", ease: Power2.easeOut}, 
        "-=1.2"
    )
    .fromTo(
        logo,
        0.5,
        {opaity: 0, x: 30},
        {opacity: 1, x: 0}, 
        "-=0.3"
    )
    .fromTo(
        hamburger,
        0.5,
        {opaity: 0, x: 30},
        {opacity: 1, x: 0}, 
        "-=0.3"
    )
    .fromTo(
        headline,
        0.5,
        {opaity: 0, x: 30},
        {opacity: 1, x: 0}, 
        "-=0.5"
    );
