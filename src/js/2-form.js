`use strict`

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

function readFormData(form) {
    const message = form.message.value.trim();
    const useremail = form.email.value.trim();
    return {
         message,
         useremail
    }
    
}

form.addEventListener("input",(event) => {
// event.preventDefault();
const data = readFormData(event.currentTarget);
const jsonData = JSON.stringify(data);
localStorage.setItem(STORAGE_KEY, jsonData);
})

const rawData = localStorage.getItem(STORAGE_KEY);
if(rawData){
const data = JSON.parse(rawData);
form.email.value = data.useremail;
form.message.value = data.message;
}
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = form.message.value.trim();
    const useremail = form.email.value.trim();
    if (!message || !useremail) {
        alert("Please, fill in all fields of the form.");
        return;
    }

    const data = readFormData(form);
    console.log(data);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
})
