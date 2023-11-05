import React, { useState, useEffect } from "react";

function Reviewboard() {
  const [myData, setData] = useState([]);

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
        rating: 5,
      },
    ];

    // Set the fake data as the component's state
    setData(fakeData);
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
          </tr>
        </thead>
        <tbody>
          {myData.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.username}</td>
                <td>{item.artist}</td>
                <td>{item.song}</td>
                <td>{item.rating}</td>
                <td>{item.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Reviewboard;