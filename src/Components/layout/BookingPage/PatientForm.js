import React,{useState}  from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import {Picker} from "@react-native-picker/picker"

import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';

const Demoform =  ({phone,address,name,navigation,slotindex,dayindex,id,did,date,start}) => {
    const [pickerValue,setPickerValue]=useState("Male")

  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
        name: name,
        phone: phone,
        address:address,
        gender: '',
        age: '',

      }
  });
  const onSubmit = data => {
    console.log(data);
    navigation.navigate("SelectPaymentPage",{...data,slotindex,dayindex,id,did,type:'own',date,start})

  };

  const onChange = arg => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  console.log('errors', errors);

  return (
    <View style={{marginHorizontal:10}} >
                        <Text style={styles.label}> Name</Text>

     <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                        )}
                        name="name"
                      
                    />
                    {errors.name && <Text>This is required.</Text>}
                    <Text style={styles.label}> Phone</Text>
                <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                        )}
                        name="phone"
                       
                    />
                    {errors.Phone && <Text>This is required.</Text>}
                    <Text style={styles.label}> Address</Text>
                <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                        )}
                        name="address"
                       
                    
                    />
                    {errors.address && <Text>This is required.</Text>}
                    <Text style={styles.label}> Gender</Text>
                <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Picker
                            style={{height:40, padding: 10,
                                borderRadius: 4,  borderColor: 'black',borderWidth:1}}
                            selectedValue={value}
                            onValueChange={value => onChange(value)}>
                            <Picker.Item label="Male" value="Male"/>
                             <Picker.Item label="Female" value="Female"/>
                            </Picker>
                        )}
                        name="gender"
                      
                    />
                    {errors.gender && <Text>This is required.</Text>}
                    <Text style={styles.label}> Age</Text>
                <Controller
                        control={control}
                        rules={{
                        required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                        )}
                        name="age"
                        
                    />
                    {errors.age && <Text>This is required.</Text>}
    
    

      <View style={styles.button}>
        <Button
          style={styles.buttonInner}
          color
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    label: {
        color: 'black',
        margin: 20,
        marginLeft: 0,
      },
      button: {
        marginTop: 40,
        color: 'white',
        height: 40,
        backgroundColor: 'teal',
        borderRadius: 4,
        marginBottom:5,
      },
    
      input: {
        backgroundColor: 'white',
        borderColor: '#bdbdbd',
        borderWidth:1,
        
        height: 40,
        padding: 10,
        borderRadius: 4,
      },
});

export default Demoform
