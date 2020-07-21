import React from 'react'
import PropTypes from 'prop-types';

const ProductTable =(props)=>{
    return (
        <table style={{marginLeft:'500px' , marginTop:'150px'}}>
        
            <tr>
                <th style={{fontSize:"25px", border:"1px solid black"}}>Name</th>
                <th style={{fontSize:"25px", border:"1px solid black"}} >Price</th>
                <th style={{fontSize:"25px", border:"1px solid black"}} >Category</th>
            </tr>
       {props.x.map((products) => (
      
            
       <tr >
          <td style={{fontSize:"25px", border:"1px solid black"}} >{products.Name}</td>
          <td style={{fontSize:"25px", border:"1px solid black"}} >{products.Price}</td>
          <td style={{fontSize:"25px", border:"1px solid black"}} >{products.Category}</td>
          </tr>
      
       ))}
        </table>
       
    )
}
ProductTable.PropsType= {
  Name:PropTypes.string,
  Price:PropTypes.string,
  Category:PropTypes.string,
}
export default ProductTable ;
