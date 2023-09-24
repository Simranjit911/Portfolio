import { TypeAnimation } from 'react-type-animation';

const Text = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        ' Frontend Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        ' ReactJS Developer',
        1000,
        ' UI Developer',
        1000
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: '25px', display: 'inline-block', }}
      repeat={Infinity}
    />
  );
};
export default Text