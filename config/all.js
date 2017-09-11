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
    // mongodb://heroku_gj1pqs7w:gtmu1jgpjjcck8est63qie3fk5@ds133104.mlab.com:33104/heroku_gj1pqs7w
    storage: {
        provider: 'mongodb', // || adapter: 'mongodb'
        dbName: 'heroku_1m5djxh6',
        username: 'heroku_1m5djxh6',    // OPTIONAL
        password: 'rql1nkr6h4b4crou2v46jg7ic0',
        server: {
            host: 'ds133084.mlab.com',
            port: 33084
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