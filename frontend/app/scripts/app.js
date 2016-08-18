'use strict';

angular.module('ngdemoApp', [
  'ngdemoApp.services',
  'ngdemoApp.controllers'
  ])
.config(function ($routeProvider, $httpProvider, $locationProvider) {
	/*
<li><a class ="" href="#/criargrupo">Incluir</a></li>
<li><a class ="" href="#/editargrupo">Editar</a></li>
<li><a class ="" href="#/deletegrupo">Deletar</a></li>
    */
//----------------------HOME------------------------------------------------------------------------
$routeProvider.when('/login', {templateUrl: 'views/login.html', controller: 'DummyCtrl'});
$routeProvider.when('/home', {templateUrl: 'views/home.html', controller: 'HomeCtrl'});
$routeProvider.when('/404', {templateUrl: 'views/404.html', controller: 'ErrorCtrl'});
//----------------------UNIDADES
$routeProvider.when('/unidade', {templateUrl: 'views/unidade/unidade.html', controller: 'UnidadeCtrl'});
$routeProvider.when('/criarunidade', {templateUrl: 'views/unidade/unids_creation.html', controller: 'UnidsCreaGrupoCtrl'});
$routeProvider.when('/editarunidade', {templateUrl: 'views/unidade/unids_editar.html', controller: 'UnidsEditarGrupoCtrl'});
//---------------------UNIDADE GRUPO
$routeProvider.when('/grupo', {templateUrl: 'views/grupo/grupo.html', controller: 'GruposCtrl'});
$routeProvider.when('/criargrupo', {templateUrl: 'views/grupo/grupo_creation.html', controller: 'GruposCreaGrupoCtrl'});
$routeProvider.when('/editargrupo', {templateUrl: 'views/grupo/grupo_editar.html', controller: 'GruposEditarGrupoCtrl'})
//----------------------PESSOASACESSO---------------------------------------------------------------
$routeProvider.when('/listausuarios', {templateUrl: 'views/pessoacesso/user-list.html', controller: 'UserListCtrl'});
$routeProvider.when('/detalheusuario/:id', {templateUrl: 'views/pessoacesso/user-detail.html', controller: 'UserDetailCtrl'});
$routeProvider.when('/criarusuario', {templateUrl: 'views/pessoacesso/user-creation.html', controller: 'UserCreationCtrl'});
//----------------------PERMISSÕES---------------------------------------------------------------
$routeProvider.when('/permissaoperfil', {templateUrl: 'views/permissoes/permissoes.html', controller: 'PermissaoCtrl'});
$routeProvider.when('/criarperfil', {templateUrl: 'views/permissoes/perfil_creation.html', controller: 'PerfilCreaCtrl'});
$routeProvider.when('/editarperfil', {templateUrl: 'views/permissoes/perfil_editar.html', controller: 'PerfilEditarCtrl'});

$routeProvider.otherwise({redirectTo: '/login'});
//---------------------------------------------------------------------------------------------------
//$locationProvider.html5Mode(true).hashPrefix('!');
});







