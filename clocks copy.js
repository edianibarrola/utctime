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
function displayUTCTime() {
    currentTime = new Date();
    utcClock.innerHTML = currentTime.toLocaleDateString() + ' ' + currentTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true});
}
displayUTCTime();
setInterval(displayUTCTime, 1000);

//display timezone time
function displayTimezoneTime() {
    currentTime = new Date();
    offset = timezoneOffsets[currentTimezone];
    let timezoneTime = new Date(currentTime.getTime() + offset * 3600 * 1000);
    timezoneClock.innerHTML = timezoneTime.toLocaleDateString() + ' ' + timezoneTime.toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true}) + ' ' + currentTimezone;
}
displayTimezoneTime();
setInterval(displayTimezoneTime, 1000);

//listen for timezone change
timezoneSelect.addEventListener('change', function() {
    currentTimezone = timezoneSelect.value;
    displayTimezoneTime();
});
