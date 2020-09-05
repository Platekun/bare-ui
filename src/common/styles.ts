export type IStylable = Partial<{
  /**
   * Class name of the component
   */
  className: string;
  /**
   * Inline styles of the component
   */
  style: Partial<React.CSSProperties>;
}>;
