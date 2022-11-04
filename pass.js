let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let symbol=["@","#","$","%","&","*","_","-","=","!"]
let numbers=[1,2,3,4,5,6,7,8,9,0]
function random()
{
    return Math.floor(Math.random()*26)
}
function random2()
{
    return Math.floor(Math.random()*9)
}
function random3()
{
    return Math.floor(Math.random()*3)
}
var password=document.getElementById("b1");
function generate()
{
    document.getElementById("copy").textContent="copy"
    let pass=" "
    for (let i=0; i<15; i++)
    {
         if(random3()==0)
         {
            pass+=alpha[random()].toUpperCase();
         }
         else if(random3()==1){
            pass+=alpha[random()]
         }
         else if(random3()==2)
         {
            pass+=symbol[random2()]
         }
        else
        {
            pass+=numbers[random2()] 
        }
    }
    password.value=pass;
}
function copypass()
{
    password.select();
    password.setSelectionRange(0,99999);
    navigator.clipboard.writeText(password.value);
    document.getElementById("copy").textContent="copied"
}
