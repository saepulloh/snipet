$scope.removeScreening = function(idx){
        console.log(idx);
        var itemToDelete = $scope.list[idx];
        
        return $http.get('client/destroy/' + itemToDelete.id).then(function(response) {
            if(response.data.status == 'success') console.log('response - success', response)
            $scope.list.splice(idx, 1);
        });        
    }