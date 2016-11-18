'use strict'

let services = document.querySelector('.services');

    services.addEventListener('click', function(event) {
        let btn = event.target;
        console.log(btn);
        let action = btn.classList.contains('active-btn');
        let idClass = btn.classList[0];
        console.log(idClass);
        idClass = '.' + idClass;
        let service = services.querySelectorAll(idClass)[1];
        let activeBtn = services.querySelector('.active-btn');
        let activeService = services.querySelector('.show-service');
        if (!action && activeBtn && activeService && btn.classList.contains('services-btn')) {
            activeBtn.classList.remove('active-btn');
            activeService.classList.remove('show-service');
            service.classList.add('show-service');
            btn.classList.add('active-btn');
        } else if (!action && btn === services.querySelector('.services-btn')) {
            service.classList.add('show-service');
            btn.classList.add('active-btn');
        // } else {
        //     service.classList.remove('show-service');
        //     btn.classList.remove('active-btn');
        }
});