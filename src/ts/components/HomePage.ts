import { Carousel } from "./Carousel";

export class HomePage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.classList.add('page');

        let carousel = new Carousel({sourceFolder: './img/homeCarousel', count: 3});
        this.appendChild(carousel);
        
        let txtDiv = document.createElement('div');

        txtDiv.classList.add('page-text');

        let headline = document.createElement('h2');

        headline.classList.add('page-headline');

        headline.textContent = 'Headline that sounds c-o-o-l...';

        txtDiv.appendChild(headline);


        let flavourText = document.createElement('p');
        flavourText.classList.add('flavour-text');

        flavourText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

        txtDiv.appendChild(flavourText);

        this.appendChild(txtDiv);
    }
}

customElements.define('jhe-home', HomePage);