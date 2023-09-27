import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

const ColorPickerComponent = () => {
    const [color, setColor] = useState('#ff0000');
    const [showPicker, setShowPicker] = useState(false);

    const onColorChange = (newColor: React.SetStateAction<string>) => {
        setColor(newColor);
    };

    return (
        <View style={styles.container}>
            <View style={[styles.colorPreview, { backgroundColor: color }]} />

            <TouchableOpacity onPress={() => setShowPicker(true)}>
                <Text style={styles.button}>Selecionar Cor</Text>
            </TouchableOpacity>

            {showPicker && (
                <View style={styles.pickerContainer}>
                    <ColorPicker
                        onColorSelected={(newColor: any) => {
                            onColorChange(newColor);
                            setShowPicker(false);
                        }}
                        style={styles.colorPicker}
                        color={color}
                    />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorPreview: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    button: {
        fontSize: 18,
        color: 'blue',
        marginBottom: 20,
    },
    pickerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
    },
    colorPicker: {
        flex: 1,
    },
});

export default ColorPickerComponent;
