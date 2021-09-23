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
	useEffect( () => {
		const dataFromBack = fetchTasks();
		setTasks(dataFromBack);
		console.log(dataFromBack)
		}, [])
	

	const fetchTasks = async () => {
		const res = await fetch('http://localhost:5000/tasks');
		const tData = await res.json();
		setTasks(tData)

		return tData;
	}
	// delete task
	const deleteTask = (id) => {
		console.log('delete' ,id);
		setTasks(tasks.filter((t) => t.id !== id))
	}
	// reminder
	const reminder = (id) => {
		console.log('double click', id);
		setTasks(
			tasks.map(
				(t) => t.id === id ? { ...t, reminder: !t.reminder} : t))
	}
	//add task
	const addTask = (task) =>
	{
		console.log(task);

		const id = 1 + Math.floor(Math.random() * Math.random() * 1000);
		const newTask = {id, ...task}
		console.log(newTask);
		// console.log(id);
		setTasks([...tasks, newTask])
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
