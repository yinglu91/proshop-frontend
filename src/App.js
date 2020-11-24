import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

import axios from 'axios'

// Global axios defaults
axios.defaults.baseURL = process.env.PROSHOP_BASE_URL

const App = () => {
  return (
    <Router>
      <Header />
        <Container>
          <main className='py-3'>
            <Container>
              <Route  path='/' component={HomeScreen} exact />
              <Route path='/register' component={RegisterScreen} />
              <Route path='/login' component={LoginScreen} />
              <Route path='/product/:id' component={ProductScreen} />
              <Route path='/cart/:id?' component={CartScreen} />
            </Container>
          </main>
        </Container>
      <Footer />
    </Router>
  );
}

export default App;
