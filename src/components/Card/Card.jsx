import React from 'react'

const Card = (props) => {
    const cardStyle = {"width" : "18rem"}
    const imgStyle = {"maxHeight" : "150px", "minHeight" : "150px", "borderRadius" : "50%", "width" : "40%", "objectFit" : "cover"}
    const link = "/detail/" + props.id
  return (
    <div className="card m-3" style={cardStyle}>
        <div className='d-flex justify-content-center'>
        <img src={props.imgPath} className="card-img-top py-3" alt={props.desc} style={imgStyle} />
        </div>
        <div className="card-body">
            <h5 className="card-title text-center">{props.name}</h5>
            <p className="card-text text-center">{props.desc}</p>
            <a href={link} className="btn btn-outline-dark w-100">Go Detail!</a>
        </div>
    </div>
  )
}

export default Card
