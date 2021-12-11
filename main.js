student_array=[];

function submit() {
    var name1=document.getElementById("guest1").value;
   
    student_array.push(name1);
    document.getElementById("display_name").innerHTML=student_array;
}
function show(){
    for (i=0; i<student_array.length; i++){
        document.getElementById("guestlist").innerHTML=document.getElementById("guestlist").innerHTML+"<br>"+student_array[i] ;
    }
}

function sorting() {
    student_array.sort();
    document.getElementById("sorted").innerHTML=student_array;   
   
    document.getElementById("guest1").style.display="h3";
}

function search() {
    document.getElementById("search_display").innerHTML=student_array.find(findname);
}

function findname(name){
    return name == document.getElementById("searchtext").value;
}
