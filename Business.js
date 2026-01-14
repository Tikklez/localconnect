import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, } from "react-native";
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
						marginBottom: 18,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 25,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/hkz83ms5_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/d2n7ds9a_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 22,
								height: 24,
							}}
						/>
					</View>
					<View >
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/q3jx1akj_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							style={{
								alignItems: "flex-end",
								paddingTop: 226,
								paddingRight: 19,
								marginBottom: 31,
							}}
							>
							<View 
								style={{
									backgroundColor: "#0F172A",
									borderRadius: 4,
									paddingHorizontal: 8,
									marginBottom: 14,
								}}>
								<Text 
									style={{
										color: "#F0FDFA",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"1/4"}
								</Text>
							</View>
						</ImageBackground>
						<View >
							<View 
								style={{
									alignSelf: "flex-start",
									marginBottom: 16,
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 24,
										fontWeight: "bold",
										marginBottom: 2,
										marginRight: 99,
									}}>
									{"Eric Kayser"}
								</Text>
								<View 
									style={{
										alignSelf: "flex-start",
									}}>
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 6,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginRight: 12,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/mu9ocuhn_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 18,
													height: 17,
													marginRight: 6,
												}}
											/>
											<Text 
												style={{
													color: "#0F172A",
													fontSize: 14,
													fontWeight: "bold",
													marginRight: 8,
												}}>
												{"4.0"}
											</Text>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#4B5462",
														fontSize: 14,
													}}>
													{"(124 reviews)"}
												</Text>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/nn821ouo_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 8,
												height: 8,
												marginRight: 12,
											}}
										/>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/882c4er2_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 18,
													height: 21,
													marginRight: 6,
												}}
											/>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#4B5462",
														fontSize: 14,
													}}>
													{"1.0mi"}
												</Text>
											</View>
										</View>
									</View>
									<TouchableOpacity 
										style={{
											alignSelf: "flex-start",
											backgroundColor: "#F1F5F9",
											borderRadius: 20,
											paddingVertical: 2,
											paddingHorizontal: 14,
											marginRight: 154,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#0F172A",
												fontSize: 12,
											}}>
											{"Dinning"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
							<View >
								<View 
									style={{
										backgroundColor: "#FFF7ED",
										borderColor: "#EA580C",
										borderRadius: 10,
										borderWidth: 1,
										paddingVertical: 14,
										paddingRight: 14,
										marginBottom: 30,
									}}>
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 8,
											marginLeft: 14,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ot2q4cfy_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 18,
												height: 16,
												marginRight: 10,
											}}
										/>
										<Text 
											style={{
												color: "#EA580C",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"EXCLUSIVE HOTEL GUEST OFFER"}
										</Text>
									</View>
									<View 
										style={{
											marginLeft: 14,
										}}>
										<View 
											style={{
												marginBottom: 6,
											}}>
											<Text 
												style={{
													color: "#000000",
													fontSize: 20,
													fontWeight: "bold",
													marginBottom: 2,
												}}>
												{"15% off all orders"}
											</Text>
											<Text 
												style={{
													color: "#4B5462",
													fontSize: 14,
												}}>
												{"Valid Monday - Saturday, 9am - 11pm. Show your unique\ncode at the checkout."}
											</Text>
										</View>
										<TouchableOpacity 
											style={{
												alignItems: "center",
												backgroundColor: "#0F766E",
												borderRadius: 8,
												paddingVertical: 8,
											}} onPress={()=>alert('Pressed!')}>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/q4jst1k8_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 18,
														height: 16,
														marginRight: 8,
													}}
												/>
												<View 
													style={{
														paddingBottom: 1,
														marginRight: 8,
													}}>
													<Text 
														style={{
															color: "#F8FAFC",
															fontSize: 12,
														}}>
														{"Get Offer code"}
													</Text>
												</View>
												<View 
													style={{
														width: 18,
														height: 16,
													}}>
												</View>
											</View>
										</TouchableOpacity>
									</View>
								</View>
								<View >
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 30,
										}}>
										<View 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#F1F5F9",
												borderRadius: 8,
												paddingVertical: 11,
												marginRight: 31,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/6yfujiks_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 8,
													width: 28,
													height: 28,
													marginBottom: 7,
												}}
											/>
											<View 
												style={{
													alignItems: "center",
												}}>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 14,
													}}>
													{"Opening hours"}
												</Text>
												<Text 
													style={{
														color: "#4B5462",
														fontSize: 12,
													}}>
													{"9am - 11pm"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#F1F5F9",
												borderRadius: 8,
												paddingVertical: 11,
												marginRight: 31,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/t8x6uy3a_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 8,
													width: 30,
													height: 30,
													marginBottom: 5,
												}}
											/>
											<View 
												style={{
													alignItems: "center",
													marginHorizontal: 16,
												}}>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 14,
													}}>
													{"Call"}
												</Text>
												<Text 
													style={{
														color: "#4B5462",
														fontSize: 12,
													}}>
													{"08012345678"}
												</Text>
											</View>
										</View>
										<View 
											style={{
												flex: 1,
												alignItems: "center",
												backgroundColor: "#F1F5F9",
												borderRadius: 8,
												paddingVertical: 11,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/npcpntkp_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													borderRadius: 8,
													width: 28,
													height: 28,
													marginBottom: 7,
												}}
											/>
											<View 
												style={{
													marginHorizontal: 21,
												}}>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 14,
													}}>
													{"Directions"}
												</Text>
												<Text 
													style={{
														color: "#4B5462",
														fontSize: 12,
														marginLeft: 20,
													}}>
													{"1.0mi"}
												</Text>
											</View>
										</View>
									</View>
									<View >
										<View 
											style={{
												marginBottom: 30,
											}}>
											<View 
												style={{
													alignSelf: "flex-start",
													paddingBottom: 1,
													marginBottom: 8,
												}}>
												<Text 
													style={{
														color: "#020617",
														fontSize: 18,
														fontWeight: "bold",
													}}>
													{"About"}
												</Text>
											</View>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#4B5462",
														fontSize: 14,
													}}>
													{"Experience a slice of Paris in the heart of the city. Renowned globally for its artisan liquid leaven breads and flaky pastries, Maison Eric Kayser offers a sophisticated bistro menu featuring gourmet sandwiches, fresh salads, and elegant desserts. The perfect spot for a business lunch or a relaxed brunch."}
												</Text>
											</View>
										</View>
										<View >
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
													marginBottom: 30,
												}}>
												<View 
													style={{
														flex: 1,
														backgroundColor: "#F1F5F9",
														borderRadius: 8,
														paddingVertical: 14,
														paddingHorizontal: 20,
														marginRight: 31,
													}}>
													<Text 
														style={{
															color: "#0F766E",
															fontSize: 20,
															fontWeight: "bold",
															marginLeft: 22,
														}}>
														{"89"}
													</Text>
													<Text 
														style={{
															color: "#4B5462",
															fontSize: 12,
														}}>
														{"Guest Visits"}
													</Text>
												</View>
												<TouchableOpacity 
													style={{
														flex: 1,
														alignItems: "center",
														backgroundColor: "#F1F5F9",
														borderRadius: 8,
														paddingVertical: 15,
														paddingHorizontal: 9,
														marginRight: 31,
													}} onPress={()=>alert('Pressed!')}>
													<Text 
														style={{
															color: "#EA580C",
															fontSize: 18,
															fontWeight: "bold",
														}}>
														{"4.0"}
													</Text>
													<Text 
														style={{
															color: "#4B5462",
															fontSize: 12,
														}}>
														{"Average Ratings"}
													</Text>
												</TouchableOpacity>
												<View 
													style={{
														flex: 1,
														backgroundColor: "#F1F5F9",
														borderRadius: 8,
														paddingVertical: 15,
														paddingHorizontal: 18,
													}}>
													<Text 
														style={{
															color: "#10B981",
															fontSize: 18,
															fontWeight: "bold",
															marginLeft: 17,
														}}>
														{"95%"}
													</Text>
													<Text 
														style={{
															color: "#4B5462",
															fontSize: 12,
														}}>
														{"Satisfactions"}
													</Text>
												</View>
											</View>
											<View >
												<View 
													style={{
														flexDirection: "row",
														justifyContent: "space-between",
														alignItems: "center",
														marginBottom: 16,
													}}>
													<Text 
														style={{
															color: "#020617",
															fontSize: 18,
															fontWeight: "bold",
														}}>
														{"Recent reviews"}
													</Text>
													<Text 
														style={{
															color: "#0F766E",
															fontSize: 12,
															fontWeight: "bold",
														}}>
														{"See all"}
													</Text>
												</View>
												<View >
													<View 
														style={{
															flexDirection: "row",
															justifyContent: "space-between",
															alignItems: "center",
															marginBottom: 16,
														}}>
														<View 
															style={{
																flexDirection: "row",
																alignItems: "center",
															}}>
															<TouchableOpacity 
																style={{
																	backgroundColor: "#14B8A6",
																	borderRadius: 300,
																	paddingVertical: 6,
																	paddingHorizontal: 8,
																	marginRight: 10,
																}} onPress={()=>alert('Pressed!')}>
																<Text 
																	style={{
																		color: "#F8FAFC",
																		fontSize: 12,
																	}}>
																	{"SC"}
																</Text>
															</TouchableOpacity>
															<View >
																<View 
																	style={{
																		alignSelf: "flex-start",
																		paddingBottom: 1,
																		marginRight: 21,
																	}}>
																	<Text 
																		style={{
																			color: "#4B5462",
																			fontSize: 12,
																		}}>
																		{"Sarah C."}
																	</Text>
																</View>
																<Image
																	source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/a0iwl90y_expires_30_days.png"}} 
																	resizeMode = {"stretch"}
																	style={{
																		width: 68,
																		height: 11,
																	}}
																/>
															</View>
														</View>
														<View 
															style={{
																paddingBottom: 1,
															}}>
															<Text 
																style={{
																	color: "#4B5462",
																	fontSize: 12,
																}}>
																{"2 days ago"}
															</Text>
														</View>
													</View>
													<Text 
														style={{
															color: "#4B5462",
															fontSize: 14,
															marginRight: 28,
														}}>
														{"Hands down the best almond croissant I've had in Lagos. The coffee is strong and the atmosphere is perfect for a quick work call before heading out."}
													</Text>
												</View>
											</View>
										</View>
									</View>
								</View>
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