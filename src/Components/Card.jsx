import React from 'react'

const Card = ({user}) => {
  return (

    <div >
    <h3>Gracias por ser parte del desfaío {user.nombre} de {user.pais} 🫶🏾</h3>
    <h3>Tu cancón favorita es: {user.cancion}, una excelente elección!🤩</h3>
    </div>
  )
}

export default Card