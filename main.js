let obj = document.getElementById("obj")
let yum1 = document.getElementById('yum1')
let score = document.getElementById("score")
let point = 0
let multiplier = 1
let pegawai = 0
let influencer = 0

let btnPegawai = document.getElementById("pegawai")
let btnInfluencer = document.getElementById("influencer")
let opc = document.getElementById("opc")
let jumpegawai = document.getElementById("jumpegawai")

// AUDIO LOAD
let aInf1 = document.getElementById('aInf1')
let atomat= document.getElementById("aTomat")

obj.addEventListener("click",function(e){
    obj.style.transform = "scale(1.05,1.05)"
    setTimeout(() => {
        obj.style.transform = "scale(1,1)"        
    }, 50);    
    console.log()
    dmgTooltip(e.clientX,e.clientY,1*multiplier)
    playRandomSFX()
    point += 1*multiplier;
    opc.innerText = 1 * multiplier
    score.innerText = point + " Odading"
})

btnPegawai.addEventListener("click",function(e){
    
    if(point - 100 >= 0 ){
        multiplier ++
        point -= 100
        opc.innerText = 1 * multiplier    
        score.innerText = point + " Odading"
    }else{
        atomat.load()
        atomat.play()
        alert("Odadingnya kurang bos!")
    }


})

btnInfluencer.addEventListener("click",function(e){
    if(point - 1000 >= 0){
        point -= 1000
        let random = Math.floor(Math.random() * (1500 - 400) + 1) + 400;
        point += random
        score.innerText = point + " Odading"

        playRandomSFXInfluencer()
        dmgTooltip(e.clientX ,e.clientY - 30,random)
        
    }else{
        atomat.load()
        atomat.play()
        alert("Odadingnya kurang bos!")
    }
})

function playRandomSFX() {  
    let sfx = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    document.getElementById("yum"+sfx).load()
    document.getElementById("yum"+sfx).play()
    document.getElementById("yum"+sfx).onplaying = false
  }
function playRandomSFXInfluencer() {  
    let sfx = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    document.getElementById("aInf"+sfx).load()
    document.getElementById("aInf"+sfx).play()
    document.getElementById("aInf"+sfx).onplaying = false
  }
function dmgTooltip(x,y,dmg){
    let floatTime = 500
    let tooltip = document.createElement("div")
    
    tooltip.className = "dmg-tooltip"
    tooltip.innerHTML = `+${dmg}`
    tooltip.style.position="absolute"
    tooltip.style.userSelect = "none"
    tooltip.style.pointerEvents = "none"
    let tooltipLen = [tooltip.offsetWidth,tooltip.offsetHeight]
    tooltip.style.left = x-5- tooltipLen[0]+"px";
    tooltip.style.top = y -20- tooltipLen[1]+"px";

    for(let i = 0 ; i < 20;i++){
        setTimeout(() => {
            tooltip.style.top = (y-i) - tooltipLen[1]+"px";
            tooltip.style.opacity = i
        }, floatTime);        
    }
    document.body.appendChild(tooltip)
    setTimeout(() => {
        tooltip.remove()
    }, 500);
}