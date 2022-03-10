import React from 'react';
import Counter from '../../Components/Counter';
import footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Photography from '../../Components/Photography';



const Home = () => {
    return (
        <div>
            <h1 className='text-center' >
                <Header></Header>
                <Counter></Counter>
                <Photography></Photography>
               
              
            </h1>
        </div>
    );
};

export default Home;