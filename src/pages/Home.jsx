import React from 'react'
import Header from './components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
      <div className='container py-5'>
        <div className="row my-5">
            {/* duplicate */}
            <div className="col-md-3">
                {/* card -react bootstrap*/}
       <Card style={{ width: '18rem' }}>
        <Card.Img height={'250px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZtwL9tZT_NpXkJyo6lH_q6tHsMNM1kLagw&s"/>
        <Card.Body className='text-center'>
        <Card.Title> Title</Card.Title>
        <Link to={'/products/id/view'} className='btn btn-primary'>View More</Link>
      </Card.Body>
    </Card>
                
            </div>
        </div>
      </div>
    </>
  )
}

export default Home
