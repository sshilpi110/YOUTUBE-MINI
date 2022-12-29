
    const api = "AIzaSyBmy7wgsWGeCMtFRCaTLaHb-RANxrzmz1g"

    const searResult = document.getElementById("show_me");
    async function searchVideo() {
        searResult.innerText = "";
        try {
            let video_query = document.getElementById("InSearch").value
            let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${video_query}bade ache lagte hai &key=${api}`

            );
            let data = await res.json();
            let video = data.items;
            appendVideo(video)
        } catch (z) {
            console.log("z:", z)
        }
    }
    const appendVideo = (items) => {
        items.forEach((el) => {
            console.log("el:", el);
            let {
                id: { videoId },

            } = el;
            console.log("videoId:", videoId)

            let iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.height = "160px";
            iframe.weight = "100%";
            iframe.setAttribute("allowfullscreen", true)
            searResult.append(iframe)
        })
    }


