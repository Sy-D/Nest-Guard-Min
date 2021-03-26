const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = () => {
    const isProduction = typeof process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'production';
    const dist = path.join(__dirname, 'dist');

    return {
        target: 'node',
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'inline-source-map',

        entry: [
            'webpack/hot/poll?100',
            './src/main.ts',
        ],

        output: {
            path: dist,
            filename: 'server.js',
            libraryTarget: "commonjs2",
        },



        externals: [
            nodeExternals({
                whitelist: [
                    'webpack/hot/poll?100',
                    /\.css$/,
                    /^lodash-es/,],
            }),
        ],

        resolve: {
            extensions: ['.ts', '.tsx', '.json', '.js'],

            modules: [
                "node_modules",
            ],
        },

        module: {
            rules: [
                {
                    test: /\.ts$/,
                    enforce: "pre",
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                },
                {
                    test: /\.js$/,
          
                    use: [
                        {
                            loader: "babel-loader",
                        },
                    ],
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,

                    use: [
                        {
                            loader: "babel-loader",
                        },
                        {
                            loader: "ts-loader",
                        },
                    ],
                },
            ]
        },

        optimization: {
            minimize: false,
            namedModules: true,
            noEmitOnErrors: true,
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin(),

            new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
            //new ForkTsCheckerWebpackPlugin({
            //    tslint: true
            //}),

            new webpack.DefinePlugin({
                "process.env": {
                    NODE_ENV: JSON.stringify(isProduction ? 'production' : 'development'),
                    CONFIG: JSON.stringify(require("config"))
                },
            }),

            new CleanWebpackPlugin({
                verbose: true,
                cleanOnceBeforeBuildPatterns: [
                    dist,
                ],
            }),
        ],
    };
};
