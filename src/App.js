import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddDonation from './pages/AddDonation';
import NewMember from './pages/NewMember';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Soulmeeting from './pages/Soulmeeting';
import Add from './pages/user/Add';
import MemberAdd from './pages/member/MemberAdd';
import Dropdown from './pages/user/Dropdown';
import Edit from './pages/user/Edit';
import Members from './pages/member/Members';
import EditMember from './pages/member/EditMember';
import Renewal from './pages/user/Renewal';
import Users from './pages/user/Users';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path="/" exact element={<Home/>} />
        <Route  path="/home" exact element={<Home/>} />
        <Route  path="/adddonation" exact element={<AddDonation/>} />
        <Route  path="/newmember" exact element={<NewMember/>} />
        <Route  path="/renewal" exact element={<Renewal/>} />
        <Route  path="/dropdown" exact element={<Dropdown/>} />
        <Route  path="/users/:id" exact element={<Users/>} />
        <Route  path="/members/:id" exact element={<Members/>} />
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/add-member" exact element={<MemberAdd/>} />
        <Route  path="/soul-meeting" exact element={<Soulmeeting/>} />
        <Route  path="/edit-user/:id" exact element={<Edit/>} />
        <Route  path="/edit-member/:id" exact element={<EditMember/>} />
      </Routes>
    </div>
  );
}

export default App;
