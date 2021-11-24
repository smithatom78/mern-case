function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // document.getElementById("demo").innerHTML = JSON.parse(this.responseText);

            myObj = JSON.parse(this.responseText);
            console.log(myObj);
            var todolist = myObj.todo;
            var itemchecked = 0;
            text = "<form name='myForm1'><center><br><br><table border='1' id='tab' cellpadding='10' height='450' width='750' align='center'><tr><th>SNO</th><th>Userid</th><th>Title of Event</th><th>Status</th></tr>"
            for (x in todolist) {
                var st = '';
                if (todolist[x].completed) {
                    st = 'checked ';
                    itemchecked += 1;
                }

                text += "<tr ><td align='center'>" + todolist[x].id + "<td>" + todolist[x].userId + " </td>" + "<td align='left'>" + todolist[x].title + " </td>" + "<td align='center'><input type='checkbox' onclick='myFunction()' id='status'" + st + "></td> </tr> ";
            }
            text += "<tr><td colspan='4'><span>Total Item count: <span id='item-count' > 15 </span></span ></span > </td></tr> </table></center > < /form>";
            //var text1 = "<h2><span>Item count: <span id='item-count' > 0 </span></span ><span > Unchecked count: <span id = 'unchecked-count' > 0 </span></span></h2>"`
            document.getElementById("tab").innerHTML = text;
            // document.write(text1);
            // document.getElementById("item-count").innerHTML = itemcount;
            //alert(itemchecked);
        }
    };
    xhttp.open("GET", "todo.json", true);
    xhttp.send();

}

function myFunction() {

    var checkbox1 = document.querySelectorAll("input[type='checkbox']");
    var count = 0;
    var itemcount = checkbox1.length;
    for (var i = 0; i < checkbox1.length; i++)
        if (checkbox1[i].checked) {
            //    alert("success");
            count += 1;

        }
        //alert(count);
        //  checkbox1.addEventListener('change', function() {
    if (this.checked) {
        // Checkbox is checked..

        count -= 1;
        // alert(count);
        if (count == 1) {
            alert("complete the tasks");
        }
        //alert(itemchecked);
    } else {
        // Checkbox is not checked..
        //   alert("checked1");
        //   alert(count);
        if (count == 5) {
            alert("Congrats.  5 Tasks have been Successfully Completed ");
        }
        count += 1;

        //alert(itemchecked);
    }

    // alert(itemcount);
    //});
}