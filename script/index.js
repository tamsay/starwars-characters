// function main(){
// }

// module.exports = {main}

let resultDisplayDiv = document.querySelector('#resultDisplayDiv')
let modalBody = document.querySelector('.modal-body')

let displayResult =(array)=>{
    if(array.detail === 'Not found'){
        resultDisplayDiv.innerText = 'No result found'
    }
    else{
        resultDisplayDiv.innerText = ''

        for(let x = 0; x < array.results.length; x++){
            let imageSrc = `./assets/images/image${x+1}.jpeg`
            createListItem(x, array.results[x].name, array.results[x].gender, array.results[x].height, imageSrc)
        }
    }
}

let displayDetailedInfo = (name, gender, height, image) =>{

    let deviceWidth = document.documentElement.clientWidth;

    let detailsDiv = document.querySelector('#detailsDiv')
        detailsDiv.innerText = '';
        modalBody.innerText = '';

        let detailedInfo = `
        <div id="detailsDiv" class="flex-col"><div class="character-image-div"><img class="character-image" src="${image}"></div><div class="detailed-info-name-div flex-row"><span class="item-tag">Name:</span><span class="name-value-span value-span">${name}</span></div><div class="detailed-info-gender-div flex-row"><span class="item-tag">Gender:</span><span class="gender-value-span value-span">${gender}</span></div><div class="detailed-info-height-div flex-row"><span class="item-tag">Height:</span><span class="height-value-span value-span">${height}</span></div></div> `
    
    if(deviceWidth < 768){
        $('#exampleModal').modal('show');
        modalBody.insertAdjacentHTML('afterbegin', detailedInfo)
    }
    else{
        detailsDiv.insertAdjacentHTML('afterbegin', detailedInfo)
    }
}

let createListItem = (index, characterName, gender, height, image) =>{
    let itemDiv = document.createElement('div')
        itemDiv.classList = 'item-div flex-row'

    let numberSpan = document.createElement('span')
        numberSpan.classList = 'item-number-span'
        numberSpan.innerText = `${index + 1}.`

    let nameSpan = document.createElement('span')
        nameSpan.classList = 'name-span'
        nameSpan.innerText = `${characterName}`

        nameSpan.addEventListener('click', ()=>{
            displayDetailedInfo(characterName, gender, height, image);
        })

        itemDiv.appendChild(numberSpan)
        itemDiv.appendChild(nameSpan)
        resultDisplayDiv.appendChild(itemDiv)
}

    fetch(`https://swapi.dev/api/people/`)
        .then(resp => resp.json())
        .then(data =>{
            displayResult(data)
        })

