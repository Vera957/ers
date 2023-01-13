import {
    Card,
    //CardHeader,
    CardBody, CardFooter, Stack, Text, Heading, Image, Divider, ButtonGroup, Button, Grid,
    //useDisclosure,
} from '@chakra-ui/react'

export const CardHolder = ({ source: { i, n, u, p, d } }) => {
    return (<Card>
        <CardBody>
            <Image
                src={i}
                alt='damla-500'
            />
            <Stack mt='6' spacing='3' color='brand.300'>
                <Heading fontSize={['14px', '20px']}>{n}</Heading>
                <Text><b>Опис: </b>
                    {d}
                </Text>
                <Text><b>Спосіб застосування: </b>{u}</Text>
                <Text fontSize='2xl'>
                    {p}grn
                </Text>
            </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
            <ButtonGroup spacing='2'>
                <Button variant='solid' bg='brand.300' color='brand.200'>
                    Додати в кошик
                </Button>
            </ButtonGroup>
        </CardFooter>
    </Card>
    )
}

export const CardList = ({source}) => {
    return (<>
        <Grid
            gridGap={[5, 4, 3, 2]}
            templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)',
                'repeat(3, 1fr)'
            ]}
            p = { [2, 10]}
        >
            {source.map(item => <CardHolder source={item} key={item.n} />)}
        </Grid></>)
}