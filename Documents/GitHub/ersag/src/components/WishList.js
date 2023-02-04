import { useDispatch, useSelector } from "react-redux"
import {
    basket
} from "../redux/selectors"
import { TiDelete } from 'react-icons/ti'
import { deleteFromLikes } from "../redux/slice"
import { Text, Flex, Image, IconButton, Box, Grid, List, ListItem } from '@chakra-ui/react'
import { SlBasket, SlBasketLoaded } from "react-icons/sl"
import { addToBasket, deleteFromBasket } from "../redux/slice"




export const WishList = ({ wishlist }) => {
    const dispatch = useDispatch()
    const inBasketProducts = useSelector(basket)
    const basketedProduct = inBasketProducts.findIndex(e => e.id === wishlist) !== -1
    const basketed = basketedProduct ? <SlBasketLoaded /> : <SlBasket />
    console.log('basketed', basketed)
    const switcherBasket = basketedProduct ? deleteFromBasket : addToBasket

    return (<List display='grid' gridGap='5px' mt='5px'>
            {wishlist.length>0 && wishlist.map(item => {
                const { describe, usage, ml, id, img, name } = item
                return (<ListItem key={id + 'i'} ><Box gridGap={[2, 4]} pt={[2, 4]} boxShadow='base' p='6' rounded='md' bg='white'>
                    <Text as='h4' textAlign='center' fontWeight='bold' mb={[2, 4]}>{name}</Text>
                    <Flex flexDirection={['column', 'row']}>
                        <Box minW='150px' gridGap={[2, 4]} justifyContent='center'>
                        
                            <Image src={img} boxSize='150px' ></Image>
                        
                        </Box>
                        <Grid gridGap={[2, 4]} pl={[2, 4]}>
                            <Text as='h3' color='brand.400'>Опис: </Text>{describe}<Text></Text>
                            <Text as='h3' color='brand.400'>Метод використання: </Text><Text> {usage}</Text>
                            <Text>{ml}мл</Text>
                            <Box
                                //textAlign={['end', 'center']}
                                alignSelf='flex-start' mt={[2, 4]}>
                                <IconButton icon={basketed}
                                    mr={[2, 4]}
                                    onClick={() => dispatch(switcherBasket(id))} bg='inherit' />
                                <IconButton
                                    gridArea='remove'
                                    icon={<TiDelete />}
                                    bg='inherit'
                                    color='brand.300'
                                    onClick={() => dispatch(deleteFromLikes(id))} maxW={2} />
                            </Box>
                        </Grid>
                    </Flex>
                </Box></ListItem>)
            })}
        {wishlist.length ===0 && <Text textAlign='center' p={[2,4]}>Тут пусто. Додайте щось щоб ознайомитись докладніше.</Text>}
        </List>)
    }

