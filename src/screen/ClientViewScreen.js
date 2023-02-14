import React , {useEffect} from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listClientctsAction } from '../actions/ClientActions';
import { Button, Col, Row , Table} from 'react-bootstrap';
import { CLIENT_CREATE_RESET } from '../constants/ClientConstacts';
import ReactPaginate from 'react-paginate';


export const ClientViewScreen = ({ history }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLIENT_CREATE_RESET });

    dispatch(listClientctsAction(0));
  }, [history]);

  const clientList = useSelector((state) => state.clientList);
  const { loading, error, clients, pageResponse } = clientList;
  console.log(clients)

  const createClientHandler = () => {
    history.push('/client/create');
  };

  const handlePageClick = (data) => {
    let selected = data.selected;
    dispatch(listClientctsAction(selected));
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
          <h1 style={{color:'#a91b0c'}}>Clients</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3 ' onClick={createClientHandler}>
            <i className='fas fa-plus'></i> Create Client
          </Button>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='dark'>{error}</Message>
      ) : (
      <>
        {isObjectEmpty(clients) ? (<><Message variant='dark'><span style={{fontSize :'12px', fontWeight: '900',color :'#2B426D'}}>
          No clients to display</span></Message></>) : ( 
        <>
     <Table    hover responsive className='table-sm  mt-4'>

     <thead style={{background: "#2B426D", color: '#ffffff'}}>
             <tr>
               <th>Client name</th>
               <th>Client code</th>
               <th>No. of linkend contacts</th>
                <th>Actions</th>
             </tr>
      </thead>
         <tbody>
              {clients?.map((c) => (
                <tr key={c.clientId}>
                  <td>{c.name}</td>
                  <td>{c.code}</td>
                  <td>{c.numberOfLinked}</td>
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
               <th>Client name</th>
               <th>Client code</th>
               <th>No. of linkend contacts</th>
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
  )}

export default ClientViewScreen;
