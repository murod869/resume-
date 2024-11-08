
import { arr } from "./data.js";
import { newArr } from "./data.js";
import { aboutArr } from "./data.js";
const box = document.getElementById("box");

const renderData = () => {
  if (box && Array.isArray(arr)) {
    for (let i of arr) {
      const div = document.createElement("div");
      div.className = "about_me";
      div.innerHTML = `
            <h1 class="name">${i.name}</h1>
            <h1 class="job" >${i.job}</h1>
            <h1 class="title">${i.email}</h1>
            <h1 class="title">${i.phone}</h1>
            <h1 class="title">${i.location}</h1>
            <img src="./images/List.png" alt="">
            `;
      box.appendChild(div);
    }
  } else {
    console.error("Either 'box' element is missing or 'arr' is not an array.");
  }
};

renderData();
const titlee = document.querySelector(".titlee");

titlee.innerHTML = `<div>
<h1>What I do</h1>
</div>`;

document.addEventListener("DOMContentLoaded", function () {
  const skills = document.getElementById("skills");

  if (skills) {
    skills.innerHTML = `
      <div class="skills">
         <div>
          <h1 class="skills_title">Technical Skills</h1>
          <img src="./images/line.png" alt="img">
        </div>
        <div>
         <h1 class="skills_title">Professional Skills</h1>
         <img src="./images/diagramm.png" alt="img">
        </div>
      </div>
    `;
  } else {
    console.error(".skills elementi topilmadi.");
  }
});

const work = document.getElementById("work");

work.innerHTML = `<div class="work_item">
 <div class="work_title">
  <h1 class="work_des">Education</h1>
  <div class="work_main">
   <h2 class="work_hero">Art & Multimedia From  UI/UX Designer </h2>
   <strong class="work_num">2005-2008</strong>
   <p class="work_paragrf">It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum</p>
  </div>
  <div class="work_main">
   <h2 class="work_hero">Art & Multimedia From  UI/UX Designer </h2>
   <strong class="work_num">2005-2008</strong>
   <p class="work_paragrf">It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum</p>
  </div>
  <div class="work_main">
   <h2 class="work_hero">Art & Multimedia From  UI/UX Designer </h2>
   <strong class="work_num">2005-2008</strong>
   <p class="work_paragrf">It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum</p>
  </div>
 </div>

  <div class="work_title">
  <h1 class="work_des">Work Experience</h1>
  <div class="work_main">
   <h2 class="work_hero">Art & Multimedia From  UI/UX Designer </h2>
   <strong class="work_num">2005-2008</strong>
   <p class="work_paragrf">It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum</p>
  </div>
  <div class="work_main">
   <h2 class="work_hero">Art & Multimedia From  UI/UX Designer </h2>
   <strong class="work_num">2005-2008</strong>
   <p class="work_paragrf">It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum</p>
  </div>
  <div class="work_main">
   <h2 class="work_hero">Art & Multimedia From  UI/UX Designer </h2>
   <strong class="work_num">2005-2008</strong>
   <p class="work_paragrf">It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum</p>
  </div>
 </div>
</div>`;

const pricing = document.getElementById("pricing");
pricing.innerHTML = `
<div class="pricing_box">
 <div class="pricing_card">
  <img class="pricing_img" src="./images/icon1.svg" alt="img"> 
  <h1 class="pricing_title">Full-time work</h1>
  <p class="pricing_text">I am available for full time</p>
  <strong class="pricing_price">1500$</strong>
  <span class="pricing_span">Web Development</span>
  <span class="pricing_span">Advetising</span>
  <span class="pricing_span">Game Development</span>
  <span class="pricing_span">Music Writing</span>
  <button class="pricing_btn">Hire Me</button>
 </div>
 <div class="pricing_card">
  <img class="pricing_img" src="./images/icon1.svg" alt="img"> 
  <h1 class="pricing_title">Full-time work</h1>
  <p class="pricing_text">I am available for full time</p>
  <strong class="pricing_price">1500$</strong>
  <span class="pricing_span">Web Development</span>
  <span class="pricing_span">Advetising</span>
  <span class="pricing_span">Game Development</span>
  <span class="pricing_span">Music Writing</span>
  <button class="pricing_btn">Hire Me</button>
 </div>
 <div class="pricing_card">
  <img class="pricing_img" src="./images/icon1.svg" alt="img"> 
  <h1 class="pricing_title">Full-time work</h1>
  <p class="pricing_text">I am available for full time</p>
  <strong class="pricing_price">1500$</strong>
  <span class="pricing_span">Web Development</span>
  <span class="pricing_span">Advetising</span>
  <span class="pricing_span">Game Development</span>
  <span class="pricing_span">Music Writing</span>
  <button class="pricing_btn">Hire Me</button>
 </div>
</div>
`;

const card = document.querySelector(".card");
const newData = () => {
  for (let i of newArr) {
    const div = document.createElement("div");
    div.className = "posts";

    div.innerHTML = `
     <div class="post_cart">
      <img src="${i.img}" alt="img">
     <h1 class="post_title">${i.name}</h1>
     <strong class="post_year">${i.year}</strong>
     <p class="post_text">${i.title}</p>
     <h2 class="post_btn">${i.text}</h2>
     </div>
    
    `;

    card.append(div);
  }
};

newData();

const client = document.querySelector(".client");

const aboutData = () => {
  for(let i of aboutArr){
    const div = document.createElement("div");
    div.className="review";

    div.textContent=i.name
    div.innerHTML = `
    <div class="post_cart">
     <img src="${i.img}" alt="img">
    <h1 class="post_title">${i.name}</h1>
    <h2 class="post_btn">${i.text}</h2>
    <p class="post_text">${i.title}</p>
    </div>
   
   `;
    client.append(div)
  }
};
aboutData();



