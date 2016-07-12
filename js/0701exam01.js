/**
 * Created by jianyujing on 2016/7/1.
 */

function updateData(curentNum1,xml1) {
    $(xml1).find('question:eq(' + (curentNum1-1)+ ')').each(function () {
        // $(".question p").text("");

        $("#Ap").text("");
        $("#Bp").text("");
        $("#Cp").text("");
        $("#Dp").text("");
        $("#title").text("");
        var question = $(this);
        // var title = field.attr("Name");//读取节点属性
        var title = question.find("title").text();//读取子节点的值
        var answerA = question.find("answerA").text();//读取子节点的值
        var answerB = question.find("answerB").text();//读取子节点的值
        var answerC = question.find("answerC").text();//读取子节点的值
        var answerD = question.find("answerD").text();//读取子节点的值
        $("#title").append(title).hide().slideDown('slow');
        $("#Ap").append(answerA).hide().slideDown('slow');
        $("#Bp").append(answerB).hide().slideDown('slow');
        $("#Cp").append(answerC).hide().slideDown('slow');
        $("#Dp").append(answerD).hide().slideDown('slow');

    });
}
function getData() {
    $.get("xml/exam01.xml",function(xml){
        var sum= $(xml).find("question").length;
        var result_xml= $(xml).find("right").text();
        var currentNum = 1;
        var resultArr= new Array();
        var transforms=['scaleY(1)','scaleY(0)'];
        var opationArr=["radio1","radio2" ,"radio3","radio4"];
        $('#right').text(result_xml);
        $("#lable1").hover(function () {
            $("#line1").animate({transform:transforms[0]},"slow");
        },function(){
            $("#line1").animate({transform:transforms[1]},"fast");
        });
        $("#lable2").hover(function () {
            $("#line2").animate({transform:transforms[0]},"slow");
        },function(){
            $("#line2").animate({transform:transforms[1]},"fast");
        });
        $("#lable3").hover(function () {
            $("#line3").animate({transform:transforms[0]},"slow");
        },function(){
            $("#line3").animate({transform:transforms[1]},"fast");
        });
        $("#lable4").hover(function () {
            $("#line4").animate({transform:transforms[0]},"slow");
        },function(){
            $("#line4").animate({transform:transforms[1]},"fast");
        });

        for (var i = 0; i < 4; i++){
            $(opationArr[i]).click(function () {
                var answer = $(this).attr("id");
                if(currentNum<5){
                    resultArr.splice(currentNum - 1, 1, answer);
                    $("#answer").text(resultArr);
                    currentNum++;
                    updateData(currentNum, xml);
                }








            });


        }


    });
}

$(document).ready(function () {
    getData();
    
    
    
    
        
    
});