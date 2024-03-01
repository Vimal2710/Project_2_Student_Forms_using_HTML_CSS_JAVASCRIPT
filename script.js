var names=document.getElementById("usrname")
var age=document.getElementById("usrage")
var course=document.getElementById("usrcourse")
var email=document.getElementById("usremail")
var tbody=document.getElementById("tbody")
var list=document.getElementById("list")
function save(event){
    console.log(names)
    console.log(age)
    console.log(course)
    console.log(email)
    var rows=document.createElement("tr")
    rows.setAttribute("id","row")
    rows.innerHTML=`<td>${names.value}</td> <td>${age.value}</td> <td>${course.value}</td> <td>${email.value}</td> <td><button onclick="del(event)">Delete</button></td>`
    tbody.append(rows)
    list.style.display="block"
}
var row=document.getElementById("row")
function del(event)
{
    console.log(event.target.parentElement)
    event.target.parentElement.parentElement.remove()
}