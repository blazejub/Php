//niedziala / do dokonczenia
do{
a = parseInt(prompt("Podaj wartosc 0-100"))
} while(procent<0 | procent>100 | isNaN(a))

slupek = "<font color = 'red'>";
for(i=0; i<a;i++){
    slupek +='|' 
}
slupek +="<font color =' green '>"
for(i=a; i<=100; i++){
    slupek+="|"
}
slupek+="</font>"
document.write("<br>"+slupek+"="+a+"%")
``