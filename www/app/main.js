define(function (require) { 
    const config = require('./config');
    var messages = require('./messages');
    var print = require('print');

    const genHTMLByStyleCode = styleCode => {
	switch (styleCode) {
	case config.STYLE_CODE_RESPONSIVE:	    
	    return 'style="width:auto;height:auto;"';
	default:
	    return 'style="display:block;margin:auto;"';
	}
    };
    
    const generateImageElement = (index, styleCode) => {
	
	// return '<img src=' + '"' +
	//     config.imageDir +
	//     index + '.jpg" ' +
	//     '>' ;
	// return '<div class="img1"></div>';
	return "";
    };
    
    const buildSlideMarkup = (count) => {
	let slideMarkup = '';
	for (var i = 1; i <= count; i++) {
  	    slideMarkup +=
		'<slide>' +
		generateImageElement(i, config.STYLE_CODE_RESPONSIVE) +
		'</slide>';
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
	template: '<div id="background"><carousel>' + buildSlideMarkup(4) + '</carousel></div>'
    });

    // Load any app-specific modules
    // with a relative require call,
    // like:
    print(messages.getHello());
});
