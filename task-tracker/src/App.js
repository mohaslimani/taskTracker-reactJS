import Header from './components/Header'

function App() {
  return (
	//   every return has to be one single element and everything will be inside of it.
	// if u dont want to embedd your app in a div u can embed it in nothing element <> </>
	<>
    <div className="container">
		<Header title="app d zeeb."/>
    </div>
	</>
  );
}

export default App;
