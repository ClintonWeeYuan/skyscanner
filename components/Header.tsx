import {Box, Container, Button, Text, Link} from "@chakra-ui/react"
import Image from "next/image";


const Header = () => {
  return(
    <Container maxW="5xl" sx={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
      <Box sx={{display: "flex"}}>
        <Image src="/skyscanner-logo.png" width="150" height="80"/>
      </Box>
      <Box sx={{display: "flex", alignItems:"center", justifyContent:"space-between", width:"40%"}}>
        <Link color="blue">Help</Link>
        <Button size="sm" variant="outline">English (UK)  Malaysia RM MYR</Button>
        <Button colorScheme="twitter" size="lg" variant="outline">Log In</Button>

      </Box>
    </Container>
  )
}

export default Header;