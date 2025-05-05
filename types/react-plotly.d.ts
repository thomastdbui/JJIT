// types/react-plotly.d.ts
declare module "react-plotly.js" {
  import { Component } from "react";

  type PlotParams = {
    data: any[];
    layout?: Partial<Plotly.Layout>;
    config?: Partial<Plotly.Config>;
    frames?: Partial<Plotly.Frame>[];
    revision?: number;
    useResizeHandler?: boolean;
    style?: Partial<CSSStyleDeclaration>;
    className?: string;
    onInitialized?: (figure: Readonly<any>, graphDiv: HTMLDivElement) => void;
    onUpdate?: (figure: Readonly<any>, graphDiv: HTMLDivElement) => void;
    onPurge?: (figure: Readonly<any>, graphDiv: HTMLDivElement) => void;
    onError?: (err: Error) => void;
    debug?: boolean;
    divId?: string;
  };

  export default class Plot extends Component<PlotParams> {}
}
