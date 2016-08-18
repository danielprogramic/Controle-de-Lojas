'use strict';
//-------------------------------------------------------------------------------------------------------------------------------------------
app.controller('PermissaoCtrl', ['$scope', '$q', '$timeout', 'UsersFactory', 'SESSION_VALIDATION', '$location','$rootScope',
  function ($scope,  $q , $timeout , UsersFactory, SESSION_VALIDATION, $location, $rootScope) {

    $rootScope.$storage.route_start = '/permissaoperfil';
    SESSION_VALIDATION.validacao();
     //SESSION_VALIDATION.validacao();
    //alert("Permissao");
   //alert("DADADA"+ $rootScope.$storage.session_start);
    /* callback for ng-click 'createNewUser': */
  //---CONSULTA DADOS DE GRUPOS---
  //alert("DADDA");
      //---CONSULTA DADOS DE GRUPOS---
      //------------------------------------------------------------------------------------------------------
       var simulateAjax;
       simulateAjax = function(result) {
       var deferred, fn;
       deferred = $q.defer();
       fn = function() {
       
       return deferred.resolve(result);
       };
       $timeout(fn, 500);
       return deferred.promise;
       };
       var lista = ['Administrador', 'Gerente', 'Sub-Gerente', 'Funcionário'];
       simulateAjax(lista).then(function(result) {
       return $scope.optionsFromQuery = lista;
       
       });
       
       $scope.$watch('woo', function(empty) {
        if($scope.woo != undefined ){
         alert("Resultado do Select: "+  $scope.woo);
        }
       });
       $scope.directiveOptions = {
       no_results_text: "NÃO EXISTE"
       };
  //------------------------------------------------------------DADOS DE BOTÕES---------------------------------------
    $scope.salvardadosperfil = function () {
	alert("SALVAR DADOS PERFIL");
     //UsersFactory.create($scope.user , function success() {}, function err(data) {alert('Dados Não Incluidos' + data)});
     //$location.path('/listausuarios');
    }
     $scope.perfilcreate = function () {
      $location.path('/criarperfil');
    };

  }]);
//----------------------------------PERFIL********************
//--------PERFIL CREATE--------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
app.controller('PerfilCreaCtrl', ['$scope', '$q', '$timeout', 'UsersFactory', 'SESSION_VALIDATION', '$location','$rootScope',
  function ($scope,  $q , $timeout , UsersFactory, SESSION_VALIDATION, $location, $rootScope) {

    $rootScope.$storage.route_start = '/criarperfil';
    SESSION_VALIDATION.validacao();
    //---------------------------------------
      $scope.sairperfil = function () {
      $location.path('/permissaoperfil');
    };
    //---------------------------------------
      $scope.editarperfil = function () {
      $location.path('/editarperfil');
    };


  }]);


//--------PERFIL EDITAR--------------------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------
app.controller('PerfilEditarCtrl', ['$scope', '$q', '$timeout', 'UsersFactory', 'SESSION_VALIDATION', '$location','$rootScope',
  function ($scope,  $q , $timeout , UsersFactory, SESSION_VALIDATION, $location, $rootScope) {

    $rootScope.$storage.route_start = '/editarperfil';
    SESSION_VALIDATION.validacao();
    //---------------------------------------
      $scope.sairperfil = function () {
      $location.path('/criarperfil');
    };


  }]);
