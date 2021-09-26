import { useState } from 'react';

const useFormUsers = (initialState) => {
	const [ formValues, setFormValues ] = useState(initialState);

	const handleChange = (target) => {
		setFormValues({
			...formValues,
			[target.name]: target.value
		});
	}

	return { formValues, setFormValues, handleChange }
}

export default useFormUsers;