import React from "react";
import './start.css';
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function LoginInfo(props) {
    const StyledLink = styled(Link)`
    font-family: "Libre Baskerville", serif;
    font-family: "PT Serif", serif;
    text-decoration: none;
    margin-inline: 20px;
    border-radius: 10px;
    align-self: center;
    text-align: center;
    margin: 10px;
    width: 10%;
    &:hover {
      background-color: rgb(27, 59, 111);
      color: azure;
      border: 1px solid azure;
    }
  `;
    const contentbox = styled.div`
  display: flex;
  width: 99vw;
  height: 65vh;
 /* border-style: solid;*/
 /* border-color: red;*/
  `;

    const sidebox = styled.div`
    width: 25vw;
    height: 65vh;
   /* border-style: solid;*/
    /*border-color: blue;*/
  `;

    const midbox = styled.div`
    display: block;
    width: 50vw;
    height: 65vh;
    /*border-style: solid;*/
   /* border-color: green;*/
   `;
    const formbox = styled.div`
        width: 100 %;
        height: 60 %;
        border - style: solid;
        background - color: rgba(159, 179, 194, 0.8);
        border - radius: 10px;
        /* height:auto;*/
        `;

    const bottombox = styled.div`
        width: 70 %;
        height: 20 %;
        margin - left: 15 % ;
        /* border-style: solid;*/
        background - color: #151443;
        box - shadow: 5px 5px 5px #909196;
        `;

    const row1 = styled.div`
        height: 20 %;
        width: 100 %;
        text - align: center;
        font - size: 7vh;
        `;

    const row2 = styled.div`
        height: 15 %;
        width: 100 %;
        text - align: center;
        font - size: 4vh;
        `;

    const row3 = styled.div`
        height: 15 %;
        width: 100 %;
        text - align: center;
        `;
    const row4 = styled.div`
        height: 15 %;
        width: 100 %;
        text - align: center;
        font - size: 4vh;
        padding - top: 2 %;
        `;

    const row5 = styled.div`
        height: 15 %;
        width: 100 %;
        text - align: center;
        `;

    const logButton = styled.div`
        font - size: 4vh;
        background - color: #151443;
        cursor: pointer;
        border - radius: 5px;
        border: none;
        `;

    const inputbox = styled.div`
        width: 80 %;
        height: 100 %;
        color: black;
        font - size: 200 %;
        text - align: center;
        `;

    const row21 = styled.div`
        height: 30 %;
        text - align: center;
        font - size: 3vmin;
        `;

    const row22 = styled.div`
        height: 70 %;
        `;

    const arrow = styled.div`
        font - size: 10vw;
        text - align: right;
        position: absolute;
        bottom: 4.8vh;
        right: 1.05vw;
        cursor: pointer;
        `;

    const leftarrow = styled.div`
        margin - left: 10 %;
        width: fit - content;
        height: fit - content;
        text - align: center;
        font - size: 3vw;
        color: black;
        border - radius: 8px;
        text - size - adjust: 80 %;
        background - color: rgba(176, 176, 176, 0.8);
        cursor: pointer;
        `;
    return (
        <div className="contentbox">

            <div className="midbox">

                <div className="formbox">
                    <div className="row1">Login</div>
                    <div className="row2">Email</div>
                    <div className="row3"><input className="inputbox" onInput={e => props.setEmail(e.target.value)}></input></div>
                    <div className="row4">Password</div>
                    <div className="row5"><input className="inputbox" type="password" onInput={e => props.setPassword(e.target.value)}></input></div>
                    <div className="row6"><button className="logButton" onClick={e => { props.LoginUser(); window.location.hash = "/"; }} >Log in</button></div>
                </div>
            </div>
        </div >
    );
}

export default LoginInfo;
