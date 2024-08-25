import Form from './components/Form.jsx'
import Table from './components/Table.jsx'
import {useState} from "react";
import CompletedNotes from "./components/CompletedNotes.jsx";
import Divider from "./components/Divider.jsx";

function App() {

    const [notes, setNotes] = useState([]);

    const handleNotes = ( note ) => {
        setNotes( [...notes, note] );
    }

    const handleDelete = ( note ) => {
        setNotes( notes.filter((item) => item.title !== note ));
    }


  return (
    <div className="dark:bg-gray-900 md:max-w-xl mx-auto">
      {/* Title */}
      <h1 className="text-6xl dark:text-white text-gray-800 text-center">Notes</h1>

      <div className="border border-gray-300 dark:border-gray-800 rounded-lg p-4 mt-10">
        {/* Main Content */}
          <Form getNotes = { handleNotes } />

          { notes.length === 0 ? <CompletedNotes/> : <Divider/> }

          { notes.length !== 0 &&  <Table deleteNote = { handleDelete } myNotes = { notes }/>}

      </div>
    </div>
  )
}

export default App
