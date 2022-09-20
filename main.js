// JSON: JAVASCRIPT OBJECT NOTATION
let myleads = []

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEL = document.querySelector("ul")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myleads"))
console.log(leadsFromLocalStorage)



if(leadsFromLocalStorage){
    myleads = leadsFromLocalStorage
    render(myleads)
}
else{
    console.log(false)
}

function render(leads){
    let listItems =""
    for(let i=0; i<leads.length; i++){
    // listItems += "<li>" + "<a target='_blank' href='" + myleads[i] + "'>" + myleads[i] + "</a>" + "</li>"
    listItems += `
        <li>
            <a target='_blank' href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
    }
    ulEL.innerHTML = listItems
}

deleteBtn.addEventListener("click", function(){
    console.log("double clicked")
    localStorage.clear()
    myleads=[]
    render(myleads)
})



inputBtn.addEventListener("click", function(){
    myleads.push(inputEl.value)
    
    render(myleads)
    inputEl.value =""
    
    localStorage.setItem("myleads", JSON.stringify(myleads))

    console.log(localStorage.getItem("myleads"))
})


// fomberteh


// let inputBox = document.getElementById("input-box")
// inputBox.addEventListener("click", function(){
//     console.log("hello how far box")
// })



// myleads.push(inputEl)
    // console.log(myleads)
    // myleads.push(val)
    // console.log(val)