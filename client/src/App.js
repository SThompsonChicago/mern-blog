import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { palette } from '@mui/system';
import { sizing } from '@mui/system';
import Box from '@mui/material/Box';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/Home';
import PostForm from './components/pages/PostForm';
import Resume from './components/pages/Resume';
import Publications from './components/pages/Publications'
import Login from './components/pages/Login';
import Blog from './components/pages/Blog';
import Signup from './components/pages/Signup';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    
      <div className="notification is-success">
            <Header />
<Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/postForm' element={<PostForm />} />
                <Route exact path='/resume' element={<Resume />} />
                <Route exact path='/publications' element={<Publications />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/blog' element={<Blog />} />
                <Route exact path='/signup' element={<Signup />} />
              </Routes>
            <Footer />
        </div>
              
    

      </Router>

    </ApolloProvider>
  );
}

export default App;