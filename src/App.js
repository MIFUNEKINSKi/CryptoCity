
import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, Cryptodetails } from "./components";
import './App.css'

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='main'>
            <Layout>
              <div className='routes'>
                  <Routes>
                      <Route exact path='/exchanges' element={<Exchanges />}/>
                      <Route exact path='/' element={<Homepage />}/>
                      <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}/>
                      <Route exact path='/crypto/:coinId' element={<Cryptodetails />}/>
                      <Route exact path='/news' element={<News />}/>
                  </Routes>
               </div>
            </Layout>
          <div className='footer'>
              <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                  CryptoCity <br />
                  All rights reserved
              </Typography.Title>
              <Space>
                <Link to='/'> Home </Link>
                <Link to='/'> Exchanges </Link>
                <Link to='/'> News </Link>
              </Space>
          </div>
        </div>

    </div>
  )
}

export default App