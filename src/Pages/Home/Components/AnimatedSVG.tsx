import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSVGProps {
  isHovered: boolean;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ isHovered }) => {
  return (
    <motion.svg
      key={isHovered ? 'hovered' : 'not-hovered'} // Unique key to trigger re-render
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ x: 0 }} // Start at the original position
      animate={{ x: isHovered ? 10 : 0 }} // Move right when hovered, return to original position
      transition={{ duration: 0.3 }} // Smooth transition duration
    >
      <path
        d="M18 8L16.2125 9.74125L23.1875 16.75H8V19.25H23.1875L16.2125 26.2162L18 28L28 18L18 8Z"
        fill="#006401"
      />
      <path
        d="M17.5 35C14.0388 35 10.6554 33.9736 7.77753 32.0507C4.89967 30.1278 2.65665 27.3947 1.33212 24.197C0.00758245 20.9993 -0.338976 17.4806 0.336265 14.0859C1.01151 10.6913 2.67822 7.57306 5.12564 5.12564C7.57306 2.67822 10.6913 1.01151 14.0859 0.336265C17.4806 -0.338976 20.9993 0.00758245 24.197 1.33212C27.3947 2.65665 30.1278 4.89967 32.0507 7.77753C33.9736 10.6554 35 14.0388 35 17.5C34.9947 22.1397 33.1493 26.5878 29.8685 29.8685C26.5878 33.1493 22.1397 34.9947 17.5 35ZM17.5 2.50001C14.5333 2.50001 11.6332 3.37974 9.16645 5.02796C6.69972 6.67618 4.77713 9.01886 3.64181 11.7598C2.5065 14.5006 2.20945 17.5166 2.78823 20.4264C3.36701 23.3361 4.79562 26.0088 6.8934 28.1066C8.99119 30.2044 11.6639 31.633 14.5737 32.2118C17.4834 32.7906 20.4994 32.4935 23.2403 31.3582C25.9811 30.2229 28.3238 28.3003 29.972 25.8336C31.6203 23.3668 32.5 20.4667 32.5 17.5C32.4954 13.5232 30.9135 9.71056 28.1015 6.89852C25.2894 4.08648 21.4768 2.50464 17.5 2.50001Z"
        fill="#006401"
      />
    </motion.svg>
  );
};

export default AnimatedSVG;
