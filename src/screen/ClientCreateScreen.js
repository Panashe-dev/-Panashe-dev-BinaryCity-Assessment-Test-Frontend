import React , {useState,useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert, Button, Col, Form, Row , Table} from 'react-bootstrap';
import { createClientAction} from '../actions/ClientActions';
import Loader from '../components/Loader';
import Message from '../components/Message';



export const ClientCreateScreen = () => {

    const [name, setName] = useState('');
    const [code,setCode]= useState('');
    const [message,setMessage]=useState('')
    

    const dispatch = useDispatch();
 
     const clients = useSelector((state) => state.clientCreate);
     const {  loading, error, client, success} =clients;

     useEffect(() => {
      }, []);

    const submitHandler = (e) => {
      e.preventDefault()
      if(name.trim()===''){
        setMessage('Please fill in name field')
      }else{
        dispatch( createClientAction({name,code}))
   }}
  return (
    <>
     <Link to='/client/view' className='btn btn-dark my-3'>
        Go Back
      </Link>

      <h1 style={{color:'#a91b0c'}}>Create Client</h1>
      <hr></hr>
      <Form.Label style={{color: '#a91b0c'}}>{message}</Form.Label>
       {loading ? (

        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
         <>
      <Row>
      <Col  xs={12} md={6} >
      <Form.Group controlId='name'>
                <Form.Label>Client Name</Form.Label>
                <Form.Control
                  required
                  type='name'
                  placeholder='Enter client name'
                  onChange={(e) => setName(e.target.value)}   
                ></Form.Control>
        </Form.Group>

        <Button type='submit'  onClick={submitHandler} style={{background: '#2B426D' ,borderColor: '#2B426D'}}>
              Create Client
            </Button>
        
      </Col>
      </Row>
      </>
       )}
       {success ? (<Alert className='alert alert-success mt-4'>Client successfully created !!!!!!</Alert>) :(<></>)} 
    </>
 
  )
}

export default ClientCreateScreen;
