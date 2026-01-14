import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
export default (props) => {
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
						marginBottom: 32,
						marginHorizontal: 16,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/i39femi5_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 24,
							height: 24,
							marginBottom: 70,
						}}
					/>
					<View >
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/qzs7gont_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 409,
								marginBottom: 94,
							}}
						/>
						<View 
							style={{
								alignItems: "center",
								marginHorizontal: 8,
							}}>
							<Text 
								style={{
									color: "#020617",
									fontSize: 32,
									fontWeight: "bold",
									marginBottom: 24,
								}}>
								{"Unlock Exclusive Perks"}
							</Text>
							<Text 
								style={{
									color: "#4B5462",
									fontSize: 16,
									fontWeight: "bold",
									textAlign: "center",
									marginBottom: 30,
									marginHorizontal: 43,
								}}>
								{"Access special discounts and VIP offers\nreserved only for hotel guests"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/i8de7rwp_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 34,
									height: 10,
									marginBottom: 30,
								}}
							/>
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
									{"Get Started"}
								</Text>
							</TouchableOpacity>
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