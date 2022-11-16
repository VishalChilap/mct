
var playRef = document.getElementById('play');
var categoryRef = document.getElementById('category');
var questionsRef = document.getElementById('questions');
var difficultyRef = document.getElementById('difficulty');
var typeRef = document.getElementById('type');
var hourRef = document.getElementById('hour');
var minuteRef = document.getElementById('minute');
var secondRef = document.getElementById('second');
var resultRef = document.getElementById('result');
var containerRef = document.getElementById('container');


var ans;

function func(e){
    e.preventDefault();
    // console.log(categoryRef.value);
    // console.log(questionsRef.value);
    // console.log(difficultyRef.value);
    // console.log(typeRef.value);
    playRef.innerHTML = 'Processing';

    if(categoryRef.value==='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value==='Any Type'){
        fetch('https://opentdb.com/api.php?amount=10').then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();

        });
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value==='Any Type'){
        console.log('not')
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value==='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}&category=${categoryRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value==='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryRef.value}&difficulty=${difficultyRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryRef.value}&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value==='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}&category=${categoryRef.value}&difficulty=${difficultyRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=10&category=${categoryRef.value}&difficulty=${difficultyRef.value}&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}&category=${categoryRef.value}&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value!='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}&category=${categoryRef.value}&difficulty=${difficultyRef.value}&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value==='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value==='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value==='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value==='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}&difficulty=${difficultyRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value==='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value==='Any Category' && questionsRef.value!='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=${questionsRef.value}&difficulty=${difficultyRef.value}&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value==='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficultyRef.value}&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value==='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value!='Any Difficulty'
    && typeRef.value==='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=10&difficulty=${difficultyRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
    else if(categoryRef.value==='Any Category' && questionsRef.value==='Any Number' && difficultyRef.value==='Any Difficulty'
    && typeRef.value!='Any Type'){
        fetch(`https://opentdb.com/api.php?amount=10&&type=${typeRef.value}`).then(function(success){
            return success.json();
        }).then(function(success){
            containerRef.style.display = 'none';
            console.log(success);
            ans = success.results;

            dataAdd();
        })
    }
}


playRef.addEventListener('click', func);
    


var i=0;
var arr = [];

var n = 1;
function dataAdd(){

    resultRef.innerHTML = "";

    var lm = document.createElement('div');
    var lmp1 = document.createElement('p');
    var lmp2 = document.createElement('span');

    lmp1.innerHTML = `Question No. ${n}`;
    if(questionsRef.value==='Any Number'){
        lmp2.innerHTML = ` of 10`;
    }
    else{
        lmp2.innerHTML = ` of ${questionsRef.value}`; 
    }
    lmp1.appendChild(lmp2);

    lm.appendChild(lmp1);

    lmp1.setAttribute('class', 'text-start fs-4 fw-bold');

    lm.setAttribute('class', 'row my-3 lm');

    resultRef.appendChild(lm);

    var btn = document.createElement('button');
    btn.innerText = 'Submit';
    btn.setAttribute('class', 'btn bg-primary text-white my-2')


    let row3 = document.createElement('div');
    var ol = document.createElement('ol');
    if(ans[i].incorrect_answers.length===1){
        var li1 = document.createElement('li');
        var li2 = document.createElement('li');

        li1.innerHTML = ans[i].correct_answer;
        li2.innerHTML = ans[i].incorrect_answers[0];

        ol.appendChild(li1);
        ol.appendChild(li2);

        li1.setAttribute('class', 'list-group-item')
        li2.setAttribute('class', 'list-group-item')
    }
    else{
        var li1 = document.createElement('li');
        var li2 = document.createElement('li');
        var li3 = document.createElement('li');
        var li4 = document.createElement('li');

        li1.innerHTML = ans[i].correct_answer;
        li2.innerHTML = ans[i].incorrect_answers[0];
        li3.innerHTML = ans[i].incorrect_answers[1];
        li4.innerHTML = ans[i].incorrect_answers[2];

        ol.appendChild(li1);
        ol.appendChild(li2);
        ol.appendChild(li3);
        ol.appendChild(li4);

        li1.setAttribute('class', 'list-group-item')
        li2.setAttribute('class', 'list-group-item')
        li3.setAttribute('class', 'list-group-item')
        li4.setAttribute('class', 'list-group-item')

    }

    let q = document.createElement('p');

    q.innerHTML = ans[i].question;
    row3.appendChild(q);

    resultRef.appendChild(row3);
    resultRef.appendChild(ol);

    row3.setAttribute('class', 'col mt-2 fw-bold');
    q.setAttribute('class', 'fs-4');
    ol.setAttribute('class', 'list-group list-group-numbered');
    
    var temp;
    ol.addEventListener('click', function(e){
        if(ans[i].incorrect_answers.length===1){
            li1.style.backgroundColor = 'white';
            li1.style.color = 'black';
            li2.style.backgroundColor = 'white';
            li2.style.color = 'black';
        }
        else{
            li1.style.backgroundColor = 'white';
            li1.style.color = 'black';
            li2.style.backgroundColor = 'white';
            li2.style.color = 'black';
            li3.style.backgroundColor = 'white';
            li3.style.color = 'black';
            li4.style.backgroundColor = 'white';
            li4.style.color = 'black';
        }
        
        e.target.style.backgroundColor = 'blue';
        e.target.style.color = 'white';
        console.log(e.target.innerText);

        temp = e.target.innerText;
    })

    resultRef.appendChild(btn);

    

    btn.addEventListener('click', function(){
        arr.push(temp);
        i++;
        n++;
        if(i>=ans.length){
            resultRef.innerHTML = "";
            console.log(arr);
            
            finalResult();
            return;
        }
        dataAdd();

    });
    
}

var one = document.getElementById('first');
var two = document.getElementById('sec');
var three = document.getElementById('third');
var four = document.getElementById('fourth');
var five = document.getElementById('fifth');
var six = document.getElementById('six');

var final_result = document.getElementById('final-result');

function finalResult(){
    var count = 0;
    for(var i=0;i<arr.length;i++){
        if(ans[i].correct_answer===arr[i]){
            count++;
        }
    }

    final_result.style.display = 'block';

    if(count>arr.length/2){
        one.innerHTML = "Congratulation, YOU PASSED";
        two.innerHTML = "Grade: P";
    }
    else{
        one.innerHTML = "Sorry, YOU FAILED!";
        two.innerHTML = 'Grade: F';
    }
    three.innerHTML = `Total Questions: ${arr.length}`;
    four.innerHTML = `Correct Answers: ${count}`;
    five.innerHTML = `Your Score: ${count} Out of: ${arr.length}`;
    six.innerHTML = `Passing Score: ${count/2}`;
    
    
}

document.getElementById('status').addEventListener('click', function(){
    document.getElementById('final').style.display = 'block';
    document.getElementById('table').style.display = 'none';
    document.getElementById('qna').style.backgroundColor = "white";
    document.getElementById('status').style.backgroundColor = 'rgb(204, 197, 197) !important';
})


document.getElementById('qna').addEventListener('click', function(){
    document.getElementById('final').style.display = 'none';
    document.getElementById('table').style.display = 'block';
    document.getElementById('qna').style.backgroundColor = "rgb(204, 197, 197) !important";
    document.getElementById('status').style.backgroundColor = 'white';
    var tbody = document.getElementById('tbody');
    var j=0;
    ans.forEach(function(ele){
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');


        td1.innerHTML = j+1;
        td2.innerHTML = ele.question;
        td3.innerHTML = arr[j];
        td4.innerHTML = ele.correct_answer;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        tbody.appendChild(tr);

        j++;
    })
})

// function countdown() {
//     var seconds = 59;
//     function tick() {
//       seconds--;
//       resultRef.innerHTML =
//         "0:" + (seconds < 10 ? "0" : "") + String(seconds);
//       if (seconds > 0) {
//         setTimeout(tick, 1000);
//       } 
//     }
//     tick();
//   }
// countdown();