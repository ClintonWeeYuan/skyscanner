import {FC} from "react";
import {Box, Checkbox, Select} from '@chakra-ui/react'

interface Props {
  handleSeatSelection: (value: boolean) => void;
  handleBaggage: (value: string) => void;
}

const PriceForm: FC<Props> = ({handleSeatSelection, handleBaggage}) => {
  return (
    <Box sx={{display: "flex", width: "40%", alignItems: "center"}}>

        <Checkbox colorScheme="whatsapp" onChange={(e) => handleSeatSelection(e.target.checked)} sx={{ width:"100%"}}>Seat Selection</Checkbox>

      <Select colorScheme="whatsapp" onChange={(e) => handleBaggage(e.target.value)} sx={{flex: 1}}>
        <option value={0}>No baggage</option>
        <option value={10}>10 kg</option>
        <option value={20}>20 kg</option>
        <option value={30}>30 kg</option>
      </Select>
    </Box>
  )
}

export default PriceForm;