import throttle from 'lodash.throttle';

const formEl = document.querySelector(".feedback-form");

const STORAGE_KEY = "feedback-form-state";

let formData = {};

formEl.addEventListener("submit", onFormText);
formEl.addEventListener("input", throttle(e => {
    formData[e.target.name] = e.target.value;
     
    const inputData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_KEY, inputData)
    
    }, 500)
);

function populateText() { 
    const savedText = localStorage.getItem(STORAGE_KEY);

    if (savedText) {
        formData = JSON.parse(savedText);

        for (const key in formData) {
            formEl.elements[key].value = formData[key];
        };
    };
};

populateText();

function onFormText(event) {

    event.preventDefault();

    console.log(localStorage.getItem(STORAGE_KEY));
    event.currentTarget.reset();
    localStorage.clear(STORAGE_KEY);
};







