import Header from './components/Header'
import Thoughts from './components/Thoughts'
import './index.css'
import {useState, useEffect} from 'react'
import AddThought from './components/AddThought'
import Button from './components/Button'
import Loader from './components/Loader'

function App() {

  const [thoughts, setThoughts] = useState([])
  const [addThoughtsOpen, setAddThoughtsOpen] = useState(false)

  const fetchThoughts = () => {
    console.log('fetching')
    fetch('https://af-thoughts-api.herokuapp.com/thoughts_comments')
    .then(res => res.json())
    .then(data => setThoughts(data))
  }

  useEffect(() => {
    fetchThoughts();
  }, [])



  //Add thought
  const addNewThought = (thought) => {
    fetch('https://af-thoughts-api.herokuapp.com/thoughts',
    {
      method:'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body:JSON.stringify({
        thinker: thought.thinker,
        thought: thought.thoughtText,
        time: thought.today
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      console.log(thoughts)
      setThoughts([...thoughts, data])
    })
  }

  //toggle AddThoughtForm
  const toggleAddThought = () => {
    setAddThoughtsOpen(!addThoughtsOpen)
  }

  return (
    <div className="App">
      <Header/>
      <Button toggle={toggleAddThought} text="New Thought" color="green"/>
      {addThoughtsOpen && <AddThought onAdd={addNewThought}/>}
      {thoughts.length > 0 ? <Thoughts thoughts={thoughts}/> : <Loader/>}
    </div>
  );
}

export default App;
