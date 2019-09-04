//This is how data should be manipulated from Azure SQL Database, but there is no configuration or connection to Azure cloud due to the lack of subscription.
//No SQL server no SQL database in Azure.
var tedious = require("tedious"); //Tedious is a Node package that provides an implementation of the TDS protocol, which is used to interact with instances of Microsoft's SQL Server.
var Connection = tedious.Connection;
var Request = tedious.Request;

var config = {
    userName: "databaseNameWouldBeHereForExample",
    password: "akjdfkjfadke4",
    server: "akdjfkadkfa.database.windows.net",
    options: {
        database: "akakajdkfj",
        encrypt: true,
        rowCollectionOnRequestCompletion: true,
    }
}

var createUsers = function (callback) {
    var connection = new Connection(config)
    connection.on('connect', function(err){
        if(err){
            callback(err);
        }
        else{
            var requre = new Request(
                ` 
                INSERT INTO users (name, email) VALUES ('Christian', 'christian1.raymond.com')
                INSERT INTO users (name, email) VALUES('Ngubana', 'ngubana@gmail.com')
                `,
                function(err, rowCount){
                   callback(err, rowCount);
                }
            );
            connection.execSql(request);
        }
    })
};

var queryUsers = function (callback) {
    var connection = new Connection(config);
    connection.on('connect', function(err){
        if(err){
            callback(err)
        }
        else{
            var request = new Request(
                "SELECT *FROM users",
                function(err, rowCount){
                    callback(err, rowCount, row)
                }
            );
            connection.execSql(request);
        }
    })

};

module.exports = {
    createUsers: createUsers,
    queryUsers: queryUsers
};