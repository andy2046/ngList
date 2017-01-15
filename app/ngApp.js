import angular from 'angular';
//import uirouter from 'angular-ui-router';


import ngList from './ngList/ngList.js';


angular.module('app', [
	'ngList'
]);

angular.bootstrap(document, ['app']);