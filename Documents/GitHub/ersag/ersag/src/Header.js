
import {
    Box,
    Link,
    Image,
    IconButton,
    Spacer,
    Button, Drawer, DrawerOverlay, DrawerContent,
    DrawerCloseButton, DrawerBody,
    useDisclosure,
    List, ListItem,
} from "@chakra-ui/react"
import { ModalCalc } from "./ModalCalc"
import { GiHamburgerMenu } from 'react-icons/gi'
import { useBreakpoints } from './mediaQuery'
import { useRef } from "react"

export const Header = () => {
    const x = useBreakpoints()
    console.log('isLaptop, isMobile', x.isLaptop, x.isMobile)
    return (<>
        {x.isMobile && (<HeaderMobile />)}
        {x.isTablet && (<HeaderDesktop />)}</>
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
            <Image src='logo.jfif' w={['50px', '75px']} ></Image>

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
                                <Link href='' >Продукти</Link>
                            </ListItem>
                            <ListItem>
                                <Link href='' >Виробник</Link>
                            </ListItem>
                            <ListItem>
                                <ModalCalc />
                            </ListItem>
                        </List>
                    </DrawerBody>

                    {/*<DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Save</Button>
    </DrawerFooter>*/}
                </DrawerContent>
            </Drawer>
        </Box>
    </>
    )
}


const HeaderDesktop = (props) => {
    return (<>
        <Box textStyle='p' {...props} bg='brand.100'>
            <Box w='100%' pos='fixed' as="header" bg="brand.300" color='brand.200' zIndex='200'>
                <Box display='flex' alignItems='center' gridGap={['10px', '20px']} maxW='1440px'>
                    <Image src='logo.jfif' w={['50px', '75px']} ></Image>
                    <Box display='flex' gridGap={[2, 4]} w='100%'>
                        <Link href='' >Home</Link>
                        <Link href='' >Продукти</Link>
                        <Link href='' >Home</Link>
                        <Link href='' >Виробник</Link>
                        <Spacer />
                        <ModalCalc />
                    </Box>
                </Box>
            </Box>
        </Box>
    </>)
}