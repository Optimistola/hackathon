const alertBell = document.querySelector('.alert-bell');
const showNotification = document.querySelector('.show-notification');
const container = document.querySelector('.container');
const DC = document.querySelector('.dc-header');
const plan = document.querySelector('.plans');
const canclePlan = document.querySelector('.cancle-plan');
const DropDownIcon = document.querySelector('.drop-down-icon');
const setUpContainer = document.querySelector('.set-up-guide-container');
const section = document.querySelector('.section');

//show notification content
alertBell.addEventListener('click', ()=>{
    showNotification.classList.toggle('show');
    container.classList.remove('show');//remove DC list menu if initially active to prevent page clumunes
})
DC.addEventListener('click', ()=>{
    container.classList.toggle('show');
    showNotification.classList.remove('show');//remove page notification if initially active to prevent page clumunes
});
canclePlan.addEventListener('click', ()=>{
    plan.style.display='none';// cancle the plan
})
DropDownIcon.addEventListener('click', ()=>{
    section.classList.toggle('hide')// cancle the plan
})