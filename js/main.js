$(document).ready(function(){
// Get instance of the plugin
var instance = $("container-vid").data("vide");

// Get video element of the background. Do what you want.
// instance.getVideoObject();

// Resize video background.
// It calls automatically, if window resize (or element, if you will use something like https://github.com/cowboy/jquery-resize).
instance.resize();
// Destroy plugin instance
// instance.destroy();
};