import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, ErrorBoundary, Touchable, FlatList } from 'react-native';

const MyCard = () => {
    const [myDoc, setMyDoc] = useState([
        'Citizenship', 'Passport', 'Liscense', 'National ID'
    ])

    const addDocs = () => {
        setMyDoc([...myDoc, 'new list'])
    }
    return (
        <View style={styles.bodyContainer}>
            <FlatList
                data={myDoc}
                renderItem={({ item, index }) => {

                    return (

                        <View style={styles.singleCardContainer}>

                            <Image source={{ uri: 'https://images.freeimages.com/image/previews/549/kwanzaa-family-celebration-art-5690768.png?fmt=webp&w=500' }} style={styles.imgContainer} />

                            <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center', width: '98%', margin: 2, paddingHorizontal: 8, justifyContent: 'space-around' }}>
                                <Text style={styles.imgTitle}>{item}</Text>
                                <TouchableOpacity style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ padding: 2, textDecorationLine: 'underline' }}>
                                        Edit
                                    </Text>
                                    <Image source={require('../images/editing.png')} style={styles.eIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                }}
            />
            <TouchableOpacity style={styles.touchablePlus} onPress={() => addDocs()}>
                <Image source={require('../images/plus.png')} style={styles.plusIcon} />
            </TouchableOpacity>

        </View>

    )
}

export default MyCard;

const styles = StyleSheet.create({
    singleCardContainer: { backgroundColor: '#faf5f0', margin: 10, width: "95%", borderRadius: 16, alignItems: 'center' },
    imgContainer: { width: "100%", height: 190, margin: 2, resizeMode: 'cover', marginTop: 4 },
    imgTitle: {
        fontSize: 20, fontFamily: 'sans-serif-condensed', fontWeight: '600', letterSpacing: 0.5, width: '90%', paddingLeft: 10, textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 15, color: '#ba5f04'
    },
    eIcon: { width: 30, height: 30 },

    bodyContainer: { flex: 0, flexDirection: 'column', backgroundColor: '#fad8b9', margin: 4, alignItems: 'center', marginBottom: 60 },

    plusIcon: {
        width: 60, height: 60
    },
    touchablePlus: { position: 'absolute', bottom: 70, right: 28, backgroundColor: '#8bf5fc', borderRadius: 60, elevation: 10 }
});