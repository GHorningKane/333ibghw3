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



  const handleEdit = (item) => {
    setEditedItem(item);
    setShowEditModal(true);
  };

  const handleCancelEdit = () => {
    setShowEditModal(false);
  };

  const handleSaveEdit = () => {
    // axios
    // .get("http://localhost/333ibghw3/index.php/user/edit?username="+localStorage.getItem("logged in")+"&song="+editedItem.song+"&artist="+editedItem.artist+"&rating="+editedItem.rating)
    // .then((response) => {
    //   // setData(response.data);
    // })
    // .catch((error) => {
    //   console.log(error);
    
    // alert(("http://localhost/333ibghw3/index.php/user/edit?username="+localStorage.getItem("logged in")+"&song="+editedItem.song+"&artist="+editedItem.artist+"&rating="+editedItem.rating))
    // });
    // Handle saving the edited item
    // console.log("Edited Item:", editedItem); // Print the edited item to the console
    // setShowEditModal(false);

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
    <div>
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
      {showEditModal && editedItem && (
        <div className="modal">
          <h2>Edit Item</h2>
          <form>
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
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <StarRating
                initialRating={editedItem.rating}
                onChange={(newRating) => {
                  const updatedItem = { ...editedItem, rating: newRating.target.value};
                  setEditedItem(updatedItem);
                }}
              />
            </div>
          </form>
          <button
            onClick={() => {
              console.log("Edited Item:", editedItem);
              handleSaveEdit();
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
            <div className="form-group">
              <label htmlFor="artist">Artist</label>
              <input
                type="text"
                id="artist"
                name="artist"
                value={deletedItem.artist}
              />
            </div>
            <div className="form-group">
              <label htmlFor="song">Song</label>
              <input
                type="text"
                id="song"
                name="song"
                value={deletedItem.song}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating</label>
              <StarRating
                initialRating={deletedItem.rating}
              />
            </div>
          </form>
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

