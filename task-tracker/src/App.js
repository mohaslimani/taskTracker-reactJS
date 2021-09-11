import Header from './components/Header'
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
	//...states
	const [tasks, setTasks] = useState(
		[
			{
				id: 1,
				text: 'do something',
				day: 'lyuma',
				reminder: false,
			},
			{
				id: 2,
				text: 'do something 2',
				day: 'ghedda',
				reminder: true,
			},
		]
	)

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

  return (
	//   every return has to be one single element and everything will be inside of it.
	// if u dont want to embedd your app in a div u can embed it in nothing element <> </>
	<>
    <div className="container">
		<Header title="app d zeeb."/>
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
