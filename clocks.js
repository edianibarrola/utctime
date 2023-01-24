let utcClock = document.getElementById('utc-clock');
let timezoneClock = document.getElementById('timezone-clock');
let timezoneSelect = document.getElementById('timezone-select');

let currentTime = new Date();
let currentTimezone = 'EST';

let offset;
let timezoneOffsets = {
    UTC: 0,
    EST: -5,
    CST: -6,
    MST: -7,
    PST: -8
};

//display UTC time

//display timezone time
function displayTimezoneTime() {
    currentTime = new Date();
    offset = timezoneOffsets[currentTimezone];
    let timezoneTime = new Date(currentTime.getTime() + offset * 3600 * 1000);
    timezoneClock.innerHTML = timezoneTime.toLocaleDateString() + ' ' + timezoneTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}) + ' ' + currentTimezone;
    setDateTimezone();
}
function setDateTimezone() {
    const nowTimezone = new Date();
    offset = timezoneOffsets[currentTimezone];
    let timezoneTime = new Date(nowTimezone.getTime() + offset * 3600 * 1000);
    const secondsTimezone = timezoneTime.getSeconds();
    const minutesTimezone = timezoneTime.getMinutes();
    const hoursTimezone = timezoneTime.getHours();
    const secondsDegreesTimezone = ((secondsTimezone / 60) * 360) - 90;
    const minutesDegreesTimezone = ((minutesTimezone / 60) * 360) - 90;
    const hoursDegreesTimezone = ((hoursTimezone / 12) * 360) - 90;
    document.querySelector('.second-hand.timezone').style.transform = `rotate(${secondsDegreesTimezone}deg)`;
    document.querySelector('.minute-hand.timezone').style.transform = `rotate(${minutesDegreesTimezone}deg)`;
    document.querySelector('.hour-hand.timezone').style.transform = `rotate(${hoursDegreesTimezone}deg)`;
}

// Call setDateUTC() and setDateTimezone() every second
setInterval(setDateUTC, 1000);
setInterval(setDateTimezone, 1000);


displayTimezoneTime();
setInterval(displayTimezoneTime, 1000);

function displayUTCTime() {
    currentTime = new Date();
    utcClock.innerHTML = currentTime.toLocaleDateString() + ' ' + currentTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
    setDateUTC();
}

function setDateUTC() {
    const nowUTC = new Date();
    const secondsUTC = nowUTC.getUTCSeconds();
    const minutesUTC = nowUTC.getUTCMinutes();
    const hoursUTC = nowUTC.getUTCHours();
    const secondsDegreesUTC = ((secondsUTC / 60) * 360) - 90;
    const minutesDegreesUTC = ((minutesUTC / 60) * 360) - 90;
    const hoursDegreesUTC = ((hoursUTC / 12) * 360) - 90;
    document.querySelector('.second-hand.utc').style.transform = `rotate(${secondsDegreesUTC}deg)`;
    document.querySelector('.minute-hand.utc').style.transform = `rotate(${minutesDegreesUTC}deg)`;
    document.querySelector('.hour-hand.utc').style.transform = `rotate(${hoursDegreesUTC}deg)`;
}


displayUTCTime();
setInterval(displayUTCTime, 1000);
//listen for timezone change
timezoneSelect.addEventListener('change', function() {
    currentTimezone = timezoneSelect.value;
    displayTimezoneTime();
});
