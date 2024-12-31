console.log(`lets write java script`);
async function getsongs() {
  let a = await fetch("http://127.0.0.1:3000/spotify/songs/");
  let response = await a.text();
  // console.log(response)
  let div = document.createElement("div");
  div.innerHTML = response;
  let ar = div.getElementsByTagName("a");
  // console.log(ar)
  let songs = [];
  for (let i = 1; i < ar.length; i++) {
    if (ar[i].href.endsWith(".mp3")) {
      let element = ar[i].href;
      songs.push(element);
    }
  }
  return songs;
}
let sn = [];
async function songname() { }
async function main() {
  let i = 0;
  let songs = await getsongs();
  let songlist = document.getElementById("ul");
  for (const song of songs) {
    songlist.innerHTML =
      songlist.innerHTML +
      `<li > ${song
        .split("/songs/")[1]
        .replaceAll("%20", "")
        .replaceAll("(OfficialVideo)", "")
        .split(".mp3")[0]
      } </li>`;
  }
  console.log(sn[1]);
  songlist.style.fontSize = "15px";
}
let counter = 1;
async function playsongs() {

  let songs = await getsongs();
  let audio = new Audio(`${songs[0]}`);
  if (counter % 2 == 0) {
    audio.play();

  }
  else {
    audio.pause();

  }
  counter++;
  console.log(counter)
  audio.onloadeddata = () => {
    let duration = audio.duration;
    console.log(duration);
  };
}
playsongs();
main();
songname();
