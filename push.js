$scope.addScreening = function(){
        Array.prototype.inArray = function(comparer) { 
            for(var i=0; i < this.length; i++) { 
                if(comparer(this[i])) return true; 
            }
            return false; 
        }; 

        // adds an element to the array if it does not already exist using a comparer 
        // function
        Array.prototype.pushIfNotExist = function(element, comparer) { 
            if (!this.inArray(comparer)) {
                this.push(element);
            }
        }; 

        console.log($scope.kodepeserta);
        $http.post(apiUrl + 'pemain/updateScreening',{kodepeserta:$scope.kodepeserta,tid:$localStorage.tid}).then(function(response){
            console.log($scope.listAdd.indexOf(response.data.detail.uid));
            $scope.listAdd.pushIfNotExist(response.data.detail,function(e){
                 return e.uid === response.data.detail.uid;
            });
            $scope.kodepeserta = '';
        });
    }