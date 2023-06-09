import css from "styled-jsx/css";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sidebar_container">
      <nav role="sidebar_navigation">
        <div className="sidebar_menuToggle">
          <input type="checkbox" />

          <span></span>
          <span></span>
          <span></span>

          <ul className="sidebar_menu">
            <Link href="/Login" style={{ textDecoration: "none" }}>
              <li>Login / Logout</li>
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <li>서비스 소개</li>
            </Link>
            <Link href="/" style={{ textDecoration: "none" }}>
              <li>개발자 소개</li>
            </Link>
            <Footer />
          </ul>
        </div>
      </nav>
      <style jsx>{sidebar}</style>
    </div>
  );
}

const sidebar = css`
 @font-face {
    font-family: "Bazzi";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/Bazzi.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  .sidebar_container {
    font-family: "Bazzi";

  }
  .sidebar_menuToggle {
    display: block;
    position: relative;
    top: 30px;
    left: 30px;

    z-index: 1;

    /* -webkit-user-select: none;
    user-select: none;  */
  }

  .sidebar_menuToggle li {
    color: #000000;
    line-height: 40px;
    /* transition: color 0.3s ease; */
  }

  .sidebar_menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;

    cursor: pointer;

    opacity: 0;
    z-index: 2;

    -webkit-touch-callout: none;
  }

  .sidebar_menuToggle span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #ffffff;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  .sidebar_menuToggle span:first-child {
    transform-origin: 0% 0%;
  }

  .sidebar_menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  .sidebar_menuToggle input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }

  .sidebar_menuToggle input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .sidebar_menuToggle input:checked ~ span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
  }

  .sidebar_menu {
    position: absolute;
    width: 230px;
    height: calc(100vh - 130px);
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;

    background: #ec9ed6;
    list-style-type: none;

    transform-origin: 0% 0%;
    transform: translate(-1000%, 0);
  }

  .sidebar_menu li {
    padding: 10px 0;
    font-size: 22px;
  }
  //햄버거바 클릭했을 때 메뉴 열고 닫기 기능
  .sidebar_menuToggle input:checked ~ ul {
    transform: none;
  }
`;
