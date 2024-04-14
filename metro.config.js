const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const { transformer, resolver } = config;

config.transformer = {
...transformer,
babelTransformerPath: require.resolve("react-native-svg-transformer"),
}

config.resolver = {
    ...resolver,
    assetExts: [...resolver.assetExts, "mtl", "obj", "png", "gltf","jpeg", "bin", "glb"],
    sourceExts: [...resolver.sourceExts, "svg", "png"],
  };

module.exports = config;