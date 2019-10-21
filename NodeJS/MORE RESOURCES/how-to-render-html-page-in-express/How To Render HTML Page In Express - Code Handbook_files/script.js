var Banner = Banner || {};


Banner.init = function(){
 Banner.animate();       
};


Banner.animate = function(){
        
    
    var timeline = new TimelineLite();    
	timeline.timeScale( 1 );
    
    
    timeline.to('#eco_std', 0.0, {left:37.5, autoAlpha:0.3});
    timeline.to('#auto_std', 0.0, {left:117.5, autoAlpha:0.3});
    timeline.to('#boost_std', 0.0, {left:197.5, autoAlpha:0.3});
    timeline.to('#eco_alt', 0.0, {left:317.5, autoAlpha:0.3});
    timeline.to('#auto_alt', 0.0, {left:317.5, autoAlpha:0.3});
    
    
    timeline.to('#logo2', 0.25, {autoAlpha:1}, "init");    
    timeline.to('#ss_start', 0.25, {autoAlpha:1}, "init");
    
    
    timeline.set({},{},"+=0.1");
    
    
    timeline.to('#ss_middle', 0.0, {autoAlpha:1});    
    timeline.to('#ss_middle', 1.3, {x:-2560, ease:SteppedEase.config(16), repeat:0});    
    timeline.to('#ss_end', 0.05, {autoAlpha:1});
    
    
    timeline.set({},{},"+=0.35");
    
    
    timeline.to('#white', 0.5, {autoAlpha:1});

    
    //timeline.to('#spritetop', 0.0, {autoAlpha:0});
    //timeline.to('#spritebottom', 0.0, {autoAlpha:0});    
    timeline.to('#logo2', 0.0, {autoAlpha:0});
    timeline.to('#ss_start', 0.0, {autoAlpha:0});
    timeline.to('#ss_middle', 0.0, {autoAlpha:0});
    timeline.to('#ss_end', 0.0, {autoAlpha:0});    
    timeline.to('#grad', 0.0, {autoAlpha:1});
    
    
    timeline.to('#slide', 0.0, {scale:1.15, y:20});
    timeline.to('#icons', 0.0, {scale:0.55, left:-70, y:22});
    
    
    timeline.set({},{},"+=0.2");
    
    
    timeline.to('#white', 0.75, {autoAlpha:0}, "b");    
    timeline.to('#black', 0.2, {autoAlpha:1}, "b");
    timeline.to('#icons', 0.2, {autoAlpha:1}, "b");    
    timeline.to('#logo1', 0.5, {autoAlpha:1}, "b");
    timeline.to('#slide', 0.0, {autoAlpha:1}, "b");    
    timeline.fromTo('#slide', 2.25, {left:-1050}, {left:-500, ease: Power2.easeInOut}, "b"); 
    
    
    timeline.to('#slide', 0.5, {scale:1.5, left:-530, top:-30}, "mode1");    
    timeline.to('#img1', 0.25, {autoAlpha:1, delay:0.4}, "mode1");    
    timeline.to('#txt1', 0.25, {autoAlpha:1, delay:0.3}, "mode1");
    timeline.to('#eco_std', 0.5, {left:18.75, ease: Power1.easeIn}, 'mode1');
    timeline.to('#boost_std', 0.5, {left:216.25, ease: Power1.easeIn}, 'mode1');
    timeline.to('#auto_std', 0.5, {autoAlpha:1, scale:1.6, ease: Power1.easeIn}, 'mode1');
    
    timeline.set({},{},"+=1.25");
    
    
    timeline.to('#img1', 0.0, {autoAlpha:0});
    
    
    timeline.to('#slide', 0.5, {scale:1.75, left:-50, top:0, ease: Power1.easeInOut}, "mode2");    
    timeline.to('#txt1', 0.25, {autoAlpha:0, delay:0.25}, "mode2");
    timeline.to('#img2', 0.25, {autoAlpha:1, delay:0.4}, "mode2");
    timeline.to('#txt2', 0.25, {autoAlpha:1, delay:0.4}, "mode2");    
    timeline.to('#eco_std', 0.5, {left:-61.25, ease: Power1.easeIn}, 'mode2');
    timeline.to('#auto_std', 0.5, {scale:1.0, left:18.75, ease: Power1.easeIn, autoAlpha:0.3}, 'mode2');
    timeline.to('#boost_std', 0.5, {autoAlpha:1, left:117.5, ease: Power1.easeIn, scale:1.6}, 'mode2');
    timeline.to('#eco_alt', 0.5, {left:216.25, ease: Power1.easeIn}, 'mode2');
    
    timeline.set({},{},"+=1.25");
    
    
    timeline.to('#img2', 0.0, {autoAlpha:0});
    
    
    timeline.to('#slide', 0.75, {scale:1.1, left:-990, top:60, ease: Power1.easeInOut}, "mode3");
    timeline.to('#txt2', 0.25, {autoAlpha:0, delay:0.5}, "mode3");        
    timeline.to('#img3', 0.25, {autoAlpha:1, delay:0.7}, "mode3");    
    timeline.to('#txt3', 0.25, {autoAlpha:1, delay:0.7}, "mode3");
     timeline.to('#auto_std', 0.5, {left:-61.25, ease: Power1.easeIn}, 'mode3');
    timeline.to('#boost_std', 0.5, {left:18.75, ease: Power1.easeIn, autoAlpha:0.3, scale:1}, 'mode3');
    timeline.to('#eco_alt', 0.5, {left:117.5, ease: Power1.easeIn, autoAlpha:1, scale:1.6}, 'mode3');
    timeline.to('#auto_alt', 0.5, {left:216.25, ease: Power1.easeIn}, 'mode3');
    
    
    timeline.set({},{},"+=1.75");
    
    
    timeline.to('#txt3', 0.25, {autoAlpha:0}, "a");    
    timeline.to('#white', 0.5, {autoAlpha:1}, "a");    
    timeline.to('#icons', 0.5, {autoAlpha:0}, "a");
    // timeline.to('#black', 0.2, {autoAlpha:0}, "a");
    
    
    timeline.to('#end', 0.0, {autoAlpha:1});
    
    
    timeline.set({},{},"+=0.2");
    
    
    timeline.to('#white', 1.1, {autoAlpha:0}, "r1");    
    timeline.to('#claim', 0.5, {autoAlpha:1}, "r1");    
    timeline.to('#cta', 0.5, {autoAlpha:1, delay:1.25}, "r1");
    
    
    timeline.to('#t1', 0.45, {y:-180, delay:0.0, ease: Power2.easeOut}, 'r1');
    timeline.to('#t2', 0.55, {y:-181, delay:0.1, ease: Power2.easeOut}, 'r1');
    timeline.to('#t3', 0.65, {y:-182, delay:0.2, ease: Power2.easeOut}, 'r1');
    // timeline.to('#t4', 0.75, {y:-183, delay:0.3, ease: Power2.easeOut}, 'r1');
    
    //timeline.seek(9.0);  
	console.log(timeline.duration());	
}
