//Napisz program, ocena, który dla parametrów całkowitych zwraca ocenę słownie 
//tzn., 1-niedostateczny, 2-dopuszczający, ale np. 0 lub – 7 nie ma takiej oceny
var a = prompt("Podaj ocene całkowitą z przedziału od 1-6 ","")


switch(a){
    case "1": document.write("Niedostateczna")
    break;
    case "2":document.write("Dopuszczająca")
    break;
    case "3":document.write("Dostateczna")
    break;
    case "4":document.write("Dobra")
    break;
    case "5":document.write("Bardzo dobra")
    break;
    case "6":document.write("Celujaca")
    break;
default: document.write("Nie ma takiej oceny")
}