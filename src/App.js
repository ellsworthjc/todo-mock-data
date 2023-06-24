import './App.css';
import Todo from './components/Todo';
import Heading from './components/Heading';
import { useState, useEffect } from 'react';

export default function App() {

	let [data, setData] = useState([{
		"userId": 1,
		"id": 1,
		"title": "Title 1",
		"completed": false
	}]);

	const fetchData = () => {
		try {
			fetch('https://jsonplaceholder.typicode.com/todos/')
			.then(response => response.json())
			.then(json => setData(json));
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
		console.log(data);
	}, []);

	return (
		<div>
			<Heading text="Hello"/>
			{data.slice(0,5).map((todo) => (
				<Todo info={todo} />
			))}
			<h1>Non-component H1</h1>
		</div>
	)
};
