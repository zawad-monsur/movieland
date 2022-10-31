import React, { useState, useEffect } from 'react'

import MovieCard from './MovieCard'
import './App.css'

const API_URL = 'http://www.omdbapi.com?apikey=5f2114e'

const App = () => {
    useEffect(() => {
        searchMovies('void')
    }, [])

    const searchMovies = async title => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log(data)
    }

    return (
        <div>
            <h1>App</h1>
        </div>
    )
}

export default App
