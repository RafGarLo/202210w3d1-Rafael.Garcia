"use strict";
const main = (ev) => {
    ev.preventDefault();
    const eInput = document.querySelector('[name="user-name"]');
    const value = eInput.value;
    const eOutput = document.querySelector('output');
    eOutput.value = `Hola ${value}`;
    const data = { bioName: '' };
    data.bioName = value;
    const template = `
        <article>
            <h3>La vida de ${data.bioName}</h3>
            <p>Lorem ipsum, dolor sit amet consectetur ${data.bioName} adipisicing elit. 
            Quam officiis cum amet aperiam assumenda animi eaque exercitationem 
            vitae eius nihil, molestiae, et optio? Quos odit 
            repudiandae error atque quae dolorum.</p>
        </article>
    `;
    const eSlot = document.querySelector('slot');
    eSlot.outerHTML = template;
    const handleSubmit = (ev) => {
        ev.preventDefault();
        //const eInput = document.querySelector('[name="user-name"]'); //atento a como ha puesto el nombre entre corchetes. podrias haber usado el id como en pasapalabra sin problema.
        //const value = (eInput as HTMLInputElement).value;
        //con esta linea que tengo encima, acabo de hacerle casting a typescript. Le estoy garantizando que este input va a tener un value.
        //const eOutput = document.querySelector('output');
        //(eOutput as HTMLOutputElement).value = `Hola ${value}`;
        const eSlot = document.querySelector('slot');
        eSlot.outerHTML = template;
    };
    const eUserForm = document.querySelector('.user-form');
    eUserForm === null || eUserForm === void 0 ? void 0 : eUserForm.addEventListener('submit', handleSubmit);
};
document.addEventListener('DOMContentLoaded', main);
