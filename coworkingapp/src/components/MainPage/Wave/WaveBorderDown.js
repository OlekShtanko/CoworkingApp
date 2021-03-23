import React from "react";
import { withStyles } from "@material-ui/core";


const styles = {
  waves: {
    position: "relative",
    width: "100%",
    marginBottom: -7,
    height: "10vh",
    minHeight: "7vw",
    background:"white",
  },
  "@keyframes moveForever": {
    from: { transform: "translate3d(-90px, 0, 0)" },
    to: { transform: "translate3d(85px, 0, 0)" }
  },
  parallax: {
    "& > use": {
      animation: "$moveForever 4s cubic-bezier(0.62, 0.5, 0.38, 0.5) infinite",
      animationDelay: props => `-${props.animationNegativeDelay}s`
    }
  },

};

function WaveBorderDown(props) {
  const id = String(Math.random());
  const {
    classes,
  } = props;
  return (
    <div  >
      <svg
        className={classes.waves}
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id={id}
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className={classes.parallax}>
          <use href={`#${id}`} x="48" y="0" fill={"#31373e"} />
        </g>
      </svg>
    </div>
  );
}



export default withStyles(styles)(WaveBorderDown);