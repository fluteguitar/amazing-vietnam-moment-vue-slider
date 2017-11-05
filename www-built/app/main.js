define(['require','./config','./messages','print'],function (require) { 
    const config = require('./config');
    var messages = require('./messages');
    var print = require('print');
    
    const generateImageElement = (index) => {
	return '<img src=' + '"' + config.imageDir + index + '.jpg"' ;
    }
    const buildSlideMarkup = (count) => {
	let slideMarkup = '';
	for (var i = 1; i <= count; i++) {
  	    slideMarkup += '<slide>' + generateImageElement(i) + '</slide>';
	}
	console.log(slideMarkup);
	return slideMarkup;
    };

    new Vue({
	el: '#example',
	components: {
  	    'carousel': VueCarousel.Carousel,
	    'slide': VueCarousel.Slide
	},
	template: '<div><carousel>' + buildSlideMarkup(100) + '</carousel></div>'
    });

    // Load any app-specific modules
    // with a relative require call,
    // like:
    print(messages.getHello());
});
