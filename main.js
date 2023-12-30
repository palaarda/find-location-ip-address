const city = document.getElementById('city');
const country = document.getElementById('country');
const ip = document.getElementById('ipS');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const regioncode = document.getElementById('regioncode');
const regionname = document.getElementById('regionname');
const zipcode = document.getElementById('zipcode');

const resultContainer = document.getElementById('resultContainer');
const mainContainer = document.getElementById('mainContainer');

async function getLoc() {
    const con = await fetch('https://api.collectapi.com/ip/ipToLocation?data.ip=95.8.131.139', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'apikey 0lZtqW8Nql62CDZ4KHOqwr:6U2Jnu8SY7sFLRq9wePzIv'
        }
    });
    const dataJson = await con.json();
    const result = dataJson.result
    console.log(result);
}
getLoc();

function getVal(){
    const getValue = document.getElementById('ipInput').value;
    mainContainer.style.display = 'none';
    resultContainer.style.display = 'flex'
    console.log(getValue);
}
function quitResultCont(){
    mainContainer.style.display = 'flex';
    resultContainer.style.display = 'none'
}
