import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header'
import HomeScreen from './screen/HomeScreen';
import ClientCreateScreen from './screen/ClientCreateScreen';
import ClientViewScreen from './screen/ClientViewScreen';
import ContactCreateScreen from './screen/ContactCreateScreen';
import ContactViewScreen from './screen/ContactViewScreen';
import LinkContacts from './screen/LinkContacts';

import Footer from './components/Footer';
import ClientToContact from './screen/ClientToContact';
import ContactToClient from './screen/ContactToClient';

function App() {
  return (
    <BrowserRouter>
    <Header></Header>

    <main className='py-3'>
        <Container>
        <Route path='/unlink/client' component={ContactToClient}></Route> 
        <Route path='/unlink/contact' component={ClientToContact}></Route> 
        <Route path='/link/contact' component={LinkContacts}></Route> 
        <Route path='/contact/view' component={ContactViewScreen}></Route>
        <Route path='/contact/create' component={ContactCreateScreen}></Route>
        <Route path='/client/view' component={ClientViewScreen}></Route>
        <Route path='/client/create' component={ClientCreateScreen}></Route>
        <Route path='/' component={HomeScreen} exact></Route>
         </Container>
    </main>
    <Footer> </Footer>
    </BrowserRouter>
  );
}

export default App;
