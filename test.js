let detail = [];
let editText;
function mydetail() {
  var firstname = document.getElementById("firstname").value;
  var Lastname = document.getElementById("Lastname").value;
  var Phone = document.getElementById("Phone").value;
  var Email = document.getElementById("Email").value;
  var Username = document.getElementById("Username").value;
  var Address = document.getElementById("Address").value;
  var id = document.getElementById("id").value;

   var Gender = document.forms["myForm"]["Gender"].value;
   var Skills = document.querySelectorAll('input[type=checkbox]'); 
   var checkboxes = document.querySelectorAll('input[name="Skills[]"]:checked'), Skills = [];
   Array.prototype.forEach.call(checkboxes, function(el) {
    Skills.push(el.value);
   });

  if(firstname=="") {
    document.getElementById("Firstname_err").innerHTML="Required";
  } else{
    document.getElementById("Firstname_err").innerHTML="";
  }
  //lastname
  if(Lastname=="") {
    document.getElementById("Lastname_err").innerHTML="Required";
  } else{
    document.getElementById("Lastname_err").innerHTML="";
  }
  //phoneNumber
  if(Phone=="") {
    document.getElementById("Phone_err").innerHTML="Required";
  } else{
    document.getElementById("Phone_err").innerHTML="";
  }
  
  //email
  if(Email=="") {
    document.getElementById("Email_err").innerHTML="Required";
  } else{
    document.getElementById("Email_err").innerHTML="";
  }
  //userName
  if(Username=="") {
    document.getElementById("Username_err").innerHTML="Required";
  } else{
    document.getElementById("Username_err").innerHTML="";
  }
  //password
  //address
  if(Address=="") {
    document.getElementById("Address_err").innerHTML="Required";
  } else{
    document.getElementById("Address_err").innerHTML="";
  }
  if (Skills.length==0) {
    document.getElementById("Skills_err").innerHTML = "Please Choose at least one Skill.";
  }else{
      document.getElementById("Skills_err").innerHTML = "";  
  }
  //gender
  if (Gender =="") {
    document.getElementById("Gender_err").innerHTML = "Please Select a gender.";
  }else{
      document.getElementById("Gender_err").innerHTML = "";  
  }
  if (
    firstname != "" &&
    Lastname != "" &&
    Phone!= "" &&
    Email != "" &&
    Username != "" &&
    Address != "" && 
    Gender != "" &&
     Skills != ""
  ) {
    if(id!=""){
      detail[id].firstname= firstname;;
      detail[id].Lastname= Lastname;
    detail[id].Phone= Phone;
    detail[id].Email= Email;
      detail[id].Username= Username;
      detail[id].Address = Address;
    detail[id].Gender= Gender;
    detail[id].Skills= Skills;
    }else{

  let obj={};
  obj["firstname"] = firstname;
  obj["Lastname"] = Lastname;
  obj["Phone"] = Phone;
  obj["Email"] = Email;
  obj["Username"] = Username;
  obj["Address"] = Address;
  obj["Gender"] = Gender;
  obj["Skills"] = Skills;
  detail.push(obj);
}
  }
insert(detail);
document.getElementById("id").value="";
document.getElementById("myForm").reset();
}
//Table
function table() {
  editText = undefined;
  var v = "";

  for (i = 0; i < detail.length; i++) {
    v += "<tr>";
    v += "<td>" + detail[i].firstname + "</td>";
    v += "<td>" + detail[i].Lastname + "</td>";
    v += "<td>" + detail[i].Phone + "</td>";
    v += "<td>" + detail[i].Email + "</td>";
    v += "<td>" + detail[i].Username + "</td>";
    v += "<td>" + detail[i].Address + "</td>";
    v += "<td>" + detail[i].Gender + "</td>";
    v += "<td>" + detail[i].Skills + "</td>";
    v +=
      '<td><button class="btn btn-primary" style="" onclick="Edit(' +
      i +
       ')">Edit</button> <button class="btn btn-danger"  onclick="Delete(' +
       i +
       ')">Delete</button></td>';
  }
  document.getElementById("displayArea").innerHTML = v;
}
//Insert
function insert(detail) {

  let string = JSON.stringify(detail);
  localStorage.setItem("detail", string);
  console.log(JSON.parse(localStorage.getItem("detail")));
  console.log(detail);
  table();
}
//Delete
  function Delete(id) {
   console.log(detail);
    detail.splice(id, 1);
    
    let string = JSON.stringify(detail);
    localStorage.setItem("detail", string);
    console.log(JSON.parse(localStorage.getItem("detail")));
    console.log(detail);
    
    table();
  }
// Edit
function Edit(id) {
  editText = id;
  console.log(editText);
  document.getElementById("firstname").value = detail[id].firstname;
  document.getElementById("Lastname").value = detail[id].Lastname;
  document.getElementById("Phone").value = detail[id].Phone;
  document.getElementById("Email").value = detail[id].Email;
  document.getElementById("Username").value = detail[id].Username;
  document.getElementById("Address").value = detail[id].Address;
  document.forms["myForm"]["Gender"].value = detail[id].Gender;
  document.getElementById("id").value = id;


  var skills = detail[id].Skills;
  for (var j = 0; j < skills.length; j++) {
    var valueToMatch = skills[j];
    var inputElements = document.querySelectorAll('input[name="Skills[]"]');
    
    for (var i = 0; i < inputElements.length; i++) {
        if (inputElements[i].value === valueToMatch) {
            inputElements[i].checked = true;
        }
    }
}
}

