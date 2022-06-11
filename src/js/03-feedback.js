import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input:document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFormInput);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));



function onFormInput(evt) {
    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formData = { email, message };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
};

function fillForm() {
    const savedEmail = (JSON.parse(localStorage.getItem(STORAGE_KEY))).email;
    const savedMessage = (JSON.parse(localStorage.getItem(STORAGE_KEY))).message;
    
    
    if (savedEmail) {
        refs.input.value = savedEmail;
    };
    if (savedMessage) {
        refs.textarea.value = savedMessage;
    };
};

fillForm();

function onFormSubmit(evt) {
    evt.preventDefault();
    const formElements = evt.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;
    const formData = { email, message };
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};
 
//function onFormInput(evt) {
    //const email = evt.currentTarget.value;
   // localStorage.setItem(STORAGE_KEY, email);
//}

function onTextareaInput(evt) {
  };

