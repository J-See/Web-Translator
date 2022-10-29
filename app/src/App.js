import './App.css';
import langs from './language'
import { useState } from "react";
import axios from 'axios';



function App() {
  const [from, setFrom] = useState('en');
  const [to, setTo] = useState('hi');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const _option = Object.keys(langs);


  console.log("translated from: ", from);
  console.log("translated to: ", to);
  console.log("input is: ", input);
  console.log("output is: ", output);

  async function _translate() {
    await axios.post("http://localhost:8080/setInput", {
      _input: input,
      _from: from,
      _to: to 
    }).then((res) => setOutput(res.data)).catch(error => console.log(error));

    
    
    // axios.get("http://localhost:8080/getOutput", { crossdomain: true }).then(res => {
    //   setOutput(res.data);
    //   console.log(res);
    // })
    
    // const option={
    //   method:"POST",
    //   headers:{
    //     "Content-Type":"application/json"
    //   },
    //   body:JSON.stringify(data)
    // }
    // fetch('/setInput',option)

  }





  return (
    <div className="App">
      <div>
        From ({from}) :
        <select id="from" onChange={(e) => setFrom(e.target.value)} defaultValue="en">
          {
            _option.map((value, index) => {
              return (
                <option key={index} value={value}>{langs[value]}</option>
              );
            })
          }
        </select>
        To ({to}) :
        <select id="from" onChange={(e) => setTo(e.target.value)} defaultValue="hi">
          {
            _option.map((value, index) => {
              return (
                <option key={index} value={value}>{langs[value]}</option>
              );
            })
          }
        </select>
      </div>
      <div>
        <textarea
          cols="50"
          rows="8"
          onInput={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div>
        <textarea
          cols="50"
          rows="8"
          value={output}
        ></textarea>
      </div>
      <div>
        <button onClick={_translate}>Translate</button>
      </div>

    </div>);
}

export default App;
