import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Button, Form,
    FormGroup, Label,
    Input, FormText,
    Row, Col,
    Card, CardBody,
    CardTitle,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter

} from 'reactstrap';

import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {ToastsContainer, ToastsStore } from 'react-toasts';
import { Placeorder }  from '../api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




import image1 from './images/mutton-briyani.png';
import image2 from './images/chicken-briyani.jpg';
import image3 from './images/chicken-65.png';
import image4 from './images/kidney-Fry.jpg';
import image5 from './images/Boti-Fry.jpg';
import image6 from './images/Liver-Fry.jpg';

import image7 from './images/logo.png';
import image8 from './images/food.jpg';


import image9 from './images/google-pay.jpeg';
import image10 from './images/paytm.jpeg';
import image11 from './images/phone-pe.jpeg';
import image12 from './images/bank-transfer.png';


import image13 from './images/banner.jpeg';
import image14 from './images/offer.jpeg';







export default class AnalyticsDashboard1 extends Component {


    constructor() {
        super();

        this.state = {
            qty_1: 0,
            qty_2: 0,
            qty_3: 0,
            qty_4: 0,
            qty_5: 0,
            qty_6: 0,
            qty_7: 0,
            qty_8: 0,
            name: '',
            email: '',
            mobile: '',
            cartpopup_state:false,
            placeorderpopup_state: false,
            addressline_1: "",
            addressline_2: "",
            city:"",
            pincode: "",
            cartmessage: "",
            totalamount_show_popup : 0,
            finalorder: [

            ],

            order_id: "",
            order_success: false,
            deliverydate: ""
        };


    }

    placeorderpopup(){


      const localarray = []

      var totalamount_show = 0;

      if(this.state.qty_1 > 0){
        localarray.push({item:1, name: "Mutton - சிறு குடும்பம்",qty: this.state.qty_1, price: 1099})
        totalamount_show = totalamount_show + (this.state.qty_1 * 1099)
      }

      if(this.state.qty_2 > 0){
        localarray.push({item:2, name: "Mutton - கூட்டு குடும்பம் ",qty: this.state.qty_2, price: 1999})
        totalamount_show = totalamount_show + (this.state.qty_2 * 1999)
      }

      if(this.state.qty_3 > 0){
        localarray.push({item:3, name: "Chicken - சிறு குடும்பம்",qty: this.state.qty_3, price: 699})
        totalamount_show = totalamount_show + (this.state.qty_3 * 699)
      }


      if(this.state.qty_4 > 0){
        localarray.push({item:4, name: "Chicken - கூட்டு குடும்பம்",qty: this.state.qty_4, price: 1099})
        totalamount_show = totalamount_show + (this.state.qty_4 * 1099)
      }

      if(this.state.qty_5 > 0){
        localarray.push({item:5, name: "Chicken 65",qty: this.state.qty_5, price: 249})
        totalamount_show = totalamount_show + (this.state.qty_5 * 249)
      }

      if(this.state.qty_6 > 0){
        localarray.push({item:6, name: "kidney Fry",qty: this.state.qty_6, price: 249})
        totalamount_show = totalamount_show + (this.state.qty_6 * 249)
      }

      if(this.state.qty_7 > 0){
        localarray.push({item:7, name: "Liver Fry",qty: this.state.qty_7, price: 249})
        totalamount_show = totalamount_show + (this.state.qty_7 * 249)
      }

      if(this.state.qty_8 > 0){
        localarray.push({item:8, name: "Boti Fry",qty: this.state.qty_8, price: 249})
        totalamount_show = totalamount_show + (this.state.qty_8 * 249)
      }



      this.setState({
        placeorderpopup_state: true,
        finalorder: localarray,
        totalamount_show_popup: totalamount_show
      });
    }

    closeplaceorderpopup(){

      this.setState({
        placeorderpopup_state: false
      });
    }

    closecartpopup(){

      this.setState({
        cartpopup_state: false
      });
    }

    closeorderconfirmpopup(){

      this.setState({
        order_success: false
      });
    }




    place_order(){

      const history = this;


      if(this.state.deliverydate === ""){
        alert("Delivery Date Cannot be empty...")
      }
      else if(this.state.name === ""){
        alert("Name Cannot be empty...")
      }
      else if(this.state.mobile === ""){
        alert("Mobile Number Cannot be empty...")
      }
      else if(this.state.addressline_1 === ""){
        alert("Alteast one address is needed...")
      }
      else if(this.state.qty_1 > 0 || this.state.qty_2 > 0 || this.state.qty_3 > 0 || this.state.qty_4 > 0 || this.state.qty_5 > 0 || this.state.qty_6 > 0 || this.state.qty_7 > 0 || this.state.qty_8 > 0){

        var d = new Date(this.state.deliverydate);
        var n = d.getDay()

        console.log(n)

        if(n === 0 || n === 3){
          Placeorder(this.state.qty_1,this.state.qty_2,this.state.qty_3,this.state.qty_4,this.state.qty_5,this.state.qty_6,this.state.qty_7,this.state.qty_8,this.state.name,this.state.email,this.state.mobile,this.state.addressline_1,this.state.addressline_2,this.state.city,this.state.pincode,this.state.deliverydate).then(function(response) {
            if(response.value.data.status === "success"){
              history.setState({
                qty_1: 0,
                qty_2: 0,
                qty_3: 0,
                qty_4: 0,
                qty_5: 0,
                qty_6: 0,
                qty_7: 0,
                qty_8: 0,
                name: '',
                email: '',
                mobile: '',
                cartpopup_state:false,
                placeorderpopup_state: false,
                addressline_1: "",
                addressline_2: "",
                city:"",
                pincode: "",
                cartmessage: "",
                totalamount_show_popup : 0,
                finalorder: [

                ],
                order_id:response.value.data.order_id,
                order_success: true
              });
              history.closeplaceorderpopup()

            }
            else{
              alert("Cannot Place Order... Please try after some time...")

            }
          });
        }
        else{
          alert("We accept orders only for Wednesday and Sunday")
        }


      }
      else{
        alert("Please select some products")
      }
    }

    addtocart(product_id){

            if(product_id === 1){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "Mutton - சிறு குடும்பம் - "+  this.state.qty_1});
            }

            if(product_id === 2){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "Mutton - கூட்டு குடும்பம் - "+  this.state.qty_2});
            }

            if(product_id === 3){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "Chicken - சிறு குடும்பம் - "+  this.state.qty_3});
            }


            if(product_id === 4){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "Chicken - கூட்டு குடும்பம் - "+  this.state.qty_4});
            }

            if(product_id === 5){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "Chicken 65 - "+  this.state.qty_5});
            }

            if(product_id === 6){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "kidney Fry - "+  this.state.qty_6});
            }

            if(product_id === 7){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "Liver Fry - "+  this.state.qty_7});
            }

            if(product_id === 8){
              this.setState({ cartpopup_state: true });
              this.setState({ cartmessage: "Boti Fry - "+  this.state.qty_8});
            }

    }


    updateInputValue(event) {

      this.setState({
        [event.target.id]: event.target.value
      });
    }



    render() {




        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <ToastsContainer position="TOP_CENTER" store={ToastsStore}/>




                    <div className="app-main">
                        <div className="app-main__outer">
                            <div className="app-main__inner">


                                        <Row>
                                            <Col md="12">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">
                                                        <img src = {image7} className = "imglogo" alt = "logo"/>

                                                        <br/>
                                                        <br/>
                                                        <h1>சிக்கன் மற்றும் மட்டன் பிரியாணி , கலக்கலான கல்யாண பிரியாணி</h1>

                                                        <br/>
                                                        <br/>

                                                        <a href="https://www.youtube.com/bhaivirundhu" target = "_blank"
                                                          className="youtube social">
                                                          <FontAwesomeIcon icon={faYoutube} size="2x" />
                                                        </a>
                                                        <a href="https://www.facebook.com/bhaivirundhu" target = "_blank"
                                                          className="facebook social">
                                                          <FontAwesomeIcon icon={faFacebook} size="2x" />
                                                        </a>
                                                        <a href="ttps://www.facebook.com/bhaivirundhu" className="twitter social" target = "_blank">
                                                          <FontAwesomeIcon icon={faTwitter} size="2x" />
                                                        </a>
                                                        <a href="ttps://www.facebook.com/bhaivirundhu" target = "_blank"
                                                          className="instagram social">
                                                          <FontAwesomeIcon icon={faInstagram} size="2x" />
                                                        </a>
                                                    </div>
                                                </div>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Mutton - சிறு குடும்பம்
                                                        </div>
                                                        <img src = {image1} className = "thumbnailimage" alt = "muttonbriyani"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            1/2 kg (serves 3-4)
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                             <b>₹ 1099</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_1" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(1)} >Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Mutton -  கூட்டு குடும்பம்
                                                        </div>
                                                        <img src = {image1} className = "thumbnailimage" alt = "muttonbriyani"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            1 kg  (serves 7-8)
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                             <b>₹ 1999</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_2" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(2)}>Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Chicken - சிறு குடும்பம்
                                                        </div>
                                                        <img src = {image2} className = "thumbnailimage" alt = "chicken briyani"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            1/2 kg (serves 3-4)
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                             <b>₹ 699</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_3" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(3)}>Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Chicken - கூட்டு குடும்பம்
                                                        </div>
                                                        <img src = {image2} className = "thumbnailimage" alt = "chicken briyani"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            1 kg  (serves 7-8)
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                             <b>₹ 1099</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_4" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(4)}>Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>


                                        </Row>
                                        <Row>
                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Chicken 65
                                                        </div>
                                                        <img src = {image3} className = "thumbnailimage" alt = "chicken 65"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            (serves 7-8
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                             <b>₹ 249</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_5" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(5)}>Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Kidney Fry
                                                        </div>
                                                        <img src = {image4} className = "thumbnailimage" alt = "kidney fry"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            (serves 7-8)
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                             <b>₹ 249</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_6" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(6)}>Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>

                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Liver Fry
                                                        </div>
                                                        <img src = {image5} className = "thumbnailimage" alt = "Liver fry"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            (serves 7-8)
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                             <b>₹ 249</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_7" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(7)}>Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>
                                            <Col md="3">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">

                                                        <div className="widget-numbers">
                                                            Boti Fry
                                                        </div>
                                                        <img src = {image6} className = "thumbnailimage" alt = "boti fry"/>
                                                        <br/>
                                                        <br/>
                                                        <div className="widget-heading">
                                                            (serves 7-8)
                                                        </div>

                                                        <br/>
                                                        <div className="widget-heading">
                                                            <b> ₹ 249</b>
                                                        </div>

                                                        <br/>
                                                        <div className="widget-subheading">

                                                        <table width = "100%">
                                                          <tr>
                                                            <td align = "center">

                                                            <FormGroup>
                                                                <Input type="select" name="select" id="qty_8" className = "qty_dropdown" onChange={event => this.updateInputValue(event)}>
                                                                    <option>0</option>
                                                                    <option>1</option>
                                                                    <option>2</option>
                                                                    <option>3</option>
                                                                    <option>4</option>
                                                                    <option>5</option>
                                                                </Input>
                                                            </FormGroup>

                                                            </td>
                                                          </tr>
                                                        </table>

                                                        </div>
                                                        <Button color="primary" className="mt-1" onClick={() => this.addtocart(8)}>Add To Cart</Button>
                                                        <br/>

                                                    </div>

                                                </div>
                                            </Col>


                                        </Row>

                                        <Row>
                                            <Col md="12">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">
                                                        <Button block className="mb-2 mr-2" color="primary" onClick={() => this.placeorderpopup()}>Place Order</Button>
                                                    </div>
                                                </div>

                                            </Col>
                                        </Row>


                                        <Row>
                                            <Col md="12">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">
                                                    <div className="widget-numbers">
                                                        Once the order is placed successfully, Please send money through below modes with your order number as reference
                                                    </div>
                                                    <br/>
                                                    <Row>
                                                        <Col md="3">
                                                            <div className="card mb-3 widget-chart">
                                                                <div className="widget-chart-content">

                                                                    <img src = {image9} className = "thumbnailimage-payment" alt = "google pay"/>
                                                                    <br />
                                                                    <div className="widget-numbers">
                                                                        <a href = "https://pay.google.com/">Google Pay</a>
                                                                    </div>
                                                                    <br />
                                                                    <div className="widget-numbers">
                                                                      +91 9791114463
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md="3">
                                                            <div className="card mb-3 widget-chart">
                                                                <div className="widget-chart-content">
                                                                    <img src = {image10} className = "thumbnailimage-payment" alt = "paytm"/>
                                                                    <br />
                                                                    <div className="widget-numbers">
                                                                        <a href = "https://paytm.com/download-paytm-app">Paytm</a>
                                                                    </div>
                                                                    <br />
                                                                    <div className="widget-numbers">
                                                                      +91 9791114463
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </Col>
                                                        <Col md="3">
                                                            <div className="card mb-3 widget-chart">
                                                                <div className="widget-chart-content">
                                                                    <img src = {image11} className = "thumbnailimage-payment" alt = "phonepe"/>
                                                                    <br />
                                                                    <div className="widget-numbers">
                                                                        <a href = "https://www.phonepe.com/app-download/">PhonePe</a>
                                                                    </div>
                                                                    <br />
                                                                    <div className="widget-numbers">
                                                                      +91 9791114463
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col md="3">
                                                            <div className="card mb-3 widget-chart">
                                                                <div className="widget-chart-content">
                                                                    <div className="widget-numbers">
                                                                        Bank Transfer
                                                                    </div>
                                                                    <img src = {image12} className = "thumbnailimage-payment"  alt = "bank transfer"/>
                                                                    <br />
                                                                    <br />
                                                                    <div className="widget-heading">
                                                                      Account Number : 50100354747390
                                                                      <br/>
                                                                      IFSC: HDFC0001299
                                                                      <br/>
                                                                      Account Holder: SYED NIZAM S
                                                                      <br/>
                                                                      Branch: THIRUVOTTIYUR
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Col md="6">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">
                                                        <img src = {image13} className = "footerimage" alt = "footer"/>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md="6">
                                                <div className="card mb-3 widget-chart">
                                                    <div className="widget-chart-content">
                                                        <img src = {image14} className = "footerimage" alt = "footer"/>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>




                          </div>
                      </div>
                  </div>


                  <Modal isOpen={this.state.placeorderpopup_state}>
                    <ModalHeader >Order Confirmation</ModalHeader>
                    <ModalBody>


                      <table className = "ordertable">
                      <tbody>
                          <tr align = "center">
                            <th className = "ordertableth" align = "center">Product name</th>
                            <th className = "ordertableth" align = "center">Quanity</th>
                            <th className = "ordertableth" align = "center">Price</th>
                            <th className = "ordertableth" align = "center">Total</th>
                          </tr>
                          {this.state.finalorder.map((value, index) => {
                            return <tr>
                              <td className = "ordertabletd" align = "center">{value["name"]}</td>
                              <td className = "ordertabletd" align = "center">{value["qty"]}</td>
                              <td className = "ordertabletd" align = "center">{value["price"]}</td>
                              <td className = "ordertabletd" align = "center">{parseInt(value["qty"]) * parseInt(value["price"])}</td>
                            </tr>
                          })}

                          <tr>
                            <td className = "ordertabletd" align = "center"></td>
                            <td className = "ordertabletd" align = "center"></td>
                            <td className = "ordertabletd" align = "center">Total Amount</td>
                            <td className = "ordertabletd" align = "center">{this.state.totalamount_show_popup}</td>
                          </tr>
                      </tbody>
                      </table>
                      <br/>
                      <Input type="date" placeholder="Delivery Date" value={this.state.deliverydate} onChange={event => this.updateInputValue(event)} id = "deliverydate"/>
                      <br/>
                      <Input type="text" placeholder="Name" value={this.state.name} onChange={event => this.updateInputValue(event)} id = "name"/>
                      <br/>
                      <Input type="text" placeholder="Email (optional)" value={this.state.email} onChange={event => this.updateInputValue(event)} id = "email"/>
                      <br/>
                      <Input type="text" placeholder="Mobile" value={this.state.mobile} onChange={event => this.updateInputValue(event)} id = "mobile"/>
                      <br/>
                      <Input type="text" placeholder="Address Line 1" value={this.state.addressline_1} onChange={event => this.updateInputValue(event)} id = "addressline_1"/>
                      <br/>
                      <Input type="text" placeholder="Address Line 2" value={this.state.addressline_2} onChange={event => this.updateInputValue(event)} id = "addressline_2"/>
                      <br/>
                      <Input type="text" placeholder="city" value={this.state.city} onChange={event => this.updateInputValue(event)} id = "city"/>
                      <br/>
                      <Input type="text" placeholder="pincode " value={this.state.pincode} onChange={event => this.updateInputValue(event)} id = "pincode"/>

                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={() => this.place_order()}>Place order</Button>{' '}
                      <Button color="secondary" onClick={() => this.closeplaceorderpopup()}>Close</Button>
                    </ModalFooter>
                  </Modal>

                  <Modal isOpen={this.state.cartpopup_state}>
                    <ModalHeader >Cart Updated Successfully</ModalHeader>
                    <ModalBody> { this.state.cartmessage } </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={() => this.placeorderpopup()}>Place order</Button>{' '}
                      <Button color="secondary" onClick={() => this.closecartpopup()}>Close</Button>
                    </ModalFooter>
                  </Modal>



                    <Modal isOpen={this.state.order_success}>
                      <ModalHeader > Order Placed successfully... <Button color="secondary" onClick={() => this.closeorderconfirmpopup()}>Close</Button></ModalHeader>
                      <ModalBody> <h4> Your order ID : { this.state.order_id }</h4>

                        <br/>
                        <br />

                        <Row>
                            <Col md="12">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-chart-content">

                                        <img src = {image9} className = "thumbnailimage-payment" alt = "google pay"/>
                                        <br />
                                        <div className="widget-numbers">
                                            <a href = "https://pay.google.com/">Google Pay</a>
                                        </div>
                                        <br />
                                        <div className="widget-numbers">
                                          +91 9791114463
                                        </div>
                                    </div>
                                </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md="12">
                            <div className="card mb-3 widget-chart">
                                <div className="widget-chart-content">
                                    <img src = {image10} className = "thumbnailimage-payment" alt = "paytm"/>
                                    <br />
                                    <div className="widget-numbers">
                                        <a href = "https://paytm.com/download-paytm-app">Paytm</a>
                                    </div>
                                    <br />
                                    <div className="widget-numbers">
                                      +91 9791114463
                                    </div>
                                </div>

                            </div>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                                <div className="card mb-3 widget-chart">
                                    <div className="widget-chart-content">
                                        <img src = {image11} className = "thumbnailimage-payment" alt = "phonepe"/>
                                        <br />
                                        <div className="widget-numbers">
                                            <a href = "https://www.phonepe.com/app-download/">PhonePe</a>
                                        </div>
                                        <br />
                                        <div className="widget-numbers">
                                          +91 9791114463
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            </Row>
                            <Row>
                            <Col md="12">
                              <div className="card mb-3 widget-chart">
                                  <div className="widget-chart-content">
                                      <div className="widget-numbers">
                                          Bank Transfer
                                      </div>
                                      <img src = {image12} className = "thumbnailimage-payment"  alt = "bank transfer"/>
                                      <br />
                                      <br />
                                      <div className="widget-heading">
                                        Account Number : 50100354747390
                                        <br/>
                                        IFSC: HDFC0001299
                                        <br/>
                                        Account Holder: SYED NIZAM S
                                        <br/>
                                        Branch: THIRUVOTTIYUR
                                      </div>
                                  </div>
                              </div>
                            </Col>
                        </Row>

                      </ModalBody>
                      <ModalFooter>
                        <Button color="secondary" onClick={() => this.closeorderconfirmpopup()}>Close</Button>
                      </ModalFooter>
                    </Modal>

                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
