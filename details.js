function getData()
{
    //gettting the values
    let userName = document.getElementById("user_Name").value;
    //saving the values in local storage
    localStorage.setItem("txtValue", userName);
}