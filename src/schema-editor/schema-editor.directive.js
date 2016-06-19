(function () {
    'use strict';

    angular.module('custom-fields')
        .directive('schemaEditor', schemaEditorDirective);

    schemaEditorDirective.$inject = [];

    function schemaEditorDirective() {
        var directive = {
            restrict: 'E',
            scope: {},
            bindToController: {
                schema: '='
            },
            controller: schemaEditorDirectiveController,
            controllerAs: 'vm',
            templateUrl: 'schema-editor/schema-editor.html'
        };
        return directive;
    }

    schemaEditorDirectiveController.$inject = [];

    function schemaEditorDirectiveController() {
        var vm = this; 

        init();

        function init() {

            vm.schemaSchema = [
                {
                    name : "name",
                    type: "text",
                    label: "Name"
                },
                {
                    name: "label",
                    type: "text",
                    label: "Label"
                },
                {
                    name: "type",
                    type: "select",
                    label: "Type",
                    options: [
                        {value: "checkbox", label: "Checkbox"},
                        {value: "text", label: "Text"},
                        {value: "textarea", label: "Text Area"},
                        {value: "number", label: "Number"}
                    ]
                }
            ];
        }
       
    }
})();