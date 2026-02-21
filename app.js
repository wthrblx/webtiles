// SOCIALS

var socials = [
    { id: "roblox", anchorUrl: "https://www.roblox.com/communities/12787072/Team-Fireworks-Games#!/about" },
    { id: "discord", anchorUrl: "https://discord.gg/9Fuv68NcSt" },
    { id: "youtube", anchorUrl: "https://www.youtube.com/channel/UC4QcRhJvD_2oql-j_FPAY0w" },
    { id: "bluesky", anchorUrl: "https://bsky.app/profile/wthrblx.bsky.social" },
    { id: "instagram", anchorUrl: "https://instagram.com/wthrblx" },
    { id: "github", anchorUrl: "https://github/wthrblx" },
]

var socialElement = document.getElementById("socials")

for (var index in socials) {
    var social = socials[index];

    var anchorElement = document.createElement("a")
    anchorElement.href = social.anchorUrl

    var iconElement = document.createElement("img")
    iconElement.src = "./assets/brands/" + social.id.toString() + ".png"
    iconElement.alt = social.id

    anchorElement.appendChild(iconElement)
    socialElement.appendChild(anchorElement)
}

console.log("SOCIALS ARE UP");

// NAV

// var currentPage = 0;
// var minPage = 0, maxPage = 1;

// var content = document.getElementById("content")

// var pages = []
// for (var index = minPage; index <= maxPage; index++) {
//     console.log(index)
//     pages[index] = document.getElementById("page-" + index.toString())
// }

// function updatePages() {
//     content.style.left = "-" + ((currentPage) * 250).toString() + "px"
//     for (var [index, page] of pages.entries()) {
//         console.log(index, currentPage)
//         if (index === currentPage) {
//             page.classList.remove("hidden");
//         } else {
//             page.classList.add("hidden");
//         }
//     }
// }

// function incrementPages() {
//     if (currentPage < maxPage) {
//         currentPage = currentPage + 1;
//         updatePages();
//     }
// }

// function decrementPages() {
//     if (currentPage > minPage) {
//         currentPage = currentPage - 1;
//         updatePages();
//     }
// }

// document.getElementById("more-info").addEventListener("click", incrementPages);
// document.getElementById("back").addEventListener("click", decrementPages);
// updatePages();

// console.log("NAVIGATION IS UP");
