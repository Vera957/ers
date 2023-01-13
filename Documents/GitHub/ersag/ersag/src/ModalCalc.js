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
    //Text,
    //ListItem
} from '@chakra-ui/react'
import { SlBasket } from "react-icons/sl"
//SlBasketLoaded
//import { useRef } from 'react'
import { Icon } from '@chakra-ui/react'
import { useBreakpoints } from './mediaQuery'




export const ModalCalc = (props) => {
    const x = useBreakpoints()
    console.log('x.isMobile', x.isMobile)

    const { isOpen, onClose,
        onOpen,
    } = useDisclosure()
    return (<>
        <Link
            justifySelf='flex-end'
            display="block"
            bg='inherit' color='inherit'
            onClick={onOpen}
            variant='link'
            textStyle='inherit'
            mr = '1rem'
            lefticon={<SlBasket boxSize={['14px', '20px']} />}
        ><Icon as={SlBasket}></Icon> Кошик
        </Link>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>111111</p>
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