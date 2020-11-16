import styled from 'styled-components';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from '../components/Card';
import { UserContext } from '../context/User';
import { useRouter } from '../hooks/Router';

const Discussions = ({ className }) => {
	const { history } = useRouter();
	const { loggedIn } = useContext(UserContext);

    const orders = [{
        id: 1,
        title: 'title1',
        date: 'date',
        address: 'address',
        customer: 'customer',
    }, {
        id: 1,
        title: 'title2',
        date: 'date',
        address: 'address',
        customer: 'customer',
	}];

	if (!loggedIn) {
        history.push('/login');
        return <></>;
    }

	if (!orders || !orders.length) return <div>No orders.</div>;

	return (
		<ul className={className}>
			{!!orders &&
				orders.map(
					(order) => {
						return <li key={order.title} className='item'>
                            {<Link to={`/order/${order.id}`}>
                                <Card
                                    title={order.title}
                                    date={order.date}
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
