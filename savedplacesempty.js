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
						marginBottom: 151,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 20,
							fontWeight: "bold",
							marginBottom: 115,
						}}>
						{"Saved places"}
					</Text>
					<View >
						<View 
							style={{
								marginBottom: 23,
								marginHorizontal: 44,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/uu1md218_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 300,
									marginBottom: 60,
									marginHorizontal: 1,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										fontWeight: "bold",
										marginBottom: 12,
									}}>
									{"No Saved Spots"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 14,
									}}>
									{"Tap the heart icon on any place to save it here."}
								</Text>
							</View>
						</View>
						<TouchableOpacity 
							style={{
								alignItems: "center",
								backgroundColor: "#0F766E",
								borderRadius: 14,
								paddingVertical: 11,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"Start Exploring"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 12,
					}}>
					<View 
						style={{
							alignSelf: "stretch",
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 13,
							marginHorizontal: 24,
						}}>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 1,
								paddingHorizontal: 2,
								marginRight: 45,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/r4m5vx6y_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
									marginBottom: 10,
								}}
							/>
							<Text 
								style={{
									color: "#64748B",
									fontSize: 12,
								}}>
								{"Home"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								alignItems: "center",
								paddingVertical: 1,
								marginRight: 45,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/klsw5u93_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
									marginBottom: 10,
								}}
							/>
							<Text 
								style={{
									color: "#64748B",
									fontSize: 12,
								}}>
								{"Search"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
								alignItems: "center",
								paddingVertical: 2,
								marginRight: 45,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/tygoxgri_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 50,
									height: 20,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#64748B",
									fontSize: 12,
								}}>
								{"Bookings"}
							</Text>
						</View>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 1,
								paddingHorizontal: 2,
								marginRight: 46,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/okqx956f_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 6,
								}}
							/>
							<Text 
								style={{
									color: "#2DD4BF",
									fontSize: 12,
								}}>
								{"Saved"}
							</Text>
						</View>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 1,
								paddingHorizontal: 2,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/c0gv716s_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
									marginBottom: 10,
								}}
							/>
							<Text 
								style={{
									color: "#64748B",
									fontSize: 12,
								}}>
								{"Profile"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							width: 144,
							height: 5,
							backgroundColor: "#000000",
							borderRadius: 100,
						}}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}