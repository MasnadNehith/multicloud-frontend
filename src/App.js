import React, {useEffect, useState} from 'react';
import {failover, getData} from './logic';
import DataBlog from './blog';

function App() {
  const [data, setData] = useState('');
  useEffect(() => {
    async function render(){
      const URL = await failover();
      const data = await getData(URL);
      setData(data);
    }
    render();
  },[])
  let row = [];
  if(data.result){
    data.result.forEach((item) => {
      row.push(<DataBlog item={item} key={item._id} />);
    });
  }
  if(data.dataFrom){
    console.log('DATA IS COMING FROM -> ', data.dataFrom);
  }
  return (
    <div className="App">
        {row}
    </div>
  );
}

export default App;
