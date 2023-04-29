import {  Description, Percentage, sizeStyleProps } from "./styles";

interface Props {
  title: string;
  subtitle: string;
  size: sizeStyleProps;
}

export function HighLight({ title, subtitle, size }: Props) {
  return(
    <>
      <Percentage type={size}>
        {title}
      </Percentage>

      <Description>
        {subtitle}
      </Description>
    </>
  )
}