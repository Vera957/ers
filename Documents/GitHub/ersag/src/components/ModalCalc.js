import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Link,
    Accordion,
} from '@chakra-ui/react'
import { SlBasket } from "react-icons/sl"
import { UserData } from '../components/UserData'
import { Icon } from '@chakra-ui/react'
import { GoodsList } from './GoodsList'


export const ModalCalc = (props) => {
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
                <ModalHeader p={[2, 4]} minH='3em'>Корзина</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <BasketList />
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
    )
}

const BasketList = () => {
    return (<>
        <Accordion defaultIndex={[0]} allowMultiple>
            <GoodsList />
            <UserData />
        </Accordion>
    </>)
}


