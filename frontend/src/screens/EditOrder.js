import styled from 'styled-components';
import { Button, Grid, Form } from 'semantic-ui-react';
import React, { useContext, useEffect } from 'react';
import firebase from 'firebase/app';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { Controller, useForm } from 'react-hook-form';

import Input from '../components/Input';
import messages from '../messages';
import { UserContext } from '../context/User';
import { useRouter } from '../hooks/Router';

const Order = ({ className }) => {
	const { history } = useRouter();
	const { loggedIn } = useContext(UserContext);
	const { id } = useParams();
	const { control, errors, handleSubmit, setValue } = useForm();

	useEffect(() => {
		if (!loggedIn) {
			return;
		}
		const db = firebase.firestore();
		db.collection("orders").doc(id)
			.get()
			.then(function(doc) {
				const data = doc.data();
				setValue('title', data.title);
				const date = moment(new Date(data.bookingDate));

				if (date.isValid()) {
					setValue('bookingDate', date.format('DD.MM.YYYY'));
				}

				if (data.address?.street) {
					setValue('street', data.address?.street);
				}

				if (data.address?.city) {
					setValue('city', data.address?.city);
				}

				if (data.address?.country) {
					setValue('country', data.address?.country);
				}

				if (data.address?.zip) {
					setValue('zip', data.address?.zip);
				}

				if (data.customer?.email) {
					setValue('email', data.customer?.email);
				}

				if (data.customer?.name) {
					setValue('name', data.customer?.name);
				}

				if (data.customer?.phone) {
					setValue('phone', data.customer?.phone);
				}
			})
			.catch((error) => {
				console.error("Error getting documents: ", error);
			});

	}, [id, loggedIn, setValue]);

	if (!loggedIn) {
        history.push('/login');
        return <></>;
	}

	const handleEdit = (e) => {
		// TODO: submit backend
	};

	const handleChange = (e) => {
		console.log(e)
	};

	return (
		<Grid className={className}>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
                <Form className='form' onSubmit={handleSubmit(handleEdit)}>
                    <h3>Edit Order</h3>
                    <Form.Group>
                        <Form.Field width={16}>
                            <label>Title</label>
							<Controller
								as={<Input
									error={errors.title}
								/>}
								control={control}
								name='title'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.title)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>Booking Date</label>
							<Controller
								as={<Input
									error={errors.bookingDate}
								/>}
								control={control}
								name='bookingDate'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.bookingDate)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<h3>Address</h3>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>Street</label>
							<Controller
								as={<Input
									error={errors.street}
								/>}
								control={control}
								name='street'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.street)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>city</label>
							<Controller
								as={<Input
									error={errors.city}
								/>}
								control={control}
								name='city'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.city)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>country</label>
							<Controller
								as={<Input
									error={errors.country}
								/>}
								control={control}
								name='country'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.country)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>zip</label>
							<Controller
								as={<Input
									error={errors.zip}
								/>}
								control={control}
								name='zip'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.zip)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<h3>Customer</h3>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>Name</label>
							<Controller
								as={<Input
									error={errors.name}
								/>}
								control={control}
								name='name'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.name)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>Email</label>
							<Controller
								as={<Input
									error={errors.email}
								/>}
								control={control}
								name='email'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.email)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>
					<Form.Group>
                        <Form.Field width={16}>
                            <label>phone</label>
							<Controller
								as={<Input
									error={errors.phone}
								/>}
								control={control}
								name='phone'
								defaultValue=''
								onChange={handleChange}
								rules={{ required: true }}
							/>

                            {(errors.phone)?.type === 'required' && <span className={'errorText'}>{messages.VALIDATION_REQUIRED_ERROR}</span>}
                        </Form.Field>
                    </Form.Group>

                    <div className={'mainButtonContainer'}>
                        <Button
                            primary
                            type='submit'
                        >
                            Edit
                        </Button>
                    </div>
                </Form>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
		</Grid>
	);
};

export default styled(Order)`
	display: flex;
	justify-content: center;

	.info-box {
		background-color: white;
		border-radius: 3px;
		box-shadow: box_shadow_card;
		margin: 1rem;
		width: calc(100% - 60px);
		word-break: break-word;
		padding: 10px;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;

		@media only screen and (max-width: 576px) {
			width: 100%;
			border-radius: 0px;
		}
	}


	.address-container {
		margin: 10px 0;
	}

	.desc {
		font-weight: bold;
	}
`;
