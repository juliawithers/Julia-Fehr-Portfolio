const STORE = [
    {
        title: "Stock'Em!",
        short_description: "An app for tracking inventory changes. Intended for use by small companies looking to stay organized. Built because I work daily with inventory and understand the importance of FIFO. It can be frustratingly overcomplicated if using something like SAP. I wanted to create a simple elegant app for daily use.",
        long_description:  "An app for tracking inventory changes, past orders, and customer/supplier contacts. Intended for use by small companies looking to stay organized. Built because I work daily with inventory and understand the importance of FIFO. It is something can be frustratingly overcomplicated if using something like SAP. I wanted to create a simple elegant app for daily use. Sorting is enabled on all tables, while filtering is enabled on inventory and past orders only.",
        languages: "React, NodeJs, ExpressJS, PostgreSQL, HTML, CSS, JavaScript, jQuery, Reactable table library",
        clientRepoLink: "https://github.com/juliawithers/stock-em",
        apiRepoLink: "https://github.com/juliawithers/stock-em-api",
        liveLink: "https://stock-em.vercel.app/",
        thumb:
        {
            smallThumb: "pictures/StockEm_Large_Inventory.PNG",
            altSmallThumb: "Stock'Em! app Inventory Page"
        },
        overlayThumbs: [
            {
                bigThumb: "pictures/StockEm_Large_Inventory.PNG",
                altBigThumb: "Large screen view of inventory page",
                desc: "Main inventory page showing current and updated inventory for example user:"
            },
            {
                bigThumb: "pictures/StockEm_Large_Customers.PNG",
                altBigThumb: "Large screen view of current customers page",
                desc: "Page showing current and updated customers for example user:"
            },
            {
                bigThumb: "pictures/StockEm_Large_Suppliers.PNG",
                altBigThumb: "Large screen view of current suppliers page",
                desc: "Page showing current and updated suppliers for example user:"
            },
            {
                bigThumb: "pictures/StockEm_Large_PastOrders.PNG",
                altBigThumb: "Large screen view of past orders page",
                desc: "Page showing past orders for example user. I hope to implement a traking page to show a breakdown on items purchased:"
            },
            {
                bigThumb: "pictures/StockEm_AddEdit_Customer_Info.PNG",
                altBigThumb: "Add and Edit Customer Information Page",
                desc: "Page for adding or editing current customers for example user:"
            },
            {
                bigThumb: "pictures/StockEm_AddEdit_Supplier_Info.PNG",
                altBigThumb: "Add and Edit Supplier Information Page",
                desc: "Page for adding or editing current suppliers for example user:"
            },
            {
                bigThumb: "pictures/StockEm_Add_SKUs.PNG",
                altBigThumb: "Add SKUs Page",
                desc: "Page for adding or editing current SKUs for example user:"
            },
            {
                bigThumb: "pictures/StockEm_CustomerPO.PNG",
                altBigThumb: "Add Customer PO Page",
                desc: "Page for entering customer POs for example user:"
            },
            {
                bigThumb: "pictures/StockEm_SupplierPO.PNG",
                altBigThumb: "Add Supplier PO Page",
                desc: "Page for entering supplier POs for example user:"
            }
        ],
        overlayID: "StockEm"
    },
    {
        title: "Virtual Fight Club",
        short_description: "Create a character and fight opponents! Intended for gamers looking for a short game. An app born from my own passion for gaming! I really wanted to create this app because I've always wanted to create a game.",
        long_description: "Create a character and fight opponents! Intended for gamers looking for a short game. An app born from my own passion for gaming! Level up once you reach 50 points and update your character attributes. Strength, Intelligence, Charisma, and Agility are the attributes you must work with.",
        languages: "React, NodeJs, ExpressJS, PostgreSQL, HTML, CSS, JavaScript, jQuery",
        clientRepoLink: "https://github.com/juliawithers/virtual-fight-club",
        apiRepoLink: "https://github.com/juliawithers/vfc-api",
        liveLink: "https://virtual-fight-club.now.sh/",
        thumb:
        {
            smallThumb: "pictures/VFCLandingPage.PNG",
            altSmallThumb: "Virtual Fight Club App Thumbnail"
        },
        overlayThumbs: [
            {
                bigThumb: "pictures/VFCLandingPage.PNG",
                altBigThumb: "Landing page for Virtual Fight Club",
                desc: "Landing page for logging in or creating an account:"
            },
            {
                bigThumb: "pictures/VFCFightPage.PNG",
                altBigThumb: "Fight Page for Virtual Fight Club",
                desc: "'Fight' page for users to fight opponents!:"
            },
            {
                bigThumb: "pictures/VFCCharacterPage.PNG",
                altBigThumb: "Character Description and Update Page for Virtual Fight Club",
                desc: "Character page for creating or editing their character attributes:"
            },
            {
                bigThumb: "pictures/VFCAboutPage.PNG",
                altBigThumb: "About Page for Virtual Fight Club",
                desc: "About page for the game:"
            }
        ],
        overlayID: "VFC"
    },
    {
        title: "inSUREance",
        short_description: "Find providers near you that take your insurance. Intended for users seeking a doctor when they in an unfamiliar area or new to town. Built because I know all too well what it's like to get sick out of town!",
        long_description: "Find providers near you that take your insurance. Intended for users seeking a doctor when they in an unfamiliar area or new to town. Built because I know all too well what it's like to get sick out of town! Enter your address or zipcode, a search radius, and a specialty if you want.",
        languages: "HTML, CSS, JavaScript, jQuery, Read API calls using the BetterDoctor API. NOTE: As of July 1st, 2020 the BetterDoctor API is down. No response from the company. I am working on finding an alternate API.", 
        clientRepoLink: "https://github.com/juliawithers/inSUREance",
        apiRepoLink: '',
        liveLink: "https://juliawithers.github.io/inSUREance/",
        thumb:
        {
            smallThumb: "pictures/LandingPage.PNG",
            altSmallThumb: "inSUREance App Thumbnail"
        },
        overlayThumbs: [
            {
                bigThumb: "pictures/LandingPage.PNG",
                altBigThumb: "Landing page for inSUREance",
                desc: "Landing page where you enter the search parameters:"
            },
            {
                bigThumb: "pictures/ResultsLoaded.PNG",
                altBigThumb: "Results loaded",
                desc: "The view of loaded results from the searh parameters:"
            },
            {
                bigThumb: "pictures/ShowMore.PNG",
                altBigThumb: "Short configuration for results",
                desc: "The shortened view of individual results:"
            },
            {
                bigThumb: "pictures/ShowLess.PNG",
                altBigThumb: "Long configuration for results",
                desc: "The long view for individual results:"
            }
        ],
        overlayID: "ins"
    },
    {
        title: "Game of Thrones Quiz",
        short_description: "A simple quiz on the subject of Game of Thrones. Made purely for fun and intended for GOT fans! Being a huge GOT fan I intend to expand on this quiz to test even the biggest GOT's fans knowledge.",
        long_description: "A simple quiz on the subject of Game of Thrones that will put your GOT knowledge to the test. Made purely for fun and intended for GOT fans! Being a huge GOT fan I intend to expand on this quiz to test even the biggest GOT's fans knowledge. Enjoy!",
        languages: "HTML, CSS, JavaScript, jQuery",
        clientRepoLink: "https://github.com/juliawithers/quiz-app",
        apiRepoLink: '',
        liveLink: "https://juliawithers.github.io/GameOfThronesQuiz/",
        thumb:
        {
            smallThumb: "pictures/GOT_Thumb_Original.PNG",
            altSmallThumb: "Game of Thrones Quiz App Thumbnail"
        },
        overlayThumbs: [
            {
                bigThumb: "pictures/GOT_Thumb_Original.PNG",
                altBigThumb: "Game of Thrones Landing Page",
                desc: "Landing page for the quiz:"
            },
            {
                bigThumb: "pictures/GOT_Thumb_Question.PNG",
                altBigThumb: "Game of Thrones Question 1",
                desc: "View of one of the questions:"
            },
            {
                bigThumb: "pictures/GOT_Thumb_Question_correct.PNG",
                altBigThumb: "Correct Answer Screenshot",
                desc: "View if the answer is correct:"
            },
            {
                bigThumb: "pictures/GOT_Thumb_Question_incorrect.PNG",
                altBigThumb: "In Answer Screenshot",
                desc: "View if the answer is incorrect:"
            }
        ],
        overlayID: "GOT",
    }
]
