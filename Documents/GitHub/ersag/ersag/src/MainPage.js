import { Header } from "./Header"
import {
    Box,
    //Grid
} from "@chakra-ui/react"
//import { CardHolder } from "./Card"
import { Hero } from "./Hero"
//import { CardList } from "./Card"
//import { source } from '../src/source'
import { TabFilter } from "./TabFilter"

export const Page = () => {
    return (<Box bg='brand.100' color='brand.300' >
        <Header />
        <Hero />
        {/*<CardList source={source}/> */}
        <TabFilter />
    </Box>)
}