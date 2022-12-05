const startButton = document.querySelector(".start-button");
const closeButton = document.querySelector(".close");
const background = document.querySelector(".background");
const bottomBackground = document.querySelectorAll(".bottom-background");
const gameContainer = document.querySelector(".game-container");
const end = document.querySelector(".end");
const endMessage = document.querySelector(".end-message");
const endText = document.querySelector(".end-text");
const screenshotButton = document.querySelector(".screenshot-container");
const termsAndConditions = document.querySelector("small");
const start = document.querySelector(".start");
const game = document.querySelector(".game");
const instruction = document.querySelector(".instructions");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");

const clickSound = document.getElementById("click")
const completed = document.getElementById("completed")
const lose = document.getElementById("lose")

let cardValues;
let cards;
let intervals;
let current;
let stop
let swap
let shuffleNumber;
let pickCard = true;

let border
let card1P
let card2P
let card3P
let cardY
let cardUp
let cardDown

var owl = $(".owl-carousel");

//Items array

// change image of the cards here
const items = [
    { name: "wrong", image: "./assets/img/Life_By_The_River_Card.png" },
    { name: "correct", image: "./assets/img/Liu Kangs Mountain_River Card.png" },
    { name: "wrong", image: "./assets/img/Singapore River Card.png" }
];

const generateRandom = (size = 3) => {
    //temporary array
    let tempArray = [...items];
    //initializes cardValues array
    let cardValues = [];
    //Random object selection
    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        //pnce selected remove object from temp array
        tempArray.splice(randomIndex, 1);
    }
    return cardValues;
}

// Change the select message here
function repeat() {
    if (moving == true) {
        movingCard()
        stop = window.requestAnimationFrame(repeat);
    }
    else {
        cancelAnimationFrame(stop)
        return
    }
}

function movingCard() {
    if (border.width < 500) {
        offsetUp = 150
        offsetDown = -150
    }
    if (border.width > 500) {
        offsetUp = 470
        offsetDown = -120
    }
    cardUp = cardY - offsetUp
    cardDown = cardY - offsetDown

    if (shuffleNumber == 1) {
        if (current == 1) {
            if (card1.y >= cardDown) {
                let delay = setTimeout(() => {
                    if (current == 1) {
                        current = 2
                    }
                }, 100);
                card1.y = cardDown
                card2.y = cardUp
                return
            }

            card1.y = card1.y + swap
            card1.style.top = card1.y + 'px';

            card2.y = card2.y - swap
            card2.style.top = card2.y + 'px';
        }

        if (current == 2) {
            if (card1.x >= card2P) {
                let delay = setTimeout(() => {
                    if (current == 2) {
                        current = 3
                    }
                }, 100);
                card1.x = card2P
                card2.x = card1P
                return
            }

            card1.x = card1.x + swap
            card1.style.left = card1.x + 'px';

            card2.x = card2.x - swap
            card2.style.left = card2.x + 'px';
        }

        if (current == 3) {
            if (card1.y <= cardY) {
                card1.y = cardY
                card2.y = cardY
                card1.style.top = cardY + 'px';
                card2.style.top = cardY + 'px';
    
                let delay = setTimeout(() => {
                    if (current == 3) {
                        current = 4
                    }
                }, 100);
                return
            }
            card1.y = card1.y - swap
            card1.style.top = card1.y + 'px';

            card2.y = card2.y + swap
            card2.style.top = card2.y + 'px';
        }

        if (current == 4) {
            if (card1.y >= cardDown) {
                let delay = setTimeout(() => {
                    if (current == 4) {
                        current = 5
                    }
                }, 100);
                card1.y = cardDown
                card3.y = cardUp
                return
            }
            card1.y = card1.y + swap
            card1.style.top = card1.y + 'px';

            card3.y = card3.y - swap
            card3.style.top = card3.y + 'px';
        }

        if (current == 5) {
            if (card1.x >= card3P) {
                let delay = setTimeout(() => {
                    if (current == 5) {
                        current = 6
                    }
                }, 100);
                card1.x = card3P
                card3.x = card2P
                return
            }
            card1.x = card1.x + swap
            card1.style.left = card1.x + 'px';

            card3.x = card3.x - swap
            card3.style.left = card3.x + 'px';
        }

        if (current == 6) {
            if (card1.y <= cardY) {
                card1.y = cardY
                card3.y = cardY
                card1.style.top = cardY + 'px';
                card3.style.top = cardY + 'px';
    
                let delay = setTimeout(() => {
                    if (current == 6) {
                        current = 10
                        moving = false
                        pickCard = false;
                    }
                }, 100);
                return
            }
            card1.y = card1.y - swap
            card1.style.top = card1.y + 'px';

            card3.y = card3.y + swap
            card3.style.top = card3.y + 'px';
        }
    }
    if (shuffleNumber == 2) {
        if (current == 1) {
            if (card1.y >= cardDown) {
                let delay = setTimeout(() => {
                    if (current == 1) {
                        current = 2
                    }
                }, 100);
                card1.y = cardDown
                card3.y = cardUp
                return
            }

            card1.y = card1.y + swap
            card1.style.top = card1.y + 'px';

            card3.y = card3.y - swap
            card3.style.top = card3.y + 'px';
        }

        if (current == 2) {
            if (card1.x >= card3P) {

                let delay = setTimeout(() => {
                    if (current == 2) {
                        current = 3
                    }
                }, 100);
                card1.x = card3P
                card3.x = card1P
                return
            }

            card1.x = card1.x + swap
            card1.style.left = card1.x + 'px';

            card3.x = card3.x - swap
            card3.style.left = card3.x + 'px';
        }

        if (current == 3) {
            if (card1.y <= cardY) {
                card1.y = cardY
                card3.y = cardY
                card1.style.top = cardY + 'px';
                card3.style.top = cardY + 'px';
    
                let delay = setTimeout(() => {
                    if (current == 3) {
                        current = 4
                    }
                }, 100);
                return
            }
            card1.y = card1.y - swap
            card1.style.top = card1.y + 'px';

            card3.y = card3.y + swap
            card3.style.top = card3.y + 'px';
        }

        if (current == 4) {
            if (card1.y >= cardDown) {

                let delay = setTimeout(() => {
                    if (current == 4) {
                        current = 5
                    }
                }, 100);
                card1.y = cardDown
                card2.y = cardUp
                return
            }

            card1.y = card1.y + swap
            card1.style.top = card1.y + 'px';

            card2.y = card2.y - swap
            card2.style.top = card2.y + 'px';
        }

        if (current == 5) {
            if (card1.x <= card2P) {

                let delay = setTimeout(() => {
                    if (current == 5) {
                        current = 6
                    }
                }, 100);
                card1.x = card2P
                card2.x = card3P
                return
            }

            card1.x = card1.x - swap
            card1.style.left = card1.x + 'px';

            card2.x = card2.x + swap
            card2.style.left = card2.x + 'px';
        }

        if (current == 6) {

            if (card1.y <= cardY) {
                card1.y = cardY
                card2.y = cardY
                card1.style.top = cardY + 'px';
                card2.style.top = cardY + 'px';
    
                let delay = setTimeout(() => {
                    if (current == 6) {
                        current = 10
                        moving = false
                        pickCard = false;
                    }
                }, 100);
                return
            }
            card1.y = card1.y - swap
            card1.style.top = card1.y + 'px';

            card2.y = card2.y + swap
            card2.style.top = card2.y + 'px';
        }
    }
}

const matrixGenerator = (cardValues, size = 3) => {
    cardValues = [...cardValues];

    // change cover image of the card here!!

    for (let i = 0; i < size; i++) {
        if (i == 0) {
            card1.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
        <img src="./assets/img/cover.png" class="image"/></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>`;
        }
        if (i == 1) {
            card2.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
        <img src="./assets/img/cover.png" class="image"/></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>`;
        }
        if (i == 2) {
            card3.innerHTML += `
        <div class="card-container" data-card-value="${cardValues[i].name}">
        <div class="card-before">
        <img src="./assets/img/cover.png" class="image"/></div>
        <div class="card-after">
        <img src="${cardValues[i].image}" class="image"/></div>
     </div>`;
        }

        let offestShow
        let offestP1
        let offestP2
        let offestP3
        let offestY

        border = gameContainer.getBoundingClientRect();

        if (border.width < 500) {
            offestShow = 250
            offestP1 = 90
            offestP2 = 54
            offestP3 = 18
            offestY = 138
            swap = 1.3
        }
        if (border.width > 500) {
            offestShow = 450
            offestP1 = 90
            offestP2 = 54
            offestP3 = 18
            offestY = 170
            swap = 2
        }

        border = gameContainer.getBoundingClientRect();
        card1P = (border.width / 4) - offestP1
        card2P = (border.width / 2) - offestP2
        card3P = ((border.width / 2) + (border.width / 4)) - offestP3
        cardY = (border.height / 2) - offestY
        card1.x = card1P
        card1.y = cardY
        card1.style.top = card1.y + 'px';
        card1.style.left = card1.x + 'px';

        card2.x = card2P
        card2.y = cardY
        card2.style.top = card2.y + 'px';
        card2.style.left = card2.x + 'px';


        card3.x = card3P
        card3.y = cardY
        card3.style.top = card3.y + 'px';
        card3.style.left = card3.x + 'px';
    }
    //Grid
    gameContainer.style.gridTemplateColumns = `repeat(${size},9.25em)`;

    //Cards
    cards = document.querySelectorAll(".card-container");
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            if (pickCard == false) {
                let cardName = card.getAttribute("data-card-value");
                card.classList.add("flipped");
                pickCard = true;

                // change to end screen here

                if (cardName == "wrong") {
                    // change to end screen
                    // hide game screen
                    // open end screen
                    game.classList.add("hide");
                    end.classList.remove("hide");
                    closeButton.classList.add("hide");

                    owl.owlCarousel({
                        loop: true,
                        lazyLoad: true,
                        nav: false,
                        autoplay: false,
                        margin: 10,
                        autoplayTimeout: 10000,
                        autoplayHoverPause: true,
                        responsive: {
                            0: {
                                items: 1
                            }
                        }
                    })

                    document.body.style.overflow = "initial";
                    document.body.style.background = "none";

                    background.classList.add("hide");
                    bottomBackground.forEach(element => {
                        element.classList.add("hide");
                    })

                    endMessage.innerHTML = "<h2>Try Again!</h2>";
                    endText.innerHTML = "<p>Liu Kang's <i>Mountain/River</i> is not a scene of Singapore, unlike the other two paintings, which depicts rivers in Singapore.</p>"

                    screenshotButton.innerHTML = '<img src="./assets/img/playagain.png" style="max-width: 300px;">'

                    screenshotButton.removeEventListener('click', playAgain);

                    // Screenshot Button
                    screenshotButton.addEventListener('click', playAgain);
                }

                else {
                    // change to end screen
                    // hide game screen
                    // open end screen
                    game.classList.add("hide");
                    end.classList.remove("hide");
                    closeButton.classList.add("hide");

                    owl.owlCarousel({
                        loop: true,
                        lazyLoad: true,
                        nav: false,
                        autoplay: false,
                        margin: 10,
                        autoplayTimeout: 10000,
                        autoplayHoverPause: true,
                        responsive: {
                            0: {
                                items: 1
                            }
                        }
                    })

                    document.body.style.overflow = "initial";
                    document.body.style.background = "none";

                    background.classList.add("hide");
                    bottomBackground.forEach(element => {
                        element.classList.add("hide");
                    })

                    screenshotButton.style.background = "#CE0E2D";

                    screenshotButton.innerHTML = `<img src="./assets/img/camera.png" alt="camera"><p>Take a <b>screenshot</b> of this page to redeem an Amazing Sketchbook at the Gallery's Keppel Centre for Art Education! While stocks last.</p>`
                    termsAndConditions.innerHTML = `Limited to 1 redemption per person, from 3 Dec 2022 to 31 Jan 2023.`

                    endMessage.innerHTML = "<h2>Well Done!</h2>";
                    endText.innerHTML = "<p>Liu Kang's <i>Mountain/River</i> is indeed not a scene of Singapore, unlike the other two paintings, which depicts rivers in Singapore.</p>"

                    screenshotButton.removeEventListener('click', playAgain);

                    // Screenshot Button
                    screenshotButton.addEventListener('click', () => {
                        const screenshotTarget = document.body;

                        html2canvas(screenshotTarget).then((canvas) => {

                            let a = document.createElement("a");
                            a.download = "screenshot.png";
                            a.href = canvas.toDataURL("image/png");
                            a.click();
                        })
                    });
                }
            }
        })
    })
}

function playAgain() {
    window.location.reload();
}

owl.on('dragged.owl.carousel', function(event) {
    owl.trigger('stop.owl.autoplay');
});


startButton.addEventListener("click", () => {
    let delay = setTimeout(() => {
        start.classList.add("hide");
        game.classList.remove("hide");
        bottomBackground.forEach(element => {
            element.style.opacity = 0.4;
        });
        closeButton.classList.remove("hide");
        began()
    }, 200);
})

startButton.addEventListener('dblclick', function (event) {
    event.preventDefault();
});

closeButton.addEventListener("click", () => {
    window.location.reload();
})



function began() {
    initializer();
    current = 1;
    shuffleNumber = 0
    let delay = setTimeout(() => {
        Show();
    }, 500);
}

Show = () => {
    cards.forEach((card) => {
        card.classList.add("flipped");
        let delay = setTimeout(() => {
            card.classList.remove("flipped");
            return
        }, 3500);
        let delayMix = setTimeout(() => {
            moving = true
            shuffleNumber = Math.floor(Math.random() * 2) + 1
            repeat()
        }, 5000);
    })

}

//Initialize values and func calls 
// Need to change the innerHTML for instructions hereeee!
const initializer = () => {
    instruction.innerHTML = "<p class='resultText'>Follow and identify the artwork that does not depict Singapore.</p>"
    winCount = 0;
    cardValues = generateRandom();
    matrixGenerator(cardValues);
};

/*prevent double tag zoom*/
document.addEventListener('dblclick', function (event) {
    event.preventDefault();
}, { passive: false });


window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}




/* Carousel code*/

let paintingData = [
    {
        title: "Singapore River",
        artist: "Chen Chong Swee",
        information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Mauris et lobortis quam. In volutpat efficitur dictum. " +
            "Nunc vel arcu id lectus iaculis pretium nec quis nulla. " +
            "Phasellus dictum laoreet odio, et tempor risus cursus a. " +
            "Nulla facilisi. Morbi congue ultricies quam sed consectetur. Sed " +
            "eleifend pulvinar mauris in interdum. Pellentesque.",
    },

    {
        title: "Life by the River",
        artist: "Liu Kang",
        information: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
            "Mauris et lobortis quam. In volutpat efficitur dictum. " +
            "Nunc vel arcu id lectus iaculis pretium nec quis nulla. " +
            "Phasellus dictum laoreet odio, et tempor risus cursus a. " +
            "Nulla facilisi. Morbi congue ultricies quam sed consectetur. Sed " +
            "eleifend pulvinar mauris in interdum. Pellentesque.",
    },
];