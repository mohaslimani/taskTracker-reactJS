import SingleTask from "./SingleTask"

const Tasks = ( {tasks , onDelete, toggleRem} ) => {
	return (
		<>
		{
			tasks.map(
				(tasks) => (
				<SingleTask key={tasks.id} task={tasks} onDelete={onDelete} toggleRem={toggleRem} />
				)
			)
		}
		</>
	)
}


export default Tasks
