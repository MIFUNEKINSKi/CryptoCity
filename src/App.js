
import React from 'react'
import { Routes, Route, Link} from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { GithubOutlined, LinkedinOutlined, BuildOutlined } from '@ant-design/icons';

import { Navbar, Homepage, Cryptocurrencies, News, Cryptodetails } from "./components";
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
                      <Route exact path='/' element={<Homepage />}/>
                      <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />}/>
                      <Route exact path='/crypto/:coinId' element={<Cryptodetails />}/>
                      <Route exact path='/news' element={<News />}/>
                  </Routes>
               </div>
            </Layout>
          <div className='footer'>
              <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
                  Christopher Moore <br />
              
              </Typography.Title>
            <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={require('./images/Chris.jpeg')} className='team-pics' />
              <Space>

    
                  
            <a href='https://github.com/MIFUNEKINSKi'> My Github <GithubOutlined /> </a>
            <a href='https://www.linkedin.com/in/chris-moore-27438989/'> My LinkedIn <LinkedinOutlined /> </a>
            <a href='//www.chris-moore.info'> My Website <BuildOutlined /></a>
              </Space>
          </div>
        </div>

    </div>
  )
}

export default App