// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1432746160096411', // your App ID
        'clientSecret'    : '6e84f8e11b9c4fe6cdf8a0caee98e698', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'twitterAuth' : {
        'consumerKey'        : 'your-consumer-key-here',
        'consumerSecret'     : 'your-client-secret-here',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '924699244243-gsuit103ri9ohbl87t972nb7uu7skaco.apps.googleusercontent.com',
        'clientSecret'     : 'zKfn6zNEXSlnBqR0MbD2VG-e',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
