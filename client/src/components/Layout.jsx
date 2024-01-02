import React, { useEffect } from 'react'
import "./Layout.css"

const Layout = ({children}) => {
    useEffect( ()=> {
        const sidebar = document.querySelector(".sidebar");
        const sidebarClose = document.querySelector("#sidebar-close");
        const menu = document.querySelector(".menu-content");
        const menuItems = document.querySelectorAll(".submenu-item");
        const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

        sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

        menuItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            menu.classList.add("submenu-active");
            item.classList.add("show-submenu");
            menuItems.forEach((item2, index2) => {
            if (index !== index2) {
                item2.classList.remove("show-submenu");
            }
            });
        });
    });

        subMenuTitles.forEach((title) => {
        title.addEventListener("click", () => {
            menu.classList.remove("submenu-active");
        });
        });

        console.log(menuItems, subMenuTitles);

    }, [] )
  return (
    <>
     <nav class="sidebar">
      <a href="#" class="logo">Easyheals</a>

      <div class="menu-content">
        <ul class="menu-items">
          <div class="fa-solid fa-house" style={{ color :"white" }}>   H o m e </div>

          <li class="item">
            <a href="#">appointments</a>
          </li>

          <li class="item">
            <div class="submenu-item">
              <span>Symptoms</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Your submenu title
              </div>
              <li class="item">
                <a href="#">First sublink</a>
              </li>
              <li class="item">
                <a href="#">First sublink</a>
              </li>
              <li class="item">
                <a href="#">First sublink</a>
              </li>
            </ul>
          </li>
          <li class="item">
            <div class="submenu-item">
              <span>Specialties</span>
              <i class="fa-solid fa-chevron-right"></i>
            </div>

            <ul class="menu-items submenu">
              <div class="menu-title">
                <i class="fa-solid fa-chevron-left"></i>
                Your submenu title
              </div>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
              <li class="item">
                <a href="#">Second sublink</a>
              </li>
            </ul>
          </li>

          <li class="item">
            <a href="#">Apply as docter</a>
          </li>

          <li class="item">
            <a href="#">Contact Us</a>
          </li>

          <li class="item">
            <a href="#">Profile</a>
          </li>
          <li class="item">
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <nav class="navbar">
      <i class="fa-solid fa-bars" id="sidebar-close">.</i>
      Hi, Omkar
    </nav>

    <main class="main">
      <h1>{children}</h1>
    </main>
    </>
  )
}

export default Layout
