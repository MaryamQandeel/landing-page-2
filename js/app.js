/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables

*/

const fragment = document.createDocumentFragment()

for (x = 4; x <= 5; x++) {
    const newSec = document.createElement('section');
    const newDiv = document.createElement('div');
    const newHtwo = document.createElement('h2')
    const newPar = document.createElement('p');
    newHtwo.textContent = 'section ' + x;
    newPar.textContent = x;
    newPar.setAttribute('id', x)
    newSec.setAttribute("id", "section" + x);
    newSec.setAttribute('data-nav', 'section ' + x);
    newDiv.append(newHtwo, newPar);
    newDiv.classList.add('landing__container');
    newSec.appendChild(newDiv);
    fragment.appendChild(newSec);
    document.querySelector('section').parentElement.appendChild(fragment);
};
document.getElementById('4').textContent = "Lorem ipsum dolor sit ameLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod."



let sections = document.querySelectorAll('section')
const lists = document.getElementById('navbar__list')

for (const sec of sections) {
    sec.addEventListener("mouseover", (event) => {
        // highlight the mouseover target
        event.target.style.color = "aqua";
    });
}
for (const sec of sections) {
    sec.addEventListener("mouseout", (event) => {
        // highlight the mouseover target
        event.target.style.color = "";
    });
}


// build the nav


for (const section of sections) {
    const address = section.getAttribute('data-nav')
    const secId = section.getAttribute('id')
    const listItem = document.createElement('li')
    const a = document.createElement('a')
    a.textContent = address
    a.classList.add('menu__link')
    a.href = `#${secId}`
    listItem.appendChild(a)
    fragment.appendChild(listItem)
    lists.appendChild(fragment)

    // Scroll to anchor ID using scrollTO event

    // Scroll to section on link click
    a.addEventListener('click', func => {
        func.preventDefault()
        section.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
        })
    })
}

// Set sections as active
let options = {
    root: null,
    rootMargin: '0px',
    threshold: .5
};
const observerfunc = (pops) => {
    const nave = document.querySelectorAll('a')
    for (const nav of nave) {
        if (pops[0].isIntersecting) {
            if (nav.textContent === pops[0].target.dataset.nav) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active')
            };
        }
    }
};

const observer = new IntersectionObserver(observerfunc, options)
window.addEventListener('scroll', () => {
    for (const section of sections) {
        observer.observe(section);
    };
})



// Add class 'active' to section when near top of viewport


window.addEventListener('scroll', function() {
    for (let sec of sections) {
        if (300 > sec.getBoundingClientRect().top && sec.getBoundingClientRect().top > -110) {
            sec.classList.add('your-active-class')
        } else {
            sec.classList.remove('your-active-class')
        }
    }
})