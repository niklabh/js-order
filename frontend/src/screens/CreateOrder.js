import styled from 'styled-components';
import { Button, Grid, Form } from 'semantic-ui-react';
import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import moment from 'moment';

import Input from '../components/Input';
import messages from '../messages';
import { UserContext } from '../context/User';
import { useRouter } from '../hooks/Router';
import { BACKEND } from '../constants';

const CreateOrder = ({ className }) => {
    const { history } = useRouter();
    const { uid } = useContext(UserContext);
    const { control, errors, handleSubmit } = useForm();
    const [error, setError] = useState('');

    const handleCreate = (data) => {
        const bookingDate = moment(data.bookingDate, "DD.MM.YYYY");

        if (!bookingDate.isValid()) {
            setError('Invalid date use DD.MM.YYYY');
            return;
        }

        const payload = {
            address: {
                city: data.city,
                country: data.country,
                street: data.street,
                zip: data.zip
            },
            bookingDate: bookingDate.valueOf(),
            customer: {
                email: data.email,
                name: data.name,
                phone: data.phone
            },
            title: data.title,
            uid
        };

        axios
            .post(`${BACKEND}/orders`, payload, { headers: { 'Content-Type': 'application/json' } })
            .then((resp) => {
                history.push(resp.data?.id ? `/orders/${resp.data?.id}` : '/orders');
            })
            .catch((error) => setError(error.message));
    };

    const handleChange = (e) => {
        console.log(e)
    };

    return (
        <Grid className={className}>
            <Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
            <Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
                <Form className='form' onSubmit={handleSubmit(handleCreate)}>
                    <h3>Create Order</h3>
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
                    <h5>Address</h5>
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
                    <h5>Customer</h5>
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
                    {error && <span className={'errorText'}>{error}</span>}
                    <div className={'mainButtonContainer'}>
                        <Button
                            primary
                            type='submit'
                        >
                            Create
                        </Button>
                    </div>
                </Form>
            </Grid.Column>
            <Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
        </Grid>
    );
};

export default styled(CreateOrder)`
    display: flex;
    justify-content: center;

    .desc {
        font-weight: bold;
    }

    .errorText {
		color: #D94C3D;
	}
`;
