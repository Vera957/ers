import { Grid, IconButton, Image, Text } from "@chakra-ui/react"
import { useParams } from "react-router"
import { source } from "../source"
import { SlBasket, SlHeart } from "react-icons/sl"
import { addToBasket, addToLikes } from "../redux/slice"
import { useDispatch } from "react-redux"

export const Product = () => {
    const { id } = useParams()
    //console.log('typeof id', typeof id)
    const dispatch =useDispatch()
    const product = source.find(e => e.id.toString() === id)
    const { img, describe, usage, ml } = product
    return (<>
        <Grid>
            <Image src={img}></Image>
            <Text>{describe}</Text>
            <Text>{usage}</Text>
            <Text>{ml}</Text>
            <IconButton icon={<SlBasket />} onClick={() => dispatch(addToBasket(id))} />
            <IconButton icon={<SlHeart/>} onClick={()=>dispatch(addToLikes(id))} />
        </Grid>
    </>)
}