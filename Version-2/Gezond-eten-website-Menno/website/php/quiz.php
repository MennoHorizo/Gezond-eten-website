<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/Quiz.temp.css">
</head>
<body>

<?php

    $kantine = $_POST['kantine'];
    $aanbod = $_POST['aanbod'];
    $drink = $_POST['drink'];
    $fruit = $_POST['fruit'];
    $ontbijt = $_POST['ontbijt'];
    $uur = $_POST['uur'];
    $bmi = $_POST['bmi'];
    $score = 0;

?>
    <div>
<?php

if ($aanbod == "Nee") {
    echo "Vraag aan school voor meer gezonde dingen<br>";
}

if ($aanbod == "Ja") {
    echo "Dit is top eet lekker gezond!<br>";
}

if ($bmi == "Overgewicht") {
    echo "Probeer minder te eten<br>";
}

if ($bmi == "Goed") {
    echo "Ga zo door!<br>";
}

if ($bmi == "Ondergewicht") {
    echo "Probeer meer te eten<br>";
}

$score = $kantine + $drink + $fruit + $ontbijt + $uur;
echo $score;

if ($score < 6){
    echo " Je leeft niet gezond<br>";
}

if ($score >= 7 && $score < 13){
    echo " Je bent normaal gezond<br>";
}

if ($score >= 13 && $score <= 16 ){
    echo " Je leeft helemaal gezond lekker bezig!<br>";
}

?>
</div>
</body>
</html>