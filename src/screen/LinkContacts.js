import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listContactsAction } from '../actions/ContactActions';
import { listClientctsAction } from '../actions/ClientActions';
import { CLIENT_CREATE_RESET } from '../constants/ClientConstacts';
import { Alert,  Button, Col, Form, Row , Table} from 'react-bootstrap';
import { CONTACTS_CREATE_RESET } from '../constants/ContactCostants';
import { linkContactAction} from '../actions/LinkToContactActions';



export const LinkContacts = ({history}) => {

  const[clientID,setClientID]=useState(0);
  const[contactID,setContactID]=useState(0);
  const[message,setMessage]=useState('');


  const link = useSelector((state) => state.createLink);
  const {success}=link;
 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: CLIENT_CREATE_RESET });
    dispatch({ type: CONTACTS_CREATE_RESET });

    dispatch(listClientctsAction(0));
    dispatch(listContactsAction(0))
  }, [history]);

  const clientList = useSelector((state) => state.clientList);
  const contactsList = useSelector((state) => state.contactsList);


  const { contacts } = contactsList;
  const loading_=clientList.loading;
  const {  clients ,loading, error} = clientList;

  const submitHandler = (e) => {
    e.preventDefault();
      if(clientID===0){
        setMessage('Please select client')
      }else if(contactID===0){
          setMessage('Please select contact')
      }else{
        dispatch(linkContactAction({contactID,clientID}))
      }
  }
  
  return (
    <>
    <Row className='align-items-center'>
       <Col>
         <h1 style={{color:'#a91b0c'}}>Link Contacts To Client</h1>
       </Col>
     
     </Row>
     <hr></hr>
      <Form.Label style={{color: '#a91b0c'}}>{message}</Form.Label>

     {loading && loading_ ? (
       <Loader />
     ) : error ? (
       <Message variant='dark'>{error}</Message>
     ) : (
    <>

     <Row>
     <Col  xs={12} md={6}  >
     <Form.Group controlId='client'>
                <Form.Label>Select Client</Form.Label>
                <Form.Control as='select'  value={clientID} required onChange={(e) => setClientID(e.target.value)}>
                <option value='0'>Select Client  Code</option>
                  {clients.length > 0 &&
                    clients.map((c) => {
                      return (
                        <option key={c.clientId} value={c.clientId}>
                          {c.code}
                        </option>
                      );
                    })}
                </Form.Control>
        </Form.Group>

        <Form.Group controlId='contacts'>
                <Form.Label>Select Contact</Form.Label>
                <Form.Control as='select'  value={contactID} required onChange={(e) => setContactID(e.target.value)}>
                <option value='0'>Select Contact  Code</option>
                  {contacts.length > 0 &&
                    contacts.map((c) => {
                      return (
                        <option key={c.contactId} value={c.contactId}>
                         {c.name} {c.surname}
                        </option>
                      );
                    })}
                </Form.Control>
        </Form.Group>
       <Button type='submit' onClick={submitHandler} style={{background: '#2B426D' ,borderColor: '#2B426D'}}>
             Submit 
        </Button>
     </Col>
     </Row>
     </>
       )}
        {success ? (<Alert className='alert alert-success mt-4'>Client linked successfully  !!!!!!</Alert>) :(<></>)} 
   </>
  )
}

export default LinkContacts
