'use strict';

//-------------------------------------------------------------------------------------------------------------------------------------------
app.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
  function ($scope, UsersFactory, UserFactory, SESSION_VALIDATION, $location, $rootScope) {
    $rootScope.$storage.route_start = '/listausuarios';
    SESSION_VALIDATION.validacao();

       /* callback for ng-click 'editUser': */
    $scope.filterUser = function () {
  //alert("Numero que Vem do WEBSERVICE=    " + userId);
 // $scope.users = UsersFactory.query();
    $(".loaderT").show();
    $( "body" ).css('overflow','hidden');
    //----------------------------------
    $scope.users = UsersFactory.query( function success(response) {
    $(".loaderT").hide();
    $( "body" ).css('overflow','scroll');
    },function err(response) {
    alert('Falha na base de dados:');
    });
    };

    /* callback for ng-click 'editUser': */
    $scope.editUser = function (userId) {
	//alert("Numero que Vem do WEBSERVICE=    " + userId);
  $location.path('/detalheusuario/' + userId);
    };

    /* callback for ng-click 'deleteUser': */
    $scope.deleteUser = function (userId) {
	//alert("DELETE USUARIO = " + userId);
      UserFactory.delete({ id: userId }, function success() {}, function err() {alert('errou')});
      $scope.users = UsersFactory.query();
    };

    /* callback for ng-click 'createUser': */
    $scope.createNewUser = function () {
      $location.path('/criarusuario');
    };
    //alert("LISTA DE DADOS ::::::"+ UsersFactory);
    //$scope.users = UsersFactory.query();
  }]);
//-------------------------------------------------------------------------------------------------------------------------------------------
app.controller('UserDetailCtrl', ['$scope',  '$q', '$timeout', '$routeParams', 'UserFactory',  'SESSION_VALIDATION', '$location', '$rootScope',
  function ($scope, $q , $timeout , $routeParams, UserFactory, SESSION_VALIDATION, $location, $rootScope) {

    $rootScope.$storage.route_start = '/detalheusuario/'+$routeParams.id;
    SESSION_VALIDATION.validacao();
   //alert("User Liste");
    /* callback for ng-click 'updateUser': */
    
    $scope.updateUser = function () {
      UserFactory.update($scope.user , function success() {}, function err(data) {alert('Não Atualizou' + data)});
     // $location.path('/listausuarios');
    };

    /* callback for ng-click 'cancel': */
    $scope.filtrarpessoa = function () {
      $location.path('/listausuarios');
    };
    //----------------------------------------------------
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
    ///alert("DANIEL MACHADO");
    
    return $scope.optionsFromQuery = lista;
    
    });
    $timeout(function() {
    return $scope.$apply(function() {
    //alert("INSERIR UM DATE");
    $scope.woo = 'Gerente';
    });
    }, 500);
    //---------------------------------------------------
    //$scope.user = UserFactory.show({id: $routeParams.id});
    //-----------------
    $(".loaderT").show();
    $( "body" ).css('overflow','hidden');
    //----------------------------------
    $scope.user = UserFactory.show({id: $routeParams.id}, function success(response) {
    $(".loaderT").hide();
    $( "body" ).css('overflow','scroll');
    },function err(response) {
    $(".loaderT").hide();
    $( "body" ).css('overflow','scroll');
    $location.path('/404');
    });
  //---------------------
  }]);
//-------------------------------------------------------------------------------------------------------------------------------------------
app.controller('UserCreationCtrl', ['$scope', '$q', '$timeout', 'UsersFactory', 'SESSION_VALIDATION', '$location','$rootScope',
  function ($scope,  $q , $timeout , UsersFactory, SESSION_VALIDATION, $location, $rootScope) {

    $rootScope.$storage.route_start = '/criarusuario';
    SESSION_VALIDATION.validacao();
     //SESSION_VALIDATION.validacao();
     //alert("User Liste");
   //alert("DADADA"+ $rootScope.$storage.session_start);
    /* callback for ng-click 'createNewUser': */
  //---CONSULTA DADOS DE GRUPOS---
  //alert("DADDA");
      //---CONSULTA DADOS DE GRUPOS---
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
      ///alert("DANIEL MACHADO");
     
      return $scope.optionsFromQuery = lista;
      
      });
   /*
    $timeout(function() {
    return $scope.$apply(function() {
    //alert("INSERIR UM DATE");
    $scope.woo = 'Gerente';
    });
    }, 500);
    */


      $scope.directiveOptions = {
      no_results_text: "NÃO EXISTE"
      };
      //------------------------------------------------------------DADOS DE BOTÕES
 
  //------------------------------------------------------------DADOS DE BOTÕES
    $scope.createNewUser = function () {
	///alert("DADOS    " + $scope.user);
     UsersFactory.create($scope.user , function success() {}, function err(data) {alert('Dados Não Incluidos' + data)});
     //$location.path('/listausuarios');
    }
     $scope.filtrarpessoa = function () {
      $location.path('/listausuarios');
    };

  }]);
