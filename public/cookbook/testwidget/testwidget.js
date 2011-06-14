steal.plugins(
		'jquery/controller',
		'jquery/view/ejs',
		'jquery/controller/view' )
.then(function($) {
	
$.Controller.extend( "Cookbook.Testwidget",
{
	// Static
},
{
	// Prototypes
	init : function() {
		this.element.html( this.view( this.options ) );
	},

	".testlink click" : function( el ) {
		alert( "here!" );
	}
});	
	
});