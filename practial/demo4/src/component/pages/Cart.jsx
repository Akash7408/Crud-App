import React,{Component} from 'react';
import "../styles/cart.css";
import Products from "./Products";

export default class Cart extends Component{
	//members => variable,

	state = {
		products : [
			{name:"Smart Watch",price:"1200.00",qty:0,img:"watch.jpeg"},
			{name:"Dream Phone Pink Cover",price:"200.00",qty:2,img:"watch.jpeg"},
			{name:"Hero Bicycle",price:"5000.00",qty:3,img:"watch.jpeg"},
			{name:"Redmi X1 Note",price:"10,000.00",qty:0,img:"watch.jpeg"},
			{name:"LCD-QT 64inches HD TV",price:"50,0000.00",qty:0,img:"watch.jpeg"},
			{name:"LCD-QT 64inches HD TV",price:"50,0000.00",qty:0,img:"watch.jpeg"},
			{name:"LCD-QT 64inches HD TV",price:"50,0000.00",qty:0,img:"watch.jpeg"},
		]
	}


	//
	render(){ 
		return (
			<div id="cart-container">
				<h1>My Cart ({this.state.products.length}) </h1>
				<hr/>
				 <Products Products={this.state.products} updateQty={this.incrementQty}/>
			</div>
		)
	}

	//incrementQty
	incrementQty = () =>{
		console.log("Increment Hoga");
	}

	decrementQty = () =>{
		
	}
}