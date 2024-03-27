// document.getElementById("addButton")
// document.addEventListener("addButton")
const addButton = document.getElementById("addButton")
addButton.addEventListener('click',displayName)

function displayName(){

    const addButton = document.getElementById("addButton") //ได้ปุ่ม
    addButton.addEventListener('click',showName) //แอดอีเว้น แล้วจะให้ไปที่ไหนทำต่อ

    console.log('addButton')

}

function showName(){
    const inputName = document.getElementById('yourName')
    console.log(inputName.value)                        //เอาค่าภายในกล่องมาแสดง


    const divShowName = document.getElementById('showName')

    //สร้างดิฟ
const divElement = document.createElement('div')

//สร้างพี
const pElement = document.createElement('p')
pElement.textContent = inputName.value //เอาข้อความด้านในออกมาแสดง

//จับคู่เข้าหากัน div p แต่ยังไม่เข้าต้นใหญ่
divElement.appendChild(pElement)

//เอาที่สร้างใหม่ divelement คือรวม div,p แล้ว แอดเข้า divshowNameต้นใหญ่
divShowName.appendChild(divElement)




}





//สร้างดิฟ
const divElement = document.createElement('div')

//สร้างพี
const pElement = document.createElement('p')
pElement.textContent = inputName.value //เอาข้อความด้านในออกมา

//จับคู่เข้าหากัน div p แต่ยังไม่เข้าต้นใหญ่
divElement.appendChild(pElement)

//เอาที่สร้างใหม่ divelement คือรวม div,p แล้ว แอดเข้า divshowNameต้นใหญ่
divShowName.appendChild(divElement)


// ----------------------------------------------------------------------



