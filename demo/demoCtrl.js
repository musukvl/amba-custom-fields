(function () {
    'use strict';

    angular
        .module('app')
        .controller('demoCtrl', demoCtrl);

    demoCtrl.$inject = ['$location']; 

    function demoCtrl($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controller1';

        vm.schema = [
            {
                name: "id",
                type: "number",
                label: "Id"
            },
            {
                name : "name",
                type: "text",
                label: "Name"
            }

        ];

        vm.dataObject =
            {
                id : 1,
                name : "wooof"
            };

        vm.data = [
            {
                id : 1,
                name : "wooof"
            },
            {
                id: 2,
                name : "wooof2"
            }
        ];

        activate();

        function activate() { }
    }
})();
