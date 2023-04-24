import React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Link = ({to,children}) => {
    return <StyledLink href={to}>{children}</StyledLink>
 };

function Clock() {
    const Circle = styled.div`
        width: 500px;
        height: 500px;
        position: relative;
        border-radius: 50%;
        border: solid 2px skyblue;
        margin: auto;
        top: 10px;
    `;

    const ClockNumbers = styled.div`
        position: absolute;
        box-sizing: border-box;
    `;

    const Hand = styled(motion.div)`
        position: absolute;
        top: calc(50% - 23px);
        left: calc(50% - 23px);
        border-radius: 0 50% 50% 50%;
        transform: rotate(44deg);
        width: 50px;
        height: 50px;
        background-color: orange;
        border: 2px solid black;

    &::before {
        content: '';
        position: absolute;
        display: block;
        background-color: black;
        width: 2px;
        height: 130px;
        bottom: calc(30px);
        right: calc(94px);
        transform: rotate(135deg);
    }
    `;
    
    const Dials = styled.div`
        position: relative;
        width: 80%;
        height: 80%;
        left: calc(10%);
        top: calc(10%);
    `;

    const Dial = styled.div`
        position: absolute;
        top: 0;
        left: calc(50% - 3px);
        width: 6px;
        height: 71%;
        transform-origin: bottom;
        `;

    const AnalogLine1 = styled.div`
        position: absolute;
        top: 0;
        width: 3px;
        height: 30px;
        background-color: skyblue;       
    `;

    const AnalogLine2 = styled.div`
        position: absolute;
        top: 0;
        width: 1px;
        height: 20px;
        background-color: skyblue;       
    `;

    const Numbers = styled.div`
        position: absolute;
        top: calc(50% - 12.5px);
        left: calc(50% - 10px);
        width: 50px;
        height: 50px;
    `;

    const Text0 = styled.span`
        position: absolute;
        bottom: 240px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text1 = styled.span`
        position: absolute;
        bottom: 210px;
        left: 105px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text2 = styled.span`
        position: absolute;
        bottom: 130px;
        left: 190px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text3 = styled.span`
        position: absolute;
        bottom: 15px;
        left: 223px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text4 = styled.span`
        position: absolute;
        bottom: -98px;
        left: 193px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text5 = styled.span`
        position: absolute;
        bottom: -180px;
        left: 110px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text6 = styled.span`
        position: absolute;
        bottom: -210px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text7 = styled.span`
        position: absolute;
        bottom: -180px;
        right: 110px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text8 = styled.span`
        position: absolute;
        bottom: -98px;
        right: 193px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text9 = styled.span`
        position: absolute;
        bottom: 15px;
        right: 223px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text10 = styled.span`
        position: absolute;
        bottom: 130px;
        right: 200px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    const Text11 = styled.span`
        position: absolute;
        bottom: 210px;
        right: 120px;
        width: 50px;
        font-size: 30px;
        color: #606060;
    `;

    //上記にstyled component

    const dials = [];
    for (let i = 0; i < 60; i++) {
        const deg = i * 6;

        const DialLine = i % 5 === 0 ? AnalogLine1 : AnalogLine2;
      
        const dial = (
            <Dial
                key={i}
                style={{ transform: `rotate(${deg}deg)` }}>
                    <DialLine />
            </Dial>
        );
      
        dials.push(dial);
      }
      
      const dialGroups = [];
      for (let i = 0; i < dials.length; i += 5) {
        const group = dials.slice(i, i + 5);
        dialGroups.push(group);
      }

    

    return(
        <Circle>
            <ClockNumbers />
            <motion.div drag>
                <Hand />
            </motion.div>
 
            <Dials>
                {dialGroups.map((group, index) => (
                <Dial key={index}>{group}</Dial>
                ))}
            </Dials>
            <Numbers>
                <Text0>0</Text0>
                <Text1>1</Text1>
                <Text2>2</Text2>
                <Text3>3</Text3>
                <Text4>4</Text4>
                <Text5>5</Text5>
                <Text6>6</Text6>
                <Text7>7</Text7>
                <Text8>8</Text8>
                <Text9>9</Text9>
                <Text10>10</Text10>
                <Text11>11</Text11>
            </Numbers>
        </Circle>
    )
    
}

export default Clock;