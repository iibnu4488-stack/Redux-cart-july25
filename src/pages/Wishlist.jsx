import React from 'react'
import Header from './components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


function Wishlist() {

 const userWishlist = useSelector(state=>state.wishlistReducer)
 const userCart = useSelector(state=>state.cartReducer)
 
 const dispatch = useDispatch()

  const handleCart=(product)=>{
       const existingProduct = userCart?.find(item=>item.id==product.id)
       dispatch(addToCart(product))
       dispatch(removeWishlistItem(product.id))
       Swal.fire({
         title: 'Completed!',
         text: existingProduct?`Quantity of ${product.title},is updated successsfully`:'product added to your cart...',
         icon: 'success',
         confirmButtonText: 'Okay'
       })
   
   
      }
     
  return (
   
    <>
     <Header/>
      <div className='container py-5'>
        {/* wishlist with content */}
       {
       userWishlist?.length>0?
       <div className="row my-5">
           {
            userWishlist?.map(product=>(
          
            
          <div key={product?.id} className="col-md-3">
                {/* card -react bootstrap*/}
       <Card style={{ width: '18rem' }}>
          <Card.Img height={'250px'} variant="top" src={product?.thumbnail}/>
          <Card.Body className='text-center'>
          <Card.Title> {product?.title}</Card.Title>
           <div className="d-flex justify-content-evenly my-1">
            <button onClick={()=>dispatch(removeWishlistItem(product?.id))}  className="btn text-danger"><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
             <button onClick={()=>handleCart(product)} className="btn text-success fs-4"><FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
      </Card.Body>
    </Card>
                
            </div>
      
            ))
           }
        </div>
        :
        <div style={{height:"80vh"}} className='d-flex justify-content-center align-items-center flex-column'>
          <img className='w-25' src="https://i.pinimg.com/originals/fd/e7/85/fde785921d8d09fa62ee0109cc6e38b6.gif" alt="empty cart" />
          <h3>Wishlist is Empty</h3>
          <Link to={'/'} className='btn btn-primary'>Add More</Link>
        </div>
        }
      </div>
    </>
  )
}

export default Wishlist
