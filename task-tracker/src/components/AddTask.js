import { useState } from "react"

const AddTask = ({ onAdd }) => {
	const [text, setTxt] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);


	const onSubmit = (e) => {
		// this stops onSubmit from submittin ?
		e.preventDefault()
		
		if (!text)
		{
			alert('add a task before saving.');
			return ;
		}
		
		onAdd( {text, day, reminder} );

		// taking those from here will make one diff
		// so u cannot save two times in a row without changing the text(task)
		// exactly
		// what it does exactly is to reset the consts(text, day,reminder)
		// reseting the text will make it empty, but we prevented any save with an empty text(task)
		setTxt();
		setDay();
		setReminder();
	}

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Task</label>
				<input type="text" placeholder="add Task"
				value={text} onChange={(e) => setTxt(e.target.value)}/>
			</div>
			<div className='form-control'>
				<label>Day & Time</label>
				<input type="text" placeholder="Add Day & Time"
				value={day} onChange={(e) => setDay(e.target.value)}/>
			</div>
			<div className='form-control form-control-check'>
				<label>Reminder</label>
				<input type="checkbox" 
				checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
			</div>
			<input className="btn btn-block" type="Submit" defaultValue="save Task"/>
		</form>
	)
}

export default AddTask
