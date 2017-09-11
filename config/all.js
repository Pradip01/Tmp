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
        dbName: 'heroku_1m62kr4r',
        username: 'user',	// OPTIONAL
        password: 'user1234',
        server: {
            host: 'ds129344.mlab.com',
            port: 29344
        }
    },
   /* storage: {
        provider: 'mongodb', // || adapter: 'mongodb'
            dbName: 'new-cs',
            // username: 'user',	// OPTIONAL
            // password: 'user1234',
            server: {
                host: 'localhost',
                port: 27017
            }
    },*/
    contentstack: {
        api_key: "bltd5320fc28cc2c0b4",
        access_token: "blt2424b97c61f76fa0"
    },

};