import React, { useState, useEffect } from "react";

function Reviewboard() {
  const [myData, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term

  useEffect(() => {
    // Simulate an API request with fake data
    const fakeData = [
      {
        id: 1,
        username: "Ian",
        artist: "David Beckham",
        song: "Runaway",
        rating: 4,
      },
      {
        id: 2,
        username: "Karen",
        artist: "Steve Jobs",
        song: "Break my Stride",
        rating: 3,
      },
      {
        id: 3,
        username: "Johnathan",
        artist: "Kurt Cobain",
        song: "Love the Way You Lie",
        rating: 2,
      },
      {
        id: 4,
        username: "Carl",
        artist: "Kurt Cobain",
        song: "Another song",
        rating: 1,
      },
      {
        id: 5,
        username: "Kevin",
        artist: "Kurt Cobain",
        song: "Song 2",
        rating: 3,
      },
    ];

    // Set the fake data as the component's state
    setData(fakeData);
  }, []);

  const filteredData = myData.filter((item) =>
    item.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            return (
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>{item.username}</td>
                <td style={{ textAlign: "center" }}>{item.artist}</td>
                <td style={{ textAlign: "center" }}>{item.song}</td>
                <td style={{ textAlign: "center" }}>{item.rating}</td>
                <td style={{ textAlign: "center" }}>{item.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Reviewboard;