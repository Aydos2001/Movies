import { Box, Button, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react"
import { Search2Icon, SunIcon, MoonIcon } from "@chakra-ui/icons"
import { useState } from "react"

const Header = ( {SetSearch}) => {
    const {colorMode, toggleColorMode} =  useColorMode()
    const textColor = useColorModeValue("blackAlpha.700", "white")

    const trs = "ease-in-out .3s"

    const [str, SetStr] = useState("")
    
  return (
    <Flex justify={"space-between"} alignItems={"center"} gap={"10px"} py={{base: "7px", md: "12px", lg: "17px" }} borderBottom={"1px solid #bfbbbb"} transition={trs}>
        
        <Heading fontSize={{base: "17px", md: "19px", lg: "23px"}} color={textColor} transition={trs}>Movies</Heading>
        
        <Spacer/>
        <InputGroup w={{base: "100%", md: "70%", lg: "50%"}} transition={trs}>
            <InputLeftElement minH={"100%"} maxH={"100%"}>
                <Search2Icon fontSize={"sm"} color={textColor}/>
            </InputLeftElement>
            <Input onChange={(e) => SetStr(e.target.value)} border={"1px solid #06D2FF"} placeholder="Search Movies..." rounded={"full"} size={"sm"} bg={useColorModeValue("blackAlpha.200", "gray.700")} fontSize={{base: "15px", md: "16px", lg: "17px"}} fontWeight={"500"} pr="70px"/>
            <InputRightElement w="60px" h="28px" top="2px" right={"2px"}>
                <Button onClick={() => {str? SetSearch(str): ""}} colorScheme="blue" roundedRight={"full"} h="full">Search</Button>
            </InputRightElement>
        </InputGroup>

        <Box>
        <Button onClick={toggleColorMode} variant={"ghost"} rounded={"full"} w="30px" h={"40px"} p={"0"}>
            {colorMode === "light"? <MoonIcon color={textColor}/> : <SunIcon color={textColor}/>}
        </Button>
        </Box>

    </Flex>
  )
}

export default Header