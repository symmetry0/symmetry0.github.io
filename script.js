function changePicture() {
    const pictures = document.querySelector(".slideshow");
    const howManyPictures = pictures.childElementCount;

    for (i = howManyPictures; i > 0; i--) {
        const picture = document.querySelector(".picture" + i);
        let x = i + 1;
        picture.classList.toggle("picture" + x);
        picture.classList.toggle("picture" + i);
    }

    const changeLast = pictures.childElementCount + 1;
    const lastPicture = document.querySelector(".picture" + changeLast)
    lastPicture.classList.toggle("picture" + changeLast);
    lastPicture.classList.toggle("picture1");
}

function changeHeroPicture() {
    const pictures = document.querySelector(".hero-pictures");
    const howManyPictures = pictures.childElementCount;
    const howManyDots = pictures.childElementCount;

    const elems = Array.from(pictures.children);
    const ordered = new Array(howManyPictures);
    elems.forEach(el => {
        if (!el.className) return;
        const m = el.className.match(/hero-img(\d+)/);
        if (m) {
            const idx = parseInt(m[1], 10) - 1;
            if (idx >= 0 && idx < howManyPictures) ordered[idx] = el;
        }
    });

    const n = howManyPictures;
    const newOrdered = new Array(n);
    for (let j = 0; j < n; j++) {
        newOrdered[j] = ordered[(j + 1) % n];
    }

    for (let j = 0; j < n; j++) {
        const el = newOrdered[j];
        if (!el) continue;
        el.className = el.className.replace(/\bhero-img\d+\b/, '').trim();
        el.classList.add('hero-img' + (j + 1));
    }

    const pics = pictures.children;
    const dots = dotsForHeroPicture ? dotsForHeroPicture.children : [];
    let activeIndex = -1;
    for (let k = 0; k < pics.length; k++) {
        if (pics[k].classList && pics[k].classList.contains('hero-img1')) {
            activeIndex = k;
            break;
        }
    }
    for (let k = 0; k < dots.length; k++) {
        if (k === activeIndex) dots[k].classList.add('active');
        else dots[k].classList.remove('active');
    }
}

function changeHeroPictureLeft() {
    const pictures = document.querySelector(".hero-pictures");
    const howManyPictures = pictures.childElementCount;
    const howManyDots = pictures.childElementCount;

    const elems = Array.from(pictures.children); /* */
    const ordered = new Array(howManyPictures);
    elems.forEach(el => {
        if (!el.className) return;
        const m = el.className.match(/hero-img(\d+)/);
        if (m) {
            const idx = parseInt(m[1], 10) - 1;
            if (idx >= 0 && idx < howManyPictures) ordered[idx] = el;
        }
    });

    const n = howManyPictures;
    const newOrdered = new Array(n);
    for (let j = 0; j < n; j++) {
        newOrdered[j] = ordered[(j - 1 + n) % n]
    }

    for (let j = 0; j < n; j++) {
        const el = newOrdered[j];
        if (!el) continue;
        el.className = el.className.replace(/\bhero-img\d+\b/, '').trim();
        el.classList.add('hero-img' + (j + 1));
    }

    const pics = pictures.children;
    const dots = dotsForHeroPicture ? dotsForHeroPicture.children : [];
    let activeIndex = -1;
    for (let k = 0; k < pics.length; k++) {
        if (pics[k].classList && pics[k].classList.contains('hero-img1')) {
            activeIndex = k;
            break;
        }
    }
    for (let k = 0; k < dots.length; k++) {
        if (k === activeIndex) dots[k].classList.add('active');
        else dots[k].classList.remove('active');
    }
}

const pictureDiv = document.querySelector(".hero-pictures");
const h1Div = document.querySelector(".h1-picture-text");
const arrowLeft = document.querySelector(".arrow-left");
const arrowright = document.querySelector(".arrow-right");
const dotsForHeroPicture = document.querySelector(".show-picture-row");

if (window.screen.width < 1024) {
    const picture = document.createElement("img");

    picture.src = "img/Banner-1.jpg";
    picture.className = "hero-img";

    pictureDiv.appendChild(picture);
}
else {
    const picture1 = document.createElement("img");
    const picture2 = document.createElement("img");
    const picture3 = document.createElement("img");
    const picture4 = document.createElement("img");

    const h1Text = document.createElement("h1");
    const arrowLeftImg = document.createElement("img");
    const arrowRightImg = document.createElement("img");
    const getH1Text = document.querySelector(".hero-container h1");


    picture1.src = "img/Banner-2.jpg";
    picture1.className = "hero-img1";

    picture2.src = "img/Banner-3.jpg";
    picture2.className = "hero-img2";

    picture3.src = "img/Banner-4.jpg";
    picture3.className = "hero-img3";

    picture4.src = "img/Banner-1.jpg";
    picture4.className = "hero-img4";

    h1Text.textContent = getH1Text.textContent;
    h1Text.className = "hero-picture-text";

    arrowLeftImg.src = "img/caret-down-solid-white.png";
    arrowRightImg.src = "img/caret-down-solid-white.png";


    pictureDiv.appendChild(picture1);
    pictureDiv.appendChild(picture2);
    pictureDiv.appendChild(picture3);
    pictureDiv.appendChild(picture4);

    h1Div.appendChild(h1Text);

    arrowLeft.appendChild(arrowLeftImg);
    arrowright.appendChild(arrowRightImg);

    const numHeroPics = pictureDiv.childElementCount;

    for (let d = 0; d < numHeroPics; d++) {
        const dot = document.createElement('p');

        dot.textContent = '.';
        dot.className = 'dot';

        if (d === 0) dot.classList.add('active');

        dotsForHeroPicture.appendChild(dot);
    }


    arrowRightImg.addEventListener("click", changeHeroPicture);
    arrowLeftImg.addEventListener("click", changeHeroPictureLeft);

    setInterval(() => {
    changeHeroPicture()
    }, 5000)
}

const menu = document.querySelector(".phone-menu");
const ShowMore = document.querySelector(".phone-arrow");

function dropDownMenu() {
    const menuButtonOpen = document.querySelector(".close");
    const menuButtonClose = document.querySelector(".open");
    const showMenu = document.querySelector(".links");

    menuButtonOpen.classList.toggle("open");
    menuButtonClose.classList.toggle("open");
    menuButtonOpen.classList.toggle("close");
    menuButtonClose.classList.toggle("close");

    showMenu.classList.toggle("show");
    showMenu.classList.toggle("hide");
}

function showMoreInfo() {
    const menuInfo = document.querySelector(".the-link-info");

    ShowMore.classList.toggle("hide");
    ShowMore.classList.toggle("show");

    menuInfo.classList.toggle("hide");
}

menu.addEventListener("click", dropDownMenu);
ShowMore.addEventListener("click", showMoreInfo)

setInterval(() => {
    changePicture()
    }, 2000)