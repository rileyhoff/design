//SQKZ Design Portfolio 
//Author: Riley Hoff

function setActiveWork(el) {
    works.forEach((element) => {
        element.classList.remove('active');
    });
    el.classList.add('active');
    document.getElementById("works").classList.remove("hide");
    document.getElementById("work_img").src = el.dataset.img;
    document.getElementById("works_right").style.backgroundColor = el.dataset.color;
    meta = el.dataset.meta.repeat(7);
    document.getElementById("meta-1").innerHTML = meta;
    document.getElementById("meta-2").innerHTML = meta;
    document.getElementById("works_link").href = "./works/" + el.dataset.work;
}

function view(src, git, el) {
    document.getElementById("view").className = "open";
    document.getElementById("projectFrame").src = src;
    document.getElementById("newTab").href = src;
    document.getElementById("git").href = "https://github.com/rileyhoff/" + git;
    document.getElementById("projectTitle").innerHTML = el.innerHTML;
}
function viewExit() {
    document.getElementById("view").className = "close";
    document.getElementById("projectFrame").src = "";
    document.getElementById("new_tab").href = "";
    document.getElementById('git').href = "";
}
function mblView(el) {
    var frame = document.getElementById("frame_wrap")
    if (frame.classList.contains("mbl") === false) {
        el.innerHTML = "desktop view &#x2197;";
        frame.classList.add("mbl");
    } else {
        el.innerHTML = "mobile view &#x2197;";
        frame.classList.remove("mbl");
    }
    document.getElementById("frame_wrap").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

}
function expandFrame(el) {
    document.getElementById("frame_wrap").classList.toggle("expanded");
    el.classList.toggle("expanded");
    if (el.classList[1] == "expanded") {
        el.innerHTML = "Shrink &#x2196;";
    }
    else { el.innerHTML = "Fullscreen &#x2197;"; }
    document.getElementById("frame_wrap").scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

}
function about() {
    document.getElementById("about").classList.toggle("open");
    document.getElementById("home").classList.toggle("left");
}

function imgView(el) {
    //scroll to correct postion ( below scroll to view element )
    var scrollPos = document.getElementById("scroll_to_view");
    scrollPos.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //change image and title
    var fullView = document.getElementById("full_view");
    var imgSrc = el.firstChild.src;
    document.getElementById("full_img").src = imgSrc;
    document.getElementById("full_title").innerHTML = el.firstChild.nextSibling.innerHTML;

    fullView.classList.add("open");
}
function imgViewClose() {
    document.getElementById("full_view").classList.remove("open");
}