export class Carousel extends HTMLElement {
    imageA: HTMLImageElement = new Image;
    imageB: HTMLImageElement = new Image;

    sources: string[] = [];

    currentSrc: number = 0;

    onImageA: boolean = true;

    constructor(o:{sourceFolder:string,count:number}) {
        super();
        for (let i=0; i<o.count; i++) {
            this.sources.push(o.sourceFolder+'/'+(i+1)+'.png');
        }
    }

    arrWrap(n) {
        return n % this.sources.length;
    }

    connectedCallback() {
        this.imageA.src = this.sources[this.arrWrap(this.currentSrc)];
        this.appendChild(this.imageA);

        for (let img of this.sources) {
            // precache images in carousel
            fetch(img);
            //TODO lazyload
        }

        setInterval(this.nextImage.bind(this), 4500);
    }

    nextImage() {
        this.currentSrc++;
        let next = this.onImageA ? this.imageB : this.imageA;
        let prev = this.onImageA ? this.imageA : this.imageB;
        prev.classList.remove('ani-flyInRight');
        prev.classList.add('ani-flyOutRight');
        // timeout then remove
        setTimeout(() => {
            this.removeChild(prev);
        }, 500);

        next.src = this.sources[this.arrWrap(this.currentSrc)];
        next.classList.add('ani-flyInRight');
        this.appendChild(next);

        this.onImageA = !this.onImageA;
    }
}

customElements.define('jhe-carousel', Carousel);