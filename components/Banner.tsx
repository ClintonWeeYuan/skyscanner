import {Box, Container, Heading, Center, Icon, Text} from "@chakra-ui/react"
import Image from "next/image"
import FlightForm from "./FlightForm"
import {TbPlaneInflight} from "react-icons/tb"
import {RiHotelLine} from "react-icons/ri"
import {FaCarSide} from "react-icons/fa"

const Banner = () => {
  return (

    <Box mt={10}>
      <Container maxW="5xl" >
        <Box sx={{display: "flex"}}>
          <Box py={2} bg="whatsapp.500" px={5} sx={{ borderTopLeftRadius:"5", borderTopRightRadius: "5", cursor:"pointer", "&:hover": {
              bgColor:"whatsapp.600"
            }}} mr={2}>
            <Center>
              <Icon color="white" as={TbPlaneInflight}/>
              <Text color="white" ml={2}>Flights</Text>
            </Center>
          </Box>
          <Box py={2} px={5} bg="whatsapp.500" sx={{borderTopLeftRadius:"5", borderTopRightRadius: "5", cursor:"pointer", "&:hover": {
              bgColor:"whatsapp.600"
            }}} mr={2}>
            <Center>
              <Icon color="white" as={RiHotelLine}/>
              <Text color="white" ml={2}>Hotels</Text>
            </Center>
          </Box>
          <Box py={2} px={5} bg="whatsapp.500" sx={{borderTopLeftRadius:"5", borderTopRightRadius: "5", cursor:"pointer", "&:hover": {
          bgColor:"whatsapp.600"
            }}} mr={2}>
            <Center>
              <Icon color="white" as={FaCarSide}/>
              <Text color="white" ml={2}>Car Rentals</Text>
            </Center>
          </Box>

        </Box>
      </Container>
      <Box sx={{position: 'relative', height: "70vh", overflow: "hidden", zIndex: -1}}>
        <Image
          alt="Background"
          src="/banner-img.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

      </Box>
      <Container mt={15} maxW="5xl" sx={{bottom: "450px", position: "relative"}}>
        <Heading size="3xl" color="white" sx={{zIndex: 20,}}>Let the journey begin</Heading>
        <FlightForm/>
      </Container>
    </Box>
  )
}

export default Banner;