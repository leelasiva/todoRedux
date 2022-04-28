import React from 'react';
import {connect} from 'react-redux';

const Badge=({products})=>{
    return(
        <div style={{"margin":"80px 0px 10p 0px"}}>
          <center>
            <button type="button" className="btn btn-primary position-relative">Total Products</button>
            <span className="position-obsolute top-0 start-100 translate-middle badge rounded-pill">{products.length}
            </span>
          </center>
        </div>
    )
}
const mapStateToProps=state=>({
    products:state
})
export default connect(mapStateToProps)(Badge);