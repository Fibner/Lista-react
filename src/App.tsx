import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {MyList} from './data'

function App() {
  const [info,setInfo] = useState("");
  const [list,setList] = useState(MyList);
  return (
    <div className='container'>
      <h1>Moja lista</h1>
      <ol className='list-group'>
        {list.map((item, index)=>(
            <li className='list-group-item' key={index}>
              <span onClick={()=>{
                let temp = list.splice(index-1, 1);
                setList(temp);
              }}>X </span> {item}
              </li>
          )
        )}
      </ol>
      <br/>
      <div className='row row-cols-auto'>
        <label className='col m-2' htmlFor='name'>Podaj imię:</label>
        <input className='col m-2' type={'text'} name='name' id='name' value={info} onChange={(e)=>setInfo(e.target.value)}/>
        <input className='col m-2' type={'button'} value='Dodaj' onClick={()=>{
          if(info.trim().length === 0) return
          setList([...list,info])
          setInfo("")
        }
        }/>
      </div>
    </div>
  );
}

export default App;
