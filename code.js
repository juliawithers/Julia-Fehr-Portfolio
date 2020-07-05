
// Load each page:
function loadPage(page) {
    // if contact/about/project/home load those pages
    // load contact page
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
                    <button class="linkedin"><a href="https://linkedin.com/in/julia-fehr-b5447b41" target="_blank">LinkedIn</a></button>
                    <button class="email"><a href="mailto:09jwithers@gmail.com">Email</a></button>
                    <button class="github"><a href="https://github.com/juliawithers" target="_blank">Github</a></button>
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
                        <button class="thumbButton" onclick="on()">
                            <img src="${STORE[i].thumb.smallThumb}" alt="${STORE[i].thumb.altSmallThumb}" class = "thumbnail" id="${STORE[i].overlayID}">
                        </button> 
                        <div class="buttonhome">
                            <button class="button repo" ><a class="alink" href="${STORE[i].clientRepoLink}" target="_blank">Repo</a></button>
                            <button class="button live"><a class="alink" href="${STORE[i].liveLink}" target="_blank">Live</a></button>
                        </div>   
                    </article>`)
            } else if (STORE[i].apiRepoLink !== '') {
                $('.art-cont').append(
                    `<article class = "articles">
                        <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                        <p>${STORE[i].short_description}</p>
                        <button class="thumbButton" onclick="on()">
                            <img src="${STORE[i].thumb.smallThumb}" alt="${STORE[i].thumb.altSmallThumb}" class = "thumbnail" id="${STORE[i].overlayID}">
                        </button>    
                        <div class="buttonhome">
                            <button class="button repo" ><a class="alink" href="${STORE[i].clientRepoLink}" target="_blank">Client</a></button>
                            <button class="button repo" ><a class="alink" href="${STORE[i].apiRepoLink}" target="_blank">API</a></button>
                            <button class="button live"><a class="alink" href="${STORE[i].liveLink}" target="_blank">Live</a></button>
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
                <p>I was born and raised in Atlanta. I recently graduated the Full Stack Engineering boot camp at Thinkful. I have a strong technical background having graduated from Georgia Tech with a degree in Mechanical Engineering. I have seen firsthand the importance of user-friendly interfaces. I enjoy working on full-stack projects as I find enjoyment on both front-end and back-end programming. My current goal is to find a company that fosters 1) commitment to expanding knowledge, 2) a healthy working environment where teams thrive off one another, and 3) commitment to community outreach programs. </p><br>
                <p>Why the switch? Good question. I enjoy engineering quite a bit! I love to work with my hands and to solve complex problems. I was able to do a lot of traveling during my engineering career, but with that came a physical toll. I also stopped learning, as I'd been boxed into a niche of knowledge. My goal in life is to keep learning for as long as I am able in any field, and engineering just couldn't fulfill this for me. I have always loved coding and it was just the right time to dive in and learn. So far it's been one of the best decisions I have ever made. I can't wait to complete my career change and I couldn't be happier!<p><br>
                <p>A bit more about me: I enjoy reading in my spare time and sketching on occasion. I have a deep love for Sci-Fi and the endless technological possibilities my favorite writers conjure up. I also enjoy a good RPG or video game when time permits. That being said, I’m partial to spending time outdoors and find it necessary to clear my head at times. When I was younger I loved to volunteer and it has been several years since I had the time or energy, but community outreach is something I am passionate about and would like to start doing again.</p>
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

    // load contact page when link at bottom is clicked
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
                    <button class="linkedin"><a href="https://linkedin.com/in/julia-fehr-b5447b41" target="_blank">LinkedIn</a></button>
                    <button class="email"><a href="mailto:09jwithers@gmail.com">Email</a></button>
                    <button class="github"><a href="https://github.com/juliawithers" target="_blank">Github</a></button>
                    <div class="imgcontainer">
                        <img src="pictures/stain.JPG" alt="Beautiful stain glass of St. Chapelle, Paris" class="img">
                       <p class="picturedescription">The stain glass windows inside St. Chapelle, Paris</p>
                    </div>
                </div> 
            </section> 
        </div>`)
    };
}; //end of function loadPage.

// render the overlay when the thumbnail on the project page is clicked
function on() {
    $('.thumbButton').on('click', function (e) {
        document.getElementById("overlay").style.display = "block";
        const id = $(e.target).attr('id')
        for (let i = 0; i < STORE.length; i++) {
            if (id === STORE[i].overlayID) {
                if (STORE[i].apiRepoLink === ''){
                    $('#text').html(
                        `<section class="overlay" onclick="off()">
                            <img id="x" src="pictures/x_out.png" onclick="off()">
                            <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                            <p>${STORE[i].long_description}</p>
                            <p>${STORE[i].languages}</p>
                                <div class="buttonhome-overlay">
                                    <button class="button repo" ><a class="alink" href="${STORE[i].clientRepoLink}" target="_blank">Repo</a></button>
                                    <button class="button live"><a class="alink" href="${STORE[i].liveLink} " target="_blank">Live</a></button>
                                </div> 
                                <div class="image-container">
                                
                                </div>
                        </section>`)
                    $('body').css('overflow', 'hidden');
                    renderOverlayImages(STORE[i])
                } else if (STORE[i].apiRepoLink !== ''){
                    $('#text').html(
                        `<section class="overlay" onclick="off()">
                            <img id="x" src="pictures/x_out.png" onclick="off()">
                            <p class="projectTitle"><strong> ${STORE[i].title} </strong></p>
                            <p>${STORE[i].long_description}</p>
                            <p>${STORE[i].languages}</p>
                                <div class="buttonhome-overlay">
                                    <button class="button repo" ><a class="alink" href="${STORE[i].clientRepoLink}" target="_blank">Client</a></button>
                                    <button class="button repo" ><a class="alink" href="${STORE[i].apiRepoLink}" target="_blank">API</a></button>
                                    <button class="button live"><a class="alink" href="${STORE[i].liveLink} " target="_blank">Live</a></button>
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
            <ul class = "ham-nav">
                <li class="ham-nav-item"><a id="index" onclick="offMenu();loadPage('index')">Home</a></li>
                <li class="ham-nav-item"><a id="projects" onclick="offMenu();loadPage('projects')">Projects</a></li>
                <li class="ham-nav-item"><a id="about" onclick="offMenu();loadPage('about')">About</a></li>
                <li class="ham-nav-item"><a id="contact" onclick="loadPage('contact')">Contact</a></li> 
            </ul>
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