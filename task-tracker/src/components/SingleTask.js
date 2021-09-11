import { FaTimes } from 'react-icons/fa'

const SingleTask = ( {task, onDelete, toggleRem} ) => {
	return (
		<div className={task.reminder ? 'task reminder' : 'task'} 
		onDoubleClick={() => toggleRem(task.id)}
		>
			{/* u can d it also like this. 
			className={`task ${task.reminder ? 'reminder' : ''}`}
			*/}
			<h3>
				{task.text} 
				<FaTimes style={{ color: 'red', cursor: 'pointer' }} 
				onClick={() => onDelete(task.id)}/> 
			</h3>
			<p>{task.day}</p>
		</div>
	)
}

export default SingleTask
