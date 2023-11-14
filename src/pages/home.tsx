import React from 'react';
import Products from '../components/products';
import NavBar from '../components/shared/navbar';

function Home(){

    return (
        <section className="row px-0 bg-light h-100 text-light">
            <NavBar/>
            <div className="px-0 w-100 h-100">
               <Products/>
            </div>
        </section>
    )
}

export default Home;