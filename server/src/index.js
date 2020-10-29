'use strict';

const express = require('express');
const path = require('path');
var axios = require('axios');
var FormData = require('form-data');
const PORT = process.env.PORT || 8085;
const HOST = '0.0.0.0';
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'bhaivirundhu2020@gmail.com',
        pass: 'Guru123456'
    }
});


const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/build');
require('dotenv').config()

var MongoClient = require('mongodb').MongoClient;
var url = process.env.DBADDRESS;


const app = express();

app.use(express.static(CLIENT_BUILD_PATH));


app.get('/Placeorder', (req, response) => {

  MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("bhaivirundhu");

    const totalamount = (req.query.item_1 * 1099) + (req.query.item_2 * 1999) + (req.query.item_3 * 699) + (req.query.item_4 * 1099) + (req.query.item_5 * 249) + (req.query.item_6 * 249) + (req.query.item_7 * 249) + (req.query.item_8 * 249);
    const order_id = "BV-" + Math.floor(Math.random() * Math.floor(1000)) + Date.now();
    var myobj = {
      item_1: req.query.item_1,
      item_2: req.query.item_2,
      item_3: req.query.item_3,
      item_4: req.query.item_4,
      item_5: req.query.item_5,
      item_6: req.query.item_6,
      item_7: req.query.item_7,
      item_8: req.query.item_8,
      total: totalamount,
      order_id: order_id,
      email: req.query.email,
      mobile: req.query.mobile,
      addressline_1: req.query.addressline_1,
      addressline_2: req.query.addressline_2,
      city: req.query.city,
      pincode: req.query.pincode,
      deliverydate: req.query.deliverydate,
      createddate: new Date()
    }
    dbo.collection("orders").insertOne(myobj, function(err, res) {
      if (err) throw err;
      response.send({value: res, order_id: order_id,status: "success"})

      if(req.query.email != ""){

        var html = "<h1>Welcome to BhaiVirundhu</h1>";
        html += "<h2>Order ID: "+ order_id +"</h2>";
        html += "<h3>Delivery Date: "+ req.query.deliverydate +"</h3>";
        html += '<table style = "width: 50%;border: 0.5px solid gray;border-collapse: collapse;">';
        html += '<tbody>';
        html += '<tr align = "center">';
        html += '<th className = "ordertableth" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Product name</th>';
        html += '<th className = "ordertableth" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Quanity</th>';
        html += '<th className = "ordertableth" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Price</th>';
        html += '<th className = "ordertableth" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Total</th>';
        html += '</tr>';

        if(req.query.item_1 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Mutton - சிறு குடும்பம்</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_1 +'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_1) * 1099 +'</td>';
          html += '</tr>';
        }

        if(req.query.item_2 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Mutton - கூட்டு குடும்பம்</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_2 +'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_2) * 1999 +'</td>';
          html += '</tr>';
        }

        if(req.query.item_3 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Chicken - சிறு குடும்பம்</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_3 +'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_3) * 699 +'</td>';
          html += '</tr>';
        }

        if(req.query.item_4 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Chicken - கூட்டு குடும்பம்</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_4 +'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_4) * 1099 +'</td>';
          html += '</tr>';
        }

        if(req.query.item_5 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Chicken 65</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_5+'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_5) * 249 +'</td>';
          html += '</tr>';
        }

        if(req.query.item_6 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Kidney Fry</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_6 +'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_6) * 249 +'</td>';
          html += '</tr>';
        }

        if(req.query.item_7 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Liver Fry</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_7 +'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_7) * 249 +'</td>';
          html += '</tr>';
        }

        if(req.query.item_8 > 0){
          html += '<tr>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">Boti Fry</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ req.query.item_8 +'</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">1099</td>';
          html += '<td className = "ordertabletd" align = "center" style = "width: 100%;border: 0.5px solid gray;border-collapse: collapse;">'+ parseInt(req.query.item_8) * 249 +'</td>';
          html += '</tr>';
        }


        html += '<tr>';
        html += '<td className = "ordertabletd" align = "center"></td>';
        html += '<td className = "ordertabletd" align = "center"></td>';
        html += '<td className = "ordertabletd" align = "center">Total Amount</td>';
        html += '<td className = "ordertabletd" align = "center">'+totalamount+'</td>';
        html += '</tr>';

        html += '</tbody>';
        html += '</table>';

        html += '<h4>Please proceed to make payment through GooglePay,Paytm or PhonePe For +91 9791114463</h4>';


        var mailOptions = {
            from: 'BhaiVirundhu ✔ <bhaivirundhu2020@gmail.com>', // sender address
            to: req.query.email, // list of receivers
            subject: 'BhaiVirundhu - Order Placed Successfully - ' + order_id, // Subject line
            text: 'Hello world ✔', // plaintext body
            html: html // html body
        };

        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return console.log(error);
            }
            console.log('Message sent: ' + info.response);
        });

      }

      db.close();
    });

  });

});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
