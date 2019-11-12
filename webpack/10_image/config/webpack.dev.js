const path = require('path');


module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    output: {
        filename: 'main-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist'
    },
    module: {
        rules: [{ // css loader
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            { // scss loader
                test: /\.scss$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            { // html Loader
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'index.html'
                        },
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }

                ]

            },
            { // import images in webpack
                test: /\.(jpg|jpeg|png)$/,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'images/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    }
}