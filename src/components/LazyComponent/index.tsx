/*
 * LazyComponent
 */

import { Suspense } from "react";
import styled, { keyframes } from "styled-components";

export interface LazyComponentProps {
    color?: string;
  }

export const LazyLoading = (props: LazyComponentProps) => {
  const { color = "#5dbbfb" } = props;

  return (
    <SComponentLazy color={color}>
      <div className="dot__container">
        <div className="dot"></div>
      </div>
    </SComponentLazy>
  );
};

const LazyComponent = ({ children }: { children: JSX.Element }) => (
  <Suspense fallback={<LazyLoading />}>{children}</Suspense>
);

export default LazyComponent;
LazyComponent.displayName = LazyComponent;

const dotFloating = keyframes`
  0% { left: calc(-50% - 5px); }
  75% { left: calc(50% + 100px + 5px); }
  100% { left: calc(50% + 100px + 5px); }
`;

const dotFloatingBefore = keyframes`
  0% { left: -50px; }
  50% { left: -12px; }
  75% { left: -50px; }
  100% { left: -50px; }
`;

const dotFloatingAfter = keyframes`
  0% { left: -100px; }
  50% { left: -24px; }
  75% { left: -100px; }
  100% { left: -100px; }
`;

const SComponentLazy = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  margin: 0 -5%;

  .dot__container {
    max-width: 100%;
    width: 500px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .dot {
    background-color: ${({ color }) => color};
    border-radius: 50%;
    color: ${({ color }) => color};
    height: 10px;
    width: 10px;
    position: relative;
    animation: ${dotFloating} 2.4s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
    &::before,
    &::after {
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
    }

    &:before {
      background-color: ${({ color }) => color};
      border-radius: 50%;
      color: ${({ color }) => color};
      height: 10px;
      width: 10px;
      left: -12px;
      animation: ${dotFloatingBefore} 2.4s infinite ease-out;
    }

    &:after {
      background-color: ${({ color }) => color};
      border-radius: 50%;
      color: ${({ color }) => color};
      height: 10px;
      width: 10px;
      left: -24px;
      animation: ${dotFloatingAfter} 2.4s infinite cubic-bezier(0.4, 0, 1, 1);
    }
  }
`;
