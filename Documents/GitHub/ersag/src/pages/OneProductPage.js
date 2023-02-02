import { Product } from '../components/Product'
import { Container } from "@chakra-ui/react"

export const OneProductPage = () => {
    return (<Container maxW='5xl' pt={['50px', '75px']}>
        <Product/>
    </Container>)
}