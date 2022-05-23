import React from 'react'
import Restaurant from "./Restaurant"


const Restaurants = (props) => {
  console.log(props)
  return (
    <div>
      <div className="container divider">
      {props.restaurants.map(elem=> (
        // console.log(elem)
                  <Restaurant key={elem.id} Restaurant={elem}/>
              ))}
        </div>
    </div>
  )
}

export default Restaurants