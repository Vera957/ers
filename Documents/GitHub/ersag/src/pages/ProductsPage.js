import { Tab, TabList, TabPanels, TabPanel, Tabs, Container } from "@chakra-ui/react"
import { source } from '../source'
import { CardList } from "../components/Card"

export const ProductsPage = () => {
    return (<Container maxW='5xl'>
        <Tabs isFitted variant='enclosed'>
            <TabList>
                <Tab _selected={{ bg: 'brand.200', color: 'brand.300' }} fontSize={['14px', '20px']} >Побутова хімія</Tab>
                <Tab _selected={{ bg: 'brand.300', color: 'brand.200' }} fontSize={['14px', '20px']} >Засоби особистої гігієни</Tab>
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