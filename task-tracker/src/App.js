import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState , useEffect} from 'react'

function App() {
	//states of button
	const [btnState, setBtnState] = useState(false);
	//...states of data
	const [tasks, setTasks] = useState([])

	// http://localhost:5000/tasks
	// to see db.json on the browser


	// useEffect https://dmitripavlutin.com/react-useeffect-explanation/
	// the empty [] in use effect are used to make the effect happen every refrech(initial)
	// useEffect( () => {fetchTasks()}, [])
	// this use effect is only used if you want to setTasks uncommented in fetchTask, 
	// else it will be a good to use this to setTask inside the useEffect

	useEffect( () => {
		// (an async fun declaration + calling the fun) inside an effect hook fun
		const as = async () => {
			// the usage of async and await again will make the promise will br pending a little, why ? idk
			// without await we will get the data but i dont know how to access it;
			const data = await fetchTasks();
			setTasks(data)
			// console.log(data)
		}
		as();
	}, [])
	
	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const tData = await res.json();
		// setTasks(tData)
		return tData;
	}
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:5000/tasks/${id}`);
		const tData = await res.json();
		// setTasks(tData)
		return tData;
	}

	// delete task from json-server
	const deleteTask = async (id) => {
		await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE'})
		taskDelete(id)
	}
	// delete task
	const taskDelete = (id) => {
		console.log('delete' ,id);
		setTasks(tasks.filter((t) => t.id !== id))
	}
	// reminder
	const reminder = async (id) => {
		console.log('double click', id);
		const taskrem = await fetchTask(id);
		const newTask = { ...taskrem, reminder: !taskrem.reminder }

		await fetch(`http://localhost:5000/tasks/${id}`,
			{
				method: 'PUT',
				headers: {
					'content-type': 'application/json'},
				body: JSON.stringify(newTask)
			});

		setTasks(
			tasks.map(
				(t) => t.id === id ? { ...t, reminder: !t.reminder} : t))
	}
	//add task
	const addTask = async (task) =>
	{
		const res = await fetch('http://localhost:5000/tasks',
			{
				method: 'POST',
				headers: {
					'content-type': 'application/json'},
				body: JSON.stringify(task)
			});
		const data = await res.json();
		setTasks([...tasks, data])
		// we used this to assign a random id now json-server will make the id for us.
		// const id = 1 + Math.floor(Math.random() * Math.random() * 1000);
		// const newTask = {id, ...task}
		// setTasks([...tasks, newTask])
	}

  return (
	//   every return has to be one single element and everything will be inside of it.
	// if u dont want to embedd your app in a div u can embed it in nothing element <> </>
	<>
    <div className="container">
		<Header title="app d zeeb." onSet={() => setBtnState(!btnState)} btnSt={btnState}/>
		
		{btnState === true && <AddTask onAdd={addTask}/> }
		
		{
			(tasks.length > 0) ?
			<Tasks tasks={tasks} 
			onDelete={deleteTask}
			toggleRem={reminder}/>
			: 'rtaaa7 makin ta task'
		}
    </div>
	</>
  );
}

export default App;
