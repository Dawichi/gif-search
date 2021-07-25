import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url}) => {
    
    return (
        <div className='animate__animated animate__fadeIn'>
			<div className='relative w-full rounded-lg'
				style={{
					paddingTop: '100%',
					backgroundImage: `url('${url}')`,
					backgroundPosition: 'center',
					backgroundSize: 'cover'
				}}>
			</div>
			<span>{ title }</span>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}