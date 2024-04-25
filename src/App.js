
import './App.css';
import { useState } from "react";
import Nav from './components/Nav';
import Content from './components/Content';
import LineChart from "./components/LineChart";
import { UserData } from "./Data";
import "./App.css"
import Table from './components/Table';
import Table2 from './components/Table2';
function App() {
const [userData, setUserData] = useState({
  labels: UserData.map((data) => data.year),
  datasets: [
    {
      label: "Users Gained",
      data: UserData.map((data) => data.userGain),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
});
  return (
    <div className="App">

      <Nav/>
      <Content/>
      <div className='cards1'>
      <h1>Revenue Chart</h1>
      <div className='buttons'>
      <button className='button2'>Metric <img src="Frame.png"/></button>
      <button className='button2'>Today <img src="Frame.png"/></button>
      <button className='button2'>Category <img src="Frame.png"/></button>
      </div>
      <hr></hr>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
    </div>
     <Table/>
     <Table2/>
    </div>
  );
}

export default App;
