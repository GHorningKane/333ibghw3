<?php
header('Access-Control-Allow-Origin:*'); // * represents allowing requests from any website
header('Access-Control-Allow-Headers:*'); // Allowable request types
header('Access-Control-Allow-Methods:POST,GET,OPTIONS,DELETE'); // Allowable request methods
header('Access-Control-Allow-Credentials:true'); // Set whether sending cookies is allowed

require __DIR__ . "/inc/bootstrap.php";

// echo "Hello world";

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

// CORS headers

$uri = explode( '/', $uri );

if ((isset($uri[3]) && $uri[3] != 'user') || !isset($uri[4])) {

    header("HTTP/1.1 404 Not Found");

    exit();

}

require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";

$objFeedController = new UserController();

$strMethodName = $uri[4] . 'Action';

$objFeedController->{$strMethodName}();

// require PROJECT_ROOT_PATH . "/Controller/Api/UserController.php";
// $objUserController = new UserController();
// $strMethodName = $uri[4] . 'Action';
// $objUserController->{$strMethodName}();



// class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: "" };
//     }
//     mySubmitHandler = (event) => {
//       event.preventDefault();
//       alert("You are submitting " + this.state.username);
//     };
//     myChangeHandler = (event) => {
//       this.setState({ username: event.target.value });
//     };
//     render() {
//       return (
//         <form onSubmit={this.mySubmitHandler}>
//           <h1>Hello {this.state.username}</h1>
//           <p>Enter your name, and submit:</p>
//           <input type="text" onChange={this.myChangeHandler} />
//           <input type="submit" />
//         </form>
//       );
//     }
//   }
  
//   ReactDOM.render(<MyForm />, document.getElementById("root"));

?>
