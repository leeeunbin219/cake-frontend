import css from "styled-jsx/css";
import Image from "next/image";
import Sidebar from "pages/components/Sidebar.jsx";

export default function Visitoruse() {
  return (
    <div className="visitoruse_container">
      <Sidebar />
      <p className="visitoruse_text">___님 생일축하해요🎉</p>
      <div className="visitoruse_nickname_container">
        <label for="nickname" className="visitoruse_name font>닉네임 : </label>
        <input
          type="text"
          maxLength="3"
          className="useruse_name"
          id="nickname"
        />
      </div>
      <div className="useruse_tab_container">
        <input
          id="tab1"
          type="radio"
          name="tabs"
          className="useruse_input"
          checked
        />
        <label for="tab1" className="useruse_label">
          tab menu1
        </label>
        <input id="tab2" type="radio" name="tabs" className="useruse_input" />
        <label for="tab2" className="useruse_label">
          tab menu2
        </label>
        <section id="content1" className="useruse_secion">
          <p className="useruse_text">tab menu1의 내용</p>
        </section>
        <section id="content2" className="useruse_secion">
          <p className="useruse_text">tab menu2의 내용</p>
        </section>
      </div>
      <style jsx>{visitoruse}</style>
    </div>
  );
}

const visitoruse = css`
  .visitoruse_container {
    width: 500px;
    height: 100vh;
    background-color: #f7bedf;
    color: white;
    text-align: center;
    //중앙정렬
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .useruse_text {
    /* margin: 0 0 20px;
    line-height: 1.5; */
  }
  .useruse_tab_container {
    /* min-width: 320px;
    background: white;
    max-width: 800px;
    padding: 50px;
    margin: 0 auto;
    position: fixed;
    bottom: 0;
    */
  }
  .useruse_secion {
    display: none;
    /* padding: 20px 0 0; */
    border-top: 1px solid #fa00d4;
  }
  .useruse_input {
    display: none;
  }
  .useruse_label {
    display: inline-block;
    margin: 0 0 -1px;
    padding: 15px 63px;
    font-weight: 600;
    /* text-align: center; */
    color: #fa00d4;
    /* border: 1px solid transparent; */
  }
  .useruse_label:hover {
    /* color: #fa00d4;
    cursor: pointer; */
  }

  //input 클릭시, label 스타일
  .useruse_input:checked + .useruse_label {
    color: #ffffff;
    border: 1px solid #fa00d4;
  }

  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3 {
    display: block;
  }
`;
