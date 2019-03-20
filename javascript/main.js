document.addEventListener('DOMContentLoaded',()=>{
    // wrapper animation 
anime.timeline({
    targets:'.welcome',
    easing:'easeOutExpo',
})
.add({
    width:'100vw',
    opacity:1,
    duration:1200,
})
.add({
    delay:2700,
    translateX:'100vw',
    duration:1500,
    complete:function(){
        document.querySelector('.welcome').remove();
    },
}),

anime({
    targets:'.heading',
    delay:400,
    opacity: 1,
    duraction:1800,
    translateY:['-30px','0px'],
    easing:'easeOutExpo',
})
anime({
    targets:'.sub-heading',
    delay:600,
    opacity: 1,
    duraction:1800,
    translateY:['-30px','0px'],
    easing:'easeOutExpo', 
})
//loader wrapper animation
anime({
    targets:'.loader-wrapper',
    opacity:1,
    easing:'easeOutExpo',
    duration:1800,
    delay:1500,

})
//loader animation
anime({
    targets:'.loader',
    opacity:1,
    easing:'easeOutExpo',
    duration:2300,
    delay:2000,
    width:['0%','100%']

});

anime({
    targets: '.social-icons li',
    opacity:1,
  translateY:['30px','0px'],
    easing: 'spring(1, 80, 10, 0)',
    duration:5000,
    delay:anime.stagger(600,{start:5000}),
  });






})


