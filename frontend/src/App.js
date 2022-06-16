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
	<div className="flex w-100">
	  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-column w-100">
	    <div className="w-100 flex flex-column pa2">
	      <textarea {...register("grammar")} className="h5 consolas"></textarea>
	      <input type="text" {...register("input")} className="mt2 h2"/>
	    </div>
	    <button type="submit" className="bg-blue flex ma2 bn white pa2 br1 pointer hover-bg-dark-blue">submit</button>
	  </form>
	  <div className="w-100 flex pa2">
	    <pre>{decodeURIComponent(parsed)}</pre>
	  </div>
	</div>
    );
}

export default App;
