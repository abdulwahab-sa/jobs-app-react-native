import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './welcome.style';

const Welcome = ({ searchTerm, setSearchTerm }) => {
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello Abdul!</Text>
				<Text style={styles.welcomeMessage}>Find your desired job</Text>
			</View>
			<View style={styles.searchContainer}>
				<View style={styles.searchWrapper}>
					<TextInput
						value={searchTerm}
						onChangeText={(text) => setSearchTerm(text)}
						placeholder="Search for jobs"
						style={styles.searchInput}
					/>
				</View>
			</View>
		</View>
	);
};

export default Welcome;
