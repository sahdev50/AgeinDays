function AgeInDays() {
    var BirthYear = prompt('Your Birth Year!!');
    var h1 = document.createElement('h1');
    if (BirthYear < 2020) {
        var AgeinDays = (2020 - BirthYear) * 365;
        var textanswer = document.createTextNode("You are " + AgeinDays + " days Old.");
    }
    else if (BirthYear == 2020) {
        textanswer = document.createTextNode("You are just born.");
    }
    else {
        textanswer = document.createTextNode("Invalid...");
    }
    var h1 = document.createElement('h1');

    h1.setAttribute('id', 'ageIndays');
    h1.appendChild(textanswer);
    document.getElementById('Result').appendChild(h1);
}

function reset() {
    document.getElementById('ageIndays').remove();
}

window.onload = function () {
    const sunMoonContainer = document.querySelector('.sun-moon-container')
    document.querySelector('.theme-btn').addEventListener(
        'click', () => {
            document.body.classList.toggle('dark')
            const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
            sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
        }
    )
}
