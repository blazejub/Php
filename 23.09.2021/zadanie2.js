/*2. Napisz instrukcję, która sprawdza na podstawie trzech długości boków 
($a, $b, $c) czy dany trójkąt jest równoboczny (warunek: a=b i b=c), równoramienny (warunek: a=b lub b=c lub a=c) 
czy różnoboczny (jeśli żaden z powyższych warunków nie jest prawdziwy). */

var  a = prompt("Podaj a","")
var  b = prompt("Podaj b","")
var c = prompt("Podaj c","")
if (a==b&&b==c)
    document.write("Trojkat Jest to trójkąt równoboczny")
    else if(a==b||b==c||a==c)
        document.write("Trojkat jest równoramienny")
    
    else
        document.write("Jest to trójkąt różnoboczny")
    

