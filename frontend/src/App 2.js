// import React, { useState } from 'react';
// //import StarRating from "./StarRating";
// //import "./App.css";
// function App() {
//   const [listOfLists, setListOfLists] = useState([
//     ['Item 1', 'Item 2', 'Item 3'],
//     ['Item A', 'Item B', 'Item C'],
//     ['Item X', 'Item Y', 'Item Z'],
//   ]);

//   const [showEditModal, setShowEditModal] = useState(false);
//   const [editedItem, setEditedItem] = useState(null);
//   const [characterFields, setCharacterFields] = useState(['', '', '', '', '']);

//   const showDeleteButton = true;
//   const showEditButton = true;

//   const handleDelete = (index) => {
//     const updatedListOfLists = [...listOfLists];
//     updatedListOfLists.splice(index, 1);
//     setListOfLists(updatedListOfLists);
//   };

//   const handleEdit = (index) => {
//     setEditedItem(listOfLists[index]);
//     setCharacterFields(listOfLists[index]);
//     setShowEditModal(true);
//   };

//   const handleSaveEdit = (editedItem, index) => {
//     const updatedListOfLists = [...listOfLists];
//     updatedListOfLists[index] = editedItem;
//     setListOfLists(updatedListOfLists);
//     setShowEditModal(false);
//   };

//   const handleCharacterFieldChange = (value, index) => {
//     const updatedFields = [...characterFields];
//     updatedFields[index] = value;
//     setCharacterFields(updatedFields);
//   };

//   return (
//     <div className="App">
//       {listOfLists.map((innerList, index) => (
//         <div key={index}>
//           {innerList.join('\n')}
//           {showDeleteButton && (
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           )}
//           {showEditButton && (
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           )}
//         </div>
//       ))}
//       {showEditModal && editedItem && (
//         <div className="modal">
//           {characterFields.map((field, index) => (
//             <input
//               key={index}
//               type="text"
//               value={field}
//               onChange={(e) => handleCharacterFieldChange(e.target.value, index)}
//             />
//           ))}
//           <button onClick={() => handleSaveEdit(characterFields, listOfLists.indexOf(editedItem))}>
//             Save
//           </button>
//           <button onClick={() => setShowEditModal(false)}>Cancel</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import StarRating from "./StarRating";

function App() {
  return (
    <div className="App">
      <StarRating />
    </div>
  );
}

export default App;
