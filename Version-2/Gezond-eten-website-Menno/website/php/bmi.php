<?php

$age = $_POST['leeftijd'];

$height = $_POST['lengte'];
$height_2 = $height / 100;

$weight = $_POST['gewicht'];

function bmi($weight,$height_2) {
    $bmi = $weight/($height_2*$height_2);
    return $bmi;
} 
$bmi = bmi($weight,$height_2);

if ($bmi <= 18.5) {
    $output = "je heb ondergewicht.";
} else if ($bmi > 18.5 AND $bmi<=24.9 ) {
    $output = "je heb goed gewicht.";
} else if ($bmi > 24.9 AND $bmi<=26.9) {
    $output = "licht overgewicht.";
} else if ($bmi > 27 AND $bmi <= 30) {
    $output = "matig overgewicht.";
} else if ($bmi > 30 AND $bmi <= 40) {
    $output = "zwaar overgewicht.";
} else if ($bmi > 40) {
    $output = "gevaarlijk overgewicht.";
} else {
    $output = "error.";
}

echo 'Je BMi is '.$bmi.', '.$output.'  Als je terug wilt gaan, gebruik de terug knop van de browser.';

?>