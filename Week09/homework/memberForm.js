import { memberManagement } from "./data/members.js";
const { getMembers, findMember } = memberManagement();

//your student id, firstname, and lastname here
function memberForm() {
  const addEventHandler = () => {
    const memberBtn = document.getElementById("member");
    memberBtn.addEventListener("click", memberHandler);
  };



  const memberHandler = () => {
    // const mbDetail = document.getElementById("memberDetail");
    // mbDetail.textContent = ""; //ล้างข้อมูลเก่าที่มีอยู่

    const searchMb = document.getElementById("searchMember"); //เรียกมาจะใส่ข้อมูลเข้าไป
    searchMb.innerText = "";

    const memberId = document.createElement("p"); //create
    memberId.textContent = "Your Member Id:";

    const input = document.createElement("input"); //create
    input.setAttribute("id", "memberId");

    const searchBtn = document.createElement("button"); //create
    searchBtn.textContent = "search";

    searchMb.appendChild(memberId); //add
    searchMb.appendChild(input); //add
    searchMb.appendChild(searchBtn); //add

    searchBtn.addEventListener("click", searchHandler);
  };


  
  const searchHandler = () => {
    const inputId = document.querySelector("input");

    const id = parseInt(inputId.value); //แปลงค่าจาก string เป็น int
    // console.log(id);
    const foundMember = findMember(id); //อ้างอิงจาก members.js
    // console.log(foundMember);

    const divFoundMember = document.getElementById("foundMember"); //** สำคัญต้องกำหนดค่าไว้ เพื่อ appenchild*/

    divFoundMember.textContent = "";   //ล้างทั้งdivหลังใส่ใหม่(สุดท้าย)


    //create tag

    const tagId = document.createElement("p");
    tagId.textContent = `id: ${foundMember.id}`; //ไปรับเอาค่าใน id แล้วทำให้เหมือนในตัวอย่าง
    // console.log(tagId);
    divFoundMember.appendChild(tagId);

    const tagFirstname = document.createElement("p");
    tagFirstname.textContent = `firstname: ${foundMember.firstname}`; //รับค่าอะไรต้อง . ให้ถูก ****
    divFoundMember.appendChild(tagFirstname);

    const tagLastname = document.createElement("p");
    tagLastname.textContent = `lastname: ${foundMember.lastname}`;
    divFoundMember.appendChild(tagLastname);

    const tagEmail = document.createElement("p");
    tagEmail.textContent = `email: ${foundMember.email}`;
    divFoundMember.appendChild(tagEmail);

    const tagAddress = document.createElement("p");
    tagAddress.textContent = `address: ${foundMember.address}`;
    divFoundMember.appendChild(tagAddress);

    inputId.value = ""; //ล้างค่า
  };

  return {
    addEventHandler,
  };
}

const { addEventHandler } = memberForm();
addEventHandler();
