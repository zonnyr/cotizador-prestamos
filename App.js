import React, { Fragment, useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import ResultCalculation from './src/components/ResultCalculation';

import colors from './src/utils/colors';

const styles = StyleSheet.create({
  fondo: {
    backgroundColor: "white",
    height: "100%",
    width: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,

  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 15,
  },
});

export default function App() {

  const [capital, setCapital] = useState(null)
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null)
  const [total, setTotal] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if(capital && interest && months){
      calculate()
    }
    else {
      reset()
    }
  }, [capital, interest, months])

  const calculate = () => {
    reset()
    if(!capital){
      setErrorMessage("añade la cantidad que quieres solicitar")
    }
    else if(!interest){
      setErrorMessage("añade el interes del prestamo")
    }
    else if(!months){
      setErrorMessage("añade la cantidad de meses")
    }
    else{
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i)
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ',')
      })
    }
    
  }

  const reset = () => {
    setErrorMessage("")
    setTotal(null)
  }

  return (
    <Fragment>
      <View style={styles.fondo}/>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}/>
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>
      <ResultCalculation
        capital={capital}
        interest={interest}
        months={months}
        total={total}
        errorMessage={errorMessage}
      />
      <Footer
        calculate={calculate}
      />
    </Fragment>
  )
}