import React, { useState } from 'react'
import { Form } from '../components/Form'
import { GifGrid } from '../components/GifGrid'

const Index = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories )

    return (
        <div className="container-fluid bg-yellow-100 py-12 px-1 md:px-12" style={{width: '100%', minHeight: '100vh'}}>
			<p className="text-center text-2xl mb-5">GIF Search: Type any concept to get the GIFS!</p>
			
            <Form setCategories={ setCategories }/>

            <ol>
                {
                    categories.map( category => ( 
                        <GifGrid
                            key={ category }
                            category={ category } 
                        /> 
                    ))
                }
            </ol>

			<a href="https://dawichi.dev" target="_blank" className="absolute top-3 right-3 bg-green-200 hover:bg-green-400 py-1 px-2 rounded-md">Made by <span>Dawichi</span></a>
        </div>
    )
}

export default Index