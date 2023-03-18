$(function () {
    // save current question
    let currentQuiz = null;
    // when user click the button:
    $("#startButton").on("click",function(){
        //initial
        if(currentQuiz == null){
            // show 1st question
            currentQuiz = 0;
            // Show question
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(
                    `<input name='options' type='radio' value='${index}'>
                     <label>${element[0]}</label><br><br>
                    `
                );
            //chage button from start to next
            $("#startButton").attr("value","Next");
            });
        }else{
            // jump to specific question
            $.each($(":radio"),function(i, val){
                // console.log(i + ":" + val.checked);
                if(val.checked){
                  if(isNaN(questions[currentQuiz].answers[i][1])){
                    // A ~ D
                      let finalResult = questions[currentQuiz].answers[i][1];
                      // Show Result Title
                      $("#question").text(finalAnswers[finalResult][0]);
                      // delete options
                      $("#options").empty();
                      $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                      currentQuiz = null;
                      $("#startButton").attr("value", "重新開始");
                  }else{
                    // Jumpt to questions[x]
                    // original data from neswpaper, so the index need to -1 
                      currentQuiz = questions[currentQuiz].answers[i][1]-1;
                      // Show question
                      $("#question").text(questions[currentQuiz].question);
                      // delete previous question's options
                      $("#options").empty();
                      questions[currentQuiz].answers.forEach(function (element, index, array) {
                          $("#options").append(
                              `<input name='options' type='radio' value='${index}'>
                     <label>${element[0]}</label><br><br>
                    `
                          );
                          //chage button from start to next
                          $("#startButton").attr("value", "Next");
                      });
                  }
                  return false;
                }
            });
        }
    });
});