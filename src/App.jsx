import Tab from './10-tab-myntra-zepto/Tab'
import Page from './11-Pagination-flipkart/Page'
import Todo from './12-Todo-microsoft-ola-swiggy/Todo'
import Accordian from './13-Accordian-meta-ola-zomato/Accordian'
import AutoComplete from './14-AutoCompleteSearchBar/AutoComplete'
import FormPage from './15-formValidation/FormPage'
import ProgressBar from './16-Progressbar-google-meta/ProgressBar'
import ContextHome from './6.0-ContextAPI/ContextHome'
import './App.css'
import Counter from './components/Counter' 
import Oddeven from './components/Oddeven'
import CheckNo from './components/Positive'
import useeffect from './components/Positive'
import ToDoComp from './components/ToDoComp'
import TrackNumber from './components/TrackNumber'
import FindSum from './pages/FindSum'


function App() {
  const bars = [1,5,10,60,85,100]
  return (
    <>
      {/* <Counter />  */}
      {/* <Oddeven /> */}
      {/* <CheckNo /> */}
      {/* <TrackNumber /> */}
      {/* <ToDoComp /> */}
      {/* <TrackNumber /> */}

      {/* <Tab /> */}
      {/* <Page /> pagination */}
      {/* <Todo /> */}
      {/* <Accordian /> */}

      {/* <FormPage /> */}
      {/* <AutoComplete /> */}
      {/* {bars.map(value=><ProgressBar key={value} progress={value}/>)} */}

      {/* <ContextHome /> */}

      <FindSum />
      
    </>
  )
}

export default App
