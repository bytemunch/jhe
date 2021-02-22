export class ContactPage extends HTMLElement {
    constructor() {
        super();
    }

    applyStyles() {
        this.style.width = "95%";
        this.style.maxWidth = "500px";
        this.style.background = '#fafafa';

        this.style.margin = '5px auto';

        this.style.display = 'block';
        this.style.height = '80%';
        this.style.minHeight = '700px';
        this.style.position = 'relative';
        // this.style.top = 'max(8vw, 80px)';
        this.style.padding = '5px';
        this.style.boxShadow = "0px 0px 5px 0px black"
    }

    connectedCallback() {
        this.applyStyles();

        let headline = document.createElement('h2');
        headline.style.textAlign = 'center';

        headline.textContent = 'Contact us, anytime!';

        this.appendChild(headline);

        let phoneLine = document.createElement('div');
        phoneLine.style.width = '100%';
        phoneLine.style.padding = '0 10%';

        let phoneNumber = document.createElement('p');
        phoneNumber.classList.add('phone-number');

        phoneNumber.textContent = '07474744747';

        phoneLine.appendChild(phoneNumber);

        this.appendChild(phoneLine);

        let phoneIcon = document.createElement('img');

        phoneIcon.classList.add('icon-phone');


        phoneIcon.src = './img/phone.svg';

        phoneLine.appendChild(phoneIcon);



    }
}

customElements.define('jhe-contact', ContactPage);