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
    entry: './main.js',
    output: {
        path: process.cwd(),
        filename: 'build.js'
    },
    module: {
        loaders: loaders
    }
};
