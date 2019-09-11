module.exports = {
    entry: ['@babel/polyfill', './src/main.js'], // Informa qual o arquivo principal
    output: { // Para onde será enviado o código convertido
        path: __dirname + '/public', // Variável global que se refere ao arquivo webpack
        filename: 'bundle.js' // Nome do arquivo de destino
    },
    devServer: {
        contentBase: __dirname + '/public' // Caminho onde o servidor deve ser aberto
    },
    module: {
        rules: [ //  Configuração de como o webpack deve agir quando o usuário importar novos arquivos js
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
};