var name_of_students=[];
function submit()
{
    var name1= document.getElementById("student_1").value;
    var name2= document.getElementById("student_2").value;
    var name3= document.getElementById("student_3").value;
    var name4= document.getElementById("student_4").value;
    name_of_students.push(name1);
    name_of_students.push(name2);
    name_of_students.push(name3);
    name_of_students.push(name4);
    document.getElementById("result").innerHTML= name_of_students;
    document.getElementById("answer").style.display="none";
    document.getElementById("sorting").style.display="inline-block";
}
function sorting()
 { name_of_students.sort();
     console.log(name_of_students);
      document.getElementById("result").innerHTML = name_of_students; }