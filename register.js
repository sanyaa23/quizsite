function checkPassword(){
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    console.log(" Password:", password,'\n',"Confirm Password:",cnfrmPassword);
    let message = document.getElementById("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match";
            message.style.color = "green";
        }
        else{
            message.textContent = "Passwords don't match";
            message.style.color = "red";
        }
    }
    else{
        alert("Password can't be empty!");
        message.textContent = "";
    }
}
// const tabss=document.querySelectorAll('.tabs');
// const all_content=document.querySelectorAll('.content');
// tabss.forEach((tab,index)=>{
//     tab.addEventListener('click',()=>{
//         tabss.forEach(tab=>{tab.classList.remove('active')})
//         tab.classList.add('active');
//     })
// })
function checkName()
{
    let name=document.getElementById("name").value;
    console.log(" Name:", name);
    let message = document.getElementById("messagename");
    if(name.length!=0)
    {
        if(typeof(name)!="string")
    {
        message.textContent = "enter a valid name";
        message.style.color = "red";  
    }
        else
    {
        message.textContent = "Name entered is valid";
        message.style.color = "green";  
    }
    }



}
function checkPasswordLength()
{
    let len=document.getElementById("password").value;
    console.log(" Passwordlength:", passwordlength);
    let message = document.getElementById("messagelength");
    if(len.length!=0)
    {
        if(len.length<8)
        {
            message.textContent = "Password should be atleast 8 characters long";
            message.style.color = "red";  
        }
    }
}
function checkCheckbox()
{
    let check=document.getElementById("check-box1");
    console.log(" Checkbox:", checkbox);
   if(check.checked==false)
   {
    alert("agree to conditons to proceed further!");

   }
}