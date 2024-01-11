import React from "react";
import TodoTextInput from "./todo-text-input";

const Header = ({ onNewItem }: { onNewItem: (text: string) => void }) => (
  <header className="header">
    <h1>조이안슬아</h1>
    <TodoTextInput
      initial=""
      placeholder="아빠 우리 뭐해여?"
      onSubmit={onNewItem}
    />
  </header>
);

export default Header;
