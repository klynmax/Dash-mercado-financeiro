import React from 'react';
import { withStyles, Container, Grid, Button, Box } from "@material-ui/core";
import { BsGraphUp, BsGraphDown, BsCreditCard } from "react-icons/bs";

import Card from './../../components/card'
import { OcorrenciaDolar } from './../../service/dolar'

function Dolar(props){

    const dolar = OcorrenciaDolar();

    return(
        <Container>
                <Box display="flex"  flexWrap="wrap" >
                    <Box mx={2}>
                        <Card 
                            icon={<BsCreditCard style={{width: 40, height: 40, marginLeft: 20}} color="brown" />}
                            title={"Preço de Compra"}
                            value={"R$" + dolar.USD?.bid}
                        />
                    </Box>
                    <Box mx={2}>
                        <Card 
                        icon={<BsCreditCard style={{width: 40, height: 40, marginLeft: 20}} color="brown" />}
                        title={"Preço de Venda"}
                        value={"R$ " + dolar.USD?.ask}
                        /> 
                        
                    </Box>
                    <Box mx={2} >
                        <Card 
                        icon={<BsGraphDown style={{width: 40, height: 40, marginLeft: 20}} color="red" />}
                        title={"Mínimo"}
                        value={"R$ " + dolar.USD?.low}
                        />
                    </Box>
                    <Box mx={2} >
                        <Card 
                        icon={<BsGraphUp style={{width: 40, height: 40, marginLeft: 20}} color="green" />}
                        title={"Máximo"}
                        value={"R$ " + dolar.USD?.high}
                        />
                    </Box>
                </Box>
        </Container>
    );
}

export default Dolar;