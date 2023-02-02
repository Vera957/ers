import { ListItem, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, Box, Text, Grid, Image, Flex, Input,IconButton } from "@chakra-ui/react"
import { TiDelete } from "react-icons/ti"
import { useDispatch,  } from "react-redux"
import { setQuantity, deleteFromBasket } from "../redux/slice"
import { useSelector } from "react-redux"
import { basket } from "../redux/selectors"

export const GoodsList = () => {
    const dispatch = useDispatch()
   
    
    const basketStaff = useSelector(basket)
    let sum = basketStaff.reduce((accumulator, currentValue) =>
        accumulator + Number(currentValue.price) * Number(currentValue.quantity)
        , 0)
    return (<>
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        Додані товари:
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <List display='grid' gridGap={[2, 4]}  >
                    {basketStaff.length === 0 && <Text>Тут пусто</Text>}
                    {basketStaff.length > 0 && (basketStaff.map(({ img, name, ml, price, id, quantity }) => {                       
                        return(
                        <ListItem key={img} >
                        <Grid border='1px' borderColor='brand.100' borderRadius={['sm', 'md', 'lg']} p={[2, 4]}
                            gridTemplateAreas={[`"name remove""name price""img quantity""img sum"`,
                                `"name remove""name price""img quantity""img sum"`,
                                `"img name price quantity sum remove"`,
                            ]}
                            gridGap={[0, 1, 4]}
                            templateColumns={['1fr', '1fr 1fr', '1fr 2fr 1fr 2fr 1fr']}
                            gridTemplateRows={['1fr 1fr 1fr 1fr', '1fr 1fr 1fr 1fr', '1fr']}
                            alignItems='center' >
                            <Image src={img} gridArea='img' boxSize='50px' ml='auto' mr='auto'></Image>
                            <Box gridArea='name'>{name} (Об'єм: {ml}мл) </Box>
                            <Text gridArea='price' >Вартість: {price}грн</Text>
                            <Flex gridArea='quantity' as='form' alignItems='center'><Text mr='0.5em'>Кількість: </Text>
                                <Input type='number'
                                    size='sm'
                                    minW='1em'
                                    maxW='4em'
                                    required
                                    placeholder={Number(quantity)}
                                    onChange={(e) => dispatch(setQuantity([id, e.target.value]))}>
                                </Input>
                            </Flex>
                            <Text gridArea='sum' >Сума: {Number(price) * Number(quantity)}грн</Text>
                            <IconButton gridArea='remove' ml='auto' icon={<TiDelete />} bg='inherit' color='brand.300' onClick={() => dispatch(deleteFromBasket(id))} maxW={2} />
                        </Grid>
                    </ListItem>)
                    }))}
                    <Text>Загальна сума: {sum}грн</Text>)
                </List>
            </AccordionPanel>
        </AccordionItem>
    </>)
}