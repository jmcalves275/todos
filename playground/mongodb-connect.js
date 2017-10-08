const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/test', (error, db) => {
    if (error) throw new Error('Connection failed');

    console.log('Connection OK');

    // db.collection('Todos').insertOne({text: "Node"}, (error, results) => {
    //     if (error) throw new Error('Could not insert value');

    //     console.log(results)
    // });

    //  db.collection('Todos').update({text: "Node"}, 
    //                                 {text: 'Node', 
    //                                 completed: false}).then((result) => {
    //     console.log(result)
    //  });
     
    db.collection('Todos').findOneAndUpdate({odas: 'abem'},
                                            {$inc: {teste: 1}})
                                            .then((result) => {
                                                console.log(result)
                                            });

    // db.collection('Todos').deleteMany({text: 'Node'}).then((results) => {        
    //     console.log(results)
    // }, (error) => {
    //     console.log(error)
    // })

    db.close();
});