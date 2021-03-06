import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Home from './Home';
import PostForm from './pages/PostForm';
import Resume from './pages/Resume';
import Publications from './pages/Publications'
import Login from './pages/Login';

export default function Container () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'PostForm') {
            return <PostForm />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'Publications') {
            return <Publications />
        }
        return <Login />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (currentPage === 'Home' 
    ?
        <div className="notification is-black">
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Home currentPage={currentPage} handlePageChange={handlePageChange}/>

            <Footer />
        </div>
        :
        <div className="notification is-black">

        <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
        <Footer />
    </div>
    );
}