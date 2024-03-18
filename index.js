const sounds = [ "applause" , "boo" , "gasp" , "tada", "victory" , "wrong"];

sounds.forEach(sound =>{
  const rene = document.createElement("button")
  rene.innerText = sound;
  rene.classList.add("btn")
  // console.log(rene);
  document.getElementById("button").appendChild(rene)


  rene.addEventListener("click" , () =>{
    paused();
  const song =  document.getElementById(sound);
  song.play()
  })
})

function paused(){
  sounds.forEach( song =>{
    const fens = document.getElementById(song)
    fens.pause()
  })
}

function updateClock() {
  const currenttime = new Date().toLocaleTimeString()

  document.querySelector('.time').innerHTML = [currenttime].join(' / ')
}
setInterval(updateClock, 1000);