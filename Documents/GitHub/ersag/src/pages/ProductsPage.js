import { Tab, TabList, TabPanels, TabPanel, Tabs } from "@chakra-ui/react"
import { source } from '../source'
import { CardList } from "../components/Card"
import { Container } from "@chakra-ui/react"

export const ProductsPage = () => {
    return ( <Container maxW='5xl' p='0px'>
        <Tabs isFitted variant='enclosed' pt={['50px', '75px']}>
            <TabList>
                <Tab
                  _selected={{  color: 'brand.400' }}
                >Побутова хімія</Tab>
                <Tab
                  _selected={{  color: 'brand.400' }}
                >Засоби особистої гігієни</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <CardList source={source.filter(el => el.type === 'clean')} />
                </TabPanel>
                <TabPanel>
                    <CardList source={source.filter(el => el.type === 'beauty')} />
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Container>)
}