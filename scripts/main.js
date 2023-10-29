const pianoKeys = document.querySelectorAll(".piano-keys .key");
const mapedKeys = [];
const volume = document.querySelector(".volume-slider input")
const tecla = document.querySelector(".keys-check input")
let audio = new Audio(`audio`)
const showHidekeys = ()=>{
    pianoKeys.forEach(key => key.classList.toggle("Hide"))
}
const playTune = (key)=>{
    audio.src=`/Game-Piano/audios/${key}.wav`
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.id= "active"
   setTimeout(()=>{
    clickedKey.id=("")
   }, 150)}

   pianoKeys.forEach((key)=>{
    key.addEventListener("click",()=> playTune(key.dataset.key))
    mapedKeys.push(key.dataset.key)
});

document.addEventListener("keydown",(e)=>{
    if(mapedKeys.includes(e.key)){
playTune(e.key); 
    }
})
const handleVolume = (e)=>{
    audio.volume = e.target.value

    console.log(e.target.value);
}
volume.addEventListener("input", handleVolume)
tecla.addEventListener("click", showHidekeys)