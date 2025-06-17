function background()
{
    if(document.body.style.backgroundColor!="black")
    {
        document.body.style.backgroundColor="black";
        var but=document.getElementById("b");
        but.textContent="light";
        but.style.backgroundColor="white";
        but.style.color="black";
    }
    else
    {
        document.body.style.backgroundColor="white";
        var but=document.getElementById("b");
        but.textContent="dark";
        but.style.backgroundColor="black";
        but.style.color="white";
    }
    
}