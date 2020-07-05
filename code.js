
// Load each page:
function loadPage(page) {
    // if contact/about/project/home load those pages
    // load contact page
    // load contact page when link at bottom is clicked
    $('body').css('overflow', 'visible');
    if (page === 'contact') {
        $('.mainload').html(
            `
        <div id="menuoverlay">
                <div id="menutext">
                </div>  
            </div>
        <div class = "main" class="contactmain">
            <section class = "contact-page">
                <h1>Contact and Links for Julia Fehr</h1>
                <div class="links">
                    <a href="https://linkedin.com/in/julia-fehr-b5447b41" target="_blank">LinkedIn</a>
                    <a href="mailto:09jwithers@gmail.com">Email</a>
                    <a href="https://github.com/juliawithers" target="_blank">Github</a>
                </div> 
                <div class="imgcontainer">
                <img src="pictures/stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
                <p class="picturedescription">The stain glass windows inside St. Chapelle, Paris</p>
            </div>`)
    };

    // load projects page
    if (page === 'projects') {
        $('.mainload').html(
            `<div id="overlay">
                <div id="text"></div>
        </div>
        <div id="menuoverlay">
                <div id="menutext">
                </div>  
        </div>
        <div class = "main" class="projectsmain">
            <section class = "projects">
                <h1>Projects</h1>
                <p>Below are some of the projects I have worked on in the last few months.</p>
                <p>Click on the thumbnails to see more screenshots.</p>
                <div class = "art-cont">

                </div>
            </section>
        </div>`)
        renderProjects(STORE)
    };

    // Use the STORE object to create the articles
    function renderProjects(STORE) {
        for (let i = 0; i < STORE.length; i++) {
            if (STORE[i].apiRepoLink === '') {
                $('.art-cont').append(
                    `<article class = "articles">
                        <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                        <p>${STORE[i].short_description}</p>
                        <button class="anchor" onclick="on()" id="${STORE[i].overlayID}">
                            <img src="${STORE[i].thumb.smallThumb}" alt="${STORE[i].thumb.altSmallThumb}" class = "thumbnail" id="${STORE[i].overlayID}">
                        </button>
                        <div class="buttonhome">
                            <a class="alink repo" href="${STORE[i].clientRepoLink}" target="_blank">Repo</a>
                            <a class="alink live" href="${STORE[i].liveLink}" target="_blank">Live</a>
                        </div>   
                    </article>`)
            } else if (STORE[i].apiRepoLink !== '') {
                $('.art-cont').append(
                    `<article class = "articles">
                        <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                        <p>${STORE[i].short_description}</p>
                        <button class="anchor" onclick="on()" id="${STORE[i].overlayID}">
                            <img src="${STORE[i].thumb.smallThumb}" alt="${STORE[i].thumb.altSmallThumb}" class = "thumbnail" id="${STORE[i].overlayID}">
                        </button>
                         
                        <div class="buttonhome">
                            <a class="alink repo" href="${STORE[i].clientRepoLink}" target="_blank">Client</a>
                            <a class="alink repo" href="${STORE[i].apiRepoLink}" target="_blank">API</a>
                            <a class="alink live" href="${STORE[i].liveLink}" target="_blank">Live</a>
                        </div>
                    </article>`)
            }
        }
    }

    // load about me page
    if (page === 'about') {
        $('.mainload').html(
            `
        <div id="menuoverlay">
                <div id="menutext">
                </div>  
            </div>
        <div class = "main" class="aboutmain">         
            <section class = "about-me">
                <h1>About Me</h1>
                <p>I was born and raised in Atlanta. I recently graduated the Full Stack Engineering boot camp at Thinkful. I have a strong technical background having graduated from Georgia Tech with a degree in Mechanical Engineering. I enjoy working on full-stack projects as I find enjoyment on both front-end and back-end programming. My current goal is to find a company that fosters 1) commitment to expanding knowledge, 2) a healthy working environment where teams thrive off of one another, and 3) commitment to community outreach programs. </p>
                <p>Why the switch? Good question. I enjoy engineering quite a bit! I love to work with my hands and to solve complex problems. I was able to do a lot of traveling during my engineering career, but with that came a physical toll. I also stopped learning, as I'd been boxed into a career niche. My goal in life is to keep learning for as long as I am able in any field. I have always loved coding and it was just the right time to dive in and learn. So far it's been one of the best decisions I have ever made. I can't wait to complete my career change and I couldn't be happier!<p>
                <p>A bit more about me: I enjoy reading in my spare time and sketching on occasion. I have a deep love for Sci-Fi and the endless technological possibilities my favorite writers conjure up. I also enjoy a good RPG or video game when time permits. That being said, I’m partial to spending time outdoors and find it necessary to clear my head at times.</p>
                <div class="imgcontainer">
                    <img src="pictures/skyline.JPG" alt="The Atlanta Skyline" class="img">
                    <p class="picturedescription">The Atlanta Skyline from the top of the Clermont Lounge</p>
                </div>
            </section>
            
        </div> `)
    };

    // load home page
    if (page === 'index') {
        $('.mainload').html(
            `
            <div id="menuoverlay">
                <div id="menutext">
                </div>  
            </div>
            <div class = "main" class="heromain">    
                <section class = "hero">
                    <h1>Julia Fehr</h1>
                    <p>Mechanical Engineer, Full Stack Web Developer, and Sci-Fi Enthusiast. I am interested in creating seamless interactions between technology and end users.</p>
                    <p>I have added some of my favorite pictures to the site. Enjoy!</p>
                    <div class="imgcontainer">
                        <img src="pictures/water.JPG" alt="smooth stones in water" class="img">
                        <p class="picturedescription">Smooth stones on the Mediterranean Coast</p>
                    </div>
                </section>
                
            </div> `)
    };
}; //end of function loadPage.

// render the overlay when the thumbnail on the project page is clicked
function on() {
    $('.anchor').on('click', function (e) {
        document.getElementById("overlay").style.display = "block";
        const id = $(e.target).attr('id')
        for (let i = 0; i < STORE.length; i++) {
            if (id === STORE[i].overlayID) {
                if (STORE[i].apiRepoLink === '') {
                    $('#text').html(
                        `<section class="overlay" onclick="off()">
                            <img id="x" src="pictures/x_out.png" onclick="off()">
                            <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                            <p>${STORE[i].long_description}</p>
                            <p>${STORE[i].languages}</p>
                                <div class="buttonhome-overlay">
                                <a class="alink repo" href="${STORE[i].clientRepoLink}" target="_blank">Client</a>
                                <a class="alink live" href="${STORE[i].liveLink}" target="_blank">Live</a>
                                </div> 
                                <div class="image-container">
                                </div>
                        </section>`)
                    $('body').css('overflow', 'hidden');
                    renderOverlayImages(STORE[i])
                } else if (STORE[i].apiRepoLink !== '') {
                    $('#text').html(
                        `<section class="overlay" onclick="off()">
                            <img id="x" src="pictures/x_out.png">
                            <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                            <p>${STORE[i].long_description}</p>
                            <p>${STORE[i].languages}</p>
                            <div class="buttonhome-overlay">
                                <a class="alink repo" href="${STORE[i].clientRepoLink}" target="_blank">Client</a>
                                <a class="alink repo" href="${STORE[i].apiRepoLink}" target="_blank">API</a>
                                <a class="alink live" href="${STORE[i].liveLink}" target="_blank">Live</a>
                                </div> 
                                <div class="image-container">
                            </div>
                        </section>`)
                    $('body').css('overflow', 'hidden');
                    renderOverlayImages(STORE[i])
                }
            }
        }
    })
};
// render the images onto the overlay
function renderOverlayImages(store) {
    for (let i = 0; i < store.overlayThumbs.length; i++) {
        $('.image-container').append(
            `<img src="${store.overlayThumbs[i].bigThumb}" alt="${store.overlayThumbs[i].altBigThumb}" class="largethumb">`
        )
    }
}
// exit the overlay when X is clicked
function off() {
    document.getElementById("overlay").style.display = "none";
    $('body').css('overflow', 'visible');
};
function onMenu() {
    document.getElementById("menuoverlay").style.display = "block";
    $('#menutext').html(
        `<section class="menuoverlay">
            <img id="x" src="pictures/x_out.png" onclick="offMenu()">
            <nav role="navigation" aria-label="navigation">
                <ul class = "ham-nav">
                    <li class="ham-nav-item"><button class="nav-button" role="menuitem" id="index" onclick="loadPage('index')">Home</button></li>
                    <li class="ham-nav-item"><button class="nav-button" role="menuitem" id="projects" onclick="loadPage('projects')">Projects</button></li>
                    <li class="ham-nav-item"><button class="nav-button" role="menuitem" id="about" onclick="loadPage('about')">About</button></li>
                    <li class="ham-nav-item"><button class="nav-button" role="menuitem" id="contact" onclick="loadPage('contact')">Contact</button></li>
                </ul>
            </nav>
        </section>`)
    $('body').css('overflow', 'hidden');
}
// exit the overlay when X is clicked
function offMenu() {
    document.getElementById("menuoverlay").style.display = "none";
    $('body').css('overflow', 'visible');
}
$(loadPage)
// $(on(STORE))