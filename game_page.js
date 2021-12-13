player_1name = localStorage.getItem("player_1_name");
player_2name = localStorage.getItem("player_2_name");

score1 = 0;
score2 = 0;

document.getElementById("player_1name").innerHTML = player_1name + ":";
document.getElementById("player_2name").innerHTML = player_2name + ":";
document.getElementById("score1").innerHTML = score1;
document.getElementById("score2").innerHTML = score2;
document.getElementById("player_question").innerHTML = "question turn -" + player_1name;
document.getElementById("player_answer").innerHTML = "answer turn -" + player_2name;

function send(){
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    char1 = word.charAt(1);
    length1 = Math.floor(word.length/2);
    char2 = word.charAt(length1);
    length2 = word.length - 1;
    char3 = word.charAt(length2);
    remove1 = word.replace(char1, "_");
    remove2 = remove1.replace(char2, "_");
    remove3 = remove2.replace(char3, "_");

    questionWord = "<h4 id='word_Display'> Q."+ remove3 +"</h4>"
    inputBox = "<br> answer:<input type='text' id='inputCheckbox'>";
    checkbutton = "<br><br> <button class='btn btn-info' onclick='check()'> check</button>";
    row = questionWord + inputBox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    getanswer = document.getElementById("inputCheckbox").value;
    answer = getanswer.toLowerCase();
    console.log(answer);
    if(answer == word){
        if(answer_turn == "player1"){
            score1 = score1 + 1;
            document.getElementById("score1").innerHTML = score1;
        }
        else{
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("question_turn").innerHTML = "question turn -" + player_2name;
    }
    else{
        question_turn = "player1";
        document.getElementById("question_turn").innerHTML = "question turn - " + player_1name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("answer_turn").innerHTML = "answer turn - " + player_2name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("answer_turn").innerHTML = "answer turn - " + player_1name;
    }
    document.getElementById("output").innerHTML = "";
}