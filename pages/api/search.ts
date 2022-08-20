// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import 'dotenv/config'
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const RAPID_API_KEY = process.env.RAPID_API_KEY || "";
  const {origin, dest, date} = req.body;
  const originOptions = {
    method: 'GET',
    url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
    params: {query: origin.toLowerCase()},
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
    }
  }

  const destOptions ={
    method: 'GET',
    url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchAirport',
    params: {query: dest.toLowerCase()},
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
    }
  }

  try{
    const originCode : string= (await axios.request(originOptions)).data.data[0].CityId;

    const destCode : string= (await axios.request(destOptions)).data.data[0].CityId;


    const options = {
      method: 'GET',
      url: 'https://skyscanner50.p.rapidapi.com/api/v1/searchFlights',
      params: {
        origin: originCode,
        destination: destCode,
        date: date,
        adults: '1',
        currency: 'USD',
        countryCode: 'US',
        market: 'en-US'
      },
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'skyscanner50.p.rapidapi.com'
      }
    };

    const data = await axios.request(options);

    res.status(200).send(data.data.data);
  } catch(e){
    console.log(e);
    res.status(400).json({error: e});
  }


}
