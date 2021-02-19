import React from 'react';
import Conexion from '../conexion';
import authorize from '../autentication/authorize';

export default class UserService extends React.Component {
    async getUser() {
    const response = await Conexion.createQuery("SELECT * FROM USUARIO WHERE USUARIO= 'USER' AND CLAVE = ''").then((res) => res);
        return response;
    }
}