import React from 'react'
import { Link } from 'react-router-dom'
import Counter from '../../Counter'

const Card = ({cardId, name, images}) => {
  return (
    <div className="col-4">
      <div className="container row card-columns">
        <div className="card" key={cardId}>
          <Link to={`/CardsDetail/${cardId}`}>
            <img className="card-img-top" src={images} />
          </Link>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <Counter/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
