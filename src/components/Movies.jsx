import { Box, Grid, GridItem, Image, Text, useColorModeValue } from '@chakra-ui/react'

const Movies = ({movies}) => {
  const gridItemBg = useColorModeValue("blackAlpha.300", "blackAlpha.500")
  
  return (
    <Grid w={'full'}
    my={10}
    gap={5}
    gridTemplateColumns={{
        base: 'repeat(2, 1fr)',
        sm: "repeat(3, 1fr)",
        md: 'repeat(4, 1fr)',
        lg: 'repeat(5, 1fr)',
    }}>
        {movies?.map(item => (
            <GridItem key={item.Title} cursor={"pointer"} _hover={{bg: useColorModeValue("blue.200", "gray.700")}} bg={gridItemBg} transition={"ease-in-out .2s"} p={"5px"} display={"flex"} justifyContent={"start"} alignItems={"start"} flexDirection={"column"} overflow={"hidden"} gap={"10px"} boxShadow={"2px 2px 10px 2px rgba(0,0,0,.2)"}>
                <Image src={item.Poster} minW={"full"} minH={"200px"} maxH="255px" objectFit={"cover"} ></Image>
                <Box>
                    <Text fontSize={"18px"} fontWeight={600}>{item.Title}</Text>
                    <Text fontSize={"16px"}>Year: {item.Year}</Text>
                </Box>
            </GridItem>
        ))}
    </Grid>
  )
}

export default Movies