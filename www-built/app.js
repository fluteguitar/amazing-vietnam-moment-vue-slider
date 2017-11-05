define('app/config',[],function () {
    return {
	imageDir: '../../media/images/'
    };
});

define('app/messages',[],function () {
    return {
        getHello: function () {
            return 'Hello World';
        }
    };
});

define('print',[],function () {
    return function print(msg) {
        console.log(msg);
    };
});

define('app/main',['require','./config','./messages','print'],function (require) { 
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

// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);

define("app", function(){});

