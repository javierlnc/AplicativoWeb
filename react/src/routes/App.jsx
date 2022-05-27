import React from "react";
import '../styles/global.css';
import Layout from "../containers/Layout";
import Login from "../pages/login";
import RecoveryPassword from "../pages/RecoveryPassword";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/newPassword"
import MyAccount from "../pages/MyAccount";
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import SignUp from '../pages/SignUp';

const App = () => {
    return(
        <BrowserRouter>
            <Layout>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/login" element={<Login />}/>
                <Route exact path="/recovery-password" element={<RecoveryPassword />}/>
                <Route exact path="/send-email" element={<SendEmail />}/>
                <Route exact path="/new-password" element={<NewPassword />}/>
                <Route exact path="/account" element={<MyAccount />}/>
                <Route exact path="/signup" element={<SignUp />} />
                <Route exact path="/checkout" element={<Checkout />} />
				<Route exact path="/orders" element={<Orders />} />
                <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>   
        </BrowserRouter>
    );    
}
export default App;