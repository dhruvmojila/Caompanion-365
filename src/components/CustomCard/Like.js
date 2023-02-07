import React from 'react';
import LottieView from 'lottie-react-native';

const Like = ({onDone, visible = false}) => {
  if (!visible) {
    return null;
  }
  return (
    <>
      {visible && (
        <LottieView
          loop={false}
          autoPlay={visible}
          onAnimationFinish={onDone}
          source={require('../../../assets/animations/like.json')}
        />
      )}
    </>
  );
};

export default Like;
