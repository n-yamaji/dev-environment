{
    modules: [
        '@nuxtjs/auth'
    ],
    router: {
        middleware: 'auth'
    },
    auth: {
        strategies: {
            auth0: {
                domain: 'dev-yvcs4nq5.auth0.com',
                client_id: 'C3BiePIj5fVTPO5fDnmcMNQXCCT327lq'
            }
        },
        redirect: {
            // 未ログイン時のリダイレクト先
            login: '/login',
            // ログアウト処理を実行した直後のリダイレクト先
            logout: '/login',
            // コールバックURL
            callback: '/callback',
            // ログイン後に遷移するページ
            home: '/',
        },
    },    
}