'use strict';
var app = angular.module('ngdemoApp.controllers', ['ngStorage','ngRoute','localytics.directives']);


// Clear browser cache (in development mode)
app.run(function ($rootScope, $templateCache, $location, $localStorage, Autenticacao, SESSION_VALIDATION) {
//---------------------------------


 //$rootScope.menuValor = false;
 //$rootScope.loginValor = true;
 //$rootScope.acesso = [ true, [false, false, false, false, false]];
 //controle de acesso dos botões*******************/
 $rootScope.controledeacesso = { login : true, username : false, acessos: [false, false, false, false] } 
 /*lista salva das opções */
 $rootScope.acessoWebservice = [true, true, true, true];
 $rootScope.username = '';

 //--------------------------------
 $rootScope.$on('$viewContentLoaded', function () {
  $templateCache.removeAll();
  });
 //---------------------------------------
  $rootScope.$storage = $localStorage.$default({
          session_start: '',
          route_start:'',
          acesso_start:''
  });
  //-----------------------------------------
 
  //------VERIFICA SE A SESSÃO FOI CRIADA OU NÃO-------------------------------------------------
    if($rootScope.$storage.session_start != '' &&  $rootScope.$storage.session_start != undefined){
         Autenticacao.login();
         $location.path($rootScope.$storage.route_start);
         //alert($rootScope.$storage.route_start);
         //$rootScope.menuValor = true;
         //alert("Esta logado" + $rootScope.$storage.acesso_start);
         //alert("DANIEL DOUGLAS MACHADO"+$rootScope.$storage.acesso_start);
          $rootScope.$storage.acesso_start = $rootScope.acessoWebservice;
          $rootScope.controledeacesso.acessos = $rootScope.$storage.acesso_start;
          $rootScope.controledeacesso.username = true;
         $rootScope.controledeacesso.login = false;
         //$rootScope.loginValor = false;
         $rootScope.username = $rootScope.$storage.session_start;
         }else{
         //alert("Esta deslogado" + $rootScope.$storage.acesso_start);
         //$rootScope.menuValor = false;
         $rootScope.controledeacesso.acessos = [false, false, false, false];
         $rootScope.controledeacesso.username = false;
        $rootScope.controledeacesso.login = true;

         //$rootScope.loginValor = true;
         $location.path('/login');
         }
  //---------------------------------------
  //alert("DADADA"+ $rootScope.$storage.session_start);
  //alert("ROUTE START_______"+ $rootScope.$storage.route_start);
  //alert("AUTENTICAÇÃO START_______"+ $rootScope.$storage.autenticacao_start);
 
   $rootScope.sair = function() {
	 //alert("SAIR");
	 delete $rootScope.$storage.session_start;
   delete $rootScope.$storage.acesso_start;
   Autenticacao.logout();
   
   //
	 SESSION_VALIDATION.validacao();
    App.fechou();
      
    };

});

//ESTE MODULO TEM COMO FUNÇÃO VERIFICAR SE O USUÁRIO ESTA LOGADO NA SESSÃO OU NÃO 
//SESSISION_VALIDATION : É REFERENCIADO NOS MODULOS CRIADOS NOS CONTROLES {{}} ****/
app.factory('SESSION_VALIDATION', function ($rootScope, $location, $localStorage, Autenticacao) {
    
    return {
      validacao: function () {
       //alert("ENTROU NO___"+$rootScope.$storage.session_start);
       //-----------------
       if($rootScope.$storage.session_start != '' &&  $rootScope.$storage.session_start != undefined){
       Autenticacao.login();
       $location.path($rootScope.$storage.route_start);
       //$rootScope.menuValor = true;
       //$rootScope.loginValor = false;
       $rootScope.controledeacesso.username = true;
       $rootScope.controledeacesso.login = false;
       $rootScope.controledeacesso.acessos = $rootScope.$storage.acesso_start;
       $rootScope.username = $rootScope.$storage.session_start;
         }else{
       // alert("SAIU DAQUI");
       //
       $rootScope.controledeacesso.username = false;
       $rootScope.controledeacesso.login = true;
       $rootScope.controledeacesso.acessos = [false, false, false, false];
       //$rootScope.menuValor = false;
       //$rootScope.loginValor = true;
       $location.path('/login');
         }
       //--------------------
      }
    };

});

//------------------------------------------
//------------------------------LOGIN ACESSO PRINCIPAL
app.controller('DummyCtrl', ['$scope', 'DummyFactory','Autenticacao', 'SESSION_VALIDATION','$location','$rootScope',  function ($scope, DummyFactory , Autenticacao , SESSION_VALIDATION, $location, $rootScope) { 
  //$('.menu').hide();
  //alert("Entrou Tela Login");
   /*

    $scope.bla = 'Entrou no Escopo da Coisa';
    DummyFactory.query({}, function (data) {
  //alert("ENTROU AQUI__________"+data);
    $scope.foo = data;
  })
*/
//$scope.menuValor = true;
 //$scope.$emit('handleEmit', {menuValor: true});
 SESSION_VALIDATION.validacao();
 //$rootScope.$storage.route_start = '/login';

//-----------------------------------------------------------------------

 $scope.checkLogin = function () {
    //$location.path('/criarusuario');
  
  //alert("DADAD");
  
  $(".loaderT").show();
  $( "body" ).css('overflow','hidden');
  //$( "body" ).addClass( "loaderT" );
    //$("body").add('<div class="loaderT" ></div>'); 
  
       if($scope.user != undefined){
       Autenticacao.login();
       DummyFactory.query($scope.user , function success(response) {
       //alert('Entrou');
       //console.log("ENTROU"+ response.Login);
       //$rootScope.menuValor = true;
       //$rootScope.$storage.route_start = '/listausuarios';
       //$('#login_id').text(response.Login);
       $(".loaderT").hide();
       $( "body" ).css('overflow','scroll');
       //alert("DANIEL_________" +$scope.menuValor);
       //$rootScope.menuValor = true;
       //$rootScope.loginValor = false;
       $rootScope.$storage.acesso_start = $rootScope.acessoWebservice;
       $rootScope.controledeacesso.username = true;
       $rootScope.controledeacesso.acessos =  $rootScope.acessoWebservice;
       $rootScope.$storage.session_start = response.Login;
       //----------------------------------------
       //-----------------------------------------
       $rootScope.username =  $rootScope.$storage.session_start;
       App.abriu();
       //alert("ROUTE START_______"+ $rootScope.$storage.route_start);
       if($rootScope.$storage.route_start != ''  &&  $rootScope.$storage.route_start != undefined){
       $location.path( $rootScope.$storage.route_start);
       }else{
       $location.path('/listausuarios'); 
       }
      
       //$scope.menuValor = true;
      //alert("DANIEL_________" +$scope.menuValor);
     //$scope.bla = 'Entrou no Escopo da Coisa';
    // logarSistema('detalhesusuario');
  

  }, function err(response) {
     //$( ".loaderT" ).hide();
   $(".loaderT").hide();
  $( "body" ).css('overflow','scroll');
    alert("TESTANDO O ERRO QUE VEM________"+response.status);
  $('.help-inline').text('O usuário ou a senha inseridos estão incorretos. ');
    //$('#feedLogin').modal('show');
    //$('#textoModal').text('Dados não conferem!'); 
    logarSistema('login');
  
    //$location.path('/criarusuario');
    
  });
   }


    };



//----------------------------------------------------------------------------


 //$scope.checkLogin = function () {

    //$location.path('/listausuarios');
  //Autenticacao.login($scope.user);
  //$location.path('/listausuarios');
     //alert("ENTROU");
    //};
    //-----------------------------------------------------
    function logarSistema(e){
      if( e == 'login'){
        $scope.user = undefined; 
      }
      if( e == 'detalhesusuario'){
      $location.path('/dadosdeEntrada');
      }
    }
    //-----------------------------------------------------

}]);
//----------------------------------------------------------------------
//----------------MENU PRINCIPAL 
app.controller('HomeCtrl', ['$scope', 'UsersFactory', 'UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
  function ($scope, UsersFactory, UserFactory, SESSION_VALIDATION, $location, $rootScope) {
    $rootScope.$storage.route_start = '/home';
    SESSION_VALIDATION.validacao();
   // alert("MENU PRINCIPAL");

  }]);

//----------------MENU PRINCIPAL 
app.controller('ErrorCtrl', ['$scope', 'UsersFactory', 'UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
  function ($scope, UsersFactory, UserFactory, SESSION_VALIDATION, $location, $rootScope) {
    $rootScope.$storage.route_start = '/404';
    SESSION_VALIDATION.validacao();
   // alert("MENU PRINCIPAL");

  }]);