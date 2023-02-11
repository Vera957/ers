import { Container } from "@chakra-ui/react"
import { Producer } from "../components/Producer"

export const ProducerPage = () => {
    return (<Container maxW='5xl' pt={['50px', '75px']}>
        <Producer/>
    </Container>)
}