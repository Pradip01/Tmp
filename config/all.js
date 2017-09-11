module.exports = exports = {
    port: "4000",
    theme: "basic",
    languages: [
        {
            "code": "en-us",
            "relative_url_prefix": "/"
        },
        {
            "code": "ja-jp",
            "relative_url_prefix": "/jp"
        }
    ],
    plugins: {},
    storage: {
        provider: 'mongodb', // || adapter: 'mongodb'
            dbName: 'contentstack',
            server: {
                host: 'localhost',
                port: 27017
            }
    },
    contentstack: {
        api_key: "bltd5320fc28cc2c0b4",
        access_token: "blt2424b97c61f76fa0"
    },

};