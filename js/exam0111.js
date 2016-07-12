/**
 * Created by jianyujing on 2016/6/30.
 */
/**
 * Created by jianyujing on 2016/6/28.
 */
/**
 * Created by jianyujing on 2016/6/23.
 */
$(document).ready(function(){
    getData();

});

function updateData(curentNum1,xml1) {
    $(xml1).find('question:eq(' + (curentNum1-1)+ ')').each(function () {
        // $(".question p").text("");

        $("#Ap").text("");
        $("#Bp").text("");
        $("#Cp").text("");
        $("#Dp").text("");
        $("#title").text("");
        $("#n1").text(curentNum1);
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
        var curentNum = 1;
        var result= new Array();
        var transforms=['scaleY(1)','scaleY(0)'];
        $('#n1').text(curentNum);
        $('#n3').text(sum);
        $("#s" + curentNum).addClass("slide_back");
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
        for (var i = 1; i < 5; i++) {
            $("#question ul li:nth-child(" + i + ')').click(function () {
                    if(curentNum<5){
                        var answer = $(this).attr("id");//为什么每次只有写this才有用。
                        // result=result.split('');
                        result.splice(curentNum - 1, 1, answer);
                        $("#answer").text(result);
                        curentNum++;
                        $("#s" + curentNum).addClass("slide_back");
                        if(curentNum==4){
                            $("#slide").removeClass("slide").addClass("slide1");
                            $("#btn1").css({"margin-top":"-500","display":"block"});
                        }
                        updateData(curentNum, xml);
                    }

                }
            );


            $("#slide ul li:nth-child(" + i + ')').click(function () {
                var slide = $(this).attr("id");
                var slideIndex = parseInt(slide.slice(-1));
                curentNum=slideIndex;
                if($("#s"+slideIndex).hasClass("slide_back")){
                    updateData(slideIndex, xml);
                }
            });
            $("#slide ul li:nth-child(" + i + ')').on("click", function () {
                    var slide = $(this).attr("id");
                    var slideIndex = parseInt(slide.slice(-1));
                    var result_element = result[slideIndex - 1];
                    $("#s" + result_element).show();

            });
        }

        $("#btn1").click(function(){

            if(result.slice(0,4)==result_xml) {

                $("#main ").css("display", "none");
                $("#slide ").css("display", "none");
                $("#exam02 ").css("display", "block")
            }
            else{
                // document.getElementById("main").innerHTML = "";
                $("#main ").css("display", "none");
                // $("#slide ").css("display", "none");
                $("#slide ").hide();
                $("#exam03 ").css("display", "block");

            }
        });
        $("#btn3").click(function(){
            curentNum=1;
            result.splice(0,result.length);
            $("#answer").text(result);
            updateData(curentNum,xml);
            $("#exam02 ").css("display", "none");
            $("#main").css("display", "block");
            $("#s1").removeClass("slide_back");
            $("#s2").removeClass("slide_back");
            $("#s3").removeClass("slide_back");
            $("#s4").removeClass("slide_back");
            $("#slide").css("display", "block");

        });
        $("#btn4").click(function(){
            curentNum=1;
            result.splice(0,result.length);
            $("#answer").text(result);
            updateData(curentNum,xml);
            $("#exam03").css("display", "none");
            $("#main").css("display", "block");
            $("#s2").removeClass("slide_back");
            $("#s3").removeClass("slide_back");
            $("#s4").removeClass("slide_back");
            $("#slide").css("display", "block");

        });




    });
}










