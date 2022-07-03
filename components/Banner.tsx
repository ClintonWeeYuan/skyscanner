import {Box, Heading, Container} from "@chakra-ui/react"
import Image from "next/image"
import FlightForm from "./FlightForm"

const Banner = () => {
  return (
    <Box>
      <Box sx={{position: 'relative', height: "70vh", overflow: "hidden", zIndex: -1}}>
        <Image
          alt="Background"
          src="/banner-img.webp"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

      </Box>
      <Container mt={20} maxW="5xl" sx={{bottom:"450px", position:"relative"}}>
        <Heading size="3xl" color="white" sx={{zIndex: 20,}}>Let the journey begin</Heading>
        <FlightForm/>
      </Container>
    </Box>
  )
}

export default Banner;