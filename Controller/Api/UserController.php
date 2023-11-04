<?php

class UserController extends BaseController

{

    /**

* "/user/list" Endpoint - Get list of users

*/

    public function listAction()

    {

        $strErrorDesc = '';

        $requestMethod = $_SERVER["REQUEST_METHOD"];
        // echo $_SERVER['QUERY_STRING'];


        // getQueryStringParams($_SERVER['QUERY_STRING'], $arrQueryStringParams);
        $arrQueryStringParams = $this->getQueryStringParams();
        // echo $arrQueryStringParams . "Fart";
        if(!is_array($arrQueryStringParams)) {
            // echo "REEEEEEEEEEEEEE";
            // echo $arrQueryStringParams['limit'];
        }

        if (strtoupper($requestMethod) == 'GET') {

            try {

                $userModel = new UserModel();

                $intLimit = 100;
                // echo"aaa\n";
                // echo $_GET['limit'];
                // echo"bbb\n";



                if (isset($arrQueryStringParams['limit']) && $arrQueryStringParams['limit']) {

                    $intLimit = $arrQueryStringParams['limit'];
                    // echo $intlimit;
                    // echo "FKDJF:SDKJFL";

                }
                // echo"a\n";
                // echo $intlimit;
                // echo "LIKE HOW, TELL ME HOW";
                $arrUsers = $userModel->getRatings($intLimit);

                $responseData = json_encode($arrUsers);

            } catch (Error $e) {

                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';

                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';

            }

        } 
        elseif (strtoupper($requestMethod) == 'POST') {
            try {

                $userModel = new UserModel();
                $leusername = $_GET['username'];
                $lepassword = $_GET['password'];
                // echo"aaa\n";
                // echo $_GET['username'];
                // echo"aaa\n";
                // echo $_GET['password'];
                // echo"bbb\n";
                // echo"bbb\n";
                // $leusername = $arrQueryStringParams['username'];
                // $lepassword = $arrQueryStringParams['password'];
                $intLimit = 10;

                // if (isset($arrQueryStringParams['username']) && $arrQueryStringParams['username']) {
                //     // echo "username good";
                // }
                // else {
                //     // echo "woof";
                //     // echo $arrQueryStringParams['username'];
                // }
                // if (!$arrQueryStringParams){
                //     // echo "YYYYYY";
                //     // echo $arrQueryStringParams['username'];

                // }
                // if (isset($arrQueryStringParams['password']) && $arrQueryStringParams['password']) {
                //     // echo "password good";
                // }


                // if (isset($arrQueryStringParams['username']) && $arrQueryStringParams['password']) {
                //     // $leusername = $arrQueryStringParams['username'];
                //     // $lepassword = $arrQueryStringParams['password'];
                // }
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
            $answer = $userModel->createUsers($leusername, $lepassword);
            if (gettype($answer) == gettype("string")){
                echo "username is taken";
                return "username is taken";
            }
            else{
            $responseData = json_encode($answer);
            }
            // $userModel = new UserModel();
            // $intLimit = 10;

            // $arrUsers = $userModel->getUsers($intLimit);

            // $responseData = json_encode($arrUsers);
            
           
            // $userModel -> createUser(array('Gavin11212121', '123456789'));

        }
        else {

            $strErrorDesc = 'Method not supported';

            $strErrorHeader = 'HTTP/1.1 422 Unprocessable Entity';

        }

        // send output

        if (!$strErrorDesc) {

            $this->sendOutput(

                $responseData,

                array('Content-Type: application/json', 'HTTP/1.1 200 OK')

            );

        } else {

            $this->sendOutput(json_encode(array('error' => $strErrorDesc)), 

                array('Content-Type: application/json', $strErrorHeader)

            );

        }

    }

    public function loginAction()
    {
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $leusername = $_GET['username'];
        $lepassword = $_GET['password'];
        $userModel = new UserModel();
        if (strtoupper($requestMethod) == 'GET') {
            try {
                $arrUsers = $userModel->login($leusername, $lepassword);
                $responseData = json_encode($arrUsers);
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } 
    }
    public function addAction()
    {
        // echo "surely we're here";
        $strErrorDesc = '';
        $requestMethod = $_SERVER["REQUEST_METHOD"];
        $leusername = $_GET['username'];
        $lesong = $_GET['song'];
        $leartist = $_GET['artist'];
        $lerating = $_GET['rating'];

        $userModel = new UserModel();
        if (strtoupper($requestMethod) == 'POST') {
            // $answer = $userModel->createUsers($leusername, $lepassword);
            // if (gettype($answer) == gettype("string")){
            //     echo "username is taken";
            //     return "username is taken";
            // }
            // else{
            // $responseData = json_encode($answer);
            // }
            // echo "but not the catch?";
            try {
            // echo "\nor is it?";

                $arrUsers = $userModel->addSong($leusername, $lesong, $leartist, $lerating);
                $responseData = json_encode($arrUsers);
                echo "safe in controller";
            } catch (Error $e) {
                $strErrorDesc = $e->getMessage().'Something went wrong! Please contact support.';
                $strErrorHeader = 'HTTP/1.1 500 Internal Server Error';
            }
        } 
    }

}
