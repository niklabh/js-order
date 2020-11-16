import { Grid } from 'semantic-ui-react';
import React, { useContext } from 'react';

import { UserContext } from '../context/User';

const Home = () => {
    const user = useContext(UserContext);

	return (
        <Grid>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
			<Grid.Column mobile={16} tablet={12} computer={8} largeScreen={6} widescreen={6}>
				<div>Welcome to Order Management System <strong>{user ? user.name : ''}</strong></div>
			</Grid.Column>
			<Grid.Column only='tablet computer' tablet={2} computer={4} largeScreen={5} widescreen={5}/>
		</Grid>

	);
};

export default Home;
