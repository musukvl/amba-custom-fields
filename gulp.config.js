var merge = require('merge');

    var options = {
        debug:  true,
        contentFolder: './src',
        bowerFolder: './bower_components',
        bowerJson: './bower.json',
        jsFolder: './src'
    };

    var wiredep = require('wiredep')({ directory: options.bowerFolder, bowerJson: require(options.bowerJson) });

    var config = {
        js: [
            options.jsFolder + '/*.module.js',
            options.jsFolder + '/templates.js',
            options.jsFolder + '/**/*.module.js',
            options.jsFolder + '/**/*.config.js',
            options.jsFolder + '/**/*.service.js',
            options.jsFolder + '/**/*.factory.js',
            options.jsFolder + '/**/*.controller.js',
            options.jsFolder + '/**/*.directive.js',
            options.jsFolder + '/**/*.js',
            '!' + options.jsFolder + '/**/*.spec.js'
        ],
        bowerCss: function () {
            if (!wiredep.css) {
                wiredep.css = [];
            }
            
        var css = [
            options.bowerFolder + '/bootstrap/dist/css/bootstrap.min.css',
                options.bowerFolder + '/bootstrap/dist/css/bootstrap-theme.css',
            options.bowerFolder + '/font-awesome/css/font-awesome.min.css'
        ];
        var result = css.concat(wiredep.css);
        return result;
        },

        bowerJs: function () {
            if (!wiredep.js) {
                wiredep.js = [];
            }
            return wiredep.js.concat([
                options.contentFolder + '/components/**/*.js'
                /*bowerFolder + '/angular/angular.js',
                bowerFolder + '/angular-route/angular-route.js',
                bowerFolder + '/bootstrap/dist/js/bootstrap.js'*/
            ]);
        }
    }

module.exports = merge(config, options);