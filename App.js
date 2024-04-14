import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  ViroTrackingStateConstants,
  Viro3DObject,
  ViroAmbientLight,
  ViroPortal,
  ViroPortalScene,
  Viro360Image
} from "@viro-community/react-viro";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Piramide } from "./Piramide";
const HelloWorldSceneAR = () => {
  const [text, setText] = useState("Initializing AR...");

  function onInitialized(state, reason) {
    console.log("guncelleme", state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText("Hello World!");
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }
//"Portal Frame" (https://skfb.ly/6CxTF) by soidev is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      		{/* <ViroAmbientLight color="#fff" intensity={300}/>
     <ViroPortalScene opacity={0.5} passable={true} dragType="FixedDistance" onDrag={() => {}}
        position={[0, 0, 0]}
    >
        <ViroPortal
            position={[0, 0, -0.3]}
            scale={[.1, .1, .1]}
        >
            <Viro3DObject
                source={require('./assets/portal-frame/source/PortalFrame/PortalThing.vrx')}
                type="VRX"
                scale={[0.1, 0.1, 0.1]}
            />

        </ViroPortal>
        <Viro360Image source={require('./assets/360img.jpg')}/>    

        </ViroPortalScene>   */}
        <ViroAmbientLight color="#fff" intensity={300}/>
          <Viro3DObject
                source={require('./Toolpa/assets/models_3d/Toolpa_layout.gltf')}
                resources={[require('./Toolpa/assets/models_3d/Toolpa_layout.bin')]}
                type="GLTF"
                scale={[0.1, 0.1, 0.1]}
            /> 
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: "Arial",
    fontSize: 30,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center",
  },
});
