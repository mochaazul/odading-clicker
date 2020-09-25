let obj = document.getElementById("obj")
let yum1 = document.getElementById('yum1')
let score = document.getElementById("score")
let point = 0
let multiplier = 3


obj.addEventListener("click",function(e){
    obj.style.transform = "scale(1.05,1.05)"
    setTimeout(() => {
        obj.style.transform = "scale(1,1)"        
    }, 50);    
    console.log()
    dmgTooltip(e.clientX,e.clientY,1*multiplier)
    playRandomSFX()
    point += 1*multiplier;
    score.innerText = point + " Odading"
})
function playRandomSFX() {  
    let sfx = Math.floor(Math.random() * (2 - 1 + 1) + 1);
    document.getElementById("yum"+sfx).load()
    document.getElementById("yum"+sfx).play()
    document.getElementById("yum"+sfx).onplaying = false
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