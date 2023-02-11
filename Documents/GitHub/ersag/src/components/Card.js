import {
    Card,
    //CardHeader,
    CardBody, CardFooter, Text, Image, Divider, ButtonGroup, Grid, IconButton,
    //useDisclosure,
} from '@chakra-ui/react'
import { SlBasket, SlHeart } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToLikes, addToBasket } from '../redux/slice'
//import { useState } from 'react'
import { basket, likes } from '../redux/selectors'

export const CardHolder = ({ item }) => {
    const { img, name, id } = item
    const basketed = useSelector(basket).filter(e => e.id === id)?.length > 0 ? 'brand.200' : 'inherit'
    const liked = useSelector(likes).filter(e => e === id)?.length > 0 ? 'brand.200' : 'inherit'
    
    const dispatch = useDispatch()
    return (<Card bg='whiteAlpha.800'>
        <Link to={`/product/${id}`}>
            <CardBody  >
                <Image
                    src={img}
                    alt='damla-500'
                    ml='auto'
                    mr='auto'
                />
                <Text as='h2' h='3em' textAlign='center' mt={[2, 4]}>{name}</Text>
            </CardBody>
        </Link>
        <Divider />
        <CardFooter>
            <ButtonGroup ml='auto' mr='auto'>
                <IconButton icon={<SlBasket />} onClick={() => dispatch(addToBasket(id))}
                bg={basketed}
                />
                <IconButton icon={<SlHeart />} onClick={() => dispatch(addToLikes(id))}
                    bg={liked} />
            </ButtonGroup>
        </CardFooter>
    </Card>
    )
}

export const CardList = ({ source }) => {
    return (<>
        <Grid
            gridGap={[2, 3]}
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)',
                'repeat(3, 1fr)'
            ]}
        >
            {source.map(item => <CardHolder item={item} key={item.name} />)}
        </Grid></>)
}