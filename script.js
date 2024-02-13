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

//scrolls slider to slide of inputed number
function skipToSlide(slider, num) {
    var image = slider.children[num];
    image.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
}

//returns the current slide number depending on current scroll position
function getCurrentSlide(slider,total) {
    var x = slider.scrollLeft;
    var slideW = slider.scrollWidth / total;
    slideW = (slider.scrollWidth - slideW) / total;
    return(Math.floor(x / slideW));
}

function changeGrid(el) {
    if (el.classList.contains("sm") == false) {
        document.getElementById("sample_works").classList.add("sm");
        el.classList.add("sm");
        el.innerHTML = "large grid";
    }else {
        document.getElementById("sample_works").classList.remove("sm");
        el.classList.remove("sm");
        el.innerHTML = "thumbnails";
    }
}

function expandFrame(el) {
    document.getElementById("frame_wrap").classList.toggle("expanded");
    el.classList.toggle("expanded");
    if (el.classList[1] == "expanded") {
        el.innerHTML = "Shrink &#x2196;";
    }
    else { el.innerHTML = "Fullscreen &#x2197;"; }
    document.getElementById("frame_wrap").scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });

}
function about() {
    document.getElementById("about").classList.toggle("open");
    document.getElementById("home").classList.toggle("left");
}