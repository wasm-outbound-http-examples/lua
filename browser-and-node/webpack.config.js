module.exports = {
    entry: './src/httpget.mjs',
    resolve: {
        fallback: {
            path: false,
            fs: false,
            child_process: false,
            crypto: false,
            url: false,
            module: false
        },
    },
}
