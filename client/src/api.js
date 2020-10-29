const axios = require('axios');


export async function Placeorder(item_1,item_2,item_3,item_4,item_5,item_6,item_7,item_8,email,mobile,addressline_1,addressline_2,city,pincode,deliverydate) {

  var promise=new Promise(function(resolve, reject) {

    axios.get('/Placeorder?item_1=' + item_1 + "&item_2=" + item_2 + "&item_3=" + item_3 + "&item_4=" + item_4 + "&item_5=" + item_5 + "&item_6=" + item_6 + "&item_7=" + item_7 + "&item_8=" + item_8 + "&email=" + email + "&mobile=" + mobile + "&addressline_1=" + addressline_1+ "&addressline_2=" + addressline_2+ "&city=" + city+ "&pincode=" + pincode + "&deliverydate=" + deliverydate)
    .then(function (response) {
      console.log(response);
      resolve({value: response, status: "success"})
    })
    .catch(function (error) {
      console.log(error);
      reject({error: error, status: "error"});
    });


  });
  return promise;



}
