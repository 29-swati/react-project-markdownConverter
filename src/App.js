import React, { useState } from 'react'
import Navbar from './navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from'./pages/About'
import Error from'./pages/Error'
import Home from'./pages/Home'



function App() {
  return (
   <div>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path ='/'><Home/></Route>
        <Route exact path ='/about'><About/></Route>
        <Route path='*'><Error /></Route>
      </Switch>
    </Router>
   </div>
  )
}

export default App

//  <section className='markdown'>
//     <Navbar />
//       <textarea 
//         className='input' 
//         value={markdown} 
//         onChange={(e)=>setMarkdown(e.target.value)}>
//       </textarea>
//       <article className='result'>
//         <ReactMarkdown>
//           {markdown}
//         </ReactMarkdown>
//       </article> 
//     </section>