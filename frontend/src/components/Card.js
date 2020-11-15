import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const StyledCard = styled.div`
	padding: 2rem 3rem 1.5rem 3rem;
	background-color: white;
	border-radius: 3px;
	box-shadow: 0 0.2rem 0.4rem rgba(83, 89, 92, 0.15);
	transition: box-shadow .1s ease-in-out;

	&.own-post {
		border-left-width: 4px;
		border-left-style: solid;
		border-left-color: pink_primary;
		padding: calc(2rem - 4px);
	}
	&:hover {
		box-shadow: 0 0.4rem 1.6rem rgba(83, 89, 92, 0.2);
		text-decoration: none;
	}
	h4 {
		font-family: Roboto;
		font-size: md;
		margin-bottom: 1rem;
	}
	ul {
		color: #A6ACB3;
		font-size: xs;
		font-family: Roboto;
		font-weight: 500;
		li {
			display: inline;
			margin-right: 1.5rem;
		}
	}

	@media only screen and (max-width: 576px) {
		& {
			padding: 1.2rem 1.5rem;
		}
	}
`;

export default function Card ({
	title,
	date,
	address,
	customer,
}) {
	return (
		<StyledCard>
			<h4>{title}</h4>
			<ul>
				<li><Icon name='calendar' /> {date}</li>
				<li><Icon name='location arrow' /> {address}</li>
				<li><Icon name='user' /> {customer}</li>
			</ul>
		</StyledCard>
	);
}
