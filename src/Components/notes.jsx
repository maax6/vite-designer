// // // import React, { useState } from "react";

// // // function MobileMenu() {
// // //   const [menuOpen, setMenuOpen] = useState(false);

// // //   function toggleMenu() {
// // //     setMenuOpen(prevMenuOpen => !prevMenuOpen);
// // //   }

// // //   function closeMenu() {
// // //     setMenuOpen(false);
// // //   }

// // //   return (
// // //     <div>
// // //       <button
// // //         className={`hamburger ${menuOpen ? "active" : ""}`}
// // //         aria-expanded={menuOpen}
// // //         onClick={toggleMenu}
// // //       >
// // //         {/* Hamburger icon */}
// // //       </button>

// // //       <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
// // //         {/* Nav links */}
// // //         <a href="#" className="nav-link" onClick={closeMenu}>
// // //           {/* Link text */}
// // //         </a>
// // //         <a href="#" className="nav-link" onClick={closeMenu}>
// // //           {/* Link text */}
// // //         </a>
// // //         <a href="#" className="nav-link" onClick={closeMenu}>
// // //           {/* Link text */}
// // //         </a>
// // //       </nav>
// // //     </div>
// // //   );
// // // }
// // // Ce composant utilise le hook useState pour stocker l'état de l'ouverture/fermeture du menu, et les fonctions toggleMenu et closeMenu pour gérer les actions de l'utilisateur. La classe "active" est ajoutée ou supprimée en fonction de la valeur de menuOpen pour modifier le style et les classes des éléments du DOM.
// // // export default MobileMenu;
// // setMenuOpen is a function provided by the useState hook in React. It takes a new value as an argument and updates the state of menuOpen to that value.

// // In the code snippet I provided earlier, setMenuOpen is used in the toggleMenu function to toggle the value of menuOpen between true and false whenever the hamburger button is clicked. The menuOpen state is then used to conditionally add or remove the "active" class from the hamburger button and the nav menu.

// // Here's an example of how the CSS could be written to style the hamburger button and nav menu when the "active" class is present:

// // CSS example
// // .hamburger {
// //   /* Hamburger button styles */
// // }

// // .hamburger.active {
// //   /* Hamburger button styles when active */
// // }

// // .nav-menu {
// //   /* Nav menu styles */
// // }

// // .nav-menu.active {
// //   /* Nav menu styles when active */
// // }
// // The exact styles will depend on the design of your application, but you can use the "active" class to define styles that are specific to when the hamburger button or nav menu is open.


// // CODE PEN
// *,
// *::before,
// *::after {
//   box-sizing: border-box;
// }

// body {
//   padding: 0;
//   margin: 0;
// }

// header {
//   background-color: #262626;
// }

// /* need a solution for the next 2 properties */
// li {
//   list-style: none;
// }

// a {
//   color: #fff;
//   text-decoration: none;
// }

// .nav-bar {
//   min-height: 4.375em;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 1.5em;
// }

// .nav-branding {
//   font-size: 2rem;
//   font-weight: 600;
//   transition: color 500ms ease;
// }

// .nav-branding:hover, .nav-branding:focus {
//   color: dodgerblue;
// }

// .nav-menu {
//   position: fixed;
//   left: -100%;
//   top: 3.375em;
//   flex-direction: column;
//   background-color: rgba(38, 38, 38, 0.85);
//   width: 100%;
//   // height: 100%;
//   text-align: center;
//   transition: 750ms;
// }

// .nav-menu.active {
//   left: 0;
// }

// .nav-item {
//   margin: 1em 0;
// }

// .nav-link {
//   transition: 400ms ease;
// }

// .nav-link:hover, .nav-link:focus {
//   color: dodgerblue;

// }

// .hamburger {
//   cursor: pointer;
// }

// .bar {
//   display: block;
//   background-color: #fff;
//   width: 24px;
//   /* The following 2 properties are essential in creating the "X" when the hamburger is clicked. If you change just 1 of the 2, then you need to find the proper combination for the other one */
//   height: 2px;
//   margin: 6px auto;

//   /*    -webkit-transition: all 300ms ease;  */
//   transition: all 300ms ease-in-out;
// }

// .hamburger.active .bar:nth-child(2) {
//   opacity: 0
// }

// .hamburger.active .bar:nth-child(1) {
//   transform: translateY(8px) rotate(45deg);
// }

// .hamburger.active .bar:nth-child(3) {
//   transform: translateY(-8px) rotate(-45deg);
// }

// @media (min-width: 768px) {

//   .nav-menu {
//     position: static;
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     gap: 1em;
//     width: auto;
//   }

//   .hamburger {
//     display: none;
//   }
// }

// .container {
//   width: 80%;
//   margin: 0 auto;
// }
// https://codepen.io/jim-kernicky/details/BarYqxy