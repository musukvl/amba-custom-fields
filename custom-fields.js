(function () {
    'use strict';

    angular.module('custom-fields', [
        'dndLists'
    ]);

})();

angular.module("custom-fields").run(["$templateCache", function($templateCache) {$templateCache.put("custom-fields-objects-list/custom-fields-objects-list.html","<div class=\"custom-fields-editor\">\r\n    <ul dnd-list=\"vm.data\">\r\n        <li\r\n            ng-repeat=\"item in vm.data\"\r\n\r\n            dnd-draggable=\"item\"\r\n            dnd-moved=\"vm.data.splice($index, 1)\"\r\n            dnd-effect-allowed=\"move\"\r\n            dnd-selected=\"models.selected = item\"\r\n\r\n            ng-class=\"{\'selected\': models.selected === item}\"\r\n        >\r\n            <a class=\"remove-item-button\" href=\"\" ng-click=\"vm.removeItem($index)\">\r\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n            </a>\r\n\r\n            <custom-fields-editor\r\n                    schema=\"vm.schema\"\r\n                    data=\"item\"\r\n            ></custom-fields-editor>\r\n        </li>\r\n    </ul>\r\n    <a href=\"\" ng-click=\"vm.addItem()\">Add</a>\r\n</div>\r\n");
$templateCache.put("custom-fields-editor/custom-fields-editor.html","<div  class=\"custom-fields-editor\">\r\n    <div ng-repeat=\"field in vm.schema\">\r\n        <div class=\"field-label\">\r\n            {{ field.label }}\r\n        </div>\r\n        <div ng-switch=\"field.type\" class=\"field-editor\">\r\n\r\n            <div ng-switch-when=\"number\">\r\n                <dnd-nodrag>\r\n                    <input type=\"number\" ng-model=\"vm.data[field.name]\">\r\n                </dnd-nodrag>\r\n            </div>\r\n            <div ng-switch-when=\"text\">\r\n                <dnd-nodrag>\r\n                    <input type=\"text\" ng-model=\"vm.data[field.name]\">\r\n                </dnd-nodrag>\r\n            </div>\r\n            <div ng-switch-when=\"textarea\">\r\n                <dnd-nodrag>\r\n                    <textarea ng-model=\"vm.data[field.name]\"></textarea>\r\n                </dnd-nodrag>\r\n            </div>\r\n            <div ng-switch-when=\"checkbox\">\r\n\r\n                <dnd-nodrag>\r\n                    <input type=\"checkbox\" ng-model=\"vm.data[field.name]\">\r\n                </dnd-nodrag>\r\n\r\n            </div>\r\n            <div ng-switch-when=\"select\">\r\n                <dnd-nodrag>\r\n                    <select ng-model=\"vm.data[field.name]\">\r\n                        <option ng-repeat=\"option in field.options\" value=\"{{option.value}}\">{{option.label}}</option>\r\n                    </select>\r\n                </dnd-nodrag>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>");
$templateCache.put("schema-editor/schema-editor.html","<div>\r\n    <custom-fields-objects-list\r\n            schema=\"vm.schemaSchema\"\r\n            data=\"vm.schema\"\r\n    ></custom-fields-objects-list>\r\n\r\n</div>");}]);
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
            if (!vm.data) { 
              vm.data = [];
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbS1maWVsZHMubW9kdWxlLmpzIiwidGVtcGxhdGVzLmpzIiwiY3VzdG9tLWZpZWxkcy1lZGl0b3IvY3VzdG9tLWZpZWxkcy1lZGl0b3IuZGlyZWN0aXZlLmpzIiwiY3VzdG9tLWZpZWxkcy1vYmplY3RzLWxpc3QvY3VzdG9tLWZpZWxkcy1vYmplY3RzLWxpc3QuZGlyZWN0aXZlLmpzIiwic2NoZW1hLWVkaXRvci9zY2hlbWEtZWRpdG9yLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNSQTtBQUNBO0FBQ0E7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImN1c3RvbS1maWVsZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjdXN0b20tZmllbGRzJywgW1xyXG4gICAgICAgICdkbmRMaXN0cydcclxuICAgIF0pO1xyXG5cclxufSkoKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoXCJjdXN0b20tZmllbGRzXCIpLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImN1c3RvbS1maWVsZHMtb2JqZWN0cy1saXN0L2N1c3RvbS1maWVsZHMtb2JqZWN0cy1saXN0Lmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcImN1c3RvbS1maWVsZHMtZWRpdG9yXFxcIj5cXHJcXG4gICAgPHVsIGRuZC1saXN0PVxcXCJ2bS5kYXRhXFxcIj5cXHJcXG4gICAgICAgIDxsaVxcclxcbiAgICAgICAgICAgIG5nLXJlcGVhdD1cXFwiaXRlbSBpbiB2bS5kYXRhXFxcIlxcclxcblxcclxcbiAgICAgICAgICAgIGRuZC1kcmFnZ2FibGU9XFxcIml0ZW1cXFwiXFxyXFxuICAgICAgICAgICAgZG5kLW1vdmVkPVxcXCJ2bS5kYXRhLnNwbGljZSgkaW5kZXgsIDEpXFxcIlxcclxcbiAgICAgICAgICAgIGRuZC1lZmZlY3QtYWxsb3dlZD1cXFwibW92ZVxcXCJcXHJcXG4gICAgICAgICAgICBkbmQtc2VsZWN0ZWQ9XFxcIm1vZGVscy5zZWxlY3RlZCA9IGl0ZW1cXFwiXFxyXFxuXFxyXFxuICAgICAgICAgICAgbmctY2xhc3M9XFxcIntcXCdzZWxlY3RlZFxcJzogbW9kZWxzLnNlbGVjdGVkID09PSBpdGVtfVxcXCJcXHJcXG4gICAgICAgID5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwicmVtb3ZlLWl0ZW0tYnV0dG9uXFxcIiBocmVmPVxcXCJcXFwiIG5nLWNsaWNrPVxcXCJ2bS5yZW1vdmVJdGVtKCRpbmRleClcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGltZXNcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgPC9hPlxcclxcblxcclxcbiAgICAgICAgICAgIDxjdXN0b20tZmllbGRzLWVkaXRvclxcclxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hPVxcXCJ2bS5zY2hlbWFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBkYXRhPVxcXCJpdGVtXFxcIlxcclxcbiAgICAgICAgICAgID48L2N1c3RvbS1maWVsZHMtZWRpdG9yPlxcclxcbiAgICAgICAgPC9saT5cXHJcXG4gICAgPC91bD5cXHJcXG4gICAgPGEgaHJlZj1cXFwiXFxcIiBuZy1jbGljaz1cXFwidm0uYWRkSXRlbSgpXFxcIj5BZGQ8L2E+XFxyXFxuPC9kaXY+XFxyXFxuXCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiY3VzdG9tLWZpZWxkcy1lZGl0b3IvY3VzdG9tLWZpZWxkcy1lZGl0b3IuaHRtbFwiLFwiPGRpdiAgY2xhc3M9XFxcImN1c3RvbS1maWVsZHMtZWRpdG9yXFxcIj5cXHJcXG4gICAgPGRpdiBuZy1yZXBlYXQ9XFxcImZpZWxkIGluIHZtLnNjaGVtYVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgICAge3sgZmllbGQubGFiZWwgfX1cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBuZy1zd2l0Y2g9XFxcImZpZWxkLnR5cGVcXFwiIGNsYXNzPVxcXCJmaWVsZC1lZGl0b3JcXFwiPlxcclxcblxcclxcbiAgICAgICAgICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XFxcIm51bWJlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkbmQtbm9kcmFnPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbmctbW9kZWw9XFxcInZtLmRhdGFbZmllbGQubmFtZV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8L2RuZC1ub2RyYWc+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBuZy1zd2l0Y2gtd2hlbj1cXFwidGV4dFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkbmQtbm9kcmFnPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5nLW1vZGVsPVxcXCJ2bS5kYXRhW2ZpZWxkLm5hbWVdXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPC9kbmQtbm9kcmFnPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgbmctc3dpdGNoLXdoZW49XFxcInRleHRhcmVhXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRuZC1ub2RyYWc+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgbmctbW9kZWw9XFxcInZtLmRhdGFbZmllbGQubmFtZV1cXFwiPjwvdGV4dGFyZWE+XFxyXFxuICAgICAgICAgICAgICAgIDwvZG5kLW5vZHJhZz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIDxkbmQtbm9kcmFnPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBuZy1tb2RlbD1cXFwidm0uZGF0YVtmaWVsZC5uYW1lXVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDwvZG5kLW5vZHJhZz5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IG5nLXN3aXRjaC13aGVuPVxcXCJzZWxlY3RcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZG5kLW5vZHJhZz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmctbW9kZWw9XFxcInZtLmRhdGFbZmllbGQubmFtZV1cXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gbmctcmVwZWF0PVxcXCJvcHRpb24gaW4gZmllbGQub3B0aW9uc1xcXCIgdmFsdWU9XFxcInt7b3B0aW9uLnZhbHVlfX1cXFwiPnt7b3B0aW9uLmxhYmVsfX08L29wdGlvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxcclxcbiAgICAgICAgICAgICAgICA8L2RuZC1ub2RyYWc+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuXFxyXFxuPC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic2NoZW1hLWVkaXRvci9zY2hlbWEtZWRpdG9yLmh0bWxcIixcIjxkaXY+XFxyXFxuICAgIDxjdXN0b20tZmllbGRzLW9iamVjdHMtbGlzdFxcclxcbiAgICAgICAgICAgIHNjaGVtYT1cXFwidm0uc2NoZW1hU2NoZW1hXFxcIlxcclxcbiAgICAgICAgICAgIGRhdGE9XFxcInZtLnNjaGVtYVxcXCJcXHJcXG4gICAgPjwvY3VzdG9tLWZpZWxkcy1vYmplY3RzLWxpc3Q+XFxyXFxuXFxyXFxuPC9kaXY+XCIpO31dKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjdXN0b20tZmllbGRzJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdjdXN0b21GaWVsZHNFZGl0b3InLCBjdXN0b21GaWVsZHNFZGl0b3JEaXJlY3RpdmUpO1xyXG5cclxuICAgIGN1c3RvbUZpZWxkc0VkaXRvckRpcmVjdGl2ZS4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY3VzdG9tRmllbGRzRWRpdG9yRGlyZWN0aXZlKCkge1xyXG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB7XHJcbiAgICAgICAgICAgIHJlc3RyaWN0OiAnRScsXHJcbiAgICAgICAgICAgIHNjb3BlOiB7fSxcclxuICAgICAgICAgICAgYmluZFRvQ29udHJvbGxlcjoge1xyXG4gICAgICAgICAgICAgICAgc2NoZW1hOiAnPScsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAnPSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udHJvbGxlcjogY3VzdG9tRmllbGRzRWRpdG9yRGlyZWN0aXZlQ29udHJvbGxlcixcclxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ2N1c3RvbS1maWVsZHMtZWRpdG9yL2N1c3RvbS1maWVsZHMtZWRpdG9yLmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIGN1c3RvbUZpZWxkc0VkaXRvckRpcmVjdGl2ZUNvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGN1c3RvbUZpZWxkc0VkaXRvckRpcmVjdGl2ZUNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpczsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaW5pdCgpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufSkoKTsiLCIoZnVuY3Rpb24gKCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIGFuZ3VsYXIubW9kdWxlKCdjdXN0b20tZmllbGRzJylcclxuICAgICAgICAuZGlyZWN0aXZlKCdjdXN0b21GaWVsZHNPYmplY3RzTGlzdCcsIGN1c3RvbUZpZWxkc09iamVjdHNMaXN0RGlyZWN0aXZlKTtcclxuXHJcbiAgICBjdXN0b21GaWVsZHNPYmplY3RzTGlzdERpcmVjdGl2ZS4kaW5qZWN0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY3VzdG9tRmllbGRzT2JqZWN0c0xpc3REaXJlY3RpdmUoKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XHJcbiAgICAgICAgICAgICAgICBzY2hlbWE6ICc9JyxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICc9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBjdXN0b21GaWVsZHNPYmplY3RzTGlzdERpcmVjdGl2ZUNvbnRyb2xsZXIsXHJcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdjdXN0b20tZmllbGRzLW9iamVjdHMtbGlzdC9jdXN0b20tZmllbGRzLW9iamVjdHMtbGlzdC5odG1sJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICBjdXN0b21GaWVsZHNPYmplY3RzTGlzdERpcmVjdGl2ZUNvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGN1c3RvbUZpZWxkc09iamVjdHNMaXN0RGlyZWN0aXZlQ29udHJvbGxlcigpIHtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzOyBcclxuXHJcblxyXG4gICAgICAgIHZtLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoJGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZtLmRhdGEuc3BsaWNlKCRpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2bS5hZGRJdGVtID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghdm0uZGF0YSkgeyBcclxuICAgICAgICAgICAgICB2bS5kYXRhID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdm0uZGF0YS5wdXNoKHt9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgdm0uZGF0YVNjaGVtYSA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lIDogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaWRcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIklkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgIHZtLmRhdGEgPSBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWUgOiBcIndvb29mXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA6IFwid29vb2YyXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTsqL1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG59KSgpOyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgICAndXNlIHN0cmljdCc7XHJcblxyXG4gICAgYW5ndWxhci5tb2R1bGUoJ2N1c3RvbS1maWVsZHMnKVxyXG4gICAgICAgIC5kaXJlY3RpdmUoJ3NjaGVtYUVkaXRvcicsIHNjaGVtYUVkaXRvckRpcmVjdGl2ZSk7XHJcblxyXG4gICAgc2NoZW1hRWRpdG9yRGlyZWN0aXZlLiRpbmplY3QgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBzY2hlbWFFZGl0b3JEaXJlY3RpdmUoKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHtcclxuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFJyxcclxuICAgICAgICAgICAgc2NvcGU6IHt9LFxyXG4gICAgICAgICAgICBiaW5kVG9Db250cm9sbGVyOiB7XHJcbiAgICAgICAgICAgICAgICBzY2hlbWE6ICc9J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250cm9sbGVyOiBzY2hlbWFFZGl0b3JEaXJlY3RpdmVDb250cm9sbGVyLFxyXG4gICAgICAgICAgICBjb250cm9sbGVyQXM6ICd2bScsXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnc2NoZW1hLWVkaXRvci9zY2hlbWEtZWRpdG9yLmh0bWwnXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIHNjaGVtYUVkaXRvckRpcmVjdGl2ZUNvbnRyb2xsZXIuJGluamVjdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNjaGVtYUVkaXRvckRpcmVjdGl2ZUNvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpczsgXHJcblxyXG4gICAgICAgIGluaXQoKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICAgICAgICAgIHZtLnNjaGVtYVNjaGVtYSA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lIDogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibGFiZWxcIixcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJMYWJlbFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic2VsZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlOiBcImNoZWNrYm94XCIsIGxhYmVsOiBcIkNoZWNrYm94XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IFwidGV4dFwiLCBsYWJlbDogXCJUZXh0XCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IFwidGV4dGFyZWFcIiwgbGFiZWw6IFwiVGV4dCBBcmVhXCJ9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWU6IFwibnVtYmVyXCIsIGxhYmVsOiBcIk51bWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
