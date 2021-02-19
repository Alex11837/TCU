import React from 'react';
import Conexion from '../conexion';
import authorize from '../autentication/authorize';

export default class TramitesRRHService extends React.Component {
    async getTramitesRRH() {
    const response = await Conexion.createQuery("SELECT ID, IDENTIFICACION,TELEFONO, TIPO, INGRESADA FROM TRAMITES_RRHH WHERE TRAMITE='1' AND CLASIFICADO='1' order by ID asc").then((res) => res);
        return response;
    }
}