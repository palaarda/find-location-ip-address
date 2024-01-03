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

const ipInput = document.getElementById('ipInput');

function getVal(){    
    const ipInputValue = ipInput.value;
    getLoc(ipInputValue);
    mainContainer.style.display = 'none';
    resultContainer.style.display = 'flex'
    console.log(ipInputValue);
}

async function getLoc(ipVal) {
    const con = await fetch(`https://api.collectapi.com/ip/ipToLocation?data.ip=${ipVal}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'apikey 0lZtqW8Nql62CDZ4KHOqwr:6U2Jnu8SY7sFLRq9wePzIv'
        }
    });
    const dataJson = await con.json();
    const result = dataJson.result
    console.log(result);
    city.innerHTML = result.city;
    country.innerHTML = result.country_name;
    ip.innerHTML = result.ip;
    latitude.innerHTML = result.latitude;
    longitude.innerHTML = result.longitude;
    regioncode.innerHTML = result.regioncode;
    regionname.innerHTML = result.regionname;
    zipcode.innerHTML = result.zipcode;
}



function quitResultCont(){
    mainContainer.style.display = 'flex';
    resultContainer.style.display = 'none'
}
