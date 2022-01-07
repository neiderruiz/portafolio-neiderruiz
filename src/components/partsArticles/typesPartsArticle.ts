export type TypeHeaderH1 = {
  text: string;
  level?: number;
  className?: string;
}

export type TypeChecklist = {
  items: {
    checked: boolean;
    text: string;
  }[]
}

export type TypeCodeEditor = {
  code: string;
}

export type TypeParagraph = {
  text: string;
}

export type TypeImage = {
  file: {
    url: string;
    small: string;
    regular: string;
  };
  withBackground: boolean;
  caption: string;
}


export type TypeLinkTool = {
  link: string;
  meta: {
    title: string;
    description: string;
    image: {
      url: string;
    }
  };
}

export type TypeQuote = {
  text: string;
  caption: string;
  alignment: string
}

export type TypeWarning = {
  title: string;
  message: string;
}


export type TypeList = {
  items: string[]
  style?: string;
}
