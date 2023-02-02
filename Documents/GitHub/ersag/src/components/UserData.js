import { Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem, Box, Input, Text, Button, Icon, Grid } from "@chakra-ui/react"
import { TiInputChecked } from 'react-icons/ti'
import { useDispatch } from "react-redux"
import { setUserData } from "../redux/slice"

export const UserData = () => {
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(setUserData([e.target.name.value, e.target.tel.value]))
        e.target.reset()
    }
    return (<>
        <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
                <h2>
                    <AccordionButton>
                        <Box as="span" flex='1' textAlign='left'>
                            Дані для замовлення
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                    <form  onSubmit={handleSubmit}>
                        <Grid gridGap={[2, 4]} >
                            <Text>Заповніть контактну інформацію ми Вам передзвоним: </Text>
                            <Input placeholder="Iм'я" required type='text' name='name'></Input>
                            <Input placeholder="Телефон" required type='tel' name='tel'></Input>
                            <Button ml='auto' mr='auto' variant='outline' bg='brand.200' type='submit' ><Icon as={TiInputChecked} />Підтверджую</Button>
                        </Grid>
                    </form>
                </AccordionPanel>
            </AccordionItem>


        </Accordion>
    </>)
}