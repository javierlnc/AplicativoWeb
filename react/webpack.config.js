const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtracPLugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports ={
    entry: './src/index.js',
    output: {
        path : path.resolve(__dirname,'dist'),
        filename : 'bundle.js',
        publicPath:'/',
    },
    mode:'development',
    resolve:{
        extensions: ['.js','.jsx'],
        alias:{
            '@components':path.resolve(__dirname,'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages' : path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles'),
        }
    },
    module : {
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader'
                },
            },
            {
                test:/\.htmls$/,
                use:{
                    loader : 'html-loader',
                }
            },
            {
                test: /\.(css|scss)$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
            }
            
        ]
    },
    plugins:[
        new htmlWebpackPlugin ({
            template : './public/index.html',
            filename: './index.html',
        }),
        new miniCSSExtracPLugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        static: path.join(__dirname, 'dist'),
        compress:true,
        port:3005,
        historyApiFallback:true,
    }
    
}