
import styled from 'styled-components';
import React from 'react';

const Input = ({ className, error, onChange, value = '' }) => {
	return (
		<div className={className}>
			<input
				className={error ? 'error' : ''}
				onChange={onChange}
				type='text'
				value={value}
			/>
		</div>
	);
};

export default styled(Input)`
	.fields {
		padding: 0;
	}

	input.title {
		font-size: 1.4rem !important;
	}

	input.error {
		border-color: red_secondary !important;
	}

	.errorText {
		color: red_secondary;
	}
`;
