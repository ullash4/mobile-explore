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
    const div = document.getElementById('injected-div');
    phones.forEach(phone => {
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
    console.log(detailShow);
    console.log(detailShow.brand);
    console.log(detailShow.name);
    const div2 = document.getElementById('injected-div2');
    
    const newDiv2 = document.createElement('div');
    newDiv2.innerHTML = `
        <div class="card border-0 p-1 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
            <img src="${detailShow.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${detailShow.name}</h5>
            <p class="card-text">${detailShow.brand}</p>
            </div>
        </div>`;
  div2.appendChild(newDiv2);
}