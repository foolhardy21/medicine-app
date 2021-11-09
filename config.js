require('dotenv').config()

const MONGODB = process.env.MONGODB_URI
const PORT = process.env.PORT

module.exports = {
    MONGODB,
    PORT
},
{
    test: /\.(jpg|png|svg)$/,
    loader: 'url-loader',
    options: {
      limit: 25000,
    },
},
{
    test: /\.(jpg|png|svg)$/,
    loader: 'file-loader',
    options: {
      name: '[path][name].[hash].[ext]',
    },
}