import React, { useState } from 'react';
import Header from './Header';
import NoteCard from './Note';
import Footer from "./Footer"
import { NotesGrid } from './Note';
import NoteInput from './Inputs';

function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    console.log(newNote);
    setNotes((prevValue) => {
        return [...prevValue, newNote]
    })
  }
  
  function Delete(id) {
   setNotes((prev) => {
    return prev.filter((noteItem, index) => {
      return index !== id
    })
   })
  }

  return (
    <div>
      <layout>
      <Header />
      <NoteInput onAdd={addNote}/>
      <NotesGrid>
        {notes.map((noteItem,index) => {
          return <NoteCard
          key={index}
          id={index}
          title={noteItem.title}
          description={noteItem.description}
          onDelete={Delete}
          />
        })}
      </NotesGrid>
      <Footer/>
      </layout>
    </div>
  )
}

export default App
