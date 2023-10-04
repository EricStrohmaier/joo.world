
export function getCurrentTimeIn24HourFormat() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
  
    // Ensure that hours and minutes always have two digits
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    // Combine the formatted time components
    return `${formattedHours}:${formattedMinutes}`;
  }