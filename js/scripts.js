function getStackImages(stack) {
    let ul = document.createElement('ul');
    ul.className = "list-group stack"

    let baseimgaddr = "/assets/img/"

    for (let tech of stack) {
        let li = document.createElement('li');
        li.className = "list-group-item"
        if (tech == "mongo") {
            li.innerHTML = `<img src='.${baseimgaddr+tech}.png' class="img-fluid" width="30" height="30" />`
        } else {
            li.innerHTML = `<img src='.${baseimgaddr+tech}.svg' width="30" height="30" class="img-fluid" />`
        }
        ul.appendChild(li);
    }
    return ul;

}

const projectsFunc = (category) => {

    let divprojects = document.getElementById("projects");
    divprojects.innerHTML = "";

    let divrow = document.createElement('div');
    divrow.className = "row";

    for (let i = 0; i < projects.length; i++) {
        if (projects[i].category == category) {
            let div = document.createElement('div');
            div.className = "col-sm-12 col-md-6 col-xl-4 mb-2";

            let carddiv = document.createElement('div');
            carddiv.className = "card p-1 div-card text-dark";

            let cardimg = document.createElement('img');
            cardimg.src = `${projects[i].img}`;
            // cardimg.width = "300";
            cardimg.height = "300";
            cardimg.className = "border border-dark img-fluid"

            let cardbody = document.createElement('div');
            cardbody.className = "card-body";

            let h41 = document.createElement("h4");
            h41.className = "text-dark";
            h41.innerHTML = `${projects[i].name}`

            let p1 = document.createElement("p");
            p1.className = "card-text text-dark";
            p1.innerText = `${projects[i].description}`

            let h52 = document.createElement("h5");
            h52.className = "text-dark";
            h52.innerHTML = `Tech Stack`

            let ul1 = getStackImages(projects[i].techstack)

            let cardfooter = document.createElement('div');
            cardfooter.className = "card-footer"


            let footerrow = document.createElement('div');
            footerrow.className = "row mb-2 d-flex justify-content-center";

            let button = document.createElement("a");
            button.className = "btn btn-info btn-sm col-11";
            button.href = `${projects[i].deploymentUrl}`
            button.innerText = `Demo URL`
            button.target = "_blank"

            let footerrow2 = document.createElement('div');
            footerrow2.className = "row d-flex justify-content-around";

            let button1 = document.createElement("a");
            button1.className = "btn btn-dark text-light btn-sm";
            button1.href = `${projects[i].frontend}`
            button1.innerHTML = `<i class="fab fa-github"></i> Frontend Repo`
            button1.target = "_blank"

            if (projects[i].backend) {
                let button2 = document.createElement("a");
                button2.className = "btn btn-dark btn-sm text-light ";
                button2.href = `${projects[i].backend}`
                button2.innerHTML = `<i class="fab fa-github"></i> Backend Repo`
                button2.target = "_blank"
                footerrow2.append(button2);
            }


            cardfooter.append(footerrow, footerrow2);
            footerrow2.append(button1);
            footerrow.append(button);
            cardbody.append(h41, p1, h52, ul1);
            carddiv.append(cardimg, cardbody, cardfooter);
            div.append(carddiv)
            divrow.append(div);
        }
    }
    divprojects.append(divrow);
}

window.onload = () => {
    projectsFunc("fullstack");
    document.getElementById("btn-fullstack").setAttribute("onclick", "projectsFunc('fullstack')");
    document.getElementById("btn-frontend").setAttribute('onclick', "projectsFunc('frontend')");
    document.getElementById("btn-backend").setAttribute('onclick', "projectsFunc('backend')");
}




















(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict