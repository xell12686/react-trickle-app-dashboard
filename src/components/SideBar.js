import React, { useState } from "react";
import styled from "styled-components";
import { Type1, Type3, Type4, Type5 } from "./Typography";
import TwoStatesInteractiveIcon from "./TwoStatesInteractiveIcon";
import img from "../gif-img.png";
import content from "./content";

import MenuIcon from "@material-ui/icons/AddOutlined";
import DashboardIcon from "@material-ui/icons/DashboardOutlined";

const StyledSideBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #2b3034;
  height: 100%;
  width: 398px;
  box-sizing: border-box;
  padding: 8px 0;

  .sidebar__tab {
    width: 56px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .sidebar__items {
    padding: 8px;
  }

  .sidebar__item {
    button,
    a {
      display: inline-block;
      background-color: transparent;
      border: none;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      box-sizing: border-box;
      padding: 8px;
      cursor: pointer;
      transition: background-color 0.15s ${({ content }) => content.ease};
    }

    button:focus {
      outline: none;
    }

    span {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      box-sizing: content-box;
      transition: transform 0.15s ${({ content }) => content.ease};
    }

    svg {
      position: relative;
      width: 100%;
      height: 100%;
    }

    path {
      fill: #535a60;
      transition: fill 0.15s ${({ content }) => content.ease};
    }

    &:hover {
      button,
      a {
        background-color: #212529;
      }

      path {
        fill: #fff;
      }
    }

    &:active {
      span {
        /* transform: scale(0.875); */
        transform: scale3D(0.875, 0.875, 1);
      }
    }

    .active-page path {
      fill: #fff;
    }

    .pulse {
      position: relative;

      ::before,
      ::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        z-index: -1;
      }

      ::before {
        /* background: ${({ content }) => content.colors.blueA["1000"]}; */
        background: #fff;
        animation: pulse 2s ${({ content }) => content.ease} infinite;
      }

      ::after {
        background: #2b3034;
        transform: scale(0.875);
        /* box-shadow: 0 0 4px 2px #2b3034; */
      }

      @keyframes pulse {
        0% {
          opacity: 0.1;
          transform: scale(0.875);
        }
        50% {
          opacity: 0.75;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(1.125);
        }
      }

      &:hover::before,
      &:active::before {
        content: none;
      }
    }
  }

  .drawer {
    position: absolute;
    top: 0;
    left: 56px;
    width: 320px;
    height: 100%;
    box-sizing: border-box;
    color: #fff;
  }

  .drawer__header {
    position: relative;
    height: 88px;
    padding: 0 24px 0 16px;
  }

  .drawer__header__box {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    div p:first-child {
      margin-bottom: 4px;
    }
  }

  .drawer__close {
    margin-right: -8px;
    background-color: transparent;
    transition: background-color 0.15s ${({ ease }) => ease};
    border-radius: 8px;
    width: 32px;
    height: 32px;

    span {
      display: inline-block;
      transition: transform 0.15s ${({ ease }) => ease};
    }

    path {
      transition: fill 0.15s ${({ ease }) => ease};
    }

    &:hover {
      background-color: #212529;

      path {
        fill: #fff;
      }
    }

    &:active span {
      transform: scale(0.875);
    }
  }

  .drawer__body {
    position: relative;
    height: calc(100% - 88px);
    padding: 0 24px 0 16px;
    overflow-y: auto;
  }

  .drawer__card {
    width: 100%;
    padding: 24px 0 24px 8px;
    box-sizing: border-box;

    header {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      svg {
        margin: 0 8px 0 -4px;
      }
    }

    .link {
      color: #fff;
    }
  }

  .drawer__header__box,
  .drawer__card:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .drawer__image {
    width: 100%;
    border-radius: 4px;
  }
`;

const SideBar = ({ openDrawer, toggleDrawer }) => {
  const [activePage, updateActivePage] = useState([
    false,
    true,
    false,
    false,
    false,
    false,
    false
  ]);

  return (
    <StyledSideBar className="sidebar" content={content}>
      <div className="sidebar__tab">
        <ul className="sidebar__items">
          <li className="sidebar__item">
            <MenuIcon />
          </li>
          <li className="sidebar__item">
            <DashboardIcon />
          </li>
        </ul>
        <ul className="sidebar__items border-top">
          <li className="sidebar__item" onClick={toggleDrawer}>
            <TwoStatesInteractiveIcon
              states={[
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 5C6 5.552 5.552 6 5 6C4.448 6 4 5.552 4 5C4 3.346 5.346 2 7 2H19C19.553 2 20 2.448 20 3C20 3.552 19.553 4 19 4C18.448 4 18 4.449 18 5C18 5.552 17.553 6 17 6C16.447 6 16 5.552 16 5C16 4.648 16.072 4.314 16.184 4H7C6.449 4 6 4.449 6 5ZM5 7H18C19.103 7 20 7.897 20 9V19C20 20.654 18.654 22 17 22H7C5.346 22 4 20.654 4 19V8C4 7.448 4.448 7 5 7ZM17 20C17.552 20 18 19.552 18 19V9H6V19C6 19.552 6.449 20 7 20H17ZM11.293 12.292C11.482 12.104 11.733 12 12 12C12.551 12 13 12.449 13 13C13 13.268 12.896 13.519 12.706 13.708C12.518 13.896 12.268 14 12 14C11.448 14 11 14.447 11 15C11 15.553 11.448 16 12 16C12.803 16 13.557 15.688 14.12 15.122C14.688 14.557 15 13.803 15 13C15 11.346 13.654 10 12 10C11.198 10 10.445 10.312 9.87801 10.879C9.48801 11.27 9.48801 11.903 9.87901 12.293C10.271 12.683 10.903 12.683 11.293 12.292ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18Z"
                    fill="#535a60"
                  />
                </svg>,
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.152 6.012L12.914 5.052C12.312 4.959 12.099 5.82 12.675 6.019L18 7.858V18.93L16 18.793V9.5C16 9.076 15.732 8.698 15.333 8.557L7.278 5.253C6.618 4.983 6.811 4 7.525 4H19C19.553 4 20 3.552 20 3C20 2.448 19.553 2 19 2H6.5C5.119 2 4 3.119 4 4.5V15C4 17.875 4.718 19.213 6.649 19.937L14.649 22.937C14.763 22.979 14.882 23 15 23C15.201 23 15.4 22.939 15.569 22.822C15.839 22.635 16 22.328 16 22V20.798L18.932 20.998C18.955 20.999 18.978 21 19 21C19.253 21 19.497 20.904 19.683 20.73C19.885 20.542 20 20.277 20 20V7C20 6.506 19.64 6.087 19.152 6.012ZM9.414 18C8.862 18 8.414 17.552 8.414 17C8.414 16.448 8.862 16 9.414 16C9.966 16 10.414 16.448 10.414 17C10.414 17.552 9.966 18 9.414 18ZM11.534 14.622C10.969 15.187 10.216 15.5 9.414 15.5C8.862 15.5 8.414 15.053 8.414 14.5C8.414 13.947 8.862 13.5 9.414 13.5C9.681 13.5 9.932 13.396 10.121 13.207C10.311 13.019 10.414 12.768 10.414 12.5C10.414 12.233 10.31 11.982 10.122 11.793C9.743 11.414 9.085 11.415 8.708 11.792C8.317 12.183 7.685 12.183 7.294 11.793C6.903 11.403 6.903 10.77 7.293 10.379C8.426 9.245 10.403 9.245 11.536 10.379C12.102 10.944 12.414 11.698 12.414 12.5C12.414 13.303 12.102 14.057 11.534 14.622Z"
                    fill="black"
                  />
                </svg>
              ]}
              toggle={!openDrawer}
              className="pulse"
            />
          </li>
          <li className="sidebar__item">
            <TwoStatesInteractiveIcon
              states={[
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.51191 6.465C4.24291 6.948 3.63391 7.121 3.15191 6.851C2.66991 6.582 2.49691 5.974 2.76691 5.491C3.98691 3.305 6.48491 2 9.44891 2H15.2999C17.7959 2 20.1419 3.386 21.2759 5.531C21.5349 6.02 21.3479 6.625 20.8599 6.883C20.7099 6.962 20.5499 6.999 20.3929 6.999C20.0329 6.999 19.6869 6.805 19.5079 6.466C18.7159 4.968 17.0649 4 15.2999 4H9.44891C7.21991 4 5.37491 4.922 4.51191 6.465ZM21.9449 11.645C21.5319 8.427 18.6759 6 15.2999 6H9.44889C5.40989 6 2.35889 8.411 2.02989 11.865C1.85589 13.695 2.45989 15.52 3.68889 16.872C4.91889 18.224 6.67289 19 8.49989 19H10.9999V19.585C10.9999 20.397 11.4849 21.123 12.2349 21.434C12.4839 21.537 12.7439 21.587 13.0019 21.587C13.5219 21.587 14.0299 21.384 14.4139 21L16.4909 18.922C18.0899 18.675 19.5639 17.825 20.5809 16.553C21.6879 15.167 22.1729 13.424 21.9449 11.645ZM19.0189 15.305C18.2609 16.253 17.1359 16.864 15.9319 16.978C15.7009 16.999 15.4839 17.102 15.3199 17.266L12.9999 19.585V18C12.9999 17.447 12.5519 17 11.9999 17H8.49989C7.23489 17 6.02089 16.463 5.16889 15.525C4.30589 14.576 3.89789 13.343 4.02089 12.054C4.24889 9.667 6.48089 8 9.44889 8H15.2999C17.6729 8 19.6769 9.676 19.9609 11.899C20.1199 13.136 19.7849 14.346 19.0189 15.305ZM8.99988 13.5C9.55216 13.5 9.99988 13.0523 9.99988 12.5C9.99988 11.9477 9.55216 11.5 8.99988 11.5C8.44759 11.5 7.99988 11.9477 7.99988 12.5C7.99988 13.0523 8.44759 13.5 8.99988 13.5ZM12.9999 12.5C12.9999 13.0523 12.5522 13.5 11.9999 13.5C11.4476 13.5 10.9999 13.0523 10.9999 12.5C10.9999 11.9477 11.4476 11.5 11.9999 11.5C12.5522 11.5 12.9999 11.9477 12.9999 12.5ZM14.9999 13.5C15.5522 13.5 15.9999 13.0523 15.9999 12.5C15.9999 11.9477 15.5522 11.5 14.9999 11.5C14.4476 11.5 13.9999 11.9477 13.9999 12.5C13.9999 13.0523 14.4476 13.5 14.9999 13.5Z"
                    fill="#535a60"
                  />
                </svg>,
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.945 11.645C21.532 8.427 18.675 6 15.298 6H9.449C5.41 6 2.359 8.412 2.03 11.864C1.856 13.694 2.46 15.519 3.689 16.871C4.919 18.225 6.673 19 8.5 19H11V20.793C11 21.402 11.364 21.946 11.927 22.179C12.114 22.257 12.309 22.294 12.502 22.294C12.892 22.294 13.274 22.142 13.561 21.854L13.835 21.58C15.02 20.395 16.487 19.358 18.595 18.217C20.977 16.925 22.291 14.346 21.945 11.645ZM9 13.5C8.448 13.5 8 13.052 8 12.5C8 11.948 8.448 11.5 9 11.5C9.552 11.5 10 11.948 10 12.5C10 13.052 9.552 13.5 9 13.5ZM12 13.5C11.448 13.5 11 13.052 11 12.5C11 11.948 11.448 11.5 12 11.5C12.552 11.5 13 11.948 13 12.5C13 13.052 12.552 13.5 12 13.5ZM15 13.5C14.448 13.5 14 13.052 14 12.5C14 11.948 14.448 11.5 15 11.5C15.552 11.5 16 11.948 16 12.5C16 13.052 15.552 13.5 15 13.5Z"
                    fill="black"
                  />
                  <path
                    d="M3.152 6.851C3.634 7.121 4.243 6.948 4.512 6.465C5.375 4.922 7.22 4 9.449 4H15.3C17.065 4 18.716 4.968 19.508 6.466C19.687 6.805 20.033 6.999 20.393 6.999C20.55 6.999 20.71 6.962 20.86 6.883C21.348 6.625 21.535 6.02 21.276 5.531C20.142 3.386 17.796 2 15.3 2H9.449C6.485 2 3.987 3.305 2.767 5.491C2.497 5.974 2.67 6.582 3.152 6.851Z"
                    fill="black"
                  />
                </svg>
              ]}
              toggle={!activePage[6]}
              className={activePage[6] ? "active-page" : ""}
              onClick={() =>
                updateActivePage([
                  false,
                  false,
                  false,
                  false,
                  false,
                  false,
                  true
                ])
              }
            />
          </li>
        </ul>
      </div>
      <div className="drawer">
        <header className="drawer__header">
          <div className="drawer__header__box">
            <div>
              <Type5>Learning center</Type5>
              <Type1>Company</Type1>
            </div>
            <button className="drawer__close" onClick={toggleDrawer}>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.2963 9.41061C11.101 9.21534 10.7844 9.21534 10.5892 9.41061L9.41066 10.5891C9.2154 10.7844 9.2154 11.101 9.41066 11.2962L13.7711 15.6567L9.41061 20.0172C9.21534 20.2125 9.21534 20.5291 9.41061 20.7243L10.5891 21.9028C10.7844 22.0981 11.101 22.0981 11.2962 21.9028L15.6567 17.5423L20.0173 21.9028C20.2125 22.0981 20.5291 22.0981 20.7244 21.9028L21.9029 20.7243C22.0981 20.5291 22.0981 20.2125 21.9029 20.0172L17.5424 15.6567L21.9028 11.2962C22.0981 11.101 22.0981 10.7844 21.9028 10.5891L20.7243 9.41061C20.5291 9.21534 20.2125 9.21534 20.0172 9.41061L15.6567 13.7711L11.2963 9.41061Z"
                    fill="white"
                  />
                </svg>
              </span>
            </button>
          </div>
        </header>
        <section className="drawer__body">
          <article className="drawer__card">
            <header>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1212 24.6201C15.2522 24.6997 15.344 24.7606 15.3922 24.7946C15.4142 24.8113 15.4368 24.827 15.46 24.8418C15.6311 24.9525 15.8177 25.0025 16 25.0018C16.1823 25.0025 16.3689 24.9525 16.54 24.8418C16.5632 24.827 16.5858 24.8113 16.6078 24.7946C16.656 24.7606 16.7478 24.6997 16.8788 24.6201C17.135 24.4643 17.4285 24.3073 17.7523 24.1606C18.6451 23.7561 19.5829 23.511 20.4879 23.4999C21.4063 23.511 22.3425 23.7562 23.2396 24.1612C23.5655 24.3083 23.8617 24.4657 24.1209 24.622C24.2708 24.7124 24.3706 24.7789 24.4134 24.8099C25.0746 25.2888 26 24.8164 26 24V10C26 9.78691 25.9319 9.5794 25.8057 9.40771C25.5579 9.07058 25.1077 8.61471 24.4428 8.16923C23.3521 7.43845 22.0334 7 20.5 7C18.8801 7 17.5115 7.6826 16.405 8.79465C16.2589 8.94148 16.124 9.08827 16 9.23289C15.876 9.08827 15.7411 8.94148 15.595 8.79465C14.4885 7.6826 13.1199 7 11.5 7C9.96655 7 8.64795 7.43845 7.55722 8.16923C6.89232 8.61471 6.4421 9.07058 6.19428 9.40771C6.06807 9.5794 6 9.78691 6 10V24C6 24.8164 6.92537 25.2888 7.58656 24.8099C7.62937 24.7789 7.7292 24.7124 7.8791 24.622C8.13834 24.4657 8.43454 24.3083 8.76036 24.1612C9.65749 23.7562 10.5937 23.511 11.5121 23.4999C12.4171 23.511 13.3549 23.7561 14.2477 24.1606C14.5715 24.3073 14.865 24.4643 15.1212 24.6201ZM8 10.3902C8.17457 10.2018 8.40216 10.0105 8.67044 9.83077C9.4454 9.31155 10.3824 9 11.5 9C12.5312 9 13.4181 9.4424 14.1773 10.2053C14.4534 10.4828 15 11.2654 15 11.2654V22.3383C13.8732 21.8278 12.7465 21.5148 11.5119 21.5001C10.264 21.5148 9.12996 21.7799 8 22.2899V10.3902ZM23.3296 9.83077C23.5978 10.0105 23.8254 10.2018 24 10.3902V22.2899C22.87 21.7799 21.736 21.5148 20.4881 21.5001C19.2535 21.5148 18.1268 21.8278 17 22.3383V11.2654C17 11.2654 17.5466 10.4828 17.8227 10.2053C18.5819 9.4424 19.4688 9 20.5 9C21.6176 9 22.5546 9.31155 23.3296 9.83077Z"
                  fill="white"
                />
              </svg>
              <Type4>Visualization</Type4>
            </header>
            <Type3>
              Access all the pipes that you are part of, as well as the tasks
              assigned to you. You can also access other processes of your
              company, and even create new processes.
            </Type3>
            <br />
            <a className="link" href="#">
              <Type3>Learn more</Type3>
            </a>
            <br />
            <img className="drawer__image" src={img} alt="" />
          </article>
          <article className="drawer__card">
            <header>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1212 24.6201C15.2522 24.6997 15.344 24.7606 15.3922 24.7946C15.4142 24.8113 15.4368 24.827 15.46 24.8418C15.6311 24.9525 15.8177 25.0025 16 25.0018C16.1823 25.0025 16.3689 24.9525 16.54 24.8418C16.5632 24.827 16.5858 24.8113 16.6078 24.7946C16.656 24.7606 16.7478 24.6997 16.8788 24.6201C17.135 24.4643 17.4285 24.3073 17.7523 24.1606C18.6451 23.7561 19.5829 23.511 20.4879 23.4999C21.4063 23.511 22.3425 23.7562 23.2396 24.1612C23.5655 24.3083 23.8617 24.4657 24.1209 24.622C24.2708 24.7124 24.3706 24.7789 24.4134 24.8099C25.0746 25.2888 26 24.8164 26 24V10C26 9.78691 25.9319 9.5794 25.8057 9.40771C25.5579 9.07058 25.1077 8.61471 24.4428 8.16923C23.3521 7.43845 22.0334 7 20.5 7C18.8801 7 17.5115 7.6826 16.405 8.79465C16.2589 8.94148 16.124 9.08827 16 9.23289C15.876 9.08827 15.7411 8.94148 15.595 8.79465C14.4885 7.6826 13.1199 7 11.5 7C9.96655 7 8.64795 7.43845 7.55722 8.16923C6.89232 8.61471 6.4421 9.07058 6.19428 9.40771C6.06807 9.5794 6 9.78691 6 10V24C6 24.8164 6.92537 25.2888 7.58656 24.8099C7.62937 24.7789 7.7292 24.7124 7.8791 24.622C8.13834 24.4657 8.43454 24.3083 8.76036 24.1612C9.65749 23.7562 10.5937 23.511 11.5121 23.4999C12.4171 23.511 13.3549 23.7561 14.2477 24.1606C14.5715 24.3073 14.865 24.4643 15.1212 24.6201ZM8 10.3902C8.17457 10.2018 8.40216 10.0105 8.67044 9.83077C9.4454 9.31155 10.3824 9 11.5 9C12.5312 9 13.4181 9.4424 14.1773 10.2053C14.4534 10.4828 15 11.2654 15 11.2654V22.3383C13.8732 21.8278 12.7465 21.5148 11.5119 21.5001C10.264 21.5148 9.12996 21.7799 8 22.2899V10.3902ZM23.3296 9.83077C23.5978 10.0105 23.8254 10.2018 24 10.3902V22.2899C22.87 21.7799 21.736 21.5148 20.4881 21.5001C19.2535 21.5148 18.1268 21.8278 17 22.3383V11.2654C17 11.2654 17.5466 10.4828 17.8227 10.2053C18.5819 9.4424 19.4688 9 20.5 9C21.6176 9 22.5546 9.31155 23.3296 9.83077Z"
                  fill="white"
                />
              </svg>
              <Type4>Setting up</Type4>
            </header>
            <Type3>
              Change your account preferences, customize the visualization, and
              access all your account data.
            </Type3>
            <br />
            <a className="link" href="#">
              <Type3>Learn more</Type3>
            </a>
            <br />
            <img className="drawer__image" src={img} alt="" />
          </article>
          <article className="drawer__card">
            <header>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.1212 24.6201C15.2522 24.6997 15.344 24.7606 15.3922 24.7946C15.4142 24.8113 15.4368 24.827 15.46 24.8418C15.6311 24.9525 15.8177 25.0025 16 25.0018C16.1823 25.0025 16.3689 24.9525 16.54 24.8418C16.5632 24.827 16.5858 24.8113 16.6078 24.7946C16.656 24.7606 16.7478 24.6997 16.8788 24.6201C17.135 24.4643 17.4285 24.3073 17.7523 24.1606C18.6451 23.7561 19.5829 23.511 20.4879 23.4999C21.4063 23.511 22.3425 23.7562 23.2396 24.1612C23.5655 24.3083 23.8617 24.4657 24.1209 24.622C24.2708 24.7124 24.3706 24.7789 24.4134 24.8099C25.0746 25.2888 26 24.8164 26 24V10C26 9.78691 25.9319 9.5794 25.8057 9.40771C25.5579 9.07058 25.1077 8.61471 24.4428 8.16923C23.3521 7.43845 22.0334 7 20.5 7C18.8801 7 17.5115 7.6826 16.405 8.79465C16.2589 8.94148 16.124 9.08827 16 9.23289C15.876 9.08827 15.7411 8.94148 15.595 8.79465C14.4885 7.6826 13.1199 7 11.5 7C9.96655 7 8.64795 7.43845 7.55722 8.16923C6.89232 8.61471 6.4421 9.07058 6.19428 9.40771C6.06807 9.5794 6 9.78691 6 10V24C6 24.8164 6.92537 25.2888 7.58656 24.8099C7.62937 24.7789 7.7292 24.7124 7.8791 24.622C8.13834 24.4657 8.43454 24.3083 8.76036 24.1612C9.65749 23.7562 10.5937 23.511 11.5121 23.4999C12.4171 23.511 13.3549 23.7561 14.2477 24.1606C14.5715 24.3073 14.865 24.4643 15.1212 24.6201ZM8 10.3902C8.17457 10.2018 8.40216 10.0105 8.67044 9.83077C9.4454 9.31155 10.3824 9 11.5 9C12.5312 9 13.4181 9.4424 14.1773 10.2053C14.4534 10.4828 15 11.2654 15 11.2654V22.3383C13.8732 21.8278 12.7465 21.5148 11.5119 21.5001C10.264 21.5148 9.12996 21.7799 8 22.2899V10.3902ZM23.3296 9.83077C23.5978 10.0105 23.8254 10.2018 24 10.3902V22.2899C22.87 21.7799 21.736 21.5148 20.4881 21.5001C19.2535 21.5148 18.1268 21.8278 17 22.3383V11.2654C17 11.2654 17.5466 10.4828 17.8227 10.2053C18.5819 9.4424 19.4688 9 20.5 9C21.6176 9 22.5546 9.31155 23.3296 9.83077Z"
                  fill="white"
                />
              </svg>
              <Type4>Visualization</Type4>
            </header>
            <Type3>
              Access all the pipes that you are part of, as well as the tasks
              assigned to you. You can also access other processes of your
              company, and even create new processes.
            </Type3>
            <br />
            <a className="link" href="#">
              <Type3>Learn more</Type3>
            </a>
            <br />
            <img className="drawer__image" src={img} alt="" />
          </article>
        </section>
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
