import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [charas, setCharas] = useState([
    {name: 'arona', type: 'human', rank: 8}
    ,{name: 'toki', type: 'human', rank: 1}
    ,{name: 'asuna', type: 'human', rank: 9}
    ,{name: 'shiroko', type: 'wolfgirl', rank: 5}
    ,{name: 'momoi', type: 'human', rank: 11}
    ,{name: 'rio', type: 'human', rank: 10}
    ,{name: 'koyuki', type: 'human', rank: 4}
    ,{name: 'yuuka', type: 'human', rank: 3}
    ,{name: 'noa', type: 'human', rank: 7}
    ,{name: 'seia', type: 'foxgirl', rank: 6}
    ,{name: 'shiroko terror', type: 'wolfgirl', rank: 2}]);
  
    // console.log(charas);
    // const sorted = [...this.charas.data];//.sort((a, b) => a.rank - b.rank);
    // setCharas(sorted);

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [rank, setRank] = useState(0);
    const [update, setUpdate] = useState(false);

    useEffect(() => {
      const sorted = charas.sort((a, b) => a.rank - b.rank);
      setCharas([...sorted]);
      console.log(sorted);
    }, [update]);

    return (
    <div className="App">
      <div className ="flex flex-col w-1/2 p-3">
        <div>
          <label for="fname">First name:</label>
          <input 
            className="ml-2 border"
            name='fname'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label for="race">Race name:</label>
          <input
            className="ml-2 border"
            name='face'
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label for="rank">Name name:</label>
          <input
            className="ml-2 border"
            name='rank'
            onChange={(e) => setRank(e.target.value)}
          />
        </div>
        <button
          className="border mt-2"
          onClick={() => {
            setCharas([...charas, {name: name, type: type, rank: rank}]);
            setName('');
            setType('');
            setRank(0);
            alert('big gay');
            setUpdate(!update);
          }}
        >Insert</button>
      </div>

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">name</th>
            <th className="px-4 py-2">type</th>
            <th className="px-4 py-2">rank</th>
          </tr>
        </thead>
        <tbody>
          {charas.map((chara, index) => {
            return <tr key={index}>
              <td className="border px-4 py-2">{chara.name}</td>
              <td className="border px-4 py-2">{chara.type}</td>
              <td className="border px-4 py-2">{chara.rank}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
