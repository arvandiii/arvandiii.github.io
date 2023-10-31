import React from 'react'
import Home from './Home'
import Blog from './Blog'
import { Route, Routes } from 'react-router-dom'


function Pages() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}

export default Pages