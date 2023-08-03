
var s = "07:05:45PM";
function timeConversion(s) {
    
    const timeType = s.slice(-2);
    const hours = Number(s.slice(0, 2));
    let time = s.slice(0, -2);
    if (timeType === 'AM') {
        if (hours === 12) { 
            return  time.replace(s.slice(0, 2), '00');
        }
        return time;
    } else if (timeType === 'PM') {
        if (hours !== 12) {
            return time.replace(s.slice(0, 2), String(hours + 12));
        } 
        return time; 
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    
    const result = timeConversion(s);

    ws.write(result + '\n');

}

