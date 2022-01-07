import { TypeChecklist, TypeCodeEditor, TypeImage, TypeLinkTool, TypeList, TypeParagraph, TypeQuote, TypeWarning } from "../partsArticles/typesPartsArticle";

export type TypeSwitchArticle = {
  type: {
    action: 'header',
    information: {
      text: string;
      level: number;
    };
  };
  key: number;
}
  |
{
  type: {
    action: 'image'
    information: TypeImage
  };
  key: number;
}
  |
{
  type: {
    action: 'paragraph',
    information: TypeParagraph,
  }
  key: number;
}
  | {
    type: {
      action: 'checklist',
      information: TypeChecklist
    };
    key: number;
  }
  |
{
  type: {
    action: 'code',
    information: TypeCodeEditor
  };
  key: number;
}
  |
{
  type: {
    action: 'list',
    information: TypeList
  };
  key: number;
}
  |
{
  type: {
    action: 'quote',
    information: TypeQuote
  };
  key: number;
}
  |
{
  type: {
    action: 'delimiter',
  }
  key: number;
}
  |
{
  type: {
    action: 'linkTool',
    information: TypeLinkTool
  }
  key: number;
}
  |
{
  type: {
    action: 'warning',
    information: TypeWarning
  }
  key: number;
}
