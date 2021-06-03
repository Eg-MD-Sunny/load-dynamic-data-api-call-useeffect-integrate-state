import { useEffect, useState } from 'react';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>Hi I am React Man(-|-)</p>
				<User></User>						{/*====>>Component Call<<====*/}
			</header>
		</div>
	);
}

//======>>(01)Dynamic User Component Create [Start]
function User(){
	const [users, setUsers] = useState([]);			//======>>useSatte Declare<<=========//
	useEffect(()=>{									//======>>useEffect Declare [Start]<<=========//
		console.log('Calling Effect');

		fetch('https://jsonplaceholder.typicode.com/users')
		.then(res => res.json())
		.then(data => {
			console.log(data);
			setUsers(data)
		})
	}, [])											//======>>useEffect Declare [End]<<=========//
	return (
		<div>
			<h3>Dynamic User: {users.length}</h3>
			{
				// users.map(user => <li>{user.id}</li>)
				// users.map(user => <li>{user.name}</li>)
				// users.map(user => <li>{user.username}</li>)
				// users.map(user => <li>{user.email}</li>)
								
				// users.map(user => <li>{user.address.street}</li>)
				// users.map(user => <li>{user.address.suite}</li>)
				// users.map(user => <li>{user.address.city}</li>)
				// users.map(user => <li>{user.address.zipcode}</li>)
				// users.map(user => <li>{user.address.geo.lat}</li>)
				// users.map(user => <li>{user.address.geo.lng}</li>)

				// users.map(user => <li>{user.phone}</li>)
				// users.map(user => <li>{user.website}</li>)
				// users.map(user => <li>{user.company.name}</li>)
				// users.map(user => <li>{user.company.catchPhrase}</li>)
				users.map(user => <li>{user.company.bs}</li>)
			}
		</div>
	)
}
//======>>(01)Dynamic User Component Create [End]
export default App;
