"use client";

import React from "react";
import styles from "./signin.module.css";
//여기서 반드시 form으로 감싸주어야 signincheck 부분에서 받을 수 있었다.
const page = () => {
    return (
    <div className={styles.Container}>
        <form method="POST" action="/api/signincheck">
        <button type="submit">카카오 로그인</button>
        </form>
    </div>
    );
};

export default page;

