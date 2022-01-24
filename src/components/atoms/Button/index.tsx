import { ButtonContainer } from "./styles";

type colorSchema = "light" | "black";

interface IButtonProps {
  onClick?: () => void;
  colorSchema?: colorSchema;
  children?: any;
}
const Button: React.FC<IButtonProps> = ({
  onClick,
  children,
  colorSchema = "light",
}) => {
  const getBgColor = (color: colorSchema) => {
    if (color === "light") return "transparent";
    if (color === "black") return "#1A1A1A";
  };

  const getBorderColor = (color: colorSchema) => {
    if (color === "black") return "#fff";
    if (color === "light") return "#1A1A1A";
  };

  const getFontColor = (color: colorSchema) => {
    if (color === "black") return "#fff";
    if (color === "light") return "#1A1A1A";
  };

  return (
    <ButtonContainer
      // eslint-disable-next-line no-script-url
      href="javascript:;"
      onClick={() => onClick?.()}
      style={{
        backgroundColor: getBgColor(colorSchema),
        borderColor: getBorderColor(colorSchema),
        color: getFontColor(colorSchema),
      }}
    >
      {children}
    </ButtonContainer>
  );
};

export { Button };
