let menuBtn =document.getElementById("icon");
let menu = document.getElementById("menu");
// observer for animation
const observer =new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("Animate")
        }else{
            entry.target.classList.remove("Animate")
        }      
    })
})
menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("opacity-0")
    menu.classList.toggle("transform-[scaleY(0)]")
})
const allSections =document.querySelectorAll(".anime")
 allSections.forEach((el) => {
    el.style.overflow='hidden'
    observer.observe(el)
 })
