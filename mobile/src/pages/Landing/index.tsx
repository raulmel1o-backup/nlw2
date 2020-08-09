import React, { useState, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import landingImg from '../../assets/images/landing.png';
import purpleHeartIcon from '../../assets/images/icons/heart.png';
import studyIcon from '../../assets/images/icons/study.png';

import styles from './styles';
import api from '../../services/api';

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(res => {
            const { total } = res.data;

            setTotalConnections(total);
        })
    }, []);

    const { navigate } = useNavigation();

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses');
    }

    function handleNavigateToStudyPages() {
        navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja bem-vindo, {"\n"}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton 
                    onPress={handleNavigateToStudyPages}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />

                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                <RectButton 
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={handleNavigateToGiveClassesPage}
                >
                    <Image source={giveClassesIcon} />

                    <Text style={styles.buttonText}>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de {totalConnections} conexões já realizadas {" "}
                <Image source={purpleHeartIcon} />
            </Text>

        </View>
    );
}

export default Landing;