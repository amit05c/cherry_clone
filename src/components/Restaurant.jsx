import React from 'react'

const Restaurant = ({Restaurant}) => {
  return (
    <div>

            

            <div className="card">
                  <img width="254" height="160px" src={Restaurant.image} />
                  <div className="restaurant-details">
                      <div className="restaurant-title">{Restaurant.name}</div>
                      <div className="restaurant-subtitle">{Restaurant.category.map(cat=>(cat," "))} </div>
                  </div>
                  <div className="restaurant-info">
                      <div className="restaurant-ratings">
                          <i className="material-icons star-icon">{Restaurant.rating}</i> 4.3
                      </div>
                       <div className="restaurant-delivery-timings">{Restaurant.deliveryTimings}</div>
                      <div className="restaurant-cost-for-two">{Restaurant.costForTwo}</div>
                  </div>
                  <div className="offer-banner">
                      <span className="material-icons"> local_offer </span>
                      <span className="offer-text">{Restaurant.offer.join(' | ')}</span>
                  </div>
              </div>
               
            </div>
        
    
  )
}

export default Restaurant