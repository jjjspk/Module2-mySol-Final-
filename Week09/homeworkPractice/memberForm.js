import { memberManagement } from "./data/members.js";
const { getMembers, findMember } = memberManagement();

//your student id, firstname, and lastname here
function memberForm() {
  const addEventHandler = () => {
    const buttonMember = document.getElementById("member");
    buttonMember.addEventListener("click", memberHandler);

    // console.log(buttonMember);
  };
  
  
  const memberHandler = () => {
    const searchMb = document.getElementById("searchMember");
    searchMb.textContent = "";

    //create
    const pElement = document.createElement("p");
    pElement.textContent = "Your Member id:";
    //add
    searchMb.appendChild(pElement);

    //create
    const input = document.createElement("input");
    input.setAttribute = ("id", "memberId");
    //add
    searchMb.appendChild(input);

    //create
    const searchButton = document.createElement("button");
    searchButton.textContent = "search";
    //add
    searchMb.appendChild(searchButton);

    //add event
    searchButton.addEventListener("click", searchHandler);
  };

  const searchHandler = () => {
  

    const inputId = document.querySelector("input");     //ไปรับค่ามา ที่เคยสร้างไป

    const id = parseInt(inputId.value); //แปลงค่าเป็น id เพื่อจะรับค่าได้

    const foundMember = findMember(id);  //*** ดูจากอีกไฟล์*/
    // console.log(foundMember);         //ใส่เลขจะได้ค่าออกมาของตัวนั้น

    const divFoundMember = document.getElementById('foundMember')  //**กำหนดไว้ appenchild */
    divFoundMember.textContent = ''      //ล้างทั้งdivหลังใส่ใหม่(สุดท้าย)

    const tagId = document.createElement("p");
    tagId.textContent = `id: ${foundMember.id}`;
    // console.log(tagId);
    divFoundMember.appendChild(tagId)



    const tagFirstname = document.createElement("p");
    tagFirstname.textContent = `firstname: ${foundMember.firstname}`;
    divFoundMember.appendChild(tagFirstname)


    const tagLastname = document.createElement("p");
    tagLastname.textContent = `lastname: ${foundMember.lastname}`;
    divFoundMember.appendChild(tagLastname)


    const tagEmail = document.createElement("p");
    tagEmail.textContent = `email: ${foundMember.email}`;
    divFoundMember.appendChild(tagEmail)


    const tagAddress = document.createElement("p");
    tagAddress.textContent = `address: ${foundMember.address}`;
    divFoundMember.appendChild(tagAddress)


    inputId.value = ''  //ล้างค่าตัวเลขหลังใส่ใหม่

  };

  return {
    addEventHandler,
  };
}

const { addEventHandler } = memberForm();
addEventHandler();
