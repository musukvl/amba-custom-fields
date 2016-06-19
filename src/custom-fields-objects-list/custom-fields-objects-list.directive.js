(function () {
    'use strict';

    angular.module('custom-fields')
        .directive('customFieldsObjectsList', customFieldsObjectsListDirective);

    customFieldsObjectsListDirective.$inject = [];

    function customFieldsObjectsListDirective() {
        var directive = {
            restrict: 'E',
            scope: {},
            bindToController: {
                schema: '=',
                data: '='
            },
            controller: customFieldsObjectsListDirectiveController,
            controllerAs: 'vm',
            templateUrl: 'custom-fields-objects-list/custom-fields-objects-list.html'
        };
        return directive;
    }

    customFieldsObjectsListDirectiveController.$inject = [];

    function customFieldsObjectsListDirectiveController() {
        var vm = this; 


        vm.removeItem = function ($index) {
            vm.data.splice($index, 1);
        }

        vm.addItem = function() {
            vm.data.push({});
        }

        init();

        function init() {
            /*
            vm.dataSchema = [
                {
                    name : "name",
                    type: "text",
                    label: "Name"
                },
                {
                    name: "id",
                    type: "number",
                    label: "Id",
                    readonly: true
                }
            ];

            vm.data = [
                {
                    id : 1,
                    name : "wooof"
                },
                {
                    id: 2,
                    name : "wooof2"
                }
            ];*/
        }
       
    }
})();