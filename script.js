// === Floating Hearts Animation ===
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";
    document.getElementById("heart-container").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 400);

// === Auto-Slideshow ===
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let slide of slides) slide.style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000);
}
showSlides();

// === Love Meter Game ===
function calculateLove() {
    document.getElementById("love-result").innerText = `I love you ${Math.floor(Math.random() * 21) + 90}%! 💕`;
}

// === Voice Message Player ===
document.addEventListener("DOMContentLoaded", function() {
    const voiceMessages = document.querySelectorAll("audio");
    let currentIndex = 0;

    function playNext() {
        if (currentIndex < voiceMessages.length) {
            voiceMessages[currentIndex].play();
            voiceMessages[currentIndex].onended = () => {
                currentIndex++;
                if (currentIndex < voiceMessages.length) playNext();
            };
        }
    }

    document.getElementById("playButton").addEventListener("click", () => {
        currentIndex = 0;
        playNext();
    });
});

// === Countdown Timer ===
const countdownDate = new Date("February 14, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerText = distance < 0 
        ? "It's Valentine's Day! 💖" 
        : `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// === Love Letter Typing Animation (Plays when scrolled to section) ===
document.addEventListener("DOMContentLoaded", function () {
    const loveLetterText = 
    
        "Hi love, Gusto kong simulan to sa pagpapasalamat. Thank you for being my girlfriend, bestfriend, buddy, kakulitan, ka anuhan ay mali, Aaron unsint a missage. " +
        "Jokes aside , Thank you so much sa pag stay sakin love. Never kang pumalpak sa pag comfort saken maraming salamat kasi alam kong nandyan ka para saken sa kahit anong sitwasyon payan. " +
        "Alam mo hindi talaga ako mahilig o magaling sa letter kaya pag pasensyahan mo na , alam mo naman kung san lang ako magaling hehe. Pero alam kong mahilig kang magbasa nito , I love you ! " +
        "Happy happy valentines love love and happy monthsary narin , kahit mababasa mo ito feb 14 pa hehe sinusulat ko to ngayong feb 10 , 2025 7:55 PM. " +
        "Alam mo marami akong plano sa magiging gift ko sayo at sure na sure akong magugustuhan mo to, Balik tayo sa kanina Feb 10 ngayon and nag away tayo kagabi about sa pananamit, alam kong mali koyun donns kaya humihingi ako ng tawad sayo siguro onti ontiin natin donns hindi kodin alam bakit ganito ako at alam kong ikaw lang makakatulong sakin. " +
        "English sana to kaso baka isipin mo hindi ako yung gumawa eh , you know i can speak any languages i want right? i know all of the above but never mind. Matarusan nakon atoy?! Nubigat kabsat menonn natoy aw awanen mut!! " +
        "iloveyou donns, always remember ay ayaten ka! 💖";
    
    const loveLetterElement = document.getElementById("love-letter");
    let index = 0, typingStarted = false;

    function typeLetter() {
        if (index < loveLetterText.length) {
            loveLetterElement.innerHTML += loveLetterText.charAt(index);
            index++;
            setTimeout(typeLetter, 100);
        }
    }

    new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !typingStarted) {
            typingStarted = true;
            typeLetter();
        }
    }, { threshold: 0.5 }).observe(loveLetterElement);
});


// === Display Pop-up Message When Scrolled to Bottom ===
document.addEventListener("DOMContentLoaded", function () {
    let messageShown = false;
    const modal = document.getElementById("modal");

    function showFinalMessage() {
        if (!messageShown) {
            messageShown = true;
            modal.style.display = "block";
        }
    }

    window.addEventListener("scroll", function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            showFinalMessage();
        }
    });

    document.querySelector(".close").onclick = () => (modal.style.display = "none");
    window.onclick = event => { if (event.target === modal) modal.style.display = "none"; };
});

// === Rotating Quotes ===
const quotes = [
    "Distance is jsut a test to see how far love will travel",
    "Love never fails, if it failsit was never a love. If its real love will find a way back to you - Corinthians 13:8",
    "We are strong enough to survive this distance.",
    "We loved with a love that was more than love.",
];

function changeQuote() {
    document.getElementById("quote-display").innerHTML = `<p>"${quotes[Math.floor(Math.random() * quotes.length)]}"</p>`;
}

setInterval(changeQuote, 5000);
document.getElementById('nextQuoteButton').addEventListener('click', changeQuote);

document.addEventListener("DOMContentLoaded", function () {
    const scenarioSelector = document.getElementById("scenario-selector");
    const scenarioDisplay = document.getElementById("scenario-display");

    // Messages and corresponding voice messages for each scenario
    const scenarios = {
        choose: {
            message: "Please select a scenario to receive a message. 💬",
            vm: ""  // No audio for the default choice
        },
        hate: {
            message: "Hi love love, hindi ko alam kung anong kasalanan o nagawa ko sayo ngayon pero please suyuin mo nako charr. Sorry love love kung ano man sinabi sayo ng ulupong na ito, Hoy Aaron Chavez kupal ka talagang tarantado ka inaaway mo nanaman yung mapapang asawa mo, baka nakakalimutan mo ayan mag huhugas ng puwit mo pag tanda mo, diba love love? " +
            "iloveyou donns, kung ano mang kasalanan ko sayo sana mapatawad moko iloveyouu. 💔",
            vm: "voice_hate.ogg"
        },
        motivated: {
            message: "Aba aba anong dahilan nyan? dapat ako ah char char" +
                    "masaya ako para sayo at sa kung ano man yang ginagawa moo pag pa tuloy molang love love lagi akong naka suporta sayo number 1 wuhuuuu go love love go love loveee!🌟",
            vm: "voice_motivated.mp3"
        },
        miss: {
            message: "Hi love love, ganto gawin mo kunin mo yung bear" +
                    "tapos pumikit ka....." + 
                    "At yakapin mo syempre, kung wala man yung bear yakapin mo sarilii moo habang naka pikit. Maramdaman moko nyon. Ops hindi ako multo haaa" +
                    "hehehe i miss you more donnang koo!. ❤️",
            vm: "voice_miss.ogg"
        },
        insecure: {
            message: "Hi lovee, gusto kong ipaalala sayo na napaka ganda mo , hindi ko alam kung bat mo yan nararamdaman ngayon pero ipapaalala kolang kung gaano ka kaganda, kabango, kasexy , katalino at iba pa. " +
            "Nobodys perfect pero para saken You are. " +
            "Grabe napaka ganda mong babae , ang ganda ng mga mata moo ilong at bibig. Wow pakiss hehe, Katawan mo super sexyyy alam mo nayun ih tapos ang sipag pa mag aral kaya ang swerte ko sayo ih hehe iloveyou! 💖",
            vm: "voice_insecure.mp3"
        },

        sleep: {
            message: "Hi love, mabigat ba? Siguro inaaway kita ngayon kaya ka nandito or may iba kang dahilan na ayaw sabihin sakin. Kung ano man yun ishare mo sakin palagi ah" +
                    "pray lang love love kung ano man yang iniisip mo ipaubaya mona sa taas iyan, Iloveyou! 😴💤",
            vm: "voice_sleep.ogg"
        }


    };

    // Event listener for scenario selection
    scenarioSelector.addEventListener("change", function () {
        const selectedScenario = scenarioSelector.value;
        scenarioDisplay.innerHTML = ""; // Clear previous content

        if (selectedScenario in scenarios) {
            const scenario = scenarios[selectedScenario];
            scenarioDisplay.innerHTML = `<p>${scenario.message}</p>`;

            if (scenario.vm) {
                // Create audio player if there's an audio message
                const audioPlayer = document.createElement("audio");
                audioPlayer.src = scenario.vm;
                audioPlayer.controls = true;
                scenarioDisplay.appendChild(audioPlayer);

                // Play the audio automatically (optional)
                audioPlayer.play();
            }
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // All sections
    const navLinks = document.querySelectorAll(".nav-link"); // Navigation links
    
    // Listen for scroll events
    window.addEventListener("scroll", function () {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });
        
        // Remove active class from all links
        navLinks.forEach(link => {
            link.classList.remove("active");
        });
        
        // Add active class to the current section's link
        const currentLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
        if (currentLink) {
            currentLink.classList.add("active");
        }
    });
});
