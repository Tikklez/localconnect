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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/43jz0cxl_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 100,
							height: 22,
						}}
					/>
				</View>
				<View 
					style={{
						paddingBottom: 1,
						marginBottom: 487,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							marginBottom: 28,
						}}>
						<View 
							style={{
								alignSelf: "flex-start",
								paddingBottom: 1,
								marginBottom: 34,
							}}>
							<Text 
								style={{
									color: "#020617",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Search"}
							</Text>
						</View>
						<View >
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F8FAFC",
									borderColor: "#E3E8EF",
									borderRadius: 14,
									borderWidth: 1,
									padding: 10,
									marginBottom: 24,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ml31xp5k_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 14,
										width: 20,
										height: 20,
										marginRight: 6,
									}}
								/>
								<View 
									style={{
										paddingBottom: 1,
									}}>
									<Text 
										style={{
											color: "#64748B",
											fontSize: 12,
										}}>
										{"Search experiences, restaurants..."}
									</Text>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<TouchableOpacity 
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: "#0F766E1A",
										borderRadius: 1000,
										paddingVertical: 6,
										marginRight: 10,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/9dzlvr5a_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 1000,
											width: 15,
											height: 15,
											marginRight: 4,
										}}
									/>
									<Text 
										style={{
											color: "#4B5462",
											fontSize: 12,
										}}>
										{"Dining"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: "#0F766E1A",
										borderRadius: 1000,
										paddingVertical: 6,
										marginRight: 9,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/edw8cyke_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 1000,
											width: 14,
											height: 17,
											marginRight: 4,
										}}
									/>
									<Text 
										style={{
											color: "#4B5462",
											fontSize: 12,
										}}>
										{"Tours"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: "#0F766E1A",
										borderRadius: 1000,
										paddingVertical: 6,
										marginRight: 11,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/vbvuhr53_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 1000,
											width: 17,
											height: 18,
											marginRight: 4,
										}}
									/>
									<Text 
										style={{
											color: "#4B5462",
											fontSize: 12,
										}}>
										{"Shopping"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: "#0F766E1A",
										borderRadius: 1000,
										paddingVertical: 6,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/k1lu1jmz_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 1000,
											width: 20,
											height: 20,
											marginRight: 4,
										}}
									/>
									<Text 
										style={{
											color: "#4B5462",
											fontSize: 12,
										}}>
										{"Wellness"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View >
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: 22,
							}}>
							<View >
								<Text 
									style={{
										color: "#020617",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"Trending"}
								</Text>
							</View>
							<View >
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ccqw4zje_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 24,
										height: 24,
									}}
								/>
							</View>
						</View>
						<View 
							style={{
								alignSelf: "flex-start",
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 14,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F1F5F9",
										borderRadius: 1000,
										paddingVertical: 5,
										paddingHorizontal: 14,
										marginRight: 12,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#0F172A",
											fontSize: 12,
										}}>
										{"Eric Kayser"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F1F5F9",
										borderRadius: 1000,
										paddingVertical: 5,
										paddingHorizontal: 14,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#0F172A",
											fontSize: 12,
										}}>
										{"Sunset Spa and Wellness"}
									</Text>
								</TouchableOpacity>
							</View>
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginRight: 42,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F1F5F9",
										borderRadius: 1000,
										paddingVertical: 5,
										paddingHorizontal: 14,
										marginRight: 12,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#0F172A",
											fontSize: 12,
										}}>
										{"Lakeside Inn"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#F1F5F9",
										borderRadius: 1000,
										paddingVertical: 5,
										paddingHorizontal: 14,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#0F172A",
											fontSize: 12,
										}}>
										{"Coastline suites"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/3sy8ax8r_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/66x6v2xq_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 20,
									height: 20,
									marginBottom: 10,
								}}
							/>
							<Text 
								style={{
									color: "#2DD4BF",
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/6jp6efqu_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/kznfw23w_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/uzbatl39_expires_30_days.png"}} 
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