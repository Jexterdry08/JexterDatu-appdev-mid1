alert("Hello");
alert("I have the result from jquery coding")
 
// 1st step - setting the event to where should the animation will take effect.
 
// selecting the container and card to be animated.
const card = $('.card');
const container = $('.container');
 
// 2nd step - Animation takes effect according to the movement of the mouse/cursor.
 
// My analysis to this formula is, as the cursor move to X axis, the whole card will move according to where the cursor and the movement will be limited by 20% to prevent flipping.
// Likewise to how the Y axis should behave. 
 
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});
 
// 3rd step - Transforming the card when the cursor entered the container or card. 
container.mouseenter(function(e) {
    card.css('transform', 'none');
 
    // 
 // The assignment here is changing the vanilla js to jquery that is why I used dollar sign($).
 //this selects the classes to be also transform upon the movement of the cursor.
  
    $('.photo img').css('transform', 'translateZ(50px)');
    $('.title').css('transform', 'translateZ(50px)');
    $('.social').css('transform', 'translateZ(50px)');
    $('.info h4').css('transform', 'translateZ(50px)');
    $('.profile').css('transform', 'translateZ(50px)');
  });
 
// 4th step - withdrawing the cursor from the card container should stop the animation.
 
// the "ease" effect will give all the classes to eventually stop.
 
container.on('mouseleave', e => {
    card.css('transform', "all 0.5s ease");
    card.css('transform', `rotateY(0deg) rotateX(0deg)`);
});


//but first, I reprogram the HTML and CSS to replace the profile picture and the name of info. 