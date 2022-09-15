// 18:00 => ["18", "00"] => [18, 00]

function convertHourStringToMinutes(hourString: string) {
    const [hour, minutes] = hourString.split(':').map(Number)

    const minutosAmount = (hour * 60) + minutes;

    return minutosAmount;
}