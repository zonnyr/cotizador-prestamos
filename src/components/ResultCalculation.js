import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ResultCalculation = (props) => {

    const { 
        capital, 
        interest, 
        months, 
        total, 
        errorMessage 
    } = props

    return (
        <View style={styles.content}>
            {
                total && (
                    <View style={styles.boxResult}>
                        <Text style={styles.title}>Resumen</Text>
                        <DataResult title={"Cantidad Solicitada:"} value={`$ ${capital}`}/>
                        <DataResult title={"Interes %:"} value={`% ${interest}`}/>
                        <DataResult title={"Plazos:"} value={`Meses ${months}`}/>
                        <DataResult title={"Pago Mensual:"} value={`$ ${total.monthlyFee}`}/>
                        <DataResult title={"Total a pagar:"} value={`$ ${total.totalPayable}`}/>
                    </View>
                )
            }
            <View>
                <Text style={styles.error}>
                    { errorMessage }
                </Text>
            </View>
        </View>
    )
}

export default ResultCalculation

function DataResult (props) {
    const { title, value } = props
    return (
        <View style={styles.value}>
            <Text>{title}:</Text>
            <Text>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    boxResult:{
        padding: 15,
    },
    content: {
        marginTop: 0,
        marginHorizontal: 40,
    },
    error: {
        textAlign: "center",
        color: "red",
        fontWeight: 'bold',
        fontSize: 20
    }
})
