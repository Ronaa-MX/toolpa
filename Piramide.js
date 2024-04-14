import { Viro3DObject, ViroAmbientLight, ViroARScene } from '@viro-community/react-viro';

export const Piramide = () => {
	const handleLoadStart = () => {
	  console.log("OBJ loading has started");   
	}  
	const handleLoadEnd = () => {
	  console.log("OBJ loading has finished");
	}
	
	
	return (
		<>
		<ViroAmbientLight color="#fff" intensity={300}/>
  <Viro3DObject
	source={require('./assets/mexican_pyramid_-_mesoamerican_culture.glb')}
   
	type="GLB"
	position={[0.0, -2.0, -1]}
	scale={[0.001, 0.001, 0.001]}
  />
</>
	)
  }