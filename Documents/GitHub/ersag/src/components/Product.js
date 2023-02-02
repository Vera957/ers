import {
    Grid,
    // Icon,
    Image, Text, Flex, IconButton
} from "@chakra-ui/react"
import { useParams } from "react-router"
//import { source } from "../source"
import { SlBasket, SlBasketLoaded } from "react-icons/sl"
import { IoIosHeart, IoMdHeartDislike } from 'react-icons/io'
import {
    addToBasket, addToLikes, deleteFromBasket, deleteFromLikes,
    //addToLikes, deleteFromBasket, deleteFromLikes
} from "../redux/slice"
import {
    useDispatch,
    useSelector
} from "react-redux"
import {
    basket,
    likes
} from '../redux/selectors'
import { source } from "../source"

export const Product = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = source.find(e => e.id === id)
    const likedProduct = useSelector(likes).findIndex(e => e.id === id) !== -1
    const basketedProduct = useSelector(basket).findIndex(e=>e.id === id) !== -1
    const liked = likedProduct ? <IoIosHeart /> : <IoMdHeartDislike /> 
    const basketed = basketedProduct ? <SlBasketLoaded/>:<SlBasket/>
    const switcherLikes = likedProduct ? deleteFromLikes : addToLikes
    const switcherBasket = basketedProduct? deleteFromBasket : addToBasket
    const { img, describe, usage, ml } = product

    return (<>
        <Grid
            templateColumns={['1fr', 'auto 1fr']}
        >
            <Image src={img} ></Image>
            <Grid gridGap={[2, 4]} p={[2, 4]}>
                <Text as='h3' color='brand.400'>Опис: </Text>{describe}<Text></Text>
                <Text as='h3' color='brand.400'>Метод використання: </Text><Text> {usage}</Text>
                <Text>{ml}мл</Text>
                <Flex display='flex' >
                    <IconButton icon={basketed} onClick={() => dispatch(switcherBasket(id))} bg='inherit' />
                    <IconButton icon={liked} onClick={()=>dispatch(switcherLikes(id))} bg='inherit' />
                </Flex>
            </Grid>
        </Grid>
    </>)
}