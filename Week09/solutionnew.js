function init() {
    const addButton = document.getElementById('addButton')
    addButton.addEventListener('click', showName)
  }
  function showName() {
    const inputName = document.getElementById('yourName')
    //   console.log(inputName.value)
    const divShowName = document.getElementById('showName')


    //    <div></div>
    const divElement = document.createElement('div')      //สร้าง style
    divElement.style = 'display:flex'
  
    //create checkbox and add to div
    const checkboxElement = document.createElement('input') //<input/>                   //สร้างinput
    checkboxElement.setAttribute('type', 'checkbox') //<input type='checkbox'/>          //set attribute ด้านใน 
    divElement.appendChild(checkboxElement)                                              //เอาเข้า div ใหญ่
  
    //add click event to checkbox for removing
    checkboxElement.addEventListener('click', () => {      //ที่สร้างแล้วแอด ของแต่ละอันที่สร้างขึ้น   //callbackfn คือการทำที่ตรงนั้น
      divElement.remove()                                  //กดปุ่มแล้วลบเลย
    })
  
    // create <p>Your input name<p> and add to div
    const pElement = document.createElement('p')
    pElement.textContent = inputName.value
  
    //<div> <p>Your input name<p></div>
    divElement.appendChild(pElement)
    // <div id="showName">
    //    <div><p>Your input name<p></div>
    // </div>
    //   divShowName.textContent = ''
    divShowName.appendChild(divElement)
    inputName.value = ''
  }
  init()