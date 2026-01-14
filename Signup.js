import React, {useState} from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TextInput, TouchableOpacity, } from "react-native";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
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
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 97,
						marginHorizontal: 43,
					}}>
					<View 
						style={{
							paddingHorizontal: 31,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 17,
							}}>
							{"9:41"}
						</Text>
					</View>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/q4kqlqdk_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 100,
							height: 22,
						}}
					/>
				</View>
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
									value={textInput1}
									onChangeText={onChangeTextInput1}
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
									value={textInput2}
									onChangeText={onChangeTextInput2}
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
									value={textInput3}
									onChangeText={onChangeTextInput3}
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