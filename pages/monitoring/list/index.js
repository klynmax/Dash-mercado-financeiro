import React,  { useState, useEffect, Fragment } from "react";
import { withStyles, Container, Grid, Button, Box } from "@material-ui/core";
import BuildIcon from '@material-ui/icons/Build';
import Typography from '@material-ui/core/Typography';
import { spacing } from '@material-ui/system';

import api from '../../../shared/axios'
import Table from '../../../components/table'
import ButtonGroup from '../../../components/buttons/button_group';

import styles from './style'

const columns = [
    { id: 'name', label: 'Nome', minWidth: 200 },
    { id: 'type', label: 'Tipo', minWidth: 60 },
    { id: 'subproject', label: 'Subprojeto', minWidth: 170 },
    { id: 'macroarea', label: 'Macroárea', minWidth: 170, },
    { id: 'date', label: 'Data/Hora', minWidth: 170, },
  ];

const options = [ 
    'Todos os tipos', 'Contínuo', 'Por demanda'
];

function Monitoring(props){

    const { classes } = props;

    return(
        // <h1>Monitoramento</h1>
        <Container>
            <Grid container>
                <Box>
                    <div className={classes.typographyFilter}><Typography>Filtar por tipo:</Typography></div>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        startIcon={<BuildIcon />}
                    >   
                        CONFIGURAR
                    </Button>
                    <div className={classes.buttonGrid}>
                        <Box display="flex">
                            <Box >
                                <ButtonGroup options={options} />
                            </Box>
                            <Box mx={1}>
                                <ButtonGroup options={options} />
                            </Box>
                            <Box >
                                <ButtonGroup options={options} />
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Grid>
            <Grid container className={classes.gridTable}>
                <Table columns={columns} />
            </Grid>
        </Container>
    )
}

export default (withStyles(styles) (Monitoring));