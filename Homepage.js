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
						marginBottom: 16,
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/wcvly31l_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 100,
							height: 22,
						}}
					/>
				</View>
				<View 
					style={{
						marginBottom: 34,
						marginHorizontal: 24,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 24,
						}}>
						<View >
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 6,
									marginRight: 129,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/y8hm4rbe_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 24,
										height: 24,
										marginRight: 4,
									}}
								/>
								<View 
									style={{
										paddingBottom: 1,
									}}>
									<Text 
										style={{
											color: "#475569",
											fontSize: 12,
										}}>
										{"Eko Hotel"}
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
										color: "#020617",
										fontSize: 20,
										fontWeight: "bold",
									}}>
									{"Good Morning, James"}
								</Text>
							</View>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/d1s71spi_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 24,
								height: 24,
							}}
						/>
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/sggi34gx_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/1poy2xcz_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/9zhkg66e_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/91nighqd_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/4cocimo1_expires_30_days.png"}} 
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
				<View 
					style={{
						marginBottom: 34,
						marginHorizontal: 24,
					}}>
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
							{"Featured places"}
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
									marginBottom: 16,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/s3gzbtnk_expires_30_days.png"}} 
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
										<View >
											<Text 
												style={{
													color: "#020617",
													fontSize: 16,
													fontWeight: "bold",
												}}>
												{"Eric Kayser"}
											</Text>
										</View>
										<View >
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/rxwlu3cv_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 22,
													height: 24,
												}}
											/>
										</View>
									</View>
									<View >
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 4,
											}}>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
													marginRight: 6,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/z4vnu62i_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 12,
														height: 14,
														marginRight: 2,
													}}
												/>
												<View >
													<Text 
														style={{
															color: "#94A3B8",
															fontSize: 12,
														}}>
														{"0.3mi"}
													</Text>
												</View>
											</View>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/raamy437_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 4,
													height: 4,
													marginRight: 6,
												}}
											/>
											<View >
												<Text 
													style={{
														color: "#94A3B8",
														fontSize: 12,
													}}>
													{"Ikeja, Lagos"}
												</Text>
											</View>
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
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/4l2kxpzp_expires_30_days.png"}} 
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
											<View >
												<View 
													style={{
														width: 55,
														height: 20,
														backgroundColor: "#F1F5F9",
														borderRadius: 14,
													}}>
												</View>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 12,
													}}>
													{"Dining"}
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/pxyk93to_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 18,
											height: 16,
											marginRight: 8,
										}}
									/>
									<View >
										<Text 
											style={{
												color: "#F8FAFC",
												fontSize: 12,
											}}>
											{"15% off all orders"}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/td05r4jq_expires_30_days.png"}} 
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
									marginBottom: 16,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/6ntnz43y_expires_30_days.png"}} 
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
										<View >
											<Text 
												style={{
													color: "#020617",
													fontSize: 16,
													fontWeight: "bold",
												}}>
												{"Sunset Spa and Wellness"}
											</Text>
										</View>
										<View >
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/cfod8yyd_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 22,
													height: 24,
												}}
											/>
										</View>
									</View>
									<View >
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 4,
											}}>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
													marginRight: 6,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/1hem4z1a_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 12,
														height: 14,
														marginRight: 2,
													}}
												/>
												<View >
													<Text 
														style={{
															color: "#94A3B8",
															fontSize: 12,
														}}>
														{"0.7mi"}
													</Text>
												</View>
											</View>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/rxvxxje4_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 4,
													height: 4,
													marginRight: 6,
												}}
											/>
											<View >
												<Text 
													style={{
														color: "#94A3B8",
														fontSize: 12,
													}}>
													{"Egbeda, Lagos"}
												</Text>
											</View>
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
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/yk62g9o3_expires_30_days.png"}} 
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
											<View >
												<View 
													style={{
														width: 69,
														height: 20,
														backgroundColor: "#F1F5F9",
														borderRadius: 14,
													}}>
												</View>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 12,
													}}>
													{"Wellness"}
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/nz1s6dc5_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 18,
											height: 16,
											marginRight: 8,
										}}
									/>
									<View >
										<Text 
											style={{
												color: "#F8FAFC",
												fontSize: 12,
											}}>
											{"20% off all sessions"}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/2nk28m6p_expires_30_days.png"}} 
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
									marginBottom: 16,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/k4ntfkqb_expires_30_days.png"}} 
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
										<View >
											<Text 
												style={{
													color: "#020617",
													fontSize: 16,
													fontWeight: "bold",
												}}>
												{"Lakeside Inn"}
											</Text>
										</View>
										<View >
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/g6mgueha_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 22,
													height: 24,
												}}
											/>
										</View>
									</View>
									<View >
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginBottom: 4,
											}}>
											<View 
												style={{
													flexDirection: "row",
													alignItems: "center",
													marginRight: 6,
												}}>
												<Image
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/t7chif4a_expires_30_days.png"}} 
													resizeMode = {"stretch"}
													style={{
														width: 12,
														height: 14,
														marginRight: 2,
													}}
												/>
												<View >
													<Text 
														style={{
															color: "#94A3B8",
															fontSize: 12,
														}}>
														{"1.0mi"}
													</Text>
												</View>
											</View>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/846qup5q_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 4,
													height: 4,
													marginRight: 6,
												}}
											/>
											<View >
												<Text 
													style={{
														color: "#94A3B8",
														fontSize: 12,
													}}>
													{"Maryland, Lagos"}
												</Text>
											</View>
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
													source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/8nym3d1i_expires_30_days.png"}} 
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
													{"4.0"}
												</Text>
											</View>
											<View >
												<View 
													style={{
														width: 51,
														height: 20,
														backgroundColor: "#F1F5F9",
														borderRadius: 14,
													}}>
												</View>
												<Text 
													style={{
														color: "#0F172A",
														fontSize: 12,
													}}>
													{"Tours"}
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/b9g2w5tm_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 18,
											height: 16,
											marginRight: 8,
										}}
									/>
									<View >
										<Text 
											style={{
												color: "#F8FAFC",
												fontSize: 12,
											}}>
											{"Free photo package"}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/6lgnv8oo_expires_30_days.png"}} 
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
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: 16,
						marginHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#020617",
							fontSize: 18,
							fontWeight: "bold",
						}}>
						{"Popular places"}
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
				<View 
					style={{
						marginBottom: 48,
						marginHorizontal: 24,
					}}>
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
								marginBottom: 16,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/exkomnth_expires_30_days.png"}} 
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
									<View >
										<Text 
											style={{
												color: "#020617",
												fontSize: 16,
												fontWeight: "bold",
											}}>
											{"Eric Kayser"}
										</Text>
									</View>
									<View >
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/rnyp43gn_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 22,
												height: 24,
											}}
										/>
									</View>
								</View>
								<View >
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 4,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginRight: 6,
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/lvkhiyw7_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 12,
													height: 14,
													marginRight: 2,
												}}
											/>
											<View >
												<Text 
													style={{
														color: "#94A3B8",
														fontSize: 12,
													}}>
													{"0.3mi"}
												</Text>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/oopii85l_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 4,
												height: 4,
												marginRight: 6,
											}}
										/>
										<View >
											<Text 
												style={{
													color: "#94A3B8",
													fontSize: 12,
												}}>
												{"Ikeja, Lagos"}
											</Text>
										</View>
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
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/fle95kpj_expires_30_days.png"}} 
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
										<View >
											<View 
												style={{
													width: 55,
													height: 20,
													backgroundColor: "#F1F5F9",
													borderRadius: 14,
												}}>
											</View>
											<Text 
												style={{
													color: "#0F172A",
													fontSize: 12,
												}}>
												{"Dining"}
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/lymqsjsp_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 18,
										height: 16,
										marginRight: 8,
									}}
								/>
								<View >
									<Text 
										style={{
											color: "#F8FAFC",
											fontSize: 12,
										}}>
										{"15% off all orders"}
									</Text>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/msnf2wbz_expires_30_days.png"}} 
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
							position: "absolute",
							bottom: -69,
							right: -24,
							left: -24,
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/uviqkcsw_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/kl9o9gez_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/iomd2r10_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/v45kgreu_expires_30_days.png"}} 
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/cl9y4plv_expires_30_days.png"}} 
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
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}