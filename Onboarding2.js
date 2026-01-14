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
						marginBottom: 31,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 68,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/cco9xcpb_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
							}}
						/>
						<View 
							style={{
								paddingBottom: 1,
							}}>
							<Text 
								style={{
									color: "#858D99",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"Skip"}
							</Text>
						</View>
					</View>
					<View >
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/vos0p5dk_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								height: 409,
								marginBottom: 95,
							}}
						/>
						<View 
							style={{
								marginHorizontal: 9,
							}}>
							<View 
								style={{
									alignItems: "center",
									marginBottom: 30,
									marginHorizontal: 29,
								}}>
								<View 
									style={{
										alignItems: "center",
										marginBottom: 30,
									}}>
									<Text 
										style={{
											color: "#020617",
											fontSize: 32,
											fontWeight: "bold",
											marginBottom: 24,
										}}>
										{"Verified and Trusted"}
									</Text>
									<Text 
										style={{
											color: "#4B5462",
											fontSize: 16,
											fontWeight: "bold",
											textAlign: "center",
											marginHorizontal: 11,
										}}>
										{"Every recommendation is vetted by your\nhotel for quality and safety"}
									</Text>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/4w08z63l_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 34,
										height: 10,
									}}
								/>
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
									{"Next"}
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