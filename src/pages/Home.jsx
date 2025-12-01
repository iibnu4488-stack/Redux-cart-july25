import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../redux/slices/productSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons/faBackward'
import { faForward } from '@fortawesome/free-solid-svg-icons'

function Home() {

  const dispatch = useDispatch()
  
 const {loading,allProducts,error} = useSelector(state=>state.productReducer)
// console.log(allProducts);

const [currentPage,setCurrentPage] = useState(1)
const productsPerPage = 8
const totalPage = Math.ceil (allProducts.length/ productsPerPage)


const pageItemLastIndex = currentPage * productsPerPage
const pageItemStartIndex = pageItemLastIndex - productsPerPage
const visibleProductsArray = allProducts?.slice(pageItemStartIndex,pageItemLastIndex)


  useEffect(()=>{
    dispatch(getAllproducts())
  },[])

  const navigateNextPage= ()=>{
    if(currentPage!=totalPage){
      setCurrentPage(currentPage+1)
    }
  }

  const navigatePreviousPage= ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
    <Header insideHome={true}/>
      <div className='container py-5'>
       {
        loading ?
        <div className='text-center my-5 fw-bolder fs-5'><img width="80px" className='me-2' src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="loading" />Loading...</div>
        :
         <div className="row my-5">

            {/* duplicate */}
           {
            allProducts?.length>0?
            visibleProductsArray?.map(product=>( 
            
          
           <div key={product?.id} className="col-md-3 mb-2">
                {/* card -react bootstrap*/}
            <Card style={{ width: '18rem' }}>
            <Card.Img height={'250px'} variant="top" src={product?.thumbnail}/>
            <Card.Body className='text-center'>
           <Card.Title> {product?.title}</Card.Title>
           <Link to={`/products/${product?.id}/view`} className='btn btn-primary'>View More</Link>
          </Card.Body>
           </Card>
            </div>
              ))
            :
            <p className='fs'>Product Not found!!!</p>
           }
           <div className="my-3 text-center">
            <buttton onClick={navigatePreviousPage}  className="btn"><FontAwesomeIcon icon={faBackward}/></buttton>
            <span className='fw-bolder'>{currentPage}of {totalPage}</span>
           <buttton onClick={navigateNextPage}  className="btn" ><FontAwesomeIcon icon={faForward}/></buttton>

           </div>
        </div>
       }
      </div>
    </>
  )
}

export default Home
