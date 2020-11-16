import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

import Card from '../components/Card';
import { UserContext } from '../context/User';

const Discussions = ({ className }) => {
	const { loggedIn } = useContext(UserContext);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		if (!loggedIn) {
			return;
		}
		const db = firebase.firestore();
		db.collection("orders")
			.get()
			.then(function(querySnapshot) {
				const orders = [];
				querySnapshot.forEach(function(doc) {
					const data = doc.data();
					if (data.title) {
						orders.push({
							id: doc.id,
							uid: data.uid,
							title: data.title,
							bookingDate: data.bookingDate,
							address: data.address,
							customer: data.customer
						});
					}
				});
				setOrders(orders);
			})
			.catch(function(error) {
				console.log("Error getting documents: ", error);
			});

	}, [loggedIn]);

	if (!orders || !orders.length) return <div>...</div>;

	return (
		<ul className={className}>
			{!!orders &&
				orders.map(
					(order) => {
						return <li key={order.id} className='item'>
                            {<Link to={`/orders/${order.id}`}>
                                <Card
                                    title={order.title}
                                    bookingDate={order.bookingDate}
                                    address={order.address}
                                    customer={order.customer}
                                />
                            </Link>}
                        </li>;
					}
				)
			}
		</ul>
	);
};

export default styled(Discussions)`
	margin-block-start: 0;
	margin-block-end: 0;

	li {
		list-style-type: none;
	}

	.item {
		margin: 0 0 1rem 0;
		a:hover {
			text-decoration: none;
		}
	}
`;
