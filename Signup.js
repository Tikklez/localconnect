import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [name_ID, onChangename_ID] = useState('');
	const [email_ID, onChangeemail_ID] = useState('');
	const [hotel_ID, onChangehotel_ID] = useState('');
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
					paddingTop: 21,
				}}>
				
				<View 
					style={{
						alignSelf: "stretch",
						alignItems: "center",
						marginBottom: 249,
						marginHorizontal: 24,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/8khrlq4g_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 180,
							height: 54,
							marginBottom: 74,
						}}
					/>
					<View >
						<View 
							style={{
								marginBottom: 40,
							}}>
							<View 
								style={{
									marginBottom: 20,
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
									placeholder={"Enter your name..."}
									value={name_ID}
									onChangeText={onChangename_ID}
									style={{
										color: "#697485",
										fontSize: 14,
										borderColor: "#E3E8EE",
										borderRadius: 6,
										borderWidth: 1,
										paddingVertical: 15,
										paddingHorizontal: 12,
									}}
								/>
							</View>
							<View 
								style={{
									marginBottom: 20,
								}}>
								<Text 
									style={{
										color: "#0C111B",
										fontSize: 16,
										marginBottom: 8,
									}}>
									{"Email"}
								</Text>
								<TextInput
									placeholder={"Enter your email"}
									value={email_ID}
									onChangeText={onChangeemail_ID}
									style={{
										color: "#697485",
										fontSize: 14,
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
									{"Hotel ID"}
								</Text>
								<TextInput
									placeholder={"Enter your Hotel ID"}
									value={hotel_ID}
									onChangeText={onChangehotel_ID}
									style={{
										color: "#697485",
										fontSize: 14,
										borderColor: "#E3E8EE",
										borderRadius: 6,
										borderWidth: 1,
										paddingVertical: 15,
										paddingHorizontal: 12,
									}}
								/>
							</View>
						</View>
						<View 
							style={{
								alignItems: "center",
							}}>
							<TouchableOpacity 
								style={{
									alignItems: "center",
									backgroundColor: "#0F766E",
									borderRadius: 14,
									paddingVertical: 12,
									marginBottom: 24,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Sign up"}
								</Text>
							</TouchableOpacity>
							<Text 
								style={{
									color: "#0F172A",
									fontSize: 16,
								}}>
								{"Already have an account? Login"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						width: 144,
						height: 5,
						backgroundColor: "#000000",
						borderRadius: 100,
						marginBottom: 8,
					}}>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}