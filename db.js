const mysql=require('mysql')

function openConnection(){
    const connection=mysql.createConnection({
       user:'root',
       password:'root',
       port:3306,
       database:'mydb',
       host:'db' 
    })

    connection.connect()

    return connection
}
module.exports={
    openConnection
}