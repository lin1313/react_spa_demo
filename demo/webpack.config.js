/**
 * Created by dell on 2017/3/8.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //����css�ļ��Ĳ��
var extractCSS = new ExtractTextPlugin('/bundle/style.css'); //css�ļ������·���������ļ���

//����htmlҳ��
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./entry.js',//����ļ�
    output:{
        filename:'./bundle/bundle.js'//ת����ļ�
    },
    module:{
        loaders:[
            {
                //��ʽ����
                test:/\.css$/,
                loader:extractCSS.extract({fallback:"style-loader",use:"css-loader"})
            },
            {
                //json�ļ�����
                test:/\.json$/,
                loader:'json-loader'
            },
            {
                //js�ļ�����
                test:/\.js$/,
                loader:'react-hot-loader!babel-loader',
                exclude:/node_modules/
            },
            {
                //��ͼƬ���浽image�ļ�����
                test:/\.png$/,
                loader:'url-loader?limit=8192&name=./images/[name].[ext]'
            }
        ]
    },
    plugins:[
        //���ɶ���css��ʽ�ļ�
        new webpack.HotModuleReplacementPlugin(),
        extractCSS,
        //����html�ļ�
        new HtmlWebpackPlugin({
            //�޸��ļ�����Ŀ¼
            filename: '../index.html'
        }),
        //����htmlģ���ļ�
        new HtmlWebpackPlugin({
            template:'./temp/index.html',
            inject:'body',
            info:'Hello World'
        }),
        //����jq
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
}