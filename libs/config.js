$(document).on("mobileinit", function(){
	$.mobile.defaultPageTransition = 'none';
});
if(navigator.network && navigator.network.connection.type == Connection.NONE){
	alert('Por favor verifique su conexión de internet e intente nuevamente');
	navigator.app.exitApp();
}
function preloader(){
	$.mobile.loading( 'show', {
		text: 'Espere por favor...',
		textVisible: true,
		theme: 'b',
		html: ""
	});
}
function hidePreloader(){
	setTimeout(function(){
		$.mobile.loading( "hide" );
	},1000);
}
