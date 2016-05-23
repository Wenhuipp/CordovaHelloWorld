/**
 * cordova plugin
 * Copyright (c) ljx
 *
 */
 (function(cordova){
    var cordovaHelloWorld = function() {

    };  

    cordovaHelloWorld.prototype.startConlose = function (success, fail) {
        return cordova.exec(function (args) {
            success(args);
        }, function (args) {
            fail(args);
        }, 'cordovaHelloWorld', 'startConlose', []);
    };


    cordovaHelloWorld.prototype.startActivity = function (params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'cordovaHelloWorld', 'startActivity', [params]);
    };
 
    window.cordovaHelloWorld = new cordovaHelloWorld();
    
    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.cordovaHelloWorld = window.cordovaHelloWorld;
})(window.PhoneGap || window.Cordova || window.cordova);
