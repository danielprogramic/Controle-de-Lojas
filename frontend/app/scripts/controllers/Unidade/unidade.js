  'use strict';
  //ARQUIVO DE CONTROLE DA UNIDADE****************************************
  /****/
  //----------------UNIDADE FILTRAR-------------------------------------------------------------------------------------------------------------------------------------------------
  app.controller('UnidadeCtrl', ['$scope', 'UnidadeFactory',  'SESSION_VALIDATION','$location', '$rootScope',
    function ($scope, UnidadeFactory,  SESSION_VALIDATION, $location, $rootScope) {
      $rootScope.$storage.route_start = '/unidade';
      SESSION_VALIDATION.validacao();
  //---------------------FILTAR UNIDADE
  $scope.filtrar_uni_service = function () {
  //alert("Filtrar Unidade");
    $(".loaderT").show();
    $( "body" ).css('overflow','hidden');
//----------------------------------
    $scope.unidades = UnidadeFactory.query($scope.user , function success(response) {
    $(".loaderT").hide();
    $( "body" ).css('overflow','scroll');
    },function err(response) {
    alert('Falha na base de dados:');
    });
};
  //---------------------INLCUIR UNIDADE
  $scope.incluir_uni = function () {
  $location.path('/criarunidade');
};
  //---------------------DELETAR UNIDADE
  $scope.deletar_uni = function () {
    alert("DELETAR");
  //$location.path('/deleteunidade');
 
};
  //---------------------EDITAR UNIDADE
  $scope.editar_uni = function () {
  $location.path('/editarunidade');
 
};

}]);
  //---------------- UNIDADE  CRIAR----------------------------------------------------------------------------------------------------------------------------------------------
  app.controller('UnidsCreaGrupoCtrl', ['$scope', 'GruposFactory', '$q', '$timeout','UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
    function ($scope, GruposFactory , $q , $timeout , UserFactory, SESSION_VALIDATION, $location, $rootScope) {
      $rootScope.$storage.route_start = '/criarunidade';
      SESSION_VALIDATION.validacao();
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
  var lista = ['GRUPO 1', 'GRUPO 2', 'GRUPO 3', 'GRUPO 4', 'GRUPO 5', 'GRUPO 6', 'GRUPO 7'];
  simulateAjax(lista).then(function(result) {
    ///alert("DANIEL MACHADO");
    return $scope.optionsFromQuery = GruposFactory.query();

  });
  $scope.directiveOptions = {
    no_results_text: "NÃO EXISTE"
  };
  //------------------------------------------------------------DADOS DE BOTÕES
  $scope.editar_uni_service = function () {
    alert("GRAVAR DADOS");
   // $location.path('/unidade');
  //$scope.unidades = UnidadeFactory.query();
};

  //------------------- TELA FILTRAR UNIDADE
  $scope.filtrar_uni = function () {
    //alert("FILTRAR");
    $location.path('/unidade');
  //$scope.unidades = UnidadeFactory.query();
};
//----------------------------------------
  
}]);
  //---------------- UNIDADE  ALTERAR  -------------------------------------------------------------------------------------------------------------------------------------------------------
  app.controller('UnidsEditarGrupoCtrl', ['$scope', 'UsersFactory', 'UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
    function ($scope, UsersFactory, UserFactory, SESSION_VALIDATION, $location, $rootScope) {
      $rootScope.$storage.route_start = '/editarunidade';
      SESSION_VALIDATION.validacao();
      ///alert("alterar Unidade");


      $scope.editar_uni_service = function () {
      alert("EDITAR DADOS");
      // $location.path('/unidade');
      //$scope.unidades = UnidadeFactory.query();
      };
      
      //------------------- TELA FILTRAR UNIDADE
      $scope.filtrar_uni = function () {
      //alert("FILTRAR");
      $location.path('/unidade');
      //$scope.unidades = UnidadeFactory.query();
      };
      
    
      //---------------------EDITAR UNIDADE
     
      //----------------------------------------















    }]);
