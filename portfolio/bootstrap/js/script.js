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
    "certificate":"https://www.linkedin.com/learning/certificates/374bb3f0eee83ff0418e2e48974fc9afbf516aa9b671b5c0645aa797e7d62b3d"
    },
    "css":{
    "scale":9,
    "certificate":"https://www.linkedin.com/learning/certificates/4b74b53b15e105c91682f9756e9b66bf6fe7d214d1e0e7afeff7b1ca7fc5a205"
    },
    "sass":{
        "scale":8.5,
        "certificate":"#"
    },
    "bootstrap":{
        "scale":8,
        "certificate":"https://www.linkedin.com/learning/certificates/8413820233bcd5c3accc3b5d02d5d6097038f3cac31741ffcfd24485ada88194"
    },
    "javascript":{
    "scale":8,
    "certificate":"https://www.linkedin.com/learning/certificates/9ef80c9df18b94a0895d7db13992d354c685ed4b8e97533338a9c9dd8c44c87a"
    },
    "react":{
    "scale":7.5,
    "certificate":"https://www.linkedin.com/learning/certificates/9012a0d66627c79fea66f0f82c01e90f9c9fde54209698d44b8a494327239c96"
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
    "certificate":"https://www.linkedin.com/learning/certificates/9379daba6ba61ad4e6de09a5028a12b0fb1d08bf23adcb6b8d53cd28ddfcf425"
    },
    "expressjs":{
    "scale":7.5,
    "certificate":""
    },
    "mysql":{
    "scale":8,
    "certificate":"https://www.linkedin.com/learning/certificates/ebaee6bcfc41cc134814bfc3bc8dc84083aaa99a4f797d229418fef9ddd09e70"
    },
    "canva":{
        "scale":8.5,
        "certificate":""
    },
    "python":{
        "scale":9,
        "certificate":"https://www.linkedin.com/learning/certificates/352def1019050ed71b83b7c9cd04f8c1aa16a5f2446c02fc8d0b7f67bf022ab3"
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
    <div class=" col-sm-12 col-md-6 col-lg-4 p-1">
        <div class="skill">
            <button onclick="show_details(this)" class="skill-show" style="color: white;"><i class="fa fa-eye" aria-hidden="true"></i></button>
            <img  src="./assert//${skill_name}.png" alt="html">
            <div class="info not-visible">
                <h1>${mySkill[skill_name]["scale"]}/10</h1>
                <a href=${mySkill[skill_name]["certificate"]}><i class="fa fa-certificate" aria-hidden="true" style="margin-right:2px;"></i>view certificate</a>
            </div>
        </div>  
    </div> 
    `
}