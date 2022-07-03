import {Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Text} from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"

const FlightForm = () => {
  return (
    <Box bg="#02122c" p={4} mt={6} sx={{borderRadius: 5}}>

      {/*Return, Oneway and MultiCity radios*/}
      <RadioGroup colorScheme="twitter" defaultValue='return'>
        <Stack spacing={4} direction='row'>
          <Radio size="lg" value='return'>
            <Text color="white">Return</Text>
          </Radio>
          <Radio size="lg" value='oneway'><Text color="white">One Way</Text></Radio>
          <Radio size="lg" value='multicity'><Text color="white">Multi-city</Text></Radio>
        </Stack>
      </RadioGroup>

      {/*Origin, Destination, Depart and Return Dates*/}
      <Box sx={{display: "flex"}}>
        <FormControl>
          <FormLabel color="white" htmlFor='origin'>From</FormLabel>
          <Input color="gray" id="origin" variant="filled" placeholder="Origin"/>
        </FormControl>
        <FormControl mx={2}>
          <FormLabel color="white" htmlFor='destination'>From</FormLabel>
          <Input id="destination" variant="filled" placeholder="Destination"/>
        </FormControl>

      </Box>

      {/*Submit Button*/}
      <Box mt={8} sx={{display: "flex", justifyContent: "flex-end"}}>
        <Button size="lg" colorScheme="green">SEARCH FLIGHTS <ArrowForwardIcon ml={2}/></Button>
      </Box>
    </Box>
  )
}

export default FlightForm;