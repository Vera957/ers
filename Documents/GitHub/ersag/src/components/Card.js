import {
    Card,
    //CardHeader,
    CardBody, CardFooter, Text, Image, Divider, ButtonGroup, Grid, IconButton,
    //useDisclosure,
} from '@chakra-ui/react'
import { SlBasket, SlHeart } from 'react-icons/sl'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToLikes, addToBasket } from '../redux/slice'
import { source } from '../source'

export const CardHolder = ({ item }) => {
    const { img, name, id } = item
    const dispatch = useDispatch()
    return (<Card bg='whiteAlpha.800'>
        <Link to={`/product/${id}`}>
        <CardBody >
            <Image
                src={img}
                alt='damla-500'
            />
            <Text as='h2'>{name}</Text>
            </CardBody>
        </Link>
        <Divider />
        <CardFooter>
            <ButtonGroup >
                <IconButton icon={<SlBasket />} onClick={() => dispatch(addToBasket(id))} />
                <IconButton icon={<SlHeart />} onClick={() => dispatch(addToLikes(id))} />
            </ButtonGroup>
        </CardFooter>
    </Card>
    )
}

export const CardList = () => {
    return (<>
        <Grid
            gridGap={[2,3]}
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)',
                'repeat(3, 1fr)'
            ]}
        >
            {source.map(item => <CardHolder item={item} key={item.name} />)}
        </Grid></>)
}