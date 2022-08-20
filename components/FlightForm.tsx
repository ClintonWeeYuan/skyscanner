import {Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack, Text, Spinner} from "@chakra-ui/react"
import {ArrowForwardIcon} from "@chakra-ui/icons"
import {useState} from "react";
// @ts-ignore
import {DatePicker} from 'chakra-ui-date-input'
import axios from "axios";
import {useFlightContext} from "./FlightContext";
import {useRouter} from "next/router"


function formatDate (date: string){
  let dateArray = date.split("/");
  let temp = dateArray[0];
  dateArray[0] = dateArray[2];
  dateArray[2] = temp;
  return dateArray.join("-");
}

const FlightForm = () => {

  const changeFlightData = useFlightContext().setValue;
  const router = useRouter();

  const handleSubmit = async () => {
    const formData = {
      origin: origin,
      dest: dest,
      departDate: departDate,
      returnDate: returnDate
    }
    try{
      setIsLoading(true);
      const res = await axios.post("/api/search", {
        origin: origin,
        dest: dest,
        date: departDate
      })
      changeFlightData(res.data.splice(0, 20));
      console.log(res);
      setIsLoading(false);
      router.push("/results")
      // alert(JSON.stringify(formData))
    } catch(e){
      console.log(e);
      setIsLoading(false);
    }


  };

  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
            onChange={(date: string) => setDepartDate(formatDate(date))}
          />
        </FormControl>
        <FormControl ml={2} >
          <FormLabel color="white" htmlFor='return-date'>Return</FormLabel>
          <DatePicker
            id="return-date"
            placeholder='Date picker placeholder'
            name='return-date'
            onChange={(date: string) => setReturnDate(formatDate(date))}
          />
        </FormControl>
      </Box>

      {/*Submit Button*/}
      <Box mt={8} sx={{display: "flex", justifyContent: "flex-end"}}>
        <Button sx={{width:"200px"}} onClick={handleSubmit} size="lg" colorScheme="whatsapp">
          {isLoading ? <Spinner/> : (<><Text>SEARCH FLIGHTS</Text> <ArrowForwardIcon/></>)}
        </Button>
      </Box>
    </Box>
  )
}

export default FlightForm;