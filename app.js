let container = document.getElementsByClassName("container")[0]

async function getData() {
    let res = await fetch("https://api.spacexdata.com/v3/capsules/upcoming")
    let data = await res.json()
    renderContent(data)
}

getData()

function renderContent(placeholderForData) {
    console.log(placeholderForData)
    for (i of placeholderForData) {
        console.log(i)
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        // h2 will hold capsule_serial & capsule_id
        h2.textContent = `${i.capsule_serial} - ${i.capsule_id}`
        let p = document.createElement("p")
        // p will hold details
        p.textContent = i.details
        div.appendChild(h2)
        div.appendChild(p)
        container.appendChild(div)
    }
}
