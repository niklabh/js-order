import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { Button, Grid, Form } from 'semantic-ui-react';

import messages from '../messages';

const Login = ({ className }) => {
	const { errors, handleSubmit, register } = useForm();

	const handleLogin = ({ username, password }) => {
        console.log(username, password)
	};

	return (
        <Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
                <Form className='form' onSubmit={handleSubmit(handleLogin)}>
                    <h3>Login</h3>
                    <Form.Group>
                        <Form.Field width={16}>
                            <label>Username</label>
                            <input
                                className={errors.username ? 'error' : ''}
                                name='username'
                                placeholder='John'
                                ref={register({ maxLength:30, minLength:3, required: true })}
                                type='text'
                            />
                            {(errors.username)?.type === 'maxLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MAXLENGTH_ERROR}</span>}
                            {(errors.username)?.type === 'minLength' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_MINLENGTH_ERROR}</span>}
                            {(errors.username)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_USERNAME_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>

                    <Form.Group>
                        <Form.Field width={16}>
                            <label>Password</label>
                            <input
                                className={errors.password ? 'error' : ''}
                                name='password'
                                placeholder='Password'
                                ref={register({ minLength: 6, required: true })}
                                type='password'
                            />
                            {errors.password && <span className={'errorText'}>{messages.VALIDATION_PASSWORD_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>

                    <div className={'mainButtonContainer'}>
                        <Button
                            primary
                            type='submit'
                        >
                            Login
                        </Button>
                    </div>
                </Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
		</Grid>

	);
};

export default styled(Login)`

    .form {
        background-color: white;
        padding: 2rem 3rem 3rem 3rem;
        border-radius: 3px;
        box-shadow: 0 0.2rem 0.4rem rgba(83, 89, 92, 0.15);
    }

	.mainButtonContainer {
		align-items: center;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.errorText {
		color: #D94C3D;
	}
`;
