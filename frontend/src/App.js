import axios from "axios"
import { useState } from "react";
import { useForm } from "react-hook-form"

function App() {
    const { register, handleSubmit } = useForm();
    const [parsed, setParsed] = useState("")
    const onSubmit = data => axios({method: 'POST', url: process.env.REACT_APP_BACKEND, data})
	  .then(x => setParsed(x.data))
	  .catch(e => console.error(e.message))
    return (
	<div className="flex w-100 flex-column flex-row-ns">
	  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column w-50-l w-100-ns">
	    <div className="w-100 flex flex-column pa2">

		<label htmlFor="grammar">
		  Grammar
		</label>
		<textarea {...register("grammar")} className="h5 consolas mb2" id="grammar"></textarea>

		<label htmlFor="test-input">
                  Test Input
		</label>
		<textarea {...register("input")} className="h3" id="test-input"></textarea>

	    </div>
	    <button type="submit" className="bg-blue ma2 bn white pa2 br1 pointer hover-bg-dark-blue tc">submit</button>
	  </form>
	  <div className="pa2 f6 w-50-l w-100-ns">
	    <pre>{decodeURIComponent(parsed)}</pre>
	  </div>
	</div>
    );
}

export default App;
