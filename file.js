let boxes=document.querySelectorAll(".box");
let winningpattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let xturn=true;
boxes.forEach((node)=>{
    node.addEventListener("input", ()=>{
        if(xturn){
            node.value="X";
            xturn = false;
        }
        else{
            node.value="O";
            xturn =true;
        }
        node.disabled=true;
        checkwinner();
        checkdraw();
    });
});

document.getElementById("reset").addEventListener("click",()=>{
    xturn=true;
    boxes.forEach((node)=>{
        node.value="";
        node.disabled=false;
    })
    foundwinner=false;
    emptycheck=true;
})

document.getElementById("newgame").addEventListener("click",()=>{
    xturn = true;
    boxes.forEach((node)=>{
        node.value="";
        node.disabled=false;
    })
    document.getElementById("win_bar").style.display="none";
    document.getElementById("playground").style.display="block";
    foundwinner=false;
    emptycheck=true;
})
let foundwinner=false;
let checkwinner = () =>{
    winningpattern.forEach((pattern) =>{
        let p1 = boxes[pattern[0]].value;
        let p2=boxes[pattern[1]].value;
        let p3=boxes[pattern[2]].value;
        console.log(p1,p2,p3);
        if(p1!="" && p2!="" && p3!=""){
        if(p1===p2 && p2===p3){
            document.getElementById("ppp").innerText=`Winner is ${p1}`;
            document.getElementById("win_bar").style.display="flex";
            document.getElementById("playground").style.display="none";
            foundwinner=true;
            return;
        }
    }
})
}

let checkdraw=()=>{
    let emptycheck=true;
    if(!foundwinner){
        boxes.forEach((node)=>{
            if(node.value===""){
                emptycheck=false;
                return;
            }
        })
        if(emptycheck){
        document.getElementById("ppp").innerText=`It's a Draw`;
        document.getElementById("win_bar").style.display="flex";
        document.getElementById("playground").style.display="none";
    }
    }
    
}


