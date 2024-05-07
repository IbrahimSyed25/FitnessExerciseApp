import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercise from "../components/Exercise";
import { useState } from "react";
function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box width="100%">
      <HeroBanner />
      <SearchExercise
        bodyPart={bodyPart}
        setExercises={setExercises}
        setBodyPart={setBodyPart}
      />
      <Exercise
        bodyPart={bodyPart}
        setExercises={setExercises}
        exercises={exercises}
      />
    </Box>
  );
}

export default Home;
