import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Loading from './components/Loading';
import { BrowserRouter }  from 'react-router-dom';
import './App.css';


const MyApp = React.memo(function App(){

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])


    

    return (
        <>
            {loading === false ? (
                <BrowserRouter className="browserRouter">
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            ) : (
                <Loading />
            )}            
        </>
    );
})
export default MyApp;