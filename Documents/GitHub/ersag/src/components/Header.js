
import {
    Box,
    Image,
    Icon,
    IconButton,
    Spacer,
    Button, Drawer, DrawerOverlay, DrawerContent,
    DrawerCloseButton, DrawerBody,
    useDisclosure,
    List, ListItem,
    Container,
} from "@chakra-ui/react"
import { ModalCalc } from "./ModalCalc"
import { SlHeart } from "react-icons/sl"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useBreakpoints } from '../mediaQuery'
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { resetAll } from '../redux/slice'
import { GiLaurels } from 'react-icons/gi'
import {
    Link,
} from 'react-router-dom'
export const Header = () => {
    const x = useBreakpoints()
    return (<>
        {x.isMobile && (<HeaderMobile />)}
        {x.isTablet && (<HeaderDesktop />)}
    </>
    )
}

export const HeaderMobile = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
    const dispatch = useDispatch()

    return (<>
        <Box textStyle='p'
            className='mdx-prose'
            as="header"
            bg="brand.300"
            color='brand.200'
            zIndex='200'
            pos='fixed'
            w='100vw'
            display='flex'
            {...props}
        >
            <Image src='https://live.staticflickr.com/65535/52624052537_aaaf2890a8_m.jpg' w={['50px', '75px']} ></Image>
            <Button bg='red.400' onClick={() => dispatch(resetAll())}>reset</Button>


            <Button ref={btnRef}
                as={IconButton}
                aria-label='Options'
                icon={<GiHamburgerMenu />}
                variant='link'
                _hover={{ color: "brand.200" }}
                ml='auto'
                bg="brand.300"
                color='brand.200'
                onClick={onOpen}>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='brand.100' color='brand.300'>
                    <DrawerCloseButton />
                    {/*<DrawerHeader>Create your account</DrawerHeader>*/}

                    <DrawerBody>
                        <List spacing={3}>
                            <ListItem>
                                <Link to='/wishlist' >
                                     <Icon as={SlHeart} /> 
                                </Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/producer' >Виробник</Link>
                            </ListItem>
                            <ListItem>
                                
                            </ListItem>
                            <ListItem>
                                <ModalCalc />
                            </ListItem>
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    </>
    )
}


const HeaderDesktop = (props) => {
    const dispatch = useDispatch()

    return (<>
        <Box bg='brand.100'>
            <Box w='100%' pos='fixed' as="header" bg="brand.300" color='brand.200' zIndex='200'>
                <Container display='flex' alignItems='center' gridGap={['10px', '20px']} maxW='5xl'>
                    <Image src='https://live.staticflickr.com/65535/52624052537_aaaf2890a8_m.jpg' w={['50px', '75px']} ></Image>
                    <Box display='flex' gridGap={[2, 4]} w='100%'>
                        <Button bg='red.400' size='sm' onClick={() => dispatch(resetAll())}>reset</Button>
                        <Link to='/' >Продукти</Link>
                        <Link to='/producer' ><Icon as={GiLaurels} />Виробник</Link>
                        <Link to='/wishlist' ><Icon as={SlHeart } />Бажане</Link>
                        <Spacer />
                        <ModalCalc />
                    </Box>
                </Container>
            </Box>
        </Box>
    </>)
}