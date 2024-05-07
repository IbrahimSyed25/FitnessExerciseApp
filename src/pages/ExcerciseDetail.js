import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { fetchData, exerciseoptions, youtubeoptions } from "../utils/fetchData";
import Detail from "../components/Details";
import ExerciseVideos from "../components/ExerciseVideos";

function ExcerciseDetail() {
  const [exerciseDetail, setExercisedetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const id = useParams();
  // console.log(id.id);
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id.id}`,
        exerciseoptions
      );
      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeoptions
      );
      // console.log(exerciseDetailData);
      console.log(exerciseVideoData);
      setExercisedetail(exerciseDetailData);
      setExerciseVideos(exerciseVideoData.contents);
    };
    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
    </Box>
  );
}

export default ExcerciseDetail;
