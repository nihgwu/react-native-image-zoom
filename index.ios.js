import React from 'react';
import {
  View,
  ScrollView,
  Image
} from 'react-native';

export default class ImageViewZoom extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView
          maximumZoomScale={this.props.maximumZoomScale}
          minimumZoomScale={this.props.minimumZoomScale}
          contentContainerStyle={{ alignItems:'center', justifyContent:'center'}}>
          <Image {...this.props}/>
        </ScrollView>
      </View>
    );
  }
}
