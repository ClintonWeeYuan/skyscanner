import {createContext, ReactNode, FC, useState, useContext} from "react";
import {data} from "../DataFormat";


export interface FlightState {
    value: any,
    setValue:(value: any) =>void,
}

const emptyState: FlightState = {
    value: [],
    setValue:(value: any) => {},
}

const FlightContext = createContext(emptyState);

export function useFlightContext(){
    return useContext(FlightContext);
}

interface Props {
    children: ReactNode
}

const FlightContextProvider : FC<Props> = ({children}) => {
    const [value, setValue] =  useState<any>([]);

    function handleValue (value : any) {
        setValue(value);
    }

    const initialState : FlightState = {
        // value: data.data.data,
        value: value,
        setValue:handleValue
    }

    return(
      <FlightContext.Provider value={initialState}>{children}</FlightContext.Provider>
    )
}

export default FlightContextProvider;