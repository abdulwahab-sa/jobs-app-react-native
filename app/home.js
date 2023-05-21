import { SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, SIZES, icons, images } from '../constants';
import { ScreenHeaderBtn } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../components/common/header/screenheader.style';
import { Welcome } from '../components';
import { useState } from 'react';

const home = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: true,
					headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
					headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />,
					headerTitle: '',
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default home;
