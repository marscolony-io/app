import { RGB_BLACK } from '@features/global/styles/variables';
import { fontProperty } from '@global/styles/fonts.styles';
import styled, { css } from 'styled-components';

const LandPlotImageWrapper = styled.div<{ isGamePage?: boolean }>`
  width: 35px;
  height: 35px;

  img {
    width: inherit;
    height: inherit;
  }

  ${({ isGamePage }) => {
    if (isGamePage) {
      return css`
        box-sizing: border-box;
        height: 48px;
        width: 48px;
      `;
    }
  }}
`;

const LandPlotDescriptionB = styled.div<{
  marginTop?: number;
  isGamePage?: boolean;
}>`
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: white;
  padding: 1px 10px 3px 10px;
  margin-top: ${({ marginTop }) => marginTop ?? 'unset'};
  background: #1c1c1f;
  border-radius: 3px;

  ${({ isGamePage }) => {
    if (isGamePage) {
      return css`
        background: rgba(255, 255, 255, 0.2);
        border-radius: 3px;
        padding: 2px 6px;
        font-weight: 400;
        font-size: 10px;
        line-height: 10px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #ffffff;
      `;
    }
  }}
`;

const LandPlotLink = styled.div<{ isGamePage?: boolean }>`
  ${fontProperty};
  font-weight: bold;
  font-size: 16px;
  line-height: 30px;
  text-transform: uppercase;

  color: #ff7c25;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  svg {
    position: relative;
    top: 3px;
  }

  ${({ isGamePage }) => {
    if (isGamePage) {
      return css`
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -0.02em;
        color: #ffffff;
      `;
    }
  }}
`;

const FlexedPlotDivider = styled.div`
  flex: 1;
`;

const LandPlotEarned = styled.div<{ isGamePage?: boolean }>`
  ${fontProperty};
  font-family: Helvetica, 'sans-serif';
  font-weight: 400;
  font-size: 12px;
  line-height: 13.8px;
  color: #c4c4c4;
  width: unset;
  text-align: center;

  ${({ isGamePage }) => {
    if (isGamePage) {
      return css`
        font-weight: 400;
        font-size: 10px;
        line-height: 12px;
        text-align: right;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.8);
      `;
    }
  }}
`;

const LandPlotEarnedText = styled.span<{ isGamePage?: boolean }>`
  ${fontProperty};
  font-weight: normal;
  font-size: 12px;
  line-height: 13.8px;
  color: white;

  ${({ isGamePage }) => {
    if (isGamePage) {
      return css`
        font-weight: 700;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: -0.02em;
        color: #ffffff;
      `;
    }
  }}
`;

const DexGrid = styled.div<{
  Position?: string;
}>`
  position: ${({ Position }) => Position ?? ''};
`;

const LandPlotEarnedButton = styled.button<{
  mt?: string;
  mb?: string;
  isNewBuild?: boolean;
  Width?: string;
  Position?: string;
  Left?: string;
  Top?: string;
  zIndex?: string;
  Height?: string;
  Padding?: string;
}>`
  display: block;
  width: ${({ Width }) => Width ?? '100%'};
  background: #34ff61;
  border: 4px solid #34ff61;
  box-sizing: border-box;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  ${fontProperty};
  font-size: 12px;
  text-align: center;
  color: #000000;
  margin-top: ${({ mt }) => mt ?? '7px'};
  margin-bottom: ${({ mb }) => mb ?? '0px'};
  cursor: pointer;
  position: ${({ Position }) => Position ?? 'relative'};
  z-index: ${({ zIndex }) => zIndex ?? '0'};
  left: ${({ Left }) => Left ?? '0'};
  top: ${({ Top }) => Top ?? '0'};
  height: ${({ Height }) => Height ?? '0'};
  padding: ${({ Padding }) => Padding ?? '0'};
  text-transform: uppercase;

  svg > line {
    stroke: black;
  }

  &:disabled {
    background-color: #7c8087;
    border: 4px solid #7c8087;
    color: rgba(255, 255, 255, 0.5);
  }

  &:not([disabled]):hover {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))
      drop-shadow(0px 0px 20px #34ff61);
  }

  ${({ isNewBuild }) => {
    if (isNewBuild) {
      return css`
        margin-top: 0;
        background-color: #487636;
        border: none;
        outline: none;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

        .enh_button__get {
          color: #34ff61;
        }

        &:disabled {
          background-color: #7c8087;
          border: 4px solid #7c8087;

          .enh_button__get {
            color: rgba(255, 255, 255, 0.5);
          }

          .enh_button__for {
            color: rgba(255, 255, 255, 0.5);
          }
        }
      `;
    }
  }}
  .enh_button__for {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 11.6px;
    text-align: center;
    color: white;
  }

  .enh_button__get {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
  }
`;

const XchangeWrapper = styled.div<{
  Width?: string;
  OverFlow?: string;
}>`
  width: ${({ Width }) => Width ?? ''};
  overflow: ${({ OverFlow }) => OverFlow ?? ''};
`;

const LandPlotCollapseButtonWrapper = styled.div`
  flex-grow: 0;
  flex-basis: 39px;
  text-align: center;
  cursor: pointer;
`;

const EnhancementsListWrapper = styled.div<{
  isBottomBlock?: boolean;
  isMobileView?: boolean;
}>`
  display: flex;

  ${({ isBottomBlock, isMobileView }) => {
    if (!isBottomBlock) {
      return css`
        justify-content: space-around;
      `;
    }
    if (isBottomBlock) {
      return css`
        gap: 17px;
        justify-content: ${isMobileView ? 'space-between' : 'inherit'};
      `;
    }
  }}
`;

const MainDetailedPlotWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: fixed;
  bottom: 20px;
`;

const GamePageDetailedPlotWrapper = styled.div<{ isOpened?: boolean }>`
  position: relative;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  min-width: 567px;

  ${({ isOpened }) => {
    if (isOpened) {
      return css`
        background: rgba(0, 0, 0, 1);
        backdrop-filter: blur(10px);
      `;
    }
  }}
`;

const GamePageDetailedMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const GamePageDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const GamePageDetailedStats = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const GamePageDetailedButton = styled.div`
  width: 167px;
  height: 30px;

  button {
    height: 30px;
    margin-top: 0;
    background: #34ff61;
    border: 2px solid #34ff61;
  }
`;

const GamePageEnhancementsOverlay = styled.div<{ isMobile?: boolean }>`
  position: absolute;
  top: -150px;
  left: 0;
  padding: 12px 32px 20px;
  width: inherit;
  box-sizing: border-box;
  min-width: 567px;
  background: ${RGB_BLACK};
  backdrop-filter: blur(10px);
  border-radius: 4px;
  z-index: -1;
`;

const NewDexWrapper = styled.div<{ isMobileView?: boolean }>`
  background: #202634;
  border-radius: 20px;
  height: 480px;
  color: white;
  margin-left: 0;
  overflow-y: scroll;
  padding: 20px 10px;
  box-sizing: border-box;

  ${({ isMobileView }) => {
    if (isMobileView) {
      return css`
        width: 100vw;
        height: 100vh;
      `;
    }
  }}
`;

const NewDexTitle = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const NewPoolListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export {
  DexGrid,
  EnhancementsListWrapper,
  FlexedPlotDivider,
  GamePageDetailedButton,
  GamePageDetailedInfo,
  GamePageDetailedMeta,
  GamePageDetailedPlotWrapper,
  GamePageDetailedStats,
  GamePageEnhancementsOverlay,
  LandPlotCollapseButtonWrapper,
  LandPlotDescriptionB,
  LandPlotEarned,
  LandPlotEarnedButton,
  LandPlotEarnedText,
  LandPlotImageWrapper,
  LandPlotLink,
  MainDetailedPlotWrapper,
  NewDexTitle,
  NewDexWrapper,
  NewPoolListWrapper,
  XchangeWrapper
};
