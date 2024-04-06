'use strict';


const inputDay = document.querySelector('.day');
const inputYear = document.querySelector('.year');
const inputMonth = document.querySelector('.month');
const btnCalcAge = document.querySelector('.btn');
const errorMonth = document.querySelector('.error');
const errorDay = document.querySelector('.error-day');
const errorYear = document.querySelector('.error-year');

const thisYear = new Date().getFullYear();


const labelYear = document.querySelector('.label-year')
const labelMonth = document.querySelector('.label-month')
const labelDay = document.querySelector('.label-day')


const outputDay = document.querySelector('.output-day')
const outputMonth = document.querySelector('.output-month')
const outputYear = document.querySelector('.output-year')



let age;
btnCalcAge.addEventListener('click', function () {
    // const day = inputDay.value.padStart(2, '0');
    // const month = inputMonth.value.padStart(2, '0');
    // const year = inputYear.value.padStart(2, '0');
    // console.log(`${month}/${day}/${year}`)
    // age = calculateAge(`${month}/${day}/${year}`);
    const now = new Date();
    btnCalcAge.classList.add('black')
    setTimeout(() => btnCalcAge.classList.remove('black'), 100)
    const birthDay = new Date(`${inputMonth.value.padStart(2, '0')}/${inputDay.value.padStart(2, '0')}/${inputYear.value}`)
    const diffmilli = Date.now() - birthDay;
    const diffageDate = new Date(diffmilli);
    const years = diffageDate.getUTCFullYear() - 1970;
    const days = diffageDate.getDay();
    const months = diffageDate.getUTCMonth();
    outputDay.textContent = days;
    outputMonth.textContent = months
    outputYear.textContent = years





})

let isvalid = false;



inputMonth.addEventListener('input', function (e) {
    if (+inputMonth.value > 12) {
        // console.log('fff')
        // inputMonth.textContent = " most be a valid month";
        errorMonth.textContent = 'must be a valid month'
        inputMonth.style.border = '1px solid red'
        labelMonth.style.color = 'red'
        isvalid = false

    }
    if (+inputMonth.value < 12) {
        labelMonth.style.color = 'black'
        inputMonth.style.border = '1px solid black'
        errorMonth.textContent = ''
        isvalid = true
    }
})



inputDay.addEventListener('input', function (e) {
    if (+inputDay.value > 31) {
        inputDay.style.border = '1px solid red'
        labelDay.style.color = 'red'
        errorDay.textContent = 'must be a valid day'
        isvalid = false
    }
    if (+inputDay.value < 31) {
        inputDay.style.border = '1px solid black'
        labelDay.style.color = 'black'
        errorDay.textContent = ''
        isvalid = true
    }
})




inputYear.addEventListener('input', function (e) {
    if (+inputYear.value > thisYear) {
        errorYear.textContent = 'must be a valid year'
        inputYear.style.border = '1px solid red'
        labelYear.style.color = 'red'
        isvalid = false

    }
    if (+inputYear.value < thisYear) {
        inputMonth.style.border = '1px solid black'
        labelMonth.style.color = 'black'
        errorYear.textContent = ''
        isvalid = true
    }
})


let birthDay = new Date('02/24/2002').getTime();
let now = new Date().getTime();
console.log((now - birthDay))

const ageCalculator = function (birthDay, todaysDate = new Date()) {



}