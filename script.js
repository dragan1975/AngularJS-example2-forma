var forma = angular.module("forma",[]);

forma.controller("FormaController", function($scope){
	$scope.toggleActive = function(service){
		service.active =!service.active;//ako je vrijednost active true ova funkcija ga prebacuje u false i obratno 
	}
	$scope.total = function(){
		var rezultat = 0;
		angular.forEach($scope.services, function(service){
			if(service.active){
				rezultat += service.price;
			}
		});
		return rezultat;
	}
	$scope.services = [
		{
			name: 'Web Development',
			price: 500,
			active:true
		},{
			name: 'Dizajn',
			price: 400,
			active:false
		},{
			name: 'Instalacija',
			price: 250,
			active:true
		},{
			name: 'Obuka',
			price: 220,
			active:false
		}
	];
});