function copyText()
{
    let input=
    document.getElementById("inputText").value;
    


    let output=document.getElementById("outputText")
     output.value = input;       // text copy karo
  output.style.fontSize = "24px";

    // left box ka text lena
    document.getElementById("outputText").value=input; //right box me dalana
    

}
function clearText()
{
    document.getElementById("inputText").value="";//left box clear
    document.getElementById("outputText").value="";// right box clear
    
}
