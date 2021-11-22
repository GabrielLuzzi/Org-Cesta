import React from 'react'
import { View, Image, StyleSheet, FlatList } from 'react-native'

import Texto from '../../../componentes/Texto'

export default function Itens({titulo, lista}){
    const renderItem = ({item: {nome, imagem}}) => <View style={estilos.item} key={nome}> 
    <Image source={imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome} > { nome } </Texto>
</View>
 
    return <>
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <FlatList
        data={lista}
        renderItem = {renderItem}
        keyExtractor = {({ nome }) => nome }
    />

    {lista.map(({nome, imagem}) => {
        return <View style={estilos.item} key={nome}> 
            <Image source={imagem} style={estilos.imagem}/>
            <Texto style={estilos.nome} > { nome } </Texto>
        </View>
    }) }
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        
    },

    imagem: {
        width: 46,
        height: 46,
    },

    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: '#464646',
    }
})