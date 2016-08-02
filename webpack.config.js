var path = require('path');

var loaders = [
    {
        "test": /\.js?$/,
        "exclude": /node_modules/,
        "loader": "babel",
        "query": {
            "presets": [
                "es2015",
                "stage-0"
            ],
            "plugins": []
        }
    },
    {
        "test": /\.vue?$/,
        "loader": "vue"
    },
    {
        "test": /\.less$/,
        "loader": "style!css!less"
    }
];

module.exports = {
    entry: path.resolve('component', 'main.js'),
    output: {
        path: path.resolve('component'),
        filename: 'build.js',
        publicPath: '/'
    },
    module: {
        loaders: loaders
    }
};
