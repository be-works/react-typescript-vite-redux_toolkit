import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }
`;

export const SLoadingScreen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    border-top: 4px solid rgba(0, 0, 0, 0.6);
    width: 20px;
    height: 20px;
    -webkit-animation: spin 0.5s linear infinite; /* Safari */
    animation: spin 0.5s linear infinite;
  }
`;
