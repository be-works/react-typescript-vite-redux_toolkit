import styled, { css, keyframes } from "styled-components";

export interface ISkeleton {
  hideAnimation: boolean;
  borderRadius?: number;
  height?: number;
  width?: number;
}

const skeletonAnimation = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0 0%;
  }
`;

const Skeleton = styled.div<ISkeleton>`
  width: ${(props) => `${props.width || 200}px`};
  height: ${(props) => `${props.height || 20}px`};
  background-color: #f2f2f2;
  border-radius: ${(props) => `${props.borderRadius || 4}px`};
  position: relative;
  overflow: hidden;
  margin: 4px;
  ${(props) =>
    !props.hideAnimation &&
    css`
      background: linear-gradient(
        90deg,
        rgba(190, 190, 190, 0.2) 25%,
        rgba(129, 129, 129, 0.24) 37%,
        rgba(190, 190, 190, 0.2) 63%
      );
      background-size: 400% 100%;
      animation: ${skeletonAnimation} 1.4s ease infinite;
    `}
`;

export default Skeleton;
