import styled from 'styled-components';
import { Button, Grid, Table } from 'semantic-ui-react';
import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { useParams } from 'react-router-dom';
import moment from 'moment';

import { UserContext } from '../context/User';
import { useRouter } from '../hooks/Router';

const Order = ({ className }) => {
	const [title, setTitle] = useState('');
	const [bookingDate, setBookingDate] = useState('');
	const [city, setCity] = useState('');
	const [country, setCountry] = useState('');
	const [street, setStreet] = useState('');
	const [zip, setZip] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const { history } = useRouter();
	const { loggedIn } = useContext(UserContext);
	const { id } = useParams();

	useEffect(() => {
		if (!loggedIn) {
			return;
		}
		const db = firebase.firestore();
		db.collection("orders").doc(id)
			.get()
			.then(function(doc) {
				const data = doc.data();
				setTitle(data.title);
				const date = moment(new Date(data.bookingDate));

				if (date.isValid()) {
					setBookingDate(date.format('DD.MM.YYYY'));
				}

				if (data.address?.city) {
					setCity(data.address?.city);
				}

				if (data.address?.country) {
					setCountry(data.address?.country);
				}

				if (data.address?.street) {
					setStreet(data.address?.street);
				}

				if (data.address?.zip) {
					setZip(data.address?.zip);
				}

				if (data.customer?.email) {
					setEmail(data.customer?.email);
				}

				if (data.customer?.name) {
					setName(data.customer?.name);
				}

				if (data.customer?.phone) {
					setPhone(data.customer?.phone);
				}
			})
			.catch((error) => {
				console.error("Error getting documents: ", error);
			});

	}, [id, loggedIn]);

	if (!loggedIn) {
        history.push('/login');
        return <></>;
	}

	const handleEdit = () => {
		history.push(`/edit-order/${id}`);
	};

	return (
		<Grid className={className}>
			<Grid.Column mobile={16} tablet={16} computer={10} largeScreen={10}>
				<div className='info-box'>
					<h2>Orders Details</h2>
                    <Table basic='very' celled collapsing>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Title:</Table.Cell>
                                <Table.Cell>{title}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Booking Date:</Table.Cell>
                                <Table.Cell>{bookingDate}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Address:</Table.Cell>
                                <Table.Cell>
									<div>{street}</div>
									<div>{city} {zip}</div>
									<div>{country}</div>
								</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Customer:</Table.Cell>
                                <Table.Cell>
									<div>{name}</div>
									<div>{email}</div>
									<div>{phone}</div>
								</Table.Cell>
                            </Table.Row>
							<Table.Row>
								<Table.Cell></Table.Cell>
                                <Table.Cell>
									<Button
										primary
										onClick={handleEdit}
									>
										Edit
									</Button>
								</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
				</div>
			</Grid.Column>
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
