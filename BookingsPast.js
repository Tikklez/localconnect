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
						marginBottom: 317,
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
					<View >
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingHorizontal: 26,
								marginBottom: 16,
							}}>
							<View 
								style={{
									flex: 1,
									paddingVertical: 6,
									marginRight: 8,
								}}>
								<Text 
									style={{
										color: "#020617",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"Upcoming"}
								</Text>
							</View>
							<View 
								style={{
									flex: 1,
									paddingVertical: 6,
								}}>
								<Text 
									style={{
										color: "#020617",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"Past"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								marginHorizontal: 24,
							}}>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderRadius: 12,
									paddingVertical: 16,
									paddingHorizontal: 6,
									marginBottom: 24,
									shadowColor: "#1018281A",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 2
									},
									shadowRadius: 6,
									elevation: 6,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 17,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/lwzbhtk9_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 90,
											height: 90,
											marginRight: 18,
										}}
									/>
									<View 
										style={{
											flex: 1,
										}}>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#020617",
														fontSize: 16,
														fontWeight: "bold",
													}}>
													{"Eric Kayser"}
												</Text>
											</View>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/jjfuznzz_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 22,
													height: 24,
												}}
											/>
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
													marginBottom: 4,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/o1aakmeo_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 20,
														height: 19,
														marginRight: 6,
													}}
												/>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 12,
													}}>
													{"December 28th, 2025 at 5.00PM"}
												</Text>
											</View>
											<View 
												style={{
													alignSelf: "flex-start",
													flexDirection: "row",
													alignItems: "center",
													marginRight: 16,
												}}>
												<View 
													style={{
														flexDirection: "row",
														alignItems: "center",
														marginRight: 6,
													}}>
													<Image
														source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/f9iek648_expires_30_days.png"}} 
														resizeMode = {"stretch"}
														style={{
															width: 14,
															height: 13,
															marginRight: 2,
														}}
													/>
													<Text 
														style={{
															color: "#94A3B8",
															fontSize: 12,
														}}>
														{"4.2"}
													</Text>
												</View>
												<View 
													style={{
														backgroundColor: "#F1F5F9",
														borderRadius: 14,
														paddingHorizontal: 10,
														marginRight: 6,
													}}>
													<Text 
														style={{
															color: "#0F172A",
															fontSize: 12,
														}}>
														{"Dining"}
													</Text>
												</View>
												<View 
													style={{
														backgroundColor: "#F1F5F9",
														borderRadius: 14,
														paddingHorizontal: 10,
													}}>
													<Text 
														style={{
															color: "#5EEAD4",
															fontSize: 12,
														}}>
														{"EKO-EK-092"}
													</Text>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										backgroundColor: "#0F766E",
										borderRadius: 8,
										paddingVertical: 4,
										paddingHorizontal: 12,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/4thqf6ot_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 14,
												height: 13,
												marginRight: 4,
											}}
										/>
										<View 
											style={{
												paddingBottom: 1,
											}}>
											<Text 
												style={{
													color: "#F8FAFC",
													fontSize: 12,
												}}>
												{"Write a review"}
											</Text>
										</View>
									</View>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/lj7rn8et_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 24,
											height: 24,
										}}
									/>
								</View>
							</View>
							<View 
								style={{
									backgroundColor: "#FFFFFF",
									borderRadius: 12,
									paddingVertical: 16,
									paddingHorizontal: 6,
									shadowColor: "#1018281A",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 2
									},
									shadowRadius: 6,
									elevation: 6,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 17,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/dsxlil4d_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 90,
											height: 90,
											marginRight: 18,
										}}
									/>
									<View 
										style={{
											flex: 1,
										}}>
										<View 
											style={{
												flexDirection: "row",
												justifyContent: "space-between",
												alignItems: "center",
												marginBottom: 2,
											}}>
											<View 
												style={{
													paddingBottom: 1,
												}}>
												<Text 
													style={{
														color: "#020617",
														fontSize: 16,
														fontWeight: "bold",
													}}>
													{"Sunset Spa and Wellness"}
												</Text>
											</View>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/04x33fd4_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 22,
													height: 24,
												}}
											/>
										</View>
										<View >
											<View 
												style={{
													alignSelf: "flex-start",
													flexDirection: "row",
													alignItems: "center",
													marginBottom: 4,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/uij5c2gm_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 20,
														height: 19,
														marginRight: 6,
													}}
												/>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 12,
													}}>
													{"December 30th, 2025 at 12.00PM"}
												</Text>
											</View>
											<View 
												style={{
													alignSelf: "flex-start",
													flexDirection: "row",
													alignItems: "center",
												}}>
												<View 
													style={{
														flexDirection: "row",
														alignItems: "center",
														marginRight: 6,
													}}>
													<Image
														source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/6kxee7ij_expires_30_days.png"}} 
														resizeMode = {"stretch"}
														style={{
															width: 14,
															height: 13,
															marginRight: 2,
														}}
													/>
													<Text 
														style={{
															color: "#94A3B8",
															fontSize: 12,
														}}>
														{"4.8"}
													</Text>
												</View>
												<View 
													style={{
														backgroundColor: "#F1F5F9",
														borderRadius: 14,
														paddingHorizontal: 10,
														marginRight: 6,
													}}>
													<Text 
														style={{
															color: "#0F172A",
															fontSize: 12,
														}}>
														{"Wellness"}
													</Text>
												</View>
												<View 
													style={{
														backgroundColor: "#F1F5F9",
														borderRadius: 14,
														paddingHorizontal: 10,
													}}>
													<Text 
														style={{
															color: "#5EEAD4",
															fontSize: 12,
														}}>
														{"EKO-SSW-092"}
													</Text>
												</View>
											</View>
										</View>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										backgroundColor: "#0F766E",
										borderRadius: 8,
										paddingVertical: 4,
										paddingHorizontal: 12,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/2qjt8pjq_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 14,
												height: 13,
												marginRight: 4,
											}}
										/>
										<View 
											style={{
												paddingBottom: 1,
											}}>
											<Text 
												style={{
													color: "#F8FAFC",
													fontSize: 12,
												}}>
												{"Write a review"}
											</Text>
										</View>
									</View>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/6pcdelwj_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 8,
											width: 24,
											height: 24,
										}}
									/>
								</View>
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/bdt1m2re_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/lxp5ltor_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/1zkazjwx_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ug0ak8xz_expires_30_days.png"}} 
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/mdgbewro_expires_30_days.png"}} 
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