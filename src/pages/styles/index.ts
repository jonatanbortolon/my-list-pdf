import styled from 'styled-components';

import { Trash2 } from '@styled-icons/feather';
import { FileDownload } from '@styled-icons/fa-solid';

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.div`
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 15px -5px rgba(0, 0, 0, 0.75);
  padding: 0 20px;

  @media only print {
    display: none;
  }
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  -webkit-text-stroke: 1px black;
  color: white;
`;

export const SubTitle = styled.h6`
  color: #ffd000;
`;

export const DownloadButton = styled(FileDownload)`
  width: 30px;
  height: 30px;
  color: #ffd000;
  margin-right: 20px;
`;

export const Content = styled.div`
  width: 100vw;
  height: calc(100vh - 100px);
  min-height: calc(100vh - 100px);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  overflow-y: hidden;
  overflow-x: auto;

  @media (max-width: 650px) {
    flex-wrap: nowrap;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media only print {
    padding: 0px;
    flex-wrap: wrap;
  }
`;

export const RemoveButton = styled(Trash2)`
  width: 15px;
  height: 15px;
  color: red;
  display: none;
  margin-left: 10px;

  @media only print {
    display: none;
  }
`;

export const Item = styled.div`
  min-width: 25vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  :hover {
    ${RemoveButton} {
      display: flex;
    }
  }
`;

export const CheckBox = styled.div`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 3px;
`;

export const TitleItem = styled.p`
  margin-right: auto;
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

export const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const AddInput = styled.input.attrs({ type: 'text', required: true })`
  -webkit-appearance: none;
  height: 25px;
  margin: 0;
  padding: 0 5px;
  border: 1px solid black;
  border-radius: 3px;

  @media only print {
    display: none;
  }
`;

export const AddColorInput = styled.input.attrs({ type: 'color' })`
  -webkit-appearance: none;
  width: 25px;
  height: 25px;
  border: none;
  margin: 0;
  padding: 0;
  margin-left: 10px;

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-color-swatch {
    border: 1px solid black;
    border-radius: 3px;
  }

  @media only print {
    display: none;
  }
`;

export const AddButton = styled.input.attrs({ type: 'submit' })`
  -webkit-appearance: none;
  width: 100%;
  height: 20px;
  border: 1px solid black;
  padding: 0 5px;
  border-radius: 3px;
  @media only print {
    display: none;
  }
`;
