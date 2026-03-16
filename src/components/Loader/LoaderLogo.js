import React from "react";
import "./LoaderLogo.css";

class LogoLoader extends React.Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        className="raw_logo"
        width="50%"
        height="100px"
        viewBox="0 0 440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill={theme.text}
          fontSize="48"
          fontWeight="bold"
          fontFamily="sans-serif"
          className="signature"
        >
          Neil Espinosa
        </text>
        <style>
          {`
            .signature {
              stroke-dasharray: 800;
              stroke-dashoffset: 800;
              -webkit-animation: dash 3s linear forwards 0.5s;
              -o-animation: dash 3s linear forwards 0.5s;
              -moz-animation: dash 3s linear forwards 0.5s;
              animation: dash 3s linear forwards 0.5s;
              stroke: ${theme.body};
              stroke-width: 2px;
            }
            @-webkit-keyframes dash {
              from { stroke-dashoffset: 800; }
              to { stroke-dashoffset: 0; }
            }
          `}
        </style>
      </svg>
    );
  }
}

export default LogoLoader;
