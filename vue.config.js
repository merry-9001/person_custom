module.exports = {
    // publicPath: 'management',
    devServer: {
        proxy: {
            '/personCustom_api': {
                // target: 'http://localhost:8000',
                target: 'http://47.96.175.28',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/management_api': ''
                // }
            }
        }
    }
}