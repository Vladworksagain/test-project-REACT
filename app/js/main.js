

let selector = document.querySelectorAll('input[type="tel"]');

let im = new Inputmask('+38 (999) 999 99 99', { "clearIncomplete": true });

im.mask(selector);

// validat //

let validateForms = function (selector, rules, successModal) {
    new window.JustValidate(selector, {
        rules: rules,
        messages: {
            name: {
                required: 'Заполните это поле',
                minLength: 'Введите не менее 6 символов'
            },
            tel: {
                required: 'Заполните это поле'
            }
        },
        colorWrong: 'red',
        submitHandler: function (form) {}
    });
}
    validateForms('.form', {
        tel: {
            required: true
        },
        name: {
            required: true,
            minLength: 6
        },
    })

let secondValidationForm = function (selector, rules, successModal) {
    new window.JustValidate(selector, {
        rules: rules,
        messages: {
            name: {
                required: 'Заполните это поле',
                minLength: 'Введите не менее 6 символов'
            },
            tel: {
                required: 'Заполните это поле'
            }
        },
        colorWrong: 'red',
        submitHandler: function (forms) {
        }
    });
}
    secondValidationForm('.second-form', {
        tel: {
            required: true
        },
        name: {
            required: true,
            minLength: 6
        },
    })

// const myScroll = new LocomotiveScroll({
//     el: document,
//     name: 'scroll',
//     offset: [0, 0],
//     repeat: false,
//     smooth: false, // smooth scroll
//     direction: 'vertical', // or horizontal
//     lerp: 1, // inertia
//     class: 'is-inview',
//     initClass: 'has-scroll-init',
//     scrollbarClass: 'c-scrollbar',
//     scrollingClass: 'has-scroll-scrolling',
//     draggingClass: 'has-scroll-dragging',
//     smoothClass: 'has-scroll-smooth',
//     scrollbarContainer: false,
//     getSpeed: false,
//     getDirection: false,
//     multiplier: 1,
//     firefoxMultiplier: 50,
//     touchMultiplier: 2,
//     scrollFromAnywhere: false,
//     gestureDirection: 'vertical', // or horizontal, both
//     reloadOnContextChange: false,
//     resetNativeScroll: true
// });
//
// myScroll.init();


const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


