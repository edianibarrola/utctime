let utcClock = document.getElementById('utc-clock');
let timezoneClock = document.getElementById('timezone-clock');
let timezoneSelect = document.getElementById('timezone-select');

let currentTime = new Date();
let currentTimezone = 'EST';

//display UTC time
function displayUTCTime() {
    currentTime = new Date();
    utcClock.innerHTML = currentTime.toUTCString();
}
displayUTCTime();
setInterval(displayUTCTime, 1000);

//display timezone time
function displayTimezoneTime() {
    currentTime = new Date();
    let offset = -5.0; // EST offset from UTC
    let timezoneTime = new Date(currentTime.getTime() + offset * 3600 * 1000);
    timezoneClock.innerHTML = timezoneTime.toLocaleString();
}
displayTimezoneTime();
setInterval(displayTimezoneTime, 1000);

//listen for timezone change
timezoneSelect.addEventListener('change', function() {
    currentTimezone = timezoneSelect.value;
    if (currentTimezone === 'UTC') {
        offset = 0;
    } else if (currentTimezone === 'EST') {
        offset = -5.0;
    } else if (currentTimezone === 'CST') {
        offset = -6.0;
    } else if (currentTimezone === 'MST') {
        offset = -7.0;
    } else if (currentTimezone === 'PST') {
        offset = -8.0;
    }
});
