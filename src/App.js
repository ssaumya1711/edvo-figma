import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import Futr from './Futr';
import Navbar from './Navbar';
import Pastr from './Pastr';

function App() {
  const [userList,setUser] = useState([]);
  const [rideList,setRide] = useState([]);
  const [curwin, SetCurwin] = useState("present");

    useEffect(() => {
      async function fetchRide() {
        try {
           const user = await axios.get("https://assessment.api.vweb.app/user");
           setUser(user.data);
        } 
        catch (error) {
            console.log(error);
        }
        try {
           let ride = await axios.get("https://assessment.api.vweb.app/rides");
           for(let i = 0; i < ride.data.length; i++)
           {
            let x = ride.data[i].station_path.reduce((a, b) => {
             return Math.abs(b - userList.station_code) < Math.abs(a - userList.station_code) ? b : a;
             });
             ride.data[i].dist = Math.abs(x - userList.station_code)
             console.log(x,userList.station_code)
           }
           ride.data.sort((data1,data2) => (data1.dist > data2.dist ? 1:-1));
           setRide([...ride.data]);
        } 
        catch (error) {
            console.log(error);
        }
      }
    fetchRide();
  },[])
  return (
    <div className='App'>
      <Navbar user={userList} ></Navbar>

<div class="card pmd-card App"> 
    <div class="pmd-tabs">
        <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item"><a class="nav-link active" href="#" aria-controls="home" role="tab" data-toggle="tab" onClick={() => {SetCurwin("present")}}>Default</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-controls="about" role="tab" data-toggle="tab" onClick={() => {SetCurwin("fut")}}>Upcoming Rides</a></li>
            <li class="nav-item"><a class="nav-link" href="#" aria-controls="work" role="tab" data-toggle="tab" onClick={() => {SetCurwin("past")}}>Past Rides</a></li>
        </ul>
    </div>
</div>
      {
        curwin == "past" ? <Pastr rides={rideList} /> : (curwin == "fut" ? <Futr rides={rideList}/> : <Card rides={rideList} />)
      }
    </div>
  );
}

export default App;
