import axios from "axios"
import { useState } from "react";
import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit } = useForm();
  const [parsed, setParsed] = useState("")
  const onSubmit = data => axios({method: 'POST', url: "http://localhost:5000/", data})
    .then(x => setParsed(x.data))
    .catch(e => console.error(e.message))
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea {...register("grammar")}></textarea>
        <input type="text" {...register("input")} />
        <button type="submit">submit</button>
        <pre>{decodeURIComponent(parsed)}</pre>
      </form>
    </div>
  );
}

export default App;
