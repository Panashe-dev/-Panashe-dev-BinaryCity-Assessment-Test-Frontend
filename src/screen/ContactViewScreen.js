import React, {useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row , Table} from 'react-bootstrap';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listContactsAction } from '../actions/ContactActions';
import { CONTACTS_CREATE_RESET } from '../constants/ContactCostants';
import ReactPaginate from 'react-paginate';

export const ContactViewScreen = ({ history }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CONTACTS_CREATE_RESET });

    dispatch(listContactsAction(0));
  }, [history]);


  const contactsList = useSelector((state) => state.contactsList);
  const { loading, error, contacts,   pageResponse } = contactsList;
  console.log(contacts)

  const createContactsHandler = () => {
    history.push('/contact/create');
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    dispatch(listContactsAction(selected));
  };

  
  const isObjectEmpty = (objectName) => {
    for (let prop in objectName) {
      if (objectName.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  };


  return (
    <>
     <Row className='align-items-center'>
        <Col>
          <h1 style={{color:'#a91b0c'}}>Contacts</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3 'onClick={createContactsHandler}>
            <i className='fas fa-plus'></i> Create Contact
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
      <>
        {isObjectEmpty(contacts) ? (<><Message variant='dark'><span style={{fontSize :'12px', fontWeight: '900',color :'#2B426D'}}>
          No contacts to display</span></Message></>) : ( 
        <>
      <Table   hover responsive className='table-sm mt-4'>

      <thead style={{background: "#2B426D", color: '#ffffff'}}>
        <tr>
          <th>full name</th>
          <th>Contact email adddres</th>
          <th>No. of linkend contacts</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
         {contacts?.map((c) => (
           <tr key={c.contactId}>
             <td>{c.name} {c.surname}</td>
             <td>{c.email}</td>
              <td>
               {c.client.length}
              </td>
              <td>
                    <LinkContainer to={''} >
                      <Button  className='btn-sm'>
                        <i className='fas fa-edit'>Edit</i>
                      </Button>
                    </LinkContainer>
                    <Button className='btn-sm' >
                      <i className='fas fa-trash'>Delete</i>
                    </Button>
                  </td>
           </tr>
         ))}
       </tbody>
       <thead style={{background: "#2B426D", color: '#ffffff'}}>
        <tr>
          <th>full name</th>
          <th>Contact email adddres</th>
          <th>Contact email adddres</th>
          <th>Actions</th>
        </tr>
     </thead>
    </Table>

    <Row className='m-5 justify-content-md-center '>
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
        )}
     </>
     )}
       
   </>
  )
  
}
 export default ContactViewScreen
