import React,  {useEffect, useState } from 'react'
import { Button, Col, Form, Row , Table} from 'react-bootstrap';
import FullPageLoader from '../components/FullPageLoader';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listClientctsAction } from '../actions/ClientActions';

export const HomeScreen = ({history}) => {

  useEffect(() => {
    dispatch(listClientctsAction(0));
  }, [history]);

  const dispatch = useDispatch();

  const clientList = useSelector((state) => state.clientList);
  const { loading, error, clients, pageResponse} = clientList;


  const handlePageClick = (data) => {
    let selected = data.selected;
    dispatch(listClientctsAction(selected));
  };

  return (
   <>
   <h1 className='mt-4' style={{fontWeight: '900', color :'#a91b0c'}}>Binary City Clients  </h1>

   <Row>
     

    {loading ? (
       <Col>
            <Loader />
       </Col>
   
      ) : error ? (
        <Col>
        <Message variant='danger'>{error}</Message>
        </Col>
      ) : (
           
        <>
      
         {clients?.map((c) => (
          <Col  key={c.clientId} sm={12} md={6} lg={4} xl={3}>
         <Card  className='my-3 rounded' style={{ height: '140px' }}>
        <Card.Header style={{fontSize :'12px', fontWeight: '900', background: '#4E6E8D' ,color :'#fff'}}>
        <Card.Title   as='div'>
        {c.name}
        </Card.Title>
        </Card.Header>
        <Card.Body style={{ background: '#2B426D' ,color :'#fff', fontSize :'20px', fontWeight: '900' }}>
        {c.code}
          <Card.Text as='div'>

          </Card.Text>

          <Card.Text as='div' className='my-3'>

          </Card.Text>
        </Card.Body>

        <Card.Footer  style={{fontSize :'12px', fontWeight: '900', background: '#4E6E8D' ,color :'#fff'}}>

        </Card.Footer>
      </Card>    
       </Col>

         ))}
        
        </>
    
     )}  
    </Row>

    <Row  className='m-5 justify-content-md-center  '>
        <ReactPaginate
    
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageResponse?.totalPages}
          marginPagesDisplayed={50}
          pageRangeDisplayed={10}
          onPageChange={(e) => handlePageClick(e)}
          containerClassName={'pagination'}
          activeClassName={'page-item active'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-link'}
          nextClassName={'page-link'}
        />
      </Row>
   </>
  )

}
 export default HomeScreen;