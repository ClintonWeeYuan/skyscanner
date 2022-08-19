import type {NextPage} from 'next'
import {Box, Container, Heading} from "@chakra-ui/react"
import {useFlightContext} from "../components/FlightContext"
import Header from "../components/Header"
import FlightBox from "../components/FlightBox"
import Footer from "../components/Footer"
import PriceForm from "../components/PriceForm";
import {useState} from "react";
import Head from "next/head";

const Results: NextPage = () => {
  const flights = useFlightContext().value;
  const [baggage, setBaggage] = useState<string>("0");
  const [seatSelection, setSeatSelection] = useState<boolean>(false);
  const listOfRandomNumbers = [1, 3, 2, 1, 2, 0, 1, 3, 2, 1, 2, 2, 0, 0, 3, 1, 2, 3, 0, 5, 1, 2, 2, 3, 3, 1]
  return (
    <>
      <Head>
        <title>Safe Sign Technologies</title>
        <meta name="description" content="Safe Sign Technologies" />
        <link rel="icon" href="/safesign.webp" />
      </Head>
      <Box bg="gray.100" minHeight="100vh">
        <Header/>
        <Container maxW="5xl">
          <Box sx={{display: "flex", justifyContent: "space-between"}}>
          <Heading mb={5}>Flights</Heading>
          <PriceForm handleBaggage={(value) => setBaggage(value)} handleSeatSelection={(value) => setSeatSelection(value)} />
          </Box>
          {flights.map((flight: any, i: number) => (
            <FlightBox baggage={baggage} randomNumber={listOfRandomNumbers[i]} seatSelection={seatSelection} key={i} flight={flight}/>
          ))}
        </Container>
        <Footer/>
      </Box>
    </>
  )
}

export default Results;