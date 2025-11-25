import React from 'react'
import Header from './components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Wishlist() {
  return (
   
    <>
     <Header/>
      <div className='container py-5'>
        {/* wishlist with content */}
        <div className="row my-5">
            <div className="row my-5">
              {/* duplicate */}
            <div className="col-md-3">
                {/* card -react bootstrap*/}
       <Card style={{ width: '18rem' }}>
        <Card.Img height={'250px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZtwL9tZT_NpXkJyo6lH_q6tHsMNM1kLagw&s"/>
        <Card.Body className='text-center'>
        <Card.Title> Title</Card.Title>
        <div className="d-flex justify-content-evenly my-1">
            <button className="btn text-danger"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
             <button className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
      </Card.Body>
    </Card>
                
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
