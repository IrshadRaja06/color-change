

let color = {
    Blue:"blue",
    Grey:"grey",
    Red:"red",
    yellow:"yellow",
    Green:"green",
    pink:"pink"
}
function change(){
    
    const arr = Object.keys(color)
    const val = arr[Math.floor(Math.random() * arr.length)]
    document.getElementById("colorname").innerText = val
    document.getElementById("colorname").style.color = color[val]
    document.getElementById("color").style.backgroundColor = color[val]
}
