import React from "react";
import styled from "styled-components";

import { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const SliderWrapper = styled.section`
  display: flex;
  margin-bottom: 15px;
  min-width: 240px;
`;

export default function() {
  return (
    <SliderWrapper>
      <Range
        railStyle={{
          background: "#fff",
          height: "2px",
          borderRadius: "2px",
          minWidth: "250px"
        }}
        trackStyle={[
          {
            background: "#00ACDE",
            borderRadius: "2px",
            height: "2px",
            borderRadius: "2px"
          }
        ]}
        defaultValue={[0, 100]}
        handleStyle={[
          {
            width: "16px",
            height: "16px",
            background: "#FFFFFF",
            border: "1px solid #D6D9DA",
            borderRadius: "50px"
          },
          {
            width: "16px",
            height: "16px",
            background: "#FFFFFF",
            border: "1px solid #D6D9DA",
            borderRadius: "50px"
          }
        ]}
      />
    </SliderWrapper>
  );
}
