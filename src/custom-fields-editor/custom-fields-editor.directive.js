(function () {
    'use strict';

    angular.module('custom-fields')
        .directive('customFieldsEditor', customFieldsEditorDirective);

    customFieldsEditorDirective.$inject = [];

    function customFieldsEditorDirective() {
        var directive = {
            restrict: 'E',
            scope: {},
            bindToController: {
                schema: '=',
                data: '='
            },
            controller: customFieldsEditorDirectiveController,
            controllerAs: 'vm',
            templateUrl: 'custom-fields-editor/custom-fields-editor.html'
        };
        return directive;
    }

    customFieldsEditorDirectiveController.$inject = [];

    function customFieldsEditorDirectiveController() {
        var vm = this; 
        
        init();

        function init() {

        }
       
    }
})();