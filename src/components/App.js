import React, {useEffect, useState} from "react";
import {Container, Button} from 'semantic-ui-react'
import saddlercoms from "./saddlercoms";
import "semantic-ui-css/semantic.min.css"


const App = () => {
  const [clickCount, setClickCount] = useState(0);
  const [filterTerm, setFilterTerm] = useState('');
  const onApplyFilter = async term => { 
    e.preventDefault()
    console.log('About to send ' + term + 'to backend.')
    // const response = await saddlercoms.get('/gas',{
    //   params: {
    //     city: term
    //   }
    // });

  }
  useEffect(() => { 
    console.log("Clicked button");
    onApplyFilter(filterTerm)
  }, []);

  return (
  <div className="App">
    <Container>
      <h2>Price of Life</h2>

      <select className="app-slc">
        <option defaultChecked>Fort Wayne, IN</option>
        <option>Flint, MI</option>
      </select>

      <Button className="app-btn" onClick={() => setClickCount(clickCount+1)}>
        Apply Filter
      </Button>  
      <div className="btn-count">
        The button was clicked {clickCount} times.
      </div>
    </Container>
  </div>
  );
};

export default App;
