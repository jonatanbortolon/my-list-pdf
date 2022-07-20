import React, { useState, CSSProperties } from "react";

import {
  AppContainer,
  Header,
  Logo,
  Title,
  SubTitle,
  DownloadButton,
  Content,
  Item,
  CheckBox,
  TitleItem,
  RemoveButton,
  AddForm,
  AddInput,
  AddColorInput,
  AddButton,
} from "./styles";

interface ItemList {
  type: string;
  text: string;
  options?: CSSProperties;
}

const MyDocument = () => {
  const [list, changeList] = useState<ItemList[]>([]);
  const [text, changeText] = useState<string>("");
  const [color, changeColor] = useState<string>("#000");
  const [typeSubmit, changeTypeSubmit] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (typeSubmit === 1) {
      changeList((curList: ItemList[]) => [
        ...curList,
        { type: "item", text: text, options: { color: color } },
      ]);
    } else if (typeSubmit === 2) {
      changeList((curList: ItemList[]) => [
        ...curList,
        { type: "title", text: text, options: { color: color } },
      ]);
    }

    changeText("");
  }

  function removeItem(index: number) {
    changeList((curList: ItemList[]) => [
      ...curList.filter((_, i) => i !== index),
    ]);
  }

  return (
    <AppContainer>
      <Header>
        <Logo>
          <Title>My List</Title>
          <SubTitle>
            by{" "}
            <a
              href="https://github.com/JonatanBortolon"
              target="_blank"
              rel="noreferrer"
            >
              Jonatan
            </a>
          </SubTitle>
        </Logo>
        <DownloadButton onClick={() => window.print()} />
      </Header>
      <Content>
        {list?.map((item: ItemList, index: number) =>
          item.type === "item" ? (
            <Item key={index}>
              <CheckBox />
              <p style={item.options}>{item.text}</p>
              <RemoveButton onClick={() => removeItem(index)} />
            </Item>
          ) : item.type === "title" ? (
            <Item
              key={index}
              style={{ marginTop: index === 0 ? 0 : 20, marginBottom: 5 }}
            >
              <TitleItem style={item.options}>{item.text}</TitleItem>
              <RemoveButton onClick={() => removeItem(index)} />
            </Item>
          ) : null
        )}
        <AddForm onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <AddInput
              value={text}
              onChange={(e) => changeText(e.target.value)}
            />
            <AddColorInput
              value={color}
              onChange={(e) => changeColor(e.target.value)}
            />
          </div>
          <div
            style={{
              width: "100%",
              paddingTop: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <AddButton
              name="item"
              onClick={() => changeTypeSubmit(1)}
              value="+ add item"
            />
            <AddButton
              name="title"
              onClick={() => changeTypeSubmit(2)}
              value="+ add title"
            />
          </div>
        </AddForm>
      </Content>
    </AppContainer>
  );
};

export default MyDocument;
