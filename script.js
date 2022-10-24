function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });
    console.log(textoArray);
}

const titulo = document.querySelector('.escrever');
typeWriter(titulo)



/*menu-moba*/

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


  /*animações*/

  ScrollReveal({ 
    reset: true,
    duration: 2500,
    delay: 400
  }); 

  ScrollReveal().reveal('.top', {delay: 300, origin:'top', distance: '60px'});
  ScrollReveal().reveal('.sobre .sobre-img', {delay: 500, origin:'top', distance: '60px'});
  ScrollReveal().reveal('.sobre-info', {delay: 400, origin:'bottom', distance: '60px'});
  ScrollReveal().reveal('.sobre-btn', {delay: 500, origin:'top', distance: '60px'});
  ScrollReveal().reveal('.projeto li', {delay: 400, origin:'left', distance: '60px', interval: 200});

  /*modal*/

  const modal = document.querySelector('.modal-container')

  function openModal(){
   modal.classList.add('activeModal')
  }

  function closeModal(){
   modal.classList.remove('activeModal')
  }