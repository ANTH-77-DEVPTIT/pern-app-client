import React from 'react'
import {Route, Routes} from "react-router-dom"
import HomePage from '../../pages/HomePage'
const CommonRouter = () => {
  return (
    <Routes>
        <Route path="/">
            <Route path="" index element={<HomePage />}/>
            <Route path="/brands" index element={<HomePage />}/>
            <Route path="/products" index element={<HomePage />}/>
        </Route>
    </Routes>
  )
}

export default CommonRouter