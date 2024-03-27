function init() {
    const addButton = document.getElementById('addButton')
    addButton.addEventListener('click', showName)
  }
  function showName() {
    const inputName = document.getElementById('yourName')
    //   console.log(inputName.value)
    const divShowName = document.getElementById('showName')
  
    //    <div></div>                                       สร้างดิฟ
    const divElement = document.createElement('div')
    
    // <p>Your input name<p>                                สร้างพี
    const pElement = document.createElement('p')
    pElement.textContent = inputName.value                  //เอาข้อความด้านในออกมาแสดง
  
    //<div> <p>Your input name<p></div>                     จับคู่เข้าหากัน div p แต่ยังไม่เข้าต้นใหญ่
    divElement.appendChild(pElement)
  
    // <div id="showName">
    //    <div><p>Your input name<p></div>
    // </div>
    divShowName.appendChild(divElement)                     //เอาที่สร้างใหม่ divelement คือรวม div,p แล้ว แอดเข้า divshowNameต้นใหญ่
  }
  init()