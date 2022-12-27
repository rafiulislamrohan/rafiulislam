<?php
if (isset($_POST['firstName'])) {
    $server = "localhost";
    $username = "root";
    $password = "";

    $con = mysqli_connect($server, $username, $password);

    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }


    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $countryCode = $_POST['country-code'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message-box-area'];

    $sql = "INSERT INTO `myportfolio`.`informationarea` ( `firstName`, `lastName`, `country-code`, `phone`, `email`, `message-box-area`, `Date`) VALUES ( '$firstName', '$lastName', '$countryCode', '$phone', ' $email', ' $message', current_timestamp())";

    if($con->query($sql) == true){
        //  echo "successfully inserted";
    }
    else{
        echo "ERROR: $sql <br> $con->error ";
    }

    $con->close();



}


?>





