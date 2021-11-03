<?php
if (isset($_POST['submit'])) {

    $kantine = $_POST['kantine'];
    $aanbod = $_POST['aanbod'];
    $drink = $_POST['drink'];
    $fruit = $_POST['fruit'];
    $ontbijt = $_POST['ontbijt'];
    $uur = $_POST['uur'];
    $bmi = $_POST['bmi'];
    $score = 0;


if ($kantine == "Elke dag") {
    echo "Geef niet zoveel geld uit!<br>";
}

if ($kantine == "Bijna elke dag") {
    echo "Neem vaker lunch mee<br>";
}

if ($kantine == "Soms") {
    echo "Goed genoeg lekker bezig<br>";
}

if ($kantine == "Nooit") {
    echo "Goedzo ga zo door!<br>";
}

if ($aanbod == "Nee") {
    echo "Vraag aan school voor meer gezonde dingen<br>";
}

if ($aanbod == "Ja") {
    echo "Dit is top eet lekker gezond!<br>";
}

if ($score > 3){
    echo "je leeft gezond<br>";
}

$score = $drink + $fruit;
echo $score;
}
