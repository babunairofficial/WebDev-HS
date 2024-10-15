/*
 *Create a clock that shows the current machine time and updates every second.
 *show time in the following formats - 
    - HH:MM::SS (Eg. 13:45:23)
    - HH:MM::SS AM/PM (Eg 01:45:23 PM) 
 */

// Function to update the clock
function updateClock() {
    // Get the current date and time
    const now = new Date();
    
    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Format HH:MM:SS (24-hour)
    const time24 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Format HH:MM:SS AM/PM (12-hour)
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const time12 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;

    //display the clock
    console.log("24-hour format: ", time24);
    console.log("12-hour format: ", time12);  
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();