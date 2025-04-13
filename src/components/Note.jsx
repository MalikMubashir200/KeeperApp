import React from 'react';

function NoteCard(props) {
  function handleClick() {
    props.onDelete(props.id)
  }
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 border border-gray-100">
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-1">
            <h3 className="font-bold text-xl text-gray-800 mb-3 line-clamp-2 leading-tight">
              {props.title}
            </h3>
            <p className="text-gray-600 text-base line-clamp-4 leading-relaxed">
              {props.description}
            </p>
          </div>
          <div className="ml-4 bg-indigo-100 text-indigo-800 p-2 rounded-lg flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        
        </div>
        <button onClick={handleClick} className=' p-2 text-red-700'>Delete</button>
      </div>
    </div>
  );
}

export function NotesGrid({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}

export default NoteCard;
