import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppText from './components/AppText';

import * as Yup from 'yup';
import React, { useState } from 'react';
import { Formik } from 'formik';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length id required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePassowrdString = (passwordLength: number) => {
    let characterList = '';

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += uppercaseChars;
    }
    if (lowerCase) {
      characterList += lowercaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);

    setPassword(passwordResult);
    setIsPassGenerated(true);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characteIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characteIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPassGenerated(false);
    setLowerCase(false);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  // keyboardShouldPersistTaps="handled"

  return (
    <SafeAreaProvider>
      <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
          <View style={styles.formContainer}>
            <AppText style={styles.title}>Password Generator</AppText>
            <Formik
              initialValues={{ passwordLength: '' }}
              validationSchema={PasswordSchema}
              onSubmit={values => {
                console.log(values);

                generatePassowrdString(+values.passwordLength);
              }}
            >
              {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleSubmit,
                handleReset,
                /* and other goodies */
              }) => (
                <>
                  <View style={styles.inputWrapper}>
                    <View style={styles.inputColumn}>
                      <AppText style={styles.heading}>Password Length</AppText>
                      {touched.passwordLength && errors.passwordLength && (
                        <AppText style={styles.errorText}>
                          {errors.passwordLength}
                        </AppText>
                      )}
                      <TextInput
                        style={styles.inputStyle}
                        value={values.passwordLength}
                        onChangeText={handleChange('passwordLength')}
                        placeholder="Ex. 8"
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                  <View style={styles.inputWrapper}>
                    <AppText style={styles.heading}>Include lowercase</AppText>
                    <BouncyCheckbox
                      style={styles.checkbox}
                      useBuiltInState={false}
                      isChecked={lowerCase}
                      onPress={() => setLowerCase(!lowerCase)}
                      fillColor="#29AB87"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <AppText style={styles.heading}>Include UpperCase</AppText>
                    <BouncyCheckbox
                      style={styles.checkbox}
                      useBuiltInState={false}
                      isChecked={upperCase}
                      onPress={() => setUpperCase(!upperCase)}
                      fillColor="#FEB85D"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <AppText style={styles.heading}>Include Numbers</AppText>
                    <BouncyCheckbox
                      style={styles.checkbox}
                      useBuiltInState={false}
                      isChecked={numbers}
                      onPress={() => setNumbers(!numbers)}
                      fillColor="#FC80A5"
                    />
                  </View>
                  <View style={styles.inputWrapper}>
                    <AppText style={styles.heading}>Include Symbols</AppText>
                    <BouncyCheckbox
                      style={styles.checkbox}
                      useBuiltInState={false}
                      isChecked={symbols}
                      onPress={() => setSymbols(!symbols)}
                      fillColor="#29AB87"
                    />
                  </View>

                  <View style={styles.formActions}>
                    <TouchableOpacity
                      disabled={!isValid}
                      style={styles.primaryBtn}
                      onPress={() => handleSubmit()}
                    >
                      <AppText style={styles.primaryBtnTxt}>
                        Generate Password
                      </AppText>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.secondaryBtn}
                      onPress={() => {
                        handleReset();
                        resetPassword();
                      }}
                    >
                      <AppText style={styles.secondaryBtnTxt}>Reset</AppText>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
          {isPassGenerated ? (
            <View style={[styles.card, styles.cardElevated]}>
              <AppText style={styles.subTitle}>Result:</AppText>
              <AppText style={styles.description}>Long Press to copy</AppText>
              <AppText selectable style={styles.generatedPassword}>
                {password}
              </AppText>
            </View>
          ) : null}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#F2F5FA',
    paddingBottom: 24,
  },
  formContainer: {
    margin: 16,
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#16213e',
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#16213e',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
    color: '#16213e',
  },
  description: {
    color: '#758283',
    fontSize: 13,
    marginBottom: 12,
  },
  heading: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2b3445',
  },
  inputWrapper: {
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#E3E8F0',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  checkbox: {
    flex: 0,
    flexGrow: 0,
    width: 28,
  },
  inputColumn: {
    flexDirection: 'column',
    width: '100%',
  },
  inputStyle: {
    marginTop: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '100%',
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CAD5E2',
    backgroundColor: '#F8FAFD',
    color: '#16213e',
  },
  errorText: {
    fontSize: 12,
    marginTop: 4,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  primaryBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    marginHorizontal: 6,
    backgroundColor: '#5DA3FA',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#5DA3FA',
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 15,
  },
  secondaryBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    marginHorizontal: 6,
    backgroundColor: '#E3EAF3',
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 15,
    color: '#2b3445',
  },
  card: {
    padding: 20,
    borderRadius: 16,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    borderLeftWidth: 5,
    borderLeftColor: '#29AB87',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowColor: '#16213e',
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  generatedPassword: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#F2F5FA',
    color: '#16213e',
  },
});
