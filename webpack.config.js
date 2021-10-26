const path = require("path");
const {HotModuleReplacementPlugin} = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
    return {
        entry: path.join(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"],
                        },
                    },
                },
                {
                    test: /\.css$/i,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            option: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: MiniCssExtractPlugin.loader,
                            option: {
                                hmr: argv.mode === 'development'
                            }
                        },

                        'postcss-loader'
                    ]
                }
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
            }),
            new HotModuleReplacementPlugin(),
        ],
        devServer: {
            open: true,
            clientLogLevel: 'silent',
            contentBase: './dist',
            historyApiFallback: true,
            hot: true,
            // static: {
            //     directory: path.join(__dirname, 'public'),
            // },
            // compress: true,
            port: 9000,
        }
    }
};
