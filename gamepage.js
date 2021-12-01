function send(){
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;
    actual_ans = parseInt(n1) * parseInt(n2);

    question_number = "<h4>" + n1 + "X" + n2 + "</h4>"
    input_box = "<br> Answer: <input type='text' id = 'input_check_box'>";
    check_button = "<br><br><button onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("n1").innerHTML = "";
    document.getElementById("n2").innerHTML = "";
}
p1 = localStorage.getItem("player1_name");
p2 = localStorage.getItem("player2_name");

document.getElementById("Qturn").innerHTML = p1;
document.getElementById("Aturn").innerHTML = p2;