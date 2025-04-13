import React, { useState } from 'react';

function NoteInput(props) {
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => ({
      ...prevNote,
      [name]: value
    }));
  };

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({ title: "", description: "" });
  }

  return (
    <form 
      onSubmit={submitNote}
      className="mb-8 w-[85%] mx-auto mt-5 p-6 bg-white rounded-2xl shadow-md border border-gray-100"
    >
      <div className="flex flex-col md:flex-row gap-4 items-end">
        <div className="flex-1 w-full">
          <input
            type="text"
            name="title"
            value={note.title}
            placeholder="Note title"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div className="flex-1 w-full">
          <input
            type="text"
            name="description"
            value={note.description}
            placeholder="Note description"
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
               viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default NoteInput;
