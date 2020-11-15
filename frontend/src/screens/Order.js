import styled from 'styled-components';
import { Grid, Table } from 'semantic-ui-react';

const Order = ({ className }) => {
    const order = {
        id: 1,
        title: 'title1',
        date: 'date',
        address: 'address',
        customer: 'customer',
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
                                <Table.Cell>{order.title}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Booking Date:</Table.Cell>
                                <Table.Cell>{order.date}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Address:</Table.Cell>
                                <Table.Cell>{order.address}</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Customer:</Table.Cell>
                                <Table.Cell>{order.customer}</Table.Cell>
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
