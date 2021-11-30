const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var mysql = require('mysql');

var connection = mysql.createPool({
    host: "hotel-database.ck8dte9aajb9.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "geneoneai123!",
    database: "hotel_database"
});

let recievedBookingReferenceNo ="";

async function fetchKey(Key) {
    recievedBookingReferenceNo = await Key;
    console.log("The recieved Booking Reference No is " + recievedBookingReferenceNo);

    app.get("/api/get", (req, res) => {
        const sqlSelect = `SELECT * FROM hotel_data_table WHERE BookingReferenceNo = ${recievedBookingReferenceNo}`;
        connection.query(sqlSelect, (err, result) => {
            console.log(result)
            res.send(result)
        });
    });

}



// connection.connect(function(err){
//     if (err) throw err;
// })

app.post('/api/post', async function (req,res) {
    for(let item in req.body){
        let Key = item;
        console.log(item)
        const result = await fetchKey(Key)
    }

})

app.get('/', (req, res) => {
    res.json('OK');
})

app.listen(3001, ()=> {
    console.log('PORT 3001')
})