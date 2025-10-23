export default {
    plugins: {
       'postcss-px-to-viewport-8-plugin': {
        viewportWidth: 1920, // 设计稿宽度（桌面端基准）
        unitPrecision: 5, // 转换后保留的小数位数
        viewportUnit: 'vw', // 使用的视口单位
        selectorBlackList: ['.ignore-vw', '.ant-'], // 不转换的类名（保持 Ant Design 原样）
        minPixelValue: 1, // 小于 1px 的不转换
        mediaQuery: false, // 不转换媒体查询中的 px
        exclude: [/node_modules/], // 排除 node_modules
        // 可选：针对不同文件使用不同配置
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 1920,
        },
    }
}