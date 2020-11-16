import queryString from 'query-string';
import { useMemo } from 'react';
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

export const useRouter = () => {

	const params = useParams();
	const location = useLocation();
	const history = useHistory();
	const match = useRouteMatch();

	// Return a custom router object
	// Memoize so that a new object is only returned if something changes
	return useMemo(() => {
		// Merge params and parsed query string into single "query" object
		// so that they can be used interchangeably.
		// Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
		const query = {
			...queryString.parse(location.search), // Convert string to object
			...params
		};

		return {
			history,
			location,
			match,
			pathname: location.pathname,
			query
		};
	}, [params, match, location, history]);
}
