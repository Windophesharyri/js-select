function listCreator(array, value) {
    let Select = document.createElement('select')
    let Option = document.createElement('option')
    
    for (let i = 0; i < array.length; i++) {
        if (optionArray[i].value == value) {
            Option.value = value
            Option.textContent = array[i].label
        }
    }
    Select.append(Option)
    document.body.append(Select)  
}

let optionArray = [
    firstOption = {
        value: "JS",
        label: "Javascript"
    },
    secondOption = {
        value: "C#",
        label: "C sharp"
    },
    thirdOption = {
        value: "J",
        label: "Java"
    }
]
listCreator(optionArray, "JS")