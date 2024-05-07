import { Box, Typography, Button, Stack, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseoptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
function SearchExercise({ setExercises, bodyPart, setBodyPart }) {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyparts] = useState([]);
  useEffect(() => {
    async function fetchExersicesData() {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseoptions
      );
      setBodyparts(["all", ...bodyPartsData]);
    }
    fetchExersicesData();
  }, []);
  async function handleSearch() {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=10000",
        exerciseoptions
      );
      const searchedExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchedExercises);
    }
  }
  return (
    <div>
      <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="50px"
          textAlign="center"
        >
          {" "}
          Awesome Excercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            height="76px"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
            placeholder="Search Exercises"
            type="text"
            sx={{
              // for inside the textfield
              input: { fontWeight: "600", border: "none", borderRadius: "4px" },
              width: { lg: "1000px", xs: "350px" },
            }}
          />
          <Button
            className="search-btn"
            sx={{
              backgroundColor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            p: "20px",
            justifyContent: "center",
          }}
        >
          <HorizontalScrollbar
            data={bodyParts}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
        </Box>
      </Stack>
    </div>
  );
}

export default SearchExercise;
