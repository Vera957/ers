
import {
    Box,
    Image,
    IconButton,
    Spacer,
    Button, Drawer, DrawerOverlay, DrawerContent,
    DrawerCloseButton, DrawerBody,
    useDisclosure,
    List, ListItem,
    Container,
} from "@chakra-ui/react"
import { ModalCalc } from "../ModalCalc"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useBreakpoints } from '../mediaQuery'
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { resetAll } from '../redux/slice'
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

/*
const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
}*/


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
                                <Link to='/wishlist' >Бажане</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/producer' >Виробник</Link>
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
                        <Button bg='red.400' onClick={() => dispatch(resetAll())}>reset</Button>

                        <Link to='/' >Продукти</Link>
                        <Link to='/producer' >Виробник</Link>
                        <Link to='/wishlist' >Бажане</Link>
                        <Link to='/basket' >Корзина</Link>
                        <Spacer />
                        <ModalCalc />
                    </Box>
                </Container>
            </Box>
        </Box>
    </>)
}