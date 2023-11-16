const day= document.querySelector(".day");
const btn= document.querySelector(".btn");
const time= document.querySelector(".time");
const div3= document.querySelector(".div3");
const div2= document.querySelector(".div2");
const btn2= document.querySelector(".btn2");





let students = [{id:"1",day:"21.12.2023",time:"00:00"}]


btn.addEventListener("click", function () {
    let student={};
    if(day.value && time.value){
        student.day=day.value;
        student.time = time.value;
        student.id=Date.now();
students.push(student);
innerStudents(students);
day.value="";
time.value="";

    }
    else{
        alert("Kamchilik bor")
    }
});
innerStudents(students)
function innerStudents(dataa){
    if(students.length!=0){
        div2.innerHTML= " ";
        dataa.forEach(element =>{
            div2.innerHTML+=`
            <div class="div02">
            <div class="div3">${element.day}</div>
            <div class="div3">${element.time}</div>
            <button class="btn2"onclick="removeStudent(${element.id})">Delete</button>
            </div>
            `
        })
    }
    else{
        div2.innerHTML='<div class="empty" >EMPTY</div>'
    }
}

function removeStudent(id){
    students = students.filter(item=>item.id!=id);
    innerStudents(students)
}