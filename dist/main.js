(()=>{"use strict";const e=function(){document.querySelector(".add-task").classList.toggle("active"),document.querySelector(".add-cancel").classList.toggle("active")},t=function(e,t,c,n){this.name=e,this.date=t,this.day=c,this.week=n};let c=[];const n=document.querySelector(".all-task");function a(e){n.innerHTML="",e.forEach((e=>{n.insertAdjacentHTML("afterbegin",`<div class='task'><input class='radio' data-id='${e.name}' type='radio'><p>${e.name}</p><div class='task-date'>${e.date}</div></div>`)})),document.querySelectorAll(".radio").forEach((e=>{e.addEventListener("click",(function(){!function(e){const t=document.querySelector(".all-task "),n=e.dataset.id,l=c.filter((e=>e.name!==n));if(c=l,t.classList.contains("today")){const e=(new Date).getDate();a(c.filter((t=>t.day===e)))}else if(t.classList.contains("week")){const e=o(new Date);a(c.filter((t=>t.week===e)))}else a(c);s()}(this)}))}))}function o(e){let t=new Date(e.getFullYear(),0,1),c=Math.floor((e-t)/864e5);return Math.ceil((c+t.getDay()+1)/7)}function s(){let e;e=c,localStorage.setItem("taskList",JSON.stringify(e))}const l=document.querySelector(".all-task"),i=document.querySelector(".add-task"),d=document.querySelector(".inbox-title"),r=document.querySelector(".add-cancel");function u(e){l.innerHTML="",d.textContent=`${e}`,i.classList.remove("active"),r.classList.remove("active")}const m=document.querySelector(".add-task");m.addEventListener("click",e),document.querySelector(".cancel").addEventListener("click",e),document.querySelector(".add").addEventListener("click",(function(){const n=document.querySelector(".task-title"),l=document.querySelector(".date").value,i=o(new Date(l.replace(/-/g,"/"))),d=new Date(l.replace(/-/g,"/")).getDate();var r;""!==n.value&&l?(r=new t(n.value,l,d,i),c.push(r),a(c),e(),s(),n.value=""):alert("Add task name or date")}));const y=document.querySelector(".inbox-title");document.querySelector(".inbox").addEventListener("click",(function(){a(c),m.classList.add("active"),y.textContent="Inbox"})),document.querySelector(".today").addEventListener("click",(function(){u("Today");const e=(new Date).getDate();a(c.filter((t=>t.day===e)));const t=document.querySelector(".all-task ");t.classList.add("today"),t.classList.remove("week")})),document.querySelector(".week").addEventListener("click",(function(){u("Week");const e=o(new Date);a(c.filter((t=>t.week===e))),l.classList.add("week"),l.classList.remove("today")})),window.onload=function(){!function(){let e=JSON.parse(localStorage.getItem("taskList"));console.log(e),e&&(c=e),e&&a(c)}()},console.log("i")})();