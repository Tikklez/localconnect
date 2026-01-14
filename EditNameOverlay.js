import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Image, Text, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [name_ID, onChangename_ID] = useState('');
	const [email_ID, onChangeemail_ID] = useState('');
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FFFFFF",
					borderTopLeftRadius: 34,
					borderTopRightRadius: 34,
					paddingTop: 33,
					paddingHorizontal: 24,
				}}>
				<View 
					style={{
						marginBottom: 48,
					}}>
					<View 
						style={{
							alignItems: "flex-end",
							marginBottom: 22,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/osb4e7nf_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 32,
								height: 32,
							}}
						/>
					</View>
					<View >
						<View 
							style={{
								marginBottom: 40,
							}}>
							<View 
								style={{
									marginBottom: 14,
								}}>
								<Text 
									style={{
										color: "#0C111B",
										fontSize: 16,
										marginBottom: 8,
									}}>
									{"Name"}
								</Text>
								<TextInput
									placeholder={"James Ayomide"}
									value={name_ID}
									onChangeText={onChangename_ID}
									style={{
										color: "#697485",
										fontSize: 12,
										borderColor: "#E3E8EE",
										borderRadius: 6,
										borderWidth: 1,
										paddingVertical: 15,
										paddingHorizontal: 12,
									}}
								/>
							</View>
							<View >
								<Text 
									style={{
										color: "#0C111B",
										fontSize: 16,
										marginBottom: 8,
									}}>
									{"Email"}
								</Text>
								<TextInput
									placeholder={"jamesayomide@gmail.com"}
									value={email_ID}
									onChangeText={onChangeemail_ID}
									style={{
										color: "#697485",
										fontSize: 12,
										borderColor: "#E3E8EE",
										borderRadius: 6,
										borderWidth: 1,
										paddingVertical: 15,
										paddingHorizontal: 12,
									}}
								/>
							</View>
						</View>
						<TouchableOpacity 
							style={{
								alignItems: "center",
								backgroundColor: "#0F766E",
								borderRadius: 14,
								paddingVertical: 12,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"Update"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}