module.exports = {
    output: 'export',
    images: {
        disableStaticImages: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dolshik.online',
                port: '',
                pathname: '/upload/**',
            },
            {
                protocol: 'http',
                hostname: 'lk.shelikhov.me',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'backend-dolshik.shelikhov.me',
                port: '',
                pathname: '/**',
            },
        ],
    },
}