
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
import { SlHeart, SlStar } from "react-icons/sl"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useBreakpoints } from '../mediaQuery'
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { resetAll } from '../redux/slice'
import { GiLaurels } from 'react-icons/gi'
import {
    Link, NavLink
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
        <Box
            // className='mdx-prose'
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
                                <Link to='/producer' ><Icon as={GiLaurels} ></Icon> Виробник</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/wishlist' ><Icon as={SlHeart} /> Бажане</Link>
                            </ListItem>
                            <ListItem>
                                <Link to='/' ><Icon as={SlStar} ></Icon> Продукти</Link>
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
        <Box w='100%' pos='fixed' bg="brand.300" color='brand.200' zIndex='200' p='0px' m='0px'>
            <Container as="header" display='flex' alignItems='center' ml='auto' mr='auto'
                gridGap={['10px', '20px']}
                maxW='5xl'>
                <Image src='https://live.staticflickr.com/65535/52624052537_aaaf2890a8_m.jpg' w={['50px', '75px']} ></Image>
                <Box display='flex' gridGap={[2, 4]} w='100%'>
                    <Button bg='red.400' variant='link' onClick={() => dispatch(resetAll())}>reset</Button>
                    <NavLink to='/' ><Icon as={SlHeart} mr='0.25em' />Продукти</NavLink>
                    <NavLink to='/producer' ><Icon as={GiLaurels} mr='0.25em' />Виробник</NavLink>
                    <NavLink to='/wishlist' ><Icon as={SlHeart} mr='0.25em' />Бажане</NavLink>
                    <Spacer />
                    <ModalCalc />
                </Box>
            </Container>
        </Box>
    </>)
}