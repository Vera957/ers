import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Link,
    ListItem,
    List,
    Text,
    Image,
} from '@chakra-ui/react'
import { SlBasket } from "react-icons/sl"
//SlBasketLoaded
//import { useRef } from 'react'
import { Icon } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { basket } from '../redux/selectors'
import { source } from '../source'
//import { useBreakpoints } from './mediaQuery'




export const ModalCalc = (props) => {
    //const x = useBreakpoints()
    //console.log('x.isMobile', x.isMobile)

    const { isOpen, onClose, onOpen } = useDisclosure()
    return (<>
        <Link
            justifySelf='flex-end'
            display="block"
            bg='inherit' color='inherit'
            onClick={onOpen}
            variant='link'
            textStyle='inherit'
            mr='1rem'
            lefticon={<SlBasket boxSize={['14px', '20px']} />}
        ><Icon as={SlBasket}></Icon> Корзина
        </Link>

        <Modal isOpen={isOpen} onClose={onClose} size={['full', 'md', '3xl']}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Корзина</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <BasketList />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
    )
}

const BasketList = () => {
    const selectList = useSelector(basket)
    const list = source.filter(e => selectList.includes(e.id))

    return (<List>
        {list.map(({ img, name, ml, price }) => <ListItem key={img}>
            <Image src={img} boxSize='50px'></Image>
            <Text>{name}</Text>
            <Text>Вартість: {price}грн</Text>
            <Text>Об'єм: {ml}мл</Text>
        </ListItem>)}
    </List>)
}