{
    modules: [
        [
          '@nuxtjs/firebase',
        ]
      ],
    firebase: {
        config: {
            apiKey: '<apiKey>',
            authDomain: '<authDomain>',
            databaseURL: '<databaseURL>',
            projectId: '<projectId>',
            storageBucket: '<storageBucket>',
            messagingSenderId: '<messagingSenderId>',
            appId: '<appId>',
            measurementId: '<measurementId>'
        },
        services: {
            firestore: true,
            auth: true // Just as example. Can be any other service.
        }
    }
}