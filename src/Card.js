import React from "react";
import {connect} from 'react-redux';
import { useState } from "react";
import { AddProduct } from "./action";
import { RemoveProduct } from "./action";

const Card=({products, AddProduct, RemoveProduct})=>{
    const [item,setItem]=useState("")
     const submitHandler = async e=>{
         e.preventDefault();
         if(item!==""){
            await AddProduct ({name:item});
             setItem("");
         }
         setItem("");
     } 
     return(
         <center>
         <div className="card" style={{"width":"18rem"}}>
          <div className="card-body">
           <form onSubmit={submitHandler}>
            <input type="text" value={item} placeholder="Add Products" onChange={(e)=>setItem(e.target.value)}/>
            <button type="submit" className="btn btn-success">Add Product
            </button>
           </form>
           <br/>
              { products.map(product=>{
                  return(
                      <div className="item">{product.name}
                      <span onClick={()=>RemoveProduct(product.name)} className="badge square">X</span>
                      </div>
                  )
              })

              }
            
          </div>
         </div>
         </center>
     )
}
const mapStateToProps=(state)=>({
    products:state
})
export default connect(mapStateToProps)(Card);
