import React from 'react';
import { ScrollView, StyleSheet, Dimensions, View } from 'react-native';


import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Itens from './componentes/Itens';

const width = Dimensions.get('screen').width

export default function Cesta({topo, detalhes, itens}){
    

    return <ScrollView>
        <Topo {...topo} />
        <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Itens {...itens}/>
        </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
})
