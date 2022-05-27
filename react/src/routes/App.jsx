import React from "react";
import '../styles/global.css';
import Layout from "../containers/Layout";
import Login from "../containers/login";
import RecoveryPassword from "../containers/RecoveryPassword";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
                <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>   
        </BrowserRouter>
    );    
}
export default App;