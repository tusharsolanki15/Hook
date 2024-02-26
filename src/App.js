import './App.css';
import ParentComponent from './Components/Usecallback/ParentComponent';
import Counter from "./Components/Usememo/Counter"
import Focusinput from './Components/Useref/Focusinput';
import Hooktimer from './Components/Useref/Hooktimer';
import ClassTimer from './Components/Useref/ClassTimer';
import DocTitleone from './Components/customhook/DocTitleone';
import DocTitleTwo  from "./Components/customhook/DocTitleTwo"
import CounterOne from './Components/customhook/CounterOne';
import CounterTwo from './Components/customhook/CounterTwo';
import UserForm from './Components/customhook/UserForm';

function App() {
  
  return (
    <div className='App'>
      {/* <UserForm/> */}
      {/* <CounterOne/>
      <CounterTwo/> */}
      {/* <DocTitleone/>
      <DocTitleTwo/> */}
      {/* <ClassTimer/>
      <Hooktimer/> */}
      {/* <Focusinput/> */}
      <Counter/>
      {/* <ParentComponent/> */}
    </div>
  );
}

export default App;
