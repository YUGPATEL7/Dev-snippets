function formatTimeAgo(timestamp) {
    const now = new Date();
    const secondsPast = Math.floor((now - timestamp) / 1000);

    if (secondsPast < 60) return `${secondsPast} second${secondsPast !== 1 ? 's' : ''} ago`;
    if (secondsPast < 3600) return `${Math.floor(secondsPast / 60)} minute${secondsPast < 120 ? '' : 's'} ago`;
    if (secondsPast < 86400) return `${Math.floor(secondsPast / 3600)} hour${secondsPast < 7200 ? '' : 's'} ago`;
    if (secondsPast < 2592000) return `${Math.floor(secondsPast / 86400)} day${secondsPast < 172800 ? '' : 's'} ago`;
    if (secondsPast < 31536000) return `${Math.floor(secondsPast / 2592000)} month${secondsPast < 5184000 ? '' : 's'} ago`;
    return `${Math.floor(secondsPast / 31536000)} year${secondsPast < 63072000 ? '' : 's'} ago`;
}

function add() {
    let imgUrl = document.getElementById("inp").value;
    let titleText = document.getElementById("inp1").value;
    let channelName = document.getElementById("inp2").value;
    let viewCount = document.getElementById("inp3").value;
    let playlist = document.querySelector(".playlist");

    let uploadTime = new Date();

    if (playlist) {
        let card = document.createElement("div");
        card.className = "frist";

        // Image
        let imgWrapper = document.createElement("span");
        imgWrapper.className = "img1";
        imgWrapper.innerHTML = `<img src="${imgUrl}" alt="Thumbnail">`;

        // Content
        let content = document.createElement("div");
        content.className = "details-container";

        // Title
        let title = document.createElement("div");
        title.className = "title";
        title.innerText = titleText;

        // Info Section
        let info = document.createElement("div");
        info.className = "cvt";

        let chan = document.createElement("span");
        chan.className = "chanlename";
        chan.innerText = channelName;

        let views = document.createElement("span");
        views.className = "views";
        if (viewCount <= 1000) views.innerText = `${viewCount}`;
        else if (viewCount <= 10000) views.innerText = `${(viewCount / 1000).toFixed(1)}k`;
        else views.innerText = `${(viewCount / 1000000).toFixed(1)}M`;

        let time = document.createElement("span");
        time.className = "time";
        time.innerText = formatTimeAgo(uploadTime);
        time.dataset.timestamp = uploadTime;

        info.appendChild(chan);
        info.appendChild(views);
        info.appendChild(time);

        content.appendChild(title);
        content.appendChild(info);

        card.appendChild(imgWrapper);
        card.appendChild(content);
        playlist.appendChild(card);
    }
}

// Live update time every second
setInterval(() => {
    const timeSpans = document.querySelectorAll(".time");
    timeSpans.forEach(span => {
        const time = new Date(span.dataset.timestamp);
        span.innerText = formatTimeAgo(time);
    });
}, 1000);
