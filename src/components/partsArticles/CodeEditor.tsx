import React, { useState, FC } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { TypeCodeEditor } from "./typesPartsArticle";

const CodeEditor: FC<TypeCodeEditor> = ({ code }) => {
  const [codeShow, setCodeShow] = useState(code);

  const onValueChange = (newCode: string) => {
    setCodeShow(newCode);
  };

  const highlight = () => (
    <Highlight {...defaultProps} theme={theme} code={codeShow} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          {tokens.map((line, i) => (
            <div   {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </>
      )}
    </Highlight>
  );

  return (
    <Editor
      className="bg-gray-900 rounded-lg z-0"
      value={codeShow}
      onValueChange={onValueChange}
      highlight={highlight}
      padding={10}
    />
  );
};

export default CodeEditor;
