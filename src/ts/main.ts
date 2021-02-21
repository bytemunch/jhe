import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { HomePage } from "./components/HomePage";
import { NavBar } from "./components/NavBar";

console.log('Hello, PWA!');

async function preload() {
    // preload all required assets here
}

let splashClosed = false;

document.addEventListener('DOMContentLoaded', async () => {
    await preload();

    document.addEventListener('click', openHome);
});

//@ts-ignore
window.svgClickHandler = e => {
    openHome();
}

const contentDiv = document.querySelector('#content');

export const openHome = () => {
    if (!splashClosed) {
        splashClosed = true;
        document.removeEventListener('click', openHome);
        document.querySelector('#splash').classList.add('ani-fadeOut');
        setTimeout(() => {
            document.querySelector('#splash').parentElement.removeChild(document.querySelector('#splash'));
        }, 1000);
    }

    if (!document.querySelector('jhe-nav')) contentDiv.appendChild(new NavBar);

    if (!document.querySelector('#page-container')) {
        const pc = document.createElement('div');
        pc.id = 'page-container';
        contentDiv.appendChild(pc);
    }

    document.querySelector('#page-container').innerHTML = '';

    document.querySelector('#page-container').appendChild(new HomePage);
}

export const openAbout = () => {
    document.querySelector('#page-container').innerHTML = '';

    document.querySelector('#page-container').appendChild(new AboutPage);
}

export const openContact = () => {
    document.querySelector('#page-container').innerHTML = '';

    document.querySelector('#page-container').appendChild(new ContactPage);
}