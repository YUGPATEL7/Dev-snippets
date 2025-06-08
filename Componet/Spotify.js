console.log("Let's start with JS");

let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

async function getsongs(folder) {
    currFolder = folder;
    let a = await fetch(`http://127.0.0.1:3000/Spotify/${folder}/`);
    let b = await a.text();
    let div = document.createElement("div");
    div.innerHTML = b;
    let as = div.getElementsByTagName("a");    

songs = [];
        
        
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1]);
        }
    }
        // Add songs to the list
        let songUL = document.querySelector(".songlist ul");
        songUL.innerHTML = "";
        for (const song of songs) {
            songUL.innerHTML += `
            <li>
                <img class="invert" src="imgs&logo/music.svg" alt="">
                <div class="info">
                    <div>${song.replaceAll("%20", " ")}</div>
                    <div>Yug</div>
                </div>
                <div id="playnowbyid" class="playnow">
                    <span>Play Now</span>
                    <img id="playpause" class="invert" src="imgs&logo/play.svg" alt="">
                </div>
            </li>`;
        }
    
        // Attach event listeners to song list items
        document.querySelectorAll(".songlist li").forEach(e => {
            e.addEventListener("click", () => {
                playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
                
            });
        });
        return songs;
}

const playMusic = (track, pause = false) => {
    currentSong.src = `/Spotify/${currFolder}/`+ track;
    if (!pause) {
        currentSong.play();
        document.getElementById("play").src = "imgs&logo/pause.svg";
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track);
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00";
};

async function displayAlbums() {
    let a = await fetch(`http://127.0.0.1:3000/Spotify/Songs/`);
    let b = await a.text();
    let div = document.createElement("div");
    div.innerHTML = b;
    let anchors=div.getElementsByTagName("a");
    let cardcontainer = document.querySelector(".cardcontainer")
    console.log('Anchors',anchors);
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index++) {
        const e = array[index]; 
        if (e.href.includes("/Spotify/Songs/")) {
            let folder=e.href.split("/").slice(-2)[0];
            // Meta data of folder
            let a = await fetch(`http://127.0.0.1:3000/Spotify/Songs/${folder}/info.json`);
            let b = await a.json();
            cardcontainer.innerHTML += `<div data-folder="${folder}" class="card">
                        <div class="play">
                            <img src="imgs&logo/play.svg" alt="">
                        </div>
                        <img src="/Spotify/Songs/${folder}/cover.jpg" alt="imgs">
                        <h2>${b.title}</h2>
                        <p>${b.description}</p>
                    </div>`
            
        }
    }
            // Handle song selection from cards
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async event => {
            songs = await getsongs(`Songs/${event.currentTarget.dataset.folder}`);
            playMusic(songs[0]); 
        });
    });
    
}

async function main() {
    // Get the list of all songs
    await getsongs("Songs/ncs");
    playMusic(songs[0], true);
    console.log(songs);

    // Display all albums on page
    displayAlbums();


    // Play/Pause event listener
    document.getElementById("play").addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play();
            document.getElementById("play").src = "imgs&logo/pause.svg";
        } else {
            currentSong.pause();
            document.getElementById("play").src = "imgs&logo/play.svg";
        }
    });


    // Update song time
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`;
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    });

    // Seekbar click event
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = (currentSong.duration * percent) / 100;
    });

    // Hamburger menu open/close
    document.querySelector(".hamburgar").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%";
    });

    // When someone clicks on a song, List of Song shown
    document.querySelector(".cardcontainer").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0";
    })

    // Previous button
    document.getElementById("previous").addEventListener("click", () => {
        currentSong.pause();
        console.log("Previous clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index > 0) {
            playMusic(songs[index - 1]);
        }
    });

    // Next button
    document.getElementById("next").addEventListener("click", () => {
        currentSong.pause();
        console.log("Next clicked");
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0]);
        if (index + 1 < songs.length) {
            playMusic(songs[index + 1]);
        }
    });

    // Volume slider event
    document.querySelector(".range input").addEventListener("input", (e) => {
        currentSong.volume = parseInt(e.target.value) / 100;
        if(currentSong.volume>0){
            document.querySelector(".volume>img").src =document.querySelector(".volume>img").src.replace("imgs&logo/mute.svg","imgs&logo/volume.svg")
        }
        if(currentSong.volume==0){
            document.querySelector(".volume>img").src =document.querySelector(".volume>img").src.replace("imgs&logo/volume.svg","imgs&logo/mute.svg")
        }
    });

    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("imgs&logo/volume.svg")){
            e.target.src = e.target.src.replace("imgs&logo/volume.svg", "imgs&logo/mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{``
            e.target.src = e.target.src.replace("imgs&logo/mute.svg", "imgs&logo/volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })
    // singup  event is close
    document.querySelector(".askforsingup").addEventListener("click",(e) => {
        document.querySelector(".askforsingup").style.display = "none";
        document.querySelector(".singup").style.display = "block";
    }
    )
    // search event 

}

    function toggleSearch() {
        let searchBox = document.getElementById("searchContainer");
        searchBox.classList.toggle("show");
    }

    
    
// Call main function
main();
