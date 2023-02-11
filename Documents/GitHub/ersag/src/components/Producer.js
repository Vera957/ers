import { Box, Text, Image, Grid, GridItem } from "@chakra-ui/react"
import { sert } from "../source"
export const Producer = () => {
    return (<>
        <Box >
            <Text as='h5' fontWeight='bold' mt={[2, 4]}>Ерсаг (Ersag)</Text>
            <Text>Турецький виробник товарів для дому, косметики і парфюмерії.
                Філософія компанії включає екологічність по відношенню до людини і навколишнього середовища.
                Основою для продуктів став "мильний горіх", який відомий дезинфікуючими і миючими властивостями.
                Продукція сертифікована і перевірина роками на ринку, в тому числі і європейському.
            </Text>
            
            <Text as='h5' fontWeight='bold' mt={[2, 4]}>Сертифікати:</Text>
            <Grid gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr']} gridGap={[2,4]} p={[2,4]}>
                {Object.values(sert).map(e => <GridItem ml='auto' mr='auto' key={e}><Image
                    boxSize='250px'
                    fit='contain'
                    src={e}></Image></GridItem>)}
            </Grid>
        </Box>
    </>)
}