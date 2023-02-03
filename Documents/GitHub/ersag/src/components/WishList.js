import { useDispatch, useSelector } from "react-redux"
import {
    basket
} from "../redux/selectors"
import { TiDelete } from 'react-icons/ti'
import { deleteFromLikes } from "../redux/slice"
import { Text, Flex, Image, IconButton, Box } from '@chakra-ui/react'
import { SlBasket, SlBasketLoaded } from "react-icons/sl"
import { addToBasket, deleteFromBasket } from "../redux/slice"




export const WishList = ({ id }) => {
    const dispatch = useDispatch()

    const basketedProduct = useSelector(basket).findIndex(e => e.id === id) !== -1
    const basketed = basketedProduct ? <SlBasketLoaded /> : <SlBasket />
    const switcherBasket = basketedProduct ? deleteFromBasket : addToBasket



    //const dispatch = useDispatch()

    return (<div key={id + 'w'}>
        {id.map(item => {
            const { describe, usage, ml, id, img, name } = item
            return (
                <Flex gridGap={[2, 4]} key={id + 'i'} pt={[2, 4]}>
                    
                    <div>
                        <Text as='h4' w='100vw'>{name}</Text>
                        <Image src={img} boxSize='150px' ></Image>
                        <IconButton icon={basketed} onClick={() => dispatch(switcherBasket(id))} bg='inherit' />
                        <IconButton gridArea='remove' icon={<TiDelete />} bg='inherit' color='brand.300' onClick={() => dispatch(deleteFromLikes(id))} maxW={2} />
                    </div>
                    <div>
                        <Text as='h3' color='brand.400'>Опис: </Text>{describe}<Text></Text>
                        <Text as='h3' color='brand.400'>Метод використання: </Text><Text> {usage}</Text>
                        <Text>{ml}мл</Text>
                    </div>
                </Flex>
            )
        })}
    </div>)
}