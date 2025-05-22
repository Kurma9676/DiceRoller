function roll(){
    const t=document.getElementById("t").value;
    const diceResult=document.getElementById("diceResult");
    const diceIms=document.getElementById("diceIms");
    const values=[];
    const ims=[];
    for(let i=0;i<t;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        ims.push(`<img src="dice_images/${value}.png"> `);
    }
    diceResult.textContent=`dice:${values.join(', ')}`;
    diceIms.innerHTML=ims.join('');
}
