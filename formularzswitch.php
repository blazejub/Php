<html>
<head>
    <meta charset='utf-8'>
</head>
<body>
    <form action = '' method = 'post'>
        Podaj ocene (jako cyfrę) <input type= 'number' name = 'ocena'>
        <input type = 'submit' value= 'wyslij'>
    </form>
<?php
if(!empty($_POST['ocena'])){
    $nr = $_POST['ocena'];
    switch($nr){
        case 1: echo 'brak promocji do następnej klasy';break;
        case 2:
        case 3:
        case 4:
        case 5: echo 'promocja do następnej klasy';break;
        case 6: echo 'promocja do następnej klasy z wyróżnieniem';break;
        default: echo 'Nie ma takiej oceny :(';
    }
}
?>
</body>
</html>