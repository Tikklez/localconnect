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
						marginBottom: 28,
						marginHorizontal: 14,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/omlm0fe0_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 24,
							height: 24,
							marginBottom: 64,
						}}
					/>
					<View >
						<View 
							style={{
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								borderRadius: 12,
								paddingVertical: 20,
								marginBottom: 34,
								marginHorizontal: 10,
								shadowColor: "#1018281A",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: -2
								},
								shadowRadius: 8,
								elevation: 8,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/3pn0areq_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 264,
									height: 256,
									marginBottom: 10,
								}}
							/>
							<View >
								<Text 
									style={{
										color: "#4B5462",
										fontSize: 14,
										marginBottom: 10,
									}}>
									{"Redemption Code"}
								</Text>
								<Text 
									style={{
										color: "#000000",
										fontSize: 20,
										fontWeight: "bold",
									}}>
									{"EKO-EK-092"}
								</Text>
							</View>
						</View>
						<View >
							<View 
								style={{
									borderColor: "#CBD5E1",
									borderRadius: 12,
									borderWidth: 1,
									paddingVertical: 14,
									paddingRight: 14,
									marginTop: 10,
									marginBottom: 34,
									marginHorizontal: 10,
								}}>
								<Text 
									style={{
										color: "#020617",
										fontSize: 16,
										fontWeight: "bold",
										marginBottom: 15,
										marginLeft: 14,
									}}>
									{"Offer Details"}
								</Text>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 12,
										marginLeft: 14,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/aryp1jaq_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 70,
											height: 70,
											marginRight: 12,
										}}
									/>
									<View 
										style={{
											flex: 1,
											marginRight: 12,
										}}>
										<View 
											style={{
												marginBottom: 2,
											}}>
											<Text 
												style={{
													color: "#020617",
													fontSize: 18,
													fontWeight: "bold",
												}}>
												{"Eric Kayser"}
											</Text>
										</View>
										<View 
											style={{
												alignSelf: "flex-start",
											}}>
											<Text 
												style={{
													color: "#94A3B8",
													fontSize: 12,
												}}>
												{"15% of all orders"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											width: 70,
											height: 70,
										}}>
									</View>
								</View>
								<View 
									style={{
										paddingTop: 14,
										marginLeft: 14,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 11,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ch2bn791_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 20,
													height: 19,
													marginRight: 8,
												}}
											/>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#020617",
														fontSize: 12,
													}}>
													{"Valid Until"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												paddingBottom: 1,
											}}>
											<Text 
												style={{
													color: "#020617",
													fontSize: 12,
												}}>
												{"Jan 30th, 2026"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											marginBottom: 11,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/azaa31pl_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 20,
													height: 20,
													marginRight: 8,
												}}
											/>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#020617",
														fontSize: 12,
													}}>
													{"Open Hours"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												paddingBottom: 1,
											}}>
											<Text 
												style={{
													color: "#020617",
													fontSize: 12,
												}}>
												{"Mon - Sat, 9am - 11pm"}
											</Text>
										</View>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/fyylw9i7_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 20,
													height: 24,
													marginRight: 8,
												}}
											/>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#020617",
														fontSize: 12,
													}}>
													{"Location"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												paddingBottom: 1,
											}}>
											<Text 
												style={{
													color: "#020617",
													fontSize: 12,
												}}>
												{"Egbeda, Lagos"}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View 
								style={{
									marginHorizontal: 10,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 16,
									}}>
									<TouchableOpacity 
										style={{
											flex: 1,
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											backgroundColor: "#F1F5F9",
											borderColor: "#E3E8EF",
											borderRadius: 14,
											borderWidth: 1,
											paddingVertical: 10,
											marginRight: 12,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/np8dyjii_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 14,
												width: 24,
												height: 24,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#0F172A",
												fontSize: 16,
											}}>
											{"Call"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											flex: 1,
											flexDirection: "row",
											justifyContent: "center",
											alignItems: "center",
											backgroundColor: "#F1F5F9",
											borderColor: "#E3E8EF",
											borderRadius: 14,
											borderWidth: 1,
											paddingVertical: 10,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/75y7qjp3_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 14,
												width: 22,
												height: 22,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#0F172A",
												fontSize: 16,
											}}>
											{"Directions"}
										</Text>
									</TouchableOpacity>
								</View>
								<TouchableOpacity 
									style={{
										alignItems: "center",
										backgroundColor: "#DC2626",
										borderRadius: 14,
										paddingVertical: 12,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 16,
										}}>
										{"Cancel"}
									</Text>
								</TouchableOpacity>
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