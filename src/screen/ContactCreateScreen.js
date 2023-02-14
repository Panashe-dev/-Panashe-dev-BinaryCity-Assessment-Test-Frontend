import React, {useState,useEffect } from 'react'
import {Alert,  Button, Col, Form, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector} from 'react-redux';
import { createContactsAction} from '../actions/ContactActions';



export const ContactCreateScreen = () => {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message,setMessage]=useState('')

  const dispatch = useDispatch();

  const [validation, setValidation] = useState({
    Name: "",
    surname: "",
    email: "",
  });

  const contactAll = useSelector((state) => state.contactCreate);
  const {  loading, error, contacts,success} =contactAll;

  useEffect(() => {

  }, []);

const submitHandler = (e) => {
  const emailCond ="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
      if(name.trim()===''){
        setMessage('Please fill in name field')
      }else if(surname.trim()===''){
        setMessage('Please fill in surname field')
      }else if(email.trim()===''){
        setMessage('Please fill in email field')
      }else if(email.match(emailCond)){
        setMessage('Please enter a valid email address')
      } else{
        e.preventDefault()
        dispatch( createContactsAction({ name, surname, email }))   
      }
}


  return (
    <>
   <Link to='/contact/view'   className='btn btn-dark  my-3'>
        Go Back
      </Link>
      <h1 style={{color:'#a91b0c'}}>Create Contact</h1>
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
     <Form>
     <Form.Group controlId='name'>
               <Form.Label>Name</Form.Label>
               <Form.Control
                 type='name'
                 placeholder='Enter name'
                 onChange={(e)=>setName(e.target.value)}
               ></Form.Control>
       </Form.Group>

       <Form.Group controlId='name'>
               <Form.Label>Surname</Form.Label>
               <Form.Control
                 type='name'
                 placeholder='Enter surname'
                 onChange={(e)=>setSurname(e.target.value)}
               ></Form.Control>
       </Form.Group>

       <Form.Group controlId='name'>
               <Form.Label>Email adddres</Form.Label>
               <Form.Control
                 type='email'
                 placeholder='Enter email address'
                 onChange={(e)=>setEmail(e.target.value)}
               ></Form.Control>
       </Form.Group>
       </Form>
       <Button type='submit' onClick={submitHandler} style={{background: '#2B426D' ,borderColor: '#2B426D'}}>
             Create Contact
           </Button>
     </Col>

     </Row>
     </>
       )}
         {success ? (<Alert className='alert alert-success mt-4'>Contact successfully created !!!!!!</Alert>) :(<></>)} 
   </>
  )
}

export default ContactCreateScreen;
