import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';

export function ColorPickerScreen() {
    const ColorPickerExample = () => {
        const [color, setColor] = useState('#000000');
        const [showColorPicker, setShowColorPicker] = useState(false);

        const handleColorChange = (newColor) => {
            setColor(newColor);
        };

        const toggleColorPicker = () => {
            setShowColorPicker(!showColorPicker);
        };

        return (
            <View>
                <TouchableOpacity onPress={toggleColorPicker}>
                    <View style={{ width: 100, height: 100, backgroundColor: color }} />
                </TouchableOpacity>

                {showColorPicker && (
                    <ColorPicker
                        onColorChange={handleColorChange}
                        style={{ flex: 1 }}
                        hideSliders={true}
                    />
                )}
            </View>
        );
    };
}

