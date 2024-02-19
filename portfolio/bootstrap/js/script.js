var typing = new Typed('.autofill', {
    strings:["FullStack Developer","Python Programmer","Web Designer"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});


// opening menu
let open_btn=document.querySelector(".show")
open_btn.addEventListener("click",(e)=>{
    document.querySelector(".nav-opt").classList.toggle("open")
})

// changing menu sign

let menu=document.querySelector(".menu")
menu.addEventListener("click",()=>{
    menu.classList.toggle("fa-bars")
    menu.classList.toggle("fa-close")
})

// displaying skill proficency

function show_details(elem){
    let clicked_skill=elem.parentElement
    clicked_skill.querySelector("img").classList.toggle("not-visible")
    clicked_skill.querySelector(".info").classList.toggle("not-visible")
   
}

// adding skill

let skill_container=document.querySelector(".skill-section")

mySkill={
    "html":{
    "scale":9,
    "certificate":""
    },
    "css":{
    "scale":9,
    "certificate":""
    },
    "sass":{
        "scale":8.5,
        "certificate":"#"
    },
    "bootstrap":{
        "scale":8,
        "certificate":""
    },
    "javascript":{
    "scale":8,
    "certificate":""
    },
    "react":{
    "scale":7.5,
    "certificate":""
    },
    "git":{
    "scale":8,
    "certificate":""
    },
    "github":{
    "scale":8,
    "certificate":""
    },
    "nodejs":{
    "scale":8,
    "certificate":""
    },
    "mysql":{
    "scale":8,
    "certificate":""
    },
    "canva":{
        "scale":8.5,
        "certificate":""
    },
    "python":{
        "scale":9,
        "certificate":""
    },
    "numpy":{
        "scale":6,
        "certificate":""
    },

   
}

for(skill_name in mySkill)
{
    skill_container.innerHTML+=
    `
    <div class="skill col-sm-12 col-md-6 col-lg-4 ">
        <button onclick="show_details(this)" class="skill-show" style="color: white;"><i class="fa fa-eye" aria-hidden="true"></i></button>
        <img  src="./assert/${skill_name}.png" alt="html">
        <div class="info not-visible">
            <h1>${mySkill[skill_name]["scale"]}/10</h1>
            <a href=""><i class="fa fa-certificate" aria-hidden="true" style="margin-right:2px;"></i>view certificate</a>
        </div>
    </div>
    `
}