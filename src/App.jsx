import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import Buynow from './pages/buynow'

// import Plans from './pages/Plans'
import About from './pages/About'

// import Signup from './pages/Signup'
import Contact from './pages/Contact'


import Login from './pages/Login'
// import Trail from './pages/trail'
// import FAQ from './pages/FAQ'
import { Homechk } from './pages/Protectedroutes'
// import TopLoadingBar from './components/TopLoadingBar';

function App() {
  

  return (
    <>
      <BrowserRouter>
      
      {/* <TopLoadingBar /> */}
        <Routes>
        <Route path="/" element={
          <Homechk />
          } />
          <Route path='/About' element={<About />} />
          {/* <Route path='/Plans' element={<Plans />} /> */}
          {/* <Route path='/Signup' element={<Signup />} /> */}
          <Route path='/login' element={<Login />} />
          {/* <Route path='/Faqs' element={<FAQ />} /> */}
          {/* <Route path='/Trail' element={<Trail />} /> */}


          {/* <Route path="/adminpanel" element={<Adminchk/>} /> */}
          {/* <Route path="/admincontroll" element={<Admincash/>} /> */}

{/* 
          <Route path='/buynow' element={
              <ProtectedRoute>
                <Buynow />
              </ProtectedRoute>

          } /> */}

          
          <Route path='*' element={<Login />} />



          <Route path='/contact' element={<Contact />} />


        </Routes>
      
      
        

        
      </BrowserRouter>
    </>
  )
}

export default App
