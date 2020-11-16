import React, { createContext, useEffect, useState } from 'react';
import firebase from 'firebase/app';

const initialUserContext = {
	email: '',
	name: '',
	phone: '',
	uid: '',
	loggedIn: false,
	setUserContextState : () => {
		throw new Error('setUserContextState function must be overridden');
	},
};

export const UserContext = createContext(initialUserContext);

export const UserProvider = ({ children }) => {

	const [userContextState, setUserContextState] = useState(initialUserContext);

	useEffect(() => {

		firebase.auth().onAuthStateChanged((user) => {
            if (user) {
				const db = firebase.firestore();
				db.collection("users").doc(user.uid).get().then((doc) => {
					if (doc.exists) {
						const data = doc.data();
						setUserContextState({
							email: data.email,
							name: data.name,
							phone: data.phone,
							uid: data.uid,
							loggedIn: true,
							setUserContextState
						});
						window.localStorage.setItem('loggedIn', 'true');
					} else {
						console.error("User data not found!");
					}
				}).catch(function(error) {
					console.error("Error getting document:", error);
				});

            } else {
				setUserContextState(initialUserContext);
				window.localStorage.setItem('loggedIn', 'false');
            }
        });

	}, []);

	return (
		<UserContext.Provider value={{ ...userContextState, setUserContextState }}>
			{children}
		</UserContext.Provider>
	);
};
