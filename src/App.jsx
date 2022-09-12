import axios from "axios";
import {useState } from "react"



function App() {

  const [Image, setImage] = useState('')


  const handleChange = () => {
    const config = {
      url: 'https://api.replicate.com/v1/predictions',
      method: 'POST',
      headers: {
          'Authorization' : 'Token e9bfb3e13f0be289e761cede24a641cac28d4bff',
          'Content-Type': 'application/json',
      },
      data: JSON.stringify({version:
        "2af375da21c5b824a84e1c459f45b69a117ec8649c2aa974112d7cf1840fc0ce",text: 'heaven'}),
  };

    axios(config)
    .then(res => {
      const uri = res;
      uri && setImage(uri);
      console.log(uri);
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  return (
    <div className="App">
      <h1>Creador de texto a img</h1>,
      <input type="text" id="desc" />
      <button onClick={handleChange}>Generar</button>
    </div>
  )
}

export default App;
