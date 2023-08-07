import { Box, Heading, Stack, useColorModeValue } from "@chakra-ui/react"
import Header from "./components/Header"
import Movies from "./components/Movies"
import axios from 'axios'
import { useEffect, useState } from "react"

const App = () => {
  const [movies, SetMovies] = useState([])
  const [search, SetSearch] = useState("Iron")

  async function fetchAllMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&type=&apikey=9446507`)

    SetMovies(data.Search)
  }

  useEffect(() => {
    fetchAllMovies()
  }, [search])
  


  return (
    <Stack w="full" minH="100vh" bg={useColorModeValue("white", "blackAlpha.400")}>
      <Box w="90%" margin="0 auto" maxW={"1200px"}>
        <Header SetSearch={SetSearch}/>
        {movies? <Movies movies={movies}/> : <Heading fontSize={"20px"} fontWeight={"400"} textAlign={"center"} mt={"50px"}>Oops, movies not found! Please check your movie name...</Heading>}
      </Box>
    </Stack>
  )
}

export default App
