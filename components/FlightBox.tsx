import {FC, useEffect, useState} from "react"
import {Badge, Box, Button, Center, Flex, Icon, Text} from "@chakra-ui/react"
import {IoAirplane} from "react-icons/io5"
import {CheckCircleIcon, InfoOutlineIcon, NotAllowedIcon, WarningTwoIcon} from "@chakra-ui/icons"

interface Props {
  flight: any,
  baggage: string,
  seatSelection: boolean,
  randomNumber: number,
}

function formatDuration(duration: number) {
  let minutes: number = duration % 100;
  let hours: number = Math.floor(duration / 100);
  return `${hours}h ${minutes}`
}


function formatDate(time: string) {
  return time.substring(11, 16);
}


const FlightBox: FC<Props> = ({flight, seatSelection, baggage, randomNumber}) => {
  const [price, setPrice] = useState<number>(flight.price.amount);

  const terms = [
    {term: "Completely Free Refunds", icon: <CheckCircleIcon color="whatsapp.500"/>},
    {term: "Refund for a Voucher", icon: <InfoOutlineIcon color="blue.500"/>},
    {term: "Refund for a Fee", icon: <WarningTwoIcon color="yellow.500"/>},
    {term: "No Refunds Allowed", icon: <NotAllowedIcon color="red.500"/>}
  ];

  useEffect(() => {
    if (seatSelection) {
      setPrice(flight.price.amount + 300);
    } else {
      setPrice(flight.price.amount);
    }

    setPrice((prev) => parseInt((prev + (parseInt(baggage) * 20)).toFixed(2)));
  }, [baggage, seatSelection]);

  return (
    <Flex boxShadow="md" borderRadius="md" bg="white" sx={{mb: 5}}>
      <Flex flex="5" p={4} sx={{borderRight: "1px solid gray"}}>

        <Center flex="2">
          <Text>{flight.legs[0].carriers[0].name}</Text>
        </Center>

        <Center flex="6">
          <Flex w="100%">
            <Flex flex="2" p={2} direction="column" align="flex-end">
              <Text fontSize="2xl">{formatDate(flight.legs[0].departure)}</Text>
              <Text>{flight.legs[0].origin.alt_id}</Text>
            </Flex>
            <Flex flex="5" p={2} align="center">
              <Flex flex="7" direction="column" align="center">
                <Text fontSize="xs">{formatDuration(flight.legs[0].duration)}</Text>
                <Box h={0.4} width="80%" bg="black"></Box>
                <Text fontSize="xs" color="green.500">Direct</Text>
              </Flex>
              <Center flex="1">
                <Icon as={IoAirplane}/>
              </Center>
            </Flex>
            <Flex flex="2" p={2} direction="column" align="flex-start">
              <Text fontSize="2xl">{formatDate(flight.legs[0].arrival)}</Text>
              <Text>{flight.legs[0].destination.alt_id}</Text>
            </Flex>
          </Flex>
        </Center>
      </Flex>

      <Flex flex="3">
        <Flex flex="2" justify="center" align="center" direction="column" p={4}>
          <Text>£{flight.price.amount}</Text>
          <Button size="lg" colorScheme="twitter">Select</Button>
        </Flex>
        <Flex flex="3" justify="center" align="center" direction="column" p={4}>
          <Badge w="100%" p={2} fontSize="lg" variant="solid" colorScheme="green">True Price: £{price}</Badge>


          <Box mt={2} sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%"}} as="ul">
            {terms[randomNumber].icon}
            <Text ml={2} fontSize="xs">{terms[randomNumber].term}</Text>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default FlightBox;