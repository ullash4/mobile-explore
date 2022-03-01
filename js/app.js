const getValue=()=>{
    const inputValue = document.getElementById('search-input');
    const value = inputValue.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showPhone(data.data))
    inputValue.value=''; 
}
const showPhone = phones =>{
    // console.log(phones);
    const div = document.getElementById('injected-div');
    div.textContent='';
    phones.slice(0, 20).forEach(phone => {
        // console.log(phone);
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `<div class="card border-0 p-1 shadow-lg p-3 mb-5 bg-body rounded">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.brand}</p>
          <button type="button" onclick="getDetail('${phone.slug}')" class="btn btn-outline-dark">More Details</button>
        </div>
      </div>`;
      div.appendChild(newDiv);
      
    });
    
}

const getDetail = details =>{
    const url2 = `https://openapi.programming-hero.com/api/phone/${details}`;
    fetch(url2)
    .then(res => res.json())
    .then(data => showDetail(data.data))
}
const showDetail = detailShow =>{
    // console.log(detailShow);
    // console.log(detailShow.mainFeatures.sensors);
    const div2 = document.getElementById('injected-div2');
    div2.textContent='';
    
    const newDiv2 = document.createElement('div');
    newDiv2.innerHTML = `
        <div class="card border-0 p-1 shadow-lg p-3 mb-5 bg-body rounded">
            <img src="${detailShow.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${detailShow.name}</h5>
            <p class="card-text fw-bolder">Brand: ${detailShow.brand}</p>
            <p class="card-text fw-bolder">Release Date: ${detailShow.releaseDate ? detailShow.releaseDate:'Not found Release Date'}</p>
            <p class="fw-bolder">Main Feature</p>
            <p class="card-text">Sensors: ${detailShow.mainFeatures.sensors}</p>
            <p class="card-text">Chipset: ${detailShow.mainFeatures.chipSet}</p>
            <p class="card-text">Display Size: ${detailShow.mainFeatures.displaySize}</p>
            <p class="card-text">Storage: ${detailShow.mainFeatures.storage}</p>

            <p class="fw-bolder">Others Feature</p>
            <p class="card-text">Bluetooth: ${detailShow.others ? detailShow.others.Bluetooth:'Not found bluetooth'}</p>
            <p class="card-text">GPS: ${detailShow.others ? detailShow.others.GPS:'gps not found'}</p>
            <p class="card-text">NFC: ${detailShow.others ? detailShow.others.NFC:'nfc not found'}</p>          
            <p class="card-text">Radio: ${detailShow.others ? detailShow.others.Radio:'radio not found'}</p>
            <p class="card-text">USB: ${detailShow.others ? detailShow.others.USB:'usb not found'}</p>           
            <p class="card-text">WLAN: ${detailShow.others ? detailShow.others.WLAN:'wlan not found'}</p>
            </div>
        </div>`;
  div2.appendChild(newDiv2);
}