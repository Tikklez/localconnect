import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text,Image, TouchableOpacity, TextInput} from "react-native";

export default (props) => {
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          paddingTop: 21,
        }}
      >
        <View style={{ marginHorizontal: 24 }}>
          {/* Header */}
          <Text
            style={{
              color: "#020617",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 24,
            }}
          >
            Search
          </Text>

          {/* SEARCH INPUT */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#F8FAFC",
              borderColor: "#E3E8EF",
              borderRadius: 14,
              borderWidth: 1,
              paddingHorizontal: 12,
              paddingVertical: 10,
              marginBottom: 24,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ml31xp5k_expires_30_days.png",
              }}
              style={{ width: 20, height: 20, marginRight: 8 }}
            />

            <TextInput
              placeholder="Search experiences, restaurants..."
              placeholderTextColor="#64748B"
              value={searchText}
              onChangeText={setSearchText}
              style={{
                flex: 1,
                fontSize: 14,
                color: "#020617",
              }}
            />
          </View>

          {/* FILTERS */}
          <View style={{ flexDirection: "row", marginBottom: 28 }}>
            {[
              { label: "Dining", value: "dining", icon: "9dzlvr5a" },
              { label: "Tours", value: "tours", icon: "edw8cyke" },
              { label: "Shopping", value: "shopping", icon: "vbvuhr53" },
              { label: "Wellness", value: "wellness", icon: "k1lu1jmz" },
            ].map((item, index) => (
              <TouchableOpacity
                key={item.value}
                onPress={() => toggleFilter(item.value)}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    activeFilter === item.value ? "#0F766E" : "#0F766E1A",
                  borderRadius: 1000,
                  paddingVertical: 6,
                  marginRight: index !== 3 ? 10 : 0,
                }}
              >
                <Image
                  source={{
                    uri: `https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/${item.icon}_expires_30_days.png`,
                  }}
                  style={{
                    width: 16,
                    height: 16,
                    marginRight: 4,
                    tintColor:
                      activeFilter === item.value ? "#FFFFFF" : undefined,
                  }}
                />
                <Text
                  style={{
                    color:
                      activeFilter === item.value ? "#FFFFFF" : "#4B5462",
                    fontSize: 12,
                  }}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* TRENDING */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                color: "#020617",
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Trending
            </Text>

            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Lt5XCwnYV1/ccqw4zje_expires_30_days.png",
              }}
              style={{ width: 24, height: 24 }}
            />
          </View>

          {/* TRENDING TAGS */}
          {[
            ["Eric Kayser", "Sunset Spa and Wellness"],
            ["Lakeside Inn", "Coastline Suites"],
          ].map((row, idx) => (
            <View
              key={idx}
              style={{ flexDirection: "row", marginBottom: 12 }}
            >
              {row.map((item) => (
                <TouchableOpacity
                  key={item}
                  style={{
                    backgroundColor: "#F1F5F9",
                    borderRadius: 1000,
                    paddingVertical: 5,
                    paddingHorizontal: 14,
                    marginRight: 12,
                  }}
                >
                  <Text style={{ fontSize: 12, color: "#0F172A" }}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
