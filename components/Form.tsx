import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const Form = ({ setCategories }) => {

	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = (e: { preventDefault: () => void }) => {

		e.preventDefault()

		if (inputValue.trim().length > 2) {
			setCategories((cats: any) => [inputValue])
			setInputValue('')
		}
	}

	return (
		<>
			<form 
				onSubmit={handleSubmit}
				style={{border: 'none'}}
			>
				<input
					type='text'
					value={inputValue}
					onChange={handleInputChange}
					placeholder="Type here..."
					className="border border-black rounded mx-auto block text-xl p-2 bg-yellow-50 mb-5"
				/>
			</form>
		</>
	)
}

Form.propTypes = {
	setCategories: PropTypes.func.isRequired
}