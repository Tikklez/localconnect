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
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 23,
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/dlgvzf88_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 100,
							height: 22,
						}}
					/>
				</View>
				<View 
					style={{
						marginBottom: 122,
					}}>
					<Text 
						style={{
							color: "#020617",
							fontSize: 20,
							fontWeight: "bold",
							marginBottom: 34,
							marginLeft: 24,
						}}>
						{"Bookings"}
					</Text>
					<View 
						style={{
							height: 618,
						}}>
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/a3yax2e1_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/az1u4yjj_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/c3gtctpj_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 50,
									height: 20,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#2DD4BF",
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/b79ujdrs_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 6,
								}}
							/>
							<Text 
								style={{
									color: "#64748B",
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/e364yr4d_expires_30_days.png"}} 
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