// //display
// function display(num){
//     output.value +=num;
// }

// function clear(){
//     output.value=''
// }
// function evaluateExp(){
//     output.value=eval(output.value)
// }

// function del(){
//     currentexp=output.value
//     output.value=currentExp.slice(0,-1)
// }


let ouputscreen=document.getElementById("output-screen");
        function  display(num){
            ouputscreen.value += num;
        }
        function calculate(){
            try{
                ouputscreen.value=eval(ouputscreen.value);
            }
            catch(err)
            {
                alert("invalid")
            }
        }
        function clear(){
            ouputscreen.value="";
        }
        function del(){
            ouputscreen.value=ouputscreen.value.slice(0,-2);
        }
    