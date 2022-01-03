import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { palette } from '@mui/system';
import { sizing } from '@mui/system';
import Box from '@mui/material/Box';

import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/Home';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Publications from './components/pages/Publications'
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';


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
    
      <div className="notification is-black">
            <Header />
<Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about' element={<About />} />
                <Route exact path='/portfolio' element={<Portfolio />} />
                <Route exact path='/resume' element={<Resume />} />
                <Route exact path='/publications' element={<Publications />} />
                <Route exact path='/contact' element={<Contact />} />
                <Route exact path='/blog' element={<Blog />} />
              </Routes>
            <Footer />
        </div>
              
    

      </Router>

    </ApolloProvider>
  );
}

export default App;