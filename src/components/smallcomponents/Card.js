import React from 'react'

const Card = ({item}) => {
  return (
    <div className="card mt-2">
        <img className='image' src={item.imageUrl} alt="Avatar" />
        <div className="description">
            <h5>{item.name}</h5>
            <p>{item.description}</p>
            <button className='btn btn-dark'>Visa Recept</button>
        </div>
    </div>
  )
}

export default Card