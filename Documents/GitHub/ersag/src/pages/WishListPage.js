import { Container } from "@chakra-ui/react"
import { WishList } from "../components/WishList"
import { useSelector } from "react-redux"
import { likes } from "../redux/selectors"

export const WishListPage = () => {
    const wishlist = useSelector(likes)

    return (<Container maxW='5xl' pt={['50px', '75px']} gridGap={['10px', '20px']} ml='auto' mr='auto'
    >
        <WishList id={wishlist} key={wishlist.id + 'k'} />
    </Container>)
}