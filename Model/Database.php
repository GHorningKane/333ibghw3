<?php

class Database

{

    protected $connection = null;

    public function __construct()

    {

        try {

            $this->connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);

    	

            if ( mysqli_connect_errno()) {

                throw new Exception("Could not connect to database.");   

            }

        } catch (Exception $e) {

            throw new Exception($e->getMessage());   

        }			

    }

    public function select($query = "" , $params = [])

    {

        try {
            $connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
            $stmt = $this->executeStatement( $query , $params );
            $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);				

            $stmt->close();

            return $result;

        } catch(Exception $e) {
            
            throw New Exception( $e->getMessage() );

        }

        return false;

    }

    public function selectDupe($query = "" , $params = [])

    {

        try {
            $connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
            if($stmt = mysqli_prepare($connection, $query)){
                mysqli_stmt_bind_param($stmt, "s", $params[1]);
                if(mysqli_stmt_execute($stmt)){
                    mysqli_stmt_store_result($stmt);
                    if(mysqli_stmt_num_rows($stmt) == 0){ //username not taken
                        echo "presumably not in database\n";
                        $stmt = $this->executeStatement( $query , $params );
                        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);				
                        $stmt->close();
                        return $result;
                        return "num_rows==0";
                    }
                    else{
                        // echo "so huh?";
                        return "username is taken";
                    }
                }}  
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }
        return false;
    }
    
    public function selectDupeAdd($query = "" , $params = [])

    {

        try {
            $connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
            if($stmt = mysqli_prepare($connection, $query)){
                mysqli_stmt_bind_param($stmt, "sss", $params[1], $params[2], $params[3]);
                if(mysqli_stmt_execute($stmt)){
                    mysqli_stmt_store_result($stmt);
                    if(mysqli_stmt_num_rows($stmt) == 0){ //song not already exists
                        echo "presumably not in database\n";
                        $stmt = $this->executeStatement( $query , $params );
                        $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);				
                        $stmt->close();
                        return $result;
                        return "num_rows==0";
                    }
                    else{
                        echo "already taken?";
                        return "already submitted song";
                    }
                }}  
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }
        return false;
    }

    public function create($query = "" , $params = [])

    {

        try {
            echo "ooga";
            echo $params[1];
            $stmt = $this->executeStatement( $query , $params );
            $result = $stmt->get_result();				
            $stmt->close();
            echo "we did it!";  
            return $result;
        } catch(Exception $e) {
            throw New Exception( $e->getMessage() );
        }

        return false;

    }

    public function userLogin($username, $password){
        $connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
        // echo 'ARRRRRRRRRRRO';
        // Create a prepared statement to select data using parameters.
        $sql_query = "SELECT * FROM users WHERE username = ?";
        $stmt = $connection->prepare($sql_query);
        // Bind the parameter and execute the statement.
        $stmt->bind_param("s", $username);
        $stmt->execute();
        // Get the result and fetch the data.
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        if (!$row) {
            echo "Username doesn't exist :/";
        } else {
            if (password_verify($password, $row['password'])) {
                session_start();
                // echo('PHPSESSID: ' . session_id($_GET['session_id']));
                $_SESSION['username'] = $username;
                $_SESSION["loggedin"] = true;
                // echo "\n";
                // echo $_SESSION['username'];
                return "POGGERS";
            } else {
                $error = "Passwords do not match :/";
                echo $error;
            }
        }
        // Close the prepared statement.
        $stmt->close();
    // Close SQL connection.
}

public function delete($sql, $params = [])
    {

        try {
            // echo "\n";
            // echo $sql;
            // echo ($params[0] .$params[1]. $params[2]. $params[3]);
            // echo "\n";
            $conn = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
            $stmt = mysqli_prepare($conn, $sql);
            $stmt->bind_param(...$params);
            mysqli_stmt_execute($stmt);
            // mysqli_stmt_bind_param($stmt, "i", $id);
            //     if(mysqli_stmt_execute($stmt))
            //         header("location: reviewboard.php");
            // $connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE_NAME);
            // $stmt = $this->executeStatement( $query , $params );
            // $result = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);				
            echo "success";
            $stmt->close();
            // return $result;
        } catch(Exception $e) {
            
            throw New Exception( $e->getMessage() );

        }

        return false;

    }


    private function executeStatement($query = "" , $params = [])

    {

        try {

            $stmt = $this->connection->prepare( $query );

            if($stmt === false) {

                throw New Exception("Unable to do prepared statement: " . $query);

            }

            if( $params ) {

                $stmt->bind_param(...$params);

            }

            $stmt->execute();

            return $stmt;

        } catch(Exception $e) {

            throw New Exception( $e->getMessage() );

        }	

    }

    private function addRecord($query = "", $params = [], $username, $song, $artist, $rating){
        // INSERT INTO ratings ()
        // VALUES (@_DE, @_ASSUNTO, @_DATA)
        // WHERE NOT EXISTS ( SELECT * FROM EmailsRecebidos 
        //                 WHERE De = @_DE
        //                 AND Assunto = @_ASSUNTO
        //                 AND Data = @_DATA);
    }

}
