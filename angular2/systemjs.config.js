(function (global) {

    var map = {
        'app': 'app', //sources
        '@angular': 'node_modules/@angular',
        'rxjs': 'node_modules/rxjs'
    };

    var packages = {
        'app': {main: 'main.js', defaultExtension: 'js'},
        'rxjs': {defaultExtension: 'js'},
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'platform-browser',
        'platform-browser-dynamic'
    ];

    function packUmd(pkgName) {
        packages['@angular/' + pkgName] = {main: pkgName + '.umd.js', defaultExtension: 'js'};
    };

    ngPackageNames.forEach(packUmd);
    var config = {
        map: map,
        packages: packages
    }
    System.config(config);
})(this);