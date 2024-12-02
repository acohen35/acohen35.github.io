// Company name constant
const COMPANY_NAME = "A16C.Inc";

function displayDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    const dateTimeString = `Today is ${formattedHours}:${formattedMinutes}${ampm} on ${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]}, ${now.getFullYear()}`;
    document.getElementById('currentDateTime').textContent = dateTimeString;
}

function greetUser() {
    const userName = document.getElementById('userName').value;
    const userMood = document.getElementById('userMood').value;
    
    const greeting = `The ${COMPANY_NAME} welcomes you, ${userName}!\nWe're glad you are doing ${userMood}!`;
    document.getElementById('greetingOutput').textContent = greeting;
}

function getPolygonName() {
    let number = Math.abs(parseFloat(document.getElementById('favoriteNumber').value));
    number = Math.round(number);
    
    const polygons = {
        1: "monogon",
        2: "digon",
        3: "triangle",
        4: "quadrilateral",
        5: "pentagon",
        6: "hexagon",
        7: "heptagon",
        8: "octagon",
        9: "nonagon",
        10: "decagon"
    };
    
    const polygonName = polygons[number] || "polygon with " + number + " sides";
    alert(`A polygon with ${number} sides is called a ${polygonName}`);
}

// Company-themed functions
function camelGrunt() {
    alert("GHRRRR! The camel makes its distinctive grunt!");
}

function calculateCamelHumps() {
    const age = parseFloat(prompt("Enter camel's age in years:"));
    const camelType = Math.random() < 0.5 ? "Dromedary (1 hump)" : "Bactrian (2 humps)";
    alert(`Based on the age of ${age} years, this is likely a ${camelType} camel!`);
}

function camelWaterTime() {
    const currentHour = new Date().getHours();
    if (currentHour >= 6 && currentHour <= 18) {
        alert("It's daytime! Camels can go for long periods without water thanks to their humps!");
    } else {
        alert("It's nighttime! Camels are resting after a long day in the desert!");
    }
}

function countCamelSteps() {
    alert("A camel can walk about 25 miles per day through the desert! That's approximately 50,000 steps!");
}
