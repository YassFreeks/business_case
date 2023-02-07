/* selectionne le premier élément avec la classe "nav__items" dans document, et l'attribue à la variable "NavItems" */
const navItems = document.querySelector('.nav__items')

/* sélectionne le premier élément avec l'id "open__nav-btn" dans le document, et l'attribue à la variable openNavBtn. */
const openNavBtn = document.querySelector('#open__nav-btn')

/* sélectionne le premier élément avec l'id "close__nav-btn" dans le document, et l'attribue à la variable closeNavBtn. */
const closeNavBtn = document.querySelector('#close__nav-btn')

/* Pour résumer les 1ere trois lignes. Les 3 utilises la méthode "querySelector" pour selectionner des éléments ayant une classe "nav__items" ensuite l'ID "open__nav-btn" et l'ID "close__nav-btn" */

/* Le bloc si-dessous définis une fonction "openNav". Lorsque cette fonction est appelée, elle définit la propriété "display" de "navItems" à "flex, ce qui acctionne l'affichage de l'élément en question. Ensuite la propriété "display" de "openNavBtn" va etre définit sur "none" ce qui va cacher l'élément en question, c'est à dire l'icone menu burger, par contre dans "closeNavBtn" on va définir un "inline-block" du coup l'icone croix va être afficher.  " */

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = "inline-block";
}

/* Ici la fonction "closeNav" va faire l'inverse, qaund j'appuis sur l'icone crois, la liste va disparetre avec la croix et l'icone menu burger va etre afficher */

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = "none";
}

/* Le deux lignes ci-dessous utilisent la méthode "addEventListenner" pour attacher un événement click aux éléments openNavBtn et closeNavBtn respectivement. Lorsque le bouton openNavBtn est cliqué, la fonction openNav sera appelée, et lorsque le bouton closeNavBtn est cliqué, la fonction closeNav sera appelée. */

openNavBtn.addEventListener('click', openNav)
closeNavBtn.addEventListener('click', closeNav)


const sidebar = document.querySelector('aside');
const showSidebarBtn = document.querySelector('#show__sidebar-btn');
const hideSidebarBtn = document.querySelector('#hide__sidebar-btn');

const showSidebar = () => {
    sidebar.style.left = '0';
    showSidebarBtn.style.display = 'none';
    hideSidebarBtn.style.display = 'inline-block';
}

showSidebarBtn.addEventListener('click', showSidebar)



