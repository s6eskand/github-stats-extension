

let input = document.getElementById("github_username");
let USERNAME = "";

chrome.storage.local.get("username", function(data) {
    if (data.username) {
        input.innerHTML = `Get stats for ${data.username} ?`
        USERNAME = data.username
    }
});

document.getElementById("get_stats_btn").addEventListener("click", getStats);

async function getStats() {
    let mainContent = {};
    let loader = '<div class="preloader-wrapper big active"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div></div></div>';
    document.getElementById("user_info").innerHTML = loader;

    await axios.get(`https://api.github.com/users/${USERNAME}`)
        .then(res => res.data)
        .then(res => {
            mainContent = res;
        });

    document.getElementById("user_info").innerHTML = mainContent.login;
};
