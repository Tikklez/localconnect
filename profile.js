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
						marginBottom: 10,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#000000",
							fontSize: 20,
							fontWeight: "bold",
							marginBottom: 64,
						}}>
						{"Profile"}
					</Text>
					<View 
						style={{
							alignItems: "center",
						}}>
						<View 
							style={{
								marginBottom: 64,
							}}>
							<View 
								style={{
									alignSelf: "flex-start",
									marginBottom: 14,
								}}>
								<View 
									style={{
										alignSelf: "flex-start",
										alignItems: "center",
									}}>
									<TouchableOpacity 
										style={{
											backgroundColor: "#14B8A6",
											borderRadius: 100,
											paddingVertical: 29,
											paddingHorizontal: 31,
											marginBottom: 16,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#F8FAFC",
												fontSize: 48,
												fontWeight: "bold",
											}}>
											{"JA"}
										</Text>
									</TouchableOpacity>
									<View 
										style={{
											paddingBottom: 1,
										}}>
										<Text 
											style={{
												color: "#000000",
												fontSize: 24,
												fontWeight: "bold",
											}}>
											{"James Ayomide"}
										</Text>
									</View>
								</View>
								<View 
									style={{
										alignSelf: "flex-start",
										paddingBottom: 1,
									}}>
									<Text 
										style={{
											color: "#64748B",
											fontSize: 14,
										}}>
										{"jamesayomide@gmail.com"}
									</Text>
								</View>
							</View>
							<TouchableOpacity 
								style={{
									alignSelf: "flex-start",
									borderColor: "#4B5462",
									borderRadius: 12,
									borderWidth: 1,
									paddingVertical: 6,
									paddingHorizontal: 40,
									marginLeft: 11,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#020617",
										fontSize: 16,
									}}>
									{"Edit profile"}
								</Text>
							</TouchableOpacity>
						</View>
						<View 
							style={{
								alignSelf: "stretch",
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 20,
								}}>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#F1F5F9",
										borderRadius: 8,
										paddingVertical: 14,
										marginRight: 31,
									}} onPress={()=>alert('Pressed!')}>
									<View >
										<Text 
											style={{
												color: "#0F766E",
												fontSize: 20,
												fontWeight: "bold",
												marginLeft: 20,
											}}>
											{"3"}
										</Text>
										<Text 
											style={{
												color: "#4B5462",
												fontSize: 12,
											}}>
											{"Bookings"}
										</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#F1F5F9",
										borderRadius: 8,
										paddingVertical: 15,
										paddingHorizontal: 17,
										marginRight: 31,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#EA580C",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"2"}
									</Text>
									<Text 
										style={{
											color: "#4B5462",
											fontSize: 12,
										}}>
										{"Saved places"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										flex: 1,
										alignItems: "center",
										backgroundColor: "#F1F5F9",
										borderRadius: 8,
										paddingVertical: 15,
										paddingHorizontal: 6,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#10B981",
											fontSize: 18,
											fontWeight: "bold",
										}}>
										{"1"}
									</Text>
									<Text 
										style={{
											color: "#4B5462",
											fontSize: 12,
										}}>
										{"Offers redeemed"}
									</Text>
								</TouchableOpacity>
							</View>
							<View >
								<View 
									style={{
										paddingTop: 24,
										marginBottom: 20,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											backgroundColor: "#F1F5F9",
											borderRadius: 10,
											padding: 10,
											marginBottom: 12,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/usn96bws_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 44,
													height: 44,
													marginRight: 10,
												}}
											/>
											<View >
												<View 
													style={{
														alignSelf: "flex-start",
														paddingBottom: 1,
														marginRight: 15,
													}}>
													<Text 
														style={{
															color: "#020617",
															fontSize: 18,
															fontWeight: "bold",
														}}>
														{"My Bookings"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingBottom: 1,
														paddingRight: 54,
													}}>
													<Text 
														style={{
															color: "#64748B",
															fontSize: 12,
														}}>
														{"Active Offers"}
													</Text>
												</View>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/7h4dbscj_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 10,
												width: 24,
												height: 24,
											}}
										/>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											backgroundColor: "#F1F5F9",
											borderRadius: 10,
											padding: 10,
											marginBottom: 12,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/6sqv0s0g_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 44,
													height: 44,
													marginRight: 10,
												}}
											/>
											<View >
												<View 
													style={{
														alignSelf: "flex-start",
														paddingBottom: 1,
													}}>
													<Text 
														style={{
															color: "#020617",
															fontSize: 18,
															fontWeight: "bold",
														}}>
														{"Saved places"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingBottom: 1,
														paddingRight: 32,
													}}>
													<Text 
														style={{
															color: "#64748B",
															fontSize: 12,
														}}>
														{"Places you love"}
													</Text>
												</View>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/w0xkrbm9_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 10,
												width: 24,
												height: 24,
											}}
										/>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											backgroundColor: "#F1F5F9",
											borderRadius: 10,
											padding: 10,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/pthswog1_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 44,
													height: 44,
													marginRight: 10,
												}}
											/>
											<View >
												<View 
													style={{
														alignSelf: "flex-start",
														paddingBottom: 1,
													}}>
													<Text 
														style={{
															color: "#020617",
															fontSize: 18,
															fontWeight: "bold",
														}}>
														{"Visit History"}
													</Text>
												</View>
												<View 
													style={{
														alignSelf: "flex-start",
														paddingBottom: 1,
														paddingRight: 14,
													}}>
													<Text 
														style={{
															color: "#64748B",
															fontSize: 12,
														}}>
														{"Past experiences"}
													</Text>
												</View>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/m741z7u8_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 10,
												width: 24,
												height: 24,
											}}
										/>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#DC26261A",
										borderColor: "#DC2626",
										borderRadius: 10,
										borderWidth: 1,
										paddingVertical: 10,
										paddingLeft: 10,
										marginTop: 24,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ltl9cov5_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 44,
											height: 44,
											marginRight: 10,
										}}
									/>
									<View 
										style={{
											paddingRight: 54,
										}}>
										<Text 
											style={{
												color: "#DC2626",
												fontSize: 18,
												fontWeight: "bold",
											}}>
											{"Sign out"}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "stretch",
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 16,
						paddingHorizontal: 24,
						marginBottom: 6,
					}}>
					<View 
						style={{
							alignItems: "center",
							paddingVertical: 1,
							paddingHorizontal: 2,
							marginRight: 45,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/fok41z9y_expires_30_days.png"}} 
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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ewsauuyv_expires_30_days.png"}} 
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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/pdu671bw_expires_30_days.png"}} 
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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/l9oyj50z_expires_30_days.png"}} 
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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/mofdgrfm_expires_30_days.png"}} 
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
						marginBottom: 8,
					}}>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}