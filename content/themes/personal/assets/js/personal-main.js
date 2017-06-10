/*
*	MAIN JS FILE for Personal Ghost Theme
*
*	Here you can add custom functionality, 
*	if you need help don't hesitate to ask for it
*	at aftertype.com/community
*
*	Require.js is used for performance optimization,
*	call the required scripts on context
*	and execute Aftertype Services.
*/

window.GhostURL = document.body.getAttribute('data-ghost_url')

requirejs.config({
	paths: {
		fluidvids: 	'https://cdn.aftertype.com/vendor/fluidvids/latest.min',
		velocity: 	'https://cdn.aftertype.com/vendor/velocityjs/latest.min',
		velocityUI: 'https://cdn.aftertype.com/vendor/velocityjs/latest.ui.min',
		prettify: 	'https://cdn.aftertype.com/vendor/prettify/prettify.min',
		ATassistant: 'https://cdn.aftertype.com/js/assistant.min'
	}
});


requirejs(
[
	'fluidvids',
	'velocity',
	'prettify',
	'ATassistant'
],
function(fluidvids){

// ===============================
// REQUIRE DEPENDANTS
// ===============================
require(['velocityUI'])

// ===============================
// INIT CALLS & HELPERS
// ===============================
fluidvids.init({
	selector: ['iframe', 'object'], // runs querySelectorAll()
	players: ['www.youtube.com', 'player.vimeo.com'] // players to support
});

// ===============================
// PRETTYPRINT CODE BLOCKS
// ===============================
var preBlocks = document.querySelectorAll('pre');

for (var i = 0; i < preBlocks.length; i++) {
	preBlocks[i].classList.add('prettyprint');
}

prettyPrint();

});