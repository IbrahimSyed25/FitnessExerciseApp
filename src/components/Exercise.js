import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseoptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
function Exercise({ exercises, setExercises, bodyPart }) {
  // console.log(exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const Paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  const indexOfLastExercise = currentPage * 9;
  const indexOfFirstExercise = indexOfLastExercise - 9;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];
      if (bodyPart === "all") {
        exerciseData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=10000",
          exerciseoptions
        );
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=10000`,
          exerciseoptions
        );
      }

      setExercises(exerciseData);
    };
    fetchExercisesData();
  }, [bodyPart, setExercises]);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        {" "}
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            count={Math.ceil(exercises.length / 9)}
            page={currentPage}
            onChange={Paginate}
            size="larger"
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercise;
