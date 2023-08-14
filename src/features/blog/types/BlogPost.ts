export interface ContentText {
  type: 'text';
  text: string;
}

export interface ContentImage {
  type: 'image';
  url: string;
  alt: string;
}

export interface ContentHeader {
  type: 'header';
  text: string;
}

export interface ContentSubHeader {
  type: 'subheader';
  text: string;
}

export interface ContentList {
  type: 'list';
  items: string[];
}

export type Content =
  | ContentText
  | ContentImage
  | ContentHeader
  | ContentSubHeader
  | ContentList;

export interface Type {
  id: string;
  title: string;
  published: string;
  content: Content[];
  author: string;
  topic: string;
  background: string;
  subtitle: string;
  description: string;
}

export type ShortType = Pick<
  Type,
  'id' | 'subtitle' | 'published' | 'topic' | 'description' | 'background'
>;
