// sidebar

const menuItems = document.querySelectorAll('.menu-item');
console.log("LÄNGE: " + menuItems.length);

// remove active clss from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').style.display = 'none';

        } else{
            document.querySelector('.notifications-popup').style.boxShadow ='0 0 1rem var(--color-primary)';
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// like Buttons

function like(event) {
    // Find the parent feed element of the clicked heart button
    var feedElement = event.target.closest('.feed');
    if (!feedElement) return; // If there is no parent feed element, do nothing
    
    // Find the heart button within the feed element
    var heartButton = feedElement.querySelector('.button-heart');
    if (!heartButton) return; // If there is no heart button, do nothing
    
    // Change the content of the heart button
    heartButton.style.color = 'red';
}
  

// Event-Handler für alle Heart-Buttons registrieren
var heartButtons = document.querySelectorAll('.button-heart');
heartButtons.forEach(function(button) {
button.addEventListener('click', like);
});


// follow Buttons

function follow(event) {
    // Find the parent feed element of the clicked heart button
    var feedElement = event.target.closest('.feed');
    if (!feedElement) return; // If there is no parent feed element, do nothing
    
    // Find the heart button within the feed element
    var likeButton = feedElement.querySelector('.button-user');
    if (!likeButton) return; 
    
    // Change the content of the follow button
    likeButton.style.color = 'blue';
}
  

// Event-Handler für alle Heart-Buttons registrieren
var heartButtons = document.querySelectorAll('.button-user');
heartButtons.forEach(function(button) {
button.addEventListener('click', follow);
});


// theme customization

const theme = document.getElementById('theme');
const themeMode = document.querySelector('.customize-theme');

const openThemeMode = () => {
    themeMode.style.display = 'grid';
}

theme.addEventListener('click', openThemeMode);
 
const closeThemeMode = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeMode.style.display = 'none';
    }
}

themeMode.addEventListener('click', closeThemeMode);

const fontSizes = document.querySelectorAll('.choose-size span');
const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{    

    size.addEventListener('click', () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');

        }else if (size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }else if (size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }else if (size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }else if (size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        } 
            document.querySelector('html').style.fontSize = fontSize;

    })
    
})

var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');

colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primary;
        changeActiveColorClass();
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//darkmode

const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBackground = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () =>{
    bg1.classList.add('active');
    bg2.classList.remove('active');
    window.location.reload();
})

bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    changeBackground();
})



