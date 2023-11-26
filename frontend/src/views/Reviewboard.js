//Imports
import React, { useState, useEffect } from "react";
import axios from "axios";
import StarRatingNonInteractable from "../StarRatingNonInteractable";
import StarRating from "../StarRating"; // Import the StarRating component
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function Reviewboard() {
  const [myData, setData] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedItem, setEditedItem] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletedItem, setDeletedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [editedItemId, setEditedItemId] = useState(null); // State to store the ID of the edited song

  const handleEdit = (item) => {
    setEditedItem(item);
    setEditedItemId(item.id); // Store the ID of the edited song
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
// http://localhost/333ibghw3/index.php/user/edit?id=11&username=Bartek&artist=Vacations&song=Relax&rating=4
  const handleSaveEdit = () => {
    axios
    .put("http://localhost/333ibghw3/index.php/user/edit?id="+editedItem.id+"&username="+localStorage.getItem("logged in")+"&song="+editedItem.song+"&artist="+editedItem.artist+"&rating="+editedItem.rating)
    .then((response) => {
      // setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    alert(("http://localhost/333ibghw3/index.php/user/edit?id="+editedItem.id+"&username="+localStorage.getItem("logged in")+"&song="+editedItem.song+"&artist="+editedItem.artist+"&rating="+editedItem.rating))
    });

    //Handle saving the edited item
    console.log("Edited Item:", editedItem); // Print the edited item to the console
    setShowEditModal(false);

  };


  const handleSaveDelete = () => {
    axios
    .delete("http://localhost/333ibghw3/index.php/user/delete?username="+localStorage.getItem("logged in")+"&song="+deletedItem.song+"&artist="+deletedItem.artist)
    .then((response) => {
    })
    .catch((error) => {
      console.log(error);
    });
    
    // Handle saving the edited item
    console.log("Deleted Item:", deletedItem); // Print the edited item to the console
    setShowDeleteModal(false);

  };
  

  const handleDelete = (item) =>
  {
      setDeletedItem(item);
      setShowDeleteModal(true);
  }
  


  useEffect(() => {
    axios
      .get("http://localhost/333ibghw3/index.php/user/list?limit=20")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ borderRadius: "10px", padding: "5px" }}
      />
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Artist</th>
            <th>Song</th>
            <th>Rating</th>
            <th>ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((item) => {
            const userIsUser = localStorage.getItem("logged in") === item.username;
            const filteredData = myData.filter((item) => 
            item.artist.toLowerCase().includes(searchTerm.toLowerCase())
    )
            return (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.artist}</td>
                <td>{item.song}</td>
                <td>
                  <StarRatingNonInteractable initialRating={item.rating} />
                </td>
                <td>{item.id}</td>
                <td>
                  {userIsUser && (
                    <button onClick={() => handleEdit(item)}>
                      <FaPencilAlt />
                    </button>
                  )}
                </td>
                <td>
                  {userIsUser && (
                    <button onClick={() => handleDelete(item)/* Handle delete button click */ }>
                      <FaTrashAlt />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Edit Modal */}
      {/* {showEditModal && editedItem && (
  <div className="modal">
    <h2>Edit Item</h2>
    <div>
      <p>ID: {editedItem.id}</p>
    </div>
    <form>
      <div className="form-group">
        <label htmlFor="id">ID</label>
        <input
          type="text"
          id="id"
          name="id"
          value={editedItem.id}
          readOnly // Make this field read-only so the ID cannot be edited
        />
      </div> */}
      {showEditModal && editedItem && (
        <div className="modal">
          <h2>Edit Item</h2>
          <div>
            <p>ID: {editedItem.id}</p>
          </div>
          <form>
            {/* ID form (non-interactable) */}
            <div className="form-group">
              <label htmlFor="id">ID</label>
             <input
                type="text"
                id="id"
                name="id"
                value={editedItem.id}
                readOnly // Make this field read-only so the ID cannot be edited
              />
            </div>
            {/* Artist form */}
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={editedItem.artist}
                onChange={(e) => {
                  const updatedItem = { ...editedItem, artist: e.target.value };
                  setEditedItem(updatedItem);
                }}
              />
            </div>
            {/* Song form */}
            <div className="form-group">
              <label htmlFor="song">Song</label>
              <input
                type="text"
                id="song"
                name="song"
                value={editedItem.song}
                onChange={(e) => {
                  const updatedItem = { ...editedItem, song: e.target.value };
                  setEditedItem(updatedItem);
                }}
              />
            </div>
            {/* Rating form */}
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="song"
                name="song"
                value={editedItem.rating}
                onChange={(e) => {
                  const updatedItem = { ...editedItem, rating: e.target.value };
                  setEditedItem(updatedItem);
                }}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <StarRating
                initialRating={editedItem.rating}
                onChange={(newRating) => {
                  const updatedItem = { ...editedItem, rating: newRating.target.value};
                  setEditedItem(updatedItem);
                }}
              />
            </div> */}
          </form>
           {/* Button and handling of saving data for 'handleSaveEdit'  */}
          <button
            onClick={() => {
              console.log("Edited Item:", editedItem);
              handleSaveEdit(editedItemId); // Pass the ID to the save function
            }}
          >
            Save
          </button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
      {/* Delete Modal */}
      {showDeleteModal && deletedItem && (
        <div className="modal">
          <h2>Delete Item</h2>
          <form>
            {/* Artist Form */}
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={deletedItem.artist}
              />
            </div>
            {/* Song form */}
            <div className="form-group">
              <label htmlFor="song">Song</label>
              <input
                type="text"
                id="song"
                name="song"
                value={deletedItem.song}
              />
            </div>
            {/* Left as a flex I guess due to what was being attempted vs what was in the final implementation *\_w_/* */}
            {/* <label htmlFor="rating">Rating</label>
              <StarRating
                initialRating={deletedItem.rating}
              /> */}
            <div className="form-group">
            <label htmlFor="rating">Rating</label>
              <input
                type="text"
                id="rating"
                name="rating"
                value={deletedItem.rating}
              />
            </div>
          </form>
          {/* Button and handling of saving data for 'handleSaveDelete'  */}
          <button
            onClick={() => {
              console.log("Deleted Item:", deletedItem);
              handleSaveDelete();
            }}
          >
            Delete
          </button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </div>
      )}
    </div>
  );
        
    
}

export default Reviewboard;

