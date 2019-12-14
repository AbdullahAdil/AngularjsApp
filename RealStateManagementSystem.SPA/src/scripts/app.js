'use strict';

var myApp = angular.module("realStateApp",["ngRoute","oc.lazyLoad"]);
myApp.config(function($routeProvider){
    $routeProvider.when("/",
    {
        templateUrl:"src/views/home.html",
        controller:"homeController",
        resolve: {
            homeController: ['$ocLazyLoad', function ($ocLazyLoad) {
               return $ocLazyLoad.load(
                   {
                       files:['src/scripts/home.js','src/style/home.css']
                }
                   );
            }]
         }
    })
})