import {Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Text} from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {useState} from "react";
// @ts-ignore
import {DatePicker} from 'chakra-ui-date-input'

const FlightForm = () => {
  const handleSubmit = () => {
    const formData = {
      origin: origin,
      dest: dest,
      departDate: departDate,
      returnDate: returnDate
    }
    alert(JSON.stringify(formData))
  };

  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

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
      <Box mt={3} sx={{display: "flex"}}>
        <FormControl>
          <FormLabel color="white" htmlFor='origin'>From</FormLabel>
          <Input onChange={(e) => setOrigin(e.target.value)} color="gray" id="origin" variant="filled"
                 placeholder="Origin"/>
        </FormControl>
        <FormControl ml={2}>
          <FormLabel color="white" htmlFor='destination'>From</FormLabel>
          <Input onChange={(e) => setDest(e.target.value)} color="gray" id="destination" variant="filled"
                 placeholder="Destination"/>
        </FormControl>
        <FormControl ml={2} >
          <FormLabel color="white" htmlFor='depart-date'>Depart</FormLabel>
          <DatePicker
            id="depart-date"
            placeholder='Date picker placeholder'
            name='depart-date'
            onChange={(date: string) => setDepartDate(date)}
          />
        </FormControl>
        <FormControl ml={2} >
          <FormLabel color="white" htmlFor='return-date'>Return</FormLabel>
          <DatePicker
            id="return-date"
            placeholder='Date picker placeholder'
            name='return-date'
            onChange={(date: string) => setReturnDate(date)}
          />
        </FormControl>
      </Box>

      {/*Submit Button*/}
      <Box mt={8} sx={{display: "flex", justifyContent: "flex-end"}}>
        <Button onClick={handleSubmit} size="lg" colorScheme="green">SEARCH FLIGHTS <ArrowForwardIcon ml={2}/></Button>
      </Box>
    </Box>
  )
}

export default FlightForm;