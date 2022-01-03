import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Home from './Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Publications from './pages/Publications'
import Contact from './pages/Contact';

export default function Container () {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
        if (currentPage === 'Publications') {
            return <Publications />
        }
        return <Contact />
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