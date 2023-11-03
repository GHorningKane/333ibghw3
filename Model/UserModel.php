<?php

require_once PROJECT_ROOT_PATH . "/Model/Database.php";

class UserModel extends Database

{

    public function getUsers($limit)

    {
        echo"a";
        echo $limit;
        echo "llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll";
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
    public function createUsers($username, $password)
    {
        return $this->create("INSERT INTO users (username, password) VALUES (?, ?)", ["ss", $username, $password]);

        
        $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
        $stmt = $this->connection->prepare($sql);
        $stmt->bind_param("ss", $username, $password);
        mysqli_stmt_execute($stmt);
        // $username = $userData[0];
        // $password = $userData[1];
        // return $this->select("SELECT * FROM users WHERE username = $username");

        // return $this->select("SELECT * FROM users ORDER BY username ASC LIMIT ?", ["i", $limit]);

    }



}
