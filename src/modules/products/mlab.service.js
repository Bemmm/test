angular.module('productsModule')
    .factory('mlabService', ['$http', 'config', function($http, config) {
        var publicMethods = {
            getProducts: function(type) {
                // type='Smartphones'
                return $http.get('https://api.mlab.com/api/1/databases/example/collections/products/?apiKey=cREe8UEMNaCB7qCP_gIIIQ1sm8Lry3mO', {
                    params: {
                        q: {'category': type}
                    }
                })
                    .then(function(response) {
                        console.log(response);
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            },

            createProduct: function(product) {
                // type='Smartphones'
                return $http.post('https://api.mlab.com/api/1/databases/example/collections/products/?apiKey=cREe8UEMNaCB7qCP_gIIIQ1sm8Lry3mO', product)
                    .then(function(response) {
                        console.log(response);
                        return response.data;
                    })
                    .catch(function(err) {
                        console.log(err);
                    })
            }
        };
        return publicMethods;
    }])

