function init() {
    const addButton = document.getElementById('addButton')
    addButton.addEventListener('click', showName)
  }
  function showName() {
    const inputName = document.getElementById('yourName')
    //   console.log(inputName.value)
    const divShowName = document.getElementById('showName')
    //    <div></div>
    const divElement = document.createElement('div')
    // <p>Your input name<p>
    const pElement = document.createElement('p')
    pElement.textContent = inputName.value
  
    //<div> <p>Your input name<p></div>
    divElement.appendChild(pElement)
    // <div id="showName">
    //    <div><p>Your input name<p></div>
    // </div>
    divShowName.textContent = ''              //ไม่ต่อผลลัพธ์เดิมด้านล่าง คือ ล้างในดิฟออก เมื่อใส่ข้อมูลเข้าใหม่ //ถ้าไม่ใส่จะไม่ล้างออก ต่อกันเรื่อยๆ
    divShowName.appendChild(divElement)        //เอาเข้าไปต่อเหมือนเดิมเมื่อใส่ข้อมูล**ขึ้นแค่ข้อมุลที่ใส่ // ยังมีข้อมูลที่ใส่ในช่องอยู่
    inputName.value = ''                        //ข้อมุลที่ใส่ในช่องหายไปด้วย
  }
  init()