import React from 'react';

const Card=(props)=>{
    return(
        <>
         <div className='col-md-4 col-10 mx-auto'>
        <div className="card">
  <img src={props.img} className="card-img-top" alt="image"/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">Want Us to build Complete Website !!</p>
    <a href="/contact" className="btn btn-primary">Contact us</a>
  </div>
</div>

        </div>
        </>
    )
    }
    export default Card;