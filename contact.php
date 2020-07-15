<?php
// -----------Conatct page-----------
$name=$_REQUEST["c-name"];
$email=$_REQUEST["c-email"];
$message=$_REQUEST["txt-area"];

mail("mjdas14@gmail.com","Query",$message,"From: $name <$email>");
?>