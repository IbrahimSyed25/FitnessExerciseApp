import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, ToggleButton, Typography } from "@mui/material";

import Bodypart from "./Bodypart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Carousel responsive={responsive}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemID={item.id || item}
        title={item.id || item}
      >
        <Bodypart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    ))}
  </Carousel>
);

export default HorizontalScrollbar;
