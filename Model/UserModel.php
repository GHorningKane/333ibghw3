<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class UserModel extends Database

{

    public function getRatings($limit)

    {
        // echo"a";
        // echo $limit;
        // echo "llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll";
        return $this->select("SELECT * FROM ratings ORDER BY username ASC LIMIT ?", ["i", $limit]);
        // user_id

    }

    //     public function createUser($userData)
    // {
    //     $sql = "INSERT INTO users (username, password) VALUES (?, ?)";

    //     $stmt = $this->connection->prepare($sql);
    //     $username = $userData[0];
    //     $password = $userData[1];
    //     $stmt->bind_param("ss", $username, $password);
    //     mysqli_stmt_execute($stmt);
    //     // Create prepared statement
    // }
    // public function createUsers2($username, $password)
    // {
    //     $password_hash =  password_hash($password, PASSWORD_DEFAULT);
    //     $exists = $this->select("SELECT * FROM users WHERE username = ?", ["s", $username]);
    //     $type = gettype($exists);
    //     $bool = gettype(false);
    //     echo "\n".$bool.": boolio";
    //     echo "\n".$type.": type \n";
    //     echo '<pre>'; print_r($exists); echo '</pre>';
    //     // if(mysqli_stmt_num_rows($exists) == 0){ //username not taken
    //     if($exists === false){ //username not taken
    //     // if(mysqli_stmt_num_rows( $this->select("SELECT * FROM ratings WHERE username = ?", ["s", $username])) == 0){ //username not taken
    //         echo "false case: \n";
    //         return $this->create("INSERT INTO users (username, password) VALUES (?, ?)", ["ss", $username, $password_hash]);
            
    //     }
    //     elseif ($exists === "exists")
    //     // elseif (mysqli_stmt_num_rows($exists) === 0)
    //     {
    //         echo "exists case: \n";
    //     return $this->select("SELECT * FROM users WHERE username = ?", ["s", $username]);
    //     }

    //     else{
    //         echo "else case: \n";
    //     return $this->create("INSERT INTO users (username, password) VALUES (?, ?)", ["ss", $username, $password_hash]);
     
    //     }
    // }
    public function login($username, $password){
        // echo "aaa\n";
        // echo $username;
        // echo $password;
        return $this->userLogin($username, $password);
    }
    // public function insertSong($username, $song, $artist, $rating){
    public function addSong($username, $song, $artist, $rating){
        // return $this->create("INSERT INTO ratings (username, song, artist, rating) VALUES (?, ?, ?, ?)", ["sssi", $username, $song, $artist, $rating], $username, $song, $artist, $rating);
    //     return $this->create("INSERT INTO ratings (username, song, artist, rating) VALUES (?, ?, ?, ?)  WHERE NOT EXISTS (SELECT * FROM ratings 
    //                     WHERE username = ?
    //                     AND song = ?
    //                     AND artist = ?", ["sssi", $username, $song, $artist, $rating]);
    // }
    // echo "made it to model";
    $exists = $this->selectDupeAdd("SELECT * FROM ratings WHERE username = ? AND song = ? AND artist = ?", ["sss", $username, $song, $artist]);
    // echo "huh?";
        if (gettype($exists) == gettype("hello")){
            echo "already submitted";
            return "you've already submitted this song";
        }
        else 
        {
        // $password_hash =  password_hash($password, PASSWORD_DEFAULT);
            echo "trying to add";
            return $this->create("INSERT INTO ratings (username, song, artist, rating) VALUES (?, ?, ?, ?)", ["sssi", $username, $song, $artist, $rating]);
        }
    }
    public function createUsers($username, $password){
        // return $this->create("INSERT INTO ratings (username, song, artist, rating) VALUES (?, ?, ?, ?)", ["sssi", $username, $song, $artist, $rating], $username, $song, $artist, $rating);
        $exists = $this->selectDupe("SELECT * FROM users WHERE username = ?", ["s", $username]);
        if (gettype($exists) == gettype("hello")){
            return "username is taken";
        }
        else 
        {
        $password_hash =  password_hash($password, PASSWORD_DEFAULT);
            return $this->create("INSERT INTO users (username, password) VALUES (?, ?)", ["ss", $username, $password_hash]);
        }
    }
    public function deleteSong($username, $song, $artist)
    {
        // echo "yoooooooo";
        return $this->delete("DELETE FROM ratings WHERE username = ? AND song = ? and artist = ?", ["sss", $username, $song, $artist]);
    }

}
        // return $this->login($username, $password);
        // $password_hash =  password_hash($password, PASSWORD_DEFAULT);
        // $exists = $this->select("SELECT * FROM users WHERE username = ?", ["s", $username]);
        // // echo "fart";
        // // echo $exists;
        // $type = gettype($exists);
        // // echo "fart";
        // $bool = gettype(false);
        // echo "\n".$bool.": boolio";
        // // echo "<- bool\n ";
        // echo "\n".$type.": type \n";
        // // echo $exists['username'];
        // echo '<pre>'; print_r($exists); echo '</pre>';
        // // echo "<- type";
        // // if(mysqli_stmt_num_rows($exists) == 0){ //username not taken
        // if($exists === false){ //username not taken
        // // if(mysqli_stmt_num_rows( $this->select("SELECT * FROM ratings WHERE username = ?", ["s", $username])) == 0){ //username not taken
        //     echo "false case: \n";
        //     return $this->create("INSERT INTO users (username, password) VALUES (?, ?)", ["ss", $username, $password_hash]);
            
        // }
        // elseif ($exists === "exists")
        // // elseif (mysqli_stmt_num_rows($exists) === 0)
        // {
        //     echo "exists case: \n";
        // return $this->select("SELECT * FROM users WHERE username = ?", ["s", $username]);
        // }

        // else{
        //     echo "else case: \n";
        // return $this->create("INSERT INTO users (username, password) VALUES (?, ?)", ["ss", $username, $password_hash]);
     
        // }




    // public function login($username, $password){
    //     // echo "aaa\n";
    //     // echo $username;
    //     // echo $password;
    //     return $this->userLogin($username, $password);
    // }

        // $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        // $stmt = $this->connection->prepare($sql);
        // $stmt->bind_param("ss", $username, $password_hash);
        // mysqli_stmt_execute($stmt);
        // $username = $userData[0];
        // $password = $userData[1];
        // return $this->select("SELECT * FROM users WHERE username = $username");

        // return $this->select("SELECT * FROM users ORDER BY username ASC LIMIT ?", ["i", $limit]);

