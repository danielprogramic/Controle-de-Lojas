  'use strict';
  //---------------- grupo  -------------------------------------------------------------------------------------------------------------------------------------------------------
  app.controller('GruposCtrl', ['$scope', 'GruposFactory', 'UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
    function ($scope, GruposFactory, UserFactory, SESSION_VALIDATION, $location, $rootScope) {
     
      //----------------------------------------
      $rootScope.$storage.route_start = '/grupo';
      SESSION_VALIDATION.validacao();
     

$scope.filtrar_grupo_service = function () {
	//alert("GRUPO")
 $scope.grupos = GruposFactory.query();
}

  //---------------------INLCUIR UNIDADE
  $scope.incluir_grupo = function () {
alert("INCLUIR GRUPO");
  $location.path('/criargrupo');
};
  //---------------------DELETAR UNIDADE
  $scope.deletar_grupo = function () {
  	alert("DELETAR GRUPO");
  //$location.path('/deletegrupo');
 
};
  //---------------------EDITAR UNIDADE
  $scope.editar_grupo = function () {
  	alert("EDITAR GRUPO");
  $location.path('/editargrupo');
 
};
}]);
//---------------- criar grupo  -------------------------------------------------------------------------------------------------------------------------------------------------------
  app.controller('GruposCreaGrupoCtrl', ['$scope', 'GruposFactory', 'UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
    function ($scope, GruposFactory, UserFactory, SESSION_VALIDATION, $location, $rootScope) {
     
      //----------------------------------------
      $rootScope.$storage.route_start = '/criargrupo';
      SESSION_VALIDATION.validacao();
     

$scope.incluir_grupo_service = function () {
  alert("Salvar Dados Inserir")
 //$scope.grupos = GruposFactory.query();
}

  //---------------------INLCUIR UNIDADE
  $scope.filtrar_grupo = function () {
  //alert("Filtrar GRUPO");
  $location.path('/grupo');
};


}]);
 //---------------- editar grupo  -------------------------------------------------------------------------------------------------------------------------------------------------------
  app.controller('GruposEditarGrupoCtrl', ['$scope', 'GruposFactory', 'UserFactory', 'SESSION_VALIDATION','$location', '$rootScope',
    function ($scope, GruposFactory, UserFactory, SESSION_VALIDATION, $location, $rootScope) {
     
      //----------------------------------------
      $rootScope.$storage.route_start = '/editargrupo';
      SESSION_VALIDATION.validacao();
     

$scope.editar_grupo_service = function () {
  alert("Salvar Dados Editar")
 //$scope.grupos = GruposFactory.query();
}

  //---------------------INLCUIR UNIDADE
  $scope.filtrar_grupo = function () {
 $location.path('/grupo');
};


}]);