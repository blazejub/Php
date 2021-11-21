<html>
<head>
    <meta charset='utf-8'>
</head>
<body>
    <form action = '' method = 'post'>
        Cyfre która chcesz podniesc <input type= 'number' name = 's'>
        <input type = 'submit' value= 'wyslij'>
    </form>
<?php
if(!empty($_POST['s'])){
    $a = $_POST['s'];
    if($a < 0){
        echo 'Podaj prawidłowa wartosc';
    }
    else {
        echo 'Wartosc tego pierwiastka wynosi: '.sqrt($a);
    }
}
?>
</body>
</html>