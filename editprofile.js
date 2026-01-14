import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, } from "react-native";
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
						marginBottom: 672,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 64,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/5eal45bx_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginRight: 12,
								}}
							/>
							<Text 
								style={{
									color: "#020617",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Profile Details"}
							</Text>
						</View>
						<View 
							style={{
								paddingBottom: 1,
							}}>
							<Text 
								style={{
									color: "#0F766E",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"Edit"}
							</Text>
						</View>
					</View>
					<View >
						<View 
							style={{
								backgroundColor: "#F1F5F9",
								borderRadius: 10,
								paddingVertical: 10,
								paddingLeft: 10,
								marginBottom: 16,
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingBottom: 1,
									marginRight: 12,
								}}>
								<Text 
									style={{
										color: "#020617",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Account name"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingBottom: 1,
									paddingRight: 39,
								}}>
								<Text 
									style={{
										color: "#64748B",
										fontSize: 12,
									}}>
									{"James Ayomide"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#F1F5F9",
								borderRadius: 10,
								paddingVertical: 10,
								paddingLeft: 10,
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingBottom: 1,
									marginRight: 108,
								}}>
								<Text 
									style={{
										color: "#020617",
										fontSize: 16,
										fontWeight: "bold",
									}}>
									{"Email"}
								</Text>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									paddingBottom: 1,
								}}>
								<Text 
									style={{
										color: "#64748B",
										fontSize: 12,
									}}>
									{"jamesayomide@gmail.com"}
								</Text>
							</View>
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