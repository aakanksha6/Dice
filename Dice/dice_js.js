let num1 =Math.floor(Math.random()*6+1);
let num2=Math.floor(Math.random()*6+1);

let i1=document.querySelector(".img1");
let i2=document.querySelector(".img2");
i1.setAttribute("src","images/dice"+num1+".png");
i2.setAttribute("src","images/dice"+num2+".png");
let c=document.querySelector("h1");
if(num1>num2)
{
    c.innerHTML="Player 1 wins";
}
else if(num1<num2)
{
    c.innerHTML="Player 2 wins";
}
else
c.innerHTML="Draw";
