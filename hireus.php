
<?php
//_____________Hire page_________

$name=$_REQUEST["name"];
$email=$_REQUEST["email"];
$phone=$_REQUEST["number"];
if(isset($_POST['submit']))
{
$service=$_POST['services'];
}
$msg=$_REQUEST["purpose"];
mail("mjdas14@gmail.com","I am hireing You for $service","$msg","FROM: $name" ,"Email: <$email>", "Phone Number: $phone");
?>