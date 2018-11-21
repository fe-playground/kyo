module.exports = {
    configureWebpack: config => {
        // import 경로에 /src를 기본 경로로 포함
        config.resolve.modules.unshift(path.resolve(‘src’))
    }
}