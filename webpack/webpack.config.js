import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const port = 80;
const host = 'localhost';
const location = 'http://' + host + ':' + port;
const entryPoiny = './index.js';
const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = !IS_DEV;
const dist = 'bundle';
const publicPath = '/' + dist;

const commonPlugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        IS_DEV: JSON.stringify(IS_DEV),
        IS_PROD: JSON.stringify(IS_PROD),
    }),
];

const envPlugins = IS_DEV
    ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ]
    : [
        new CleanWebpackPlugin(dist, { dry: false, root: path.join(__dirname, '..') }),
        new webpack.NamedModulesPlugin(),
    ];

const config = {
    entry: IS_DEV
        ? [
            'react-hot-loader/patch',
            'webpack-dev-server/client?' + location,
            'webpack/hot/only-dev-server',
            entryPoiny,
        ]
        : [
            entryPoiny,
        ],

    output: {
        filename: 'bundle.js',
        path: path.resolve(dist),
        publicPath,
    },

    mode: IS_DEV ? 'development' : 'production',

    optimization: {
        minimize: IS_PROD
    },

    resolve: {
        modules: ['node_modules', './'],
    },

    devtool: IS_DEV ? 'inline-source-map' : false,

    plugins: [...commonPlugins, ...envPlugins,
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        })
    ],

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    IS_DEV && 'css-hot-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { minimize: IS_PROD },
                    },
                    'sass-loader',
                    {
                        loader: 'sass-resources-loader',
                        options: {
                            resources: path.join('style', '_constants.scss'),
                        },
                    },
                ].filter(x => x),
            },
        ],
    },
};

const devServer = {
    hot: true,
    port,
    publicPath,
    historyApiFallback: true,
};

if (IS_DEV) {
    config.devServer = devServer;
}

module.exports = config;
