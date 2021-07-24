import React from 'react'
import PropTypes from 'prop-types';

import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

    const { data:images , loading } = useFetchGifs( category )

    return (
        <>
			<div className='animate__animated animate__fadeIn border-b-2 pb-4 border-black'>
            	<span className='text-lg'>Results of: </span><span className='bg-yellow-300 p-2 m-2 text-lg rounded '>{ category }</span>
			</div>
			<br />
            
            { loading && <p className='animate__animated animate__flash'>Loading...</p> }

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    images.map( img => (
                        <GifGridItem key={ img.id } { ...img } />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}