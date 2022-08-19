import {Box, Container, Button, Text, Link} from "@chakra-ui/react"
import Image from "next/image";


const Header = () => {
  return(
    <Container py={5} maxW="5xl" sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <Box sx={{display: "flex"}}>
        <Image src="/safesign.webp" width="190" height="37"/>
      </Box>
      <Box sx={{display: "flex", alignItems:"center", justifyContent:"space-between", width:"40%"}}>
        <Link color="whatsapp.500">Help</Link>
        <Button size="sm" variant="outline">English (UK)  United Kingdom £ GBP</Button>
        <Button colorScheme="whatsapp" size="lg" variant="outline">Log In</Button>
      </Box>
    </Container>
  )
}

export default Header;