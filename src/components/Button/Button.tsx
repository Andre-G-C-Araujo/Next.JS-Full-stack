import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonBase, ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { ButtonSize, buttonSize} from "./buttonSize";

  interface ButtonProps extends ButtonBaseProps{
    fullWidth?: boolean;
    children: React.ReactNode;
    colorVariant?: ColorVariant;
    variant?: Variant;
    size?: ButtonSize
  }

export default function Button ({
  children,
  fullWidth,
   styleSheet,
   colorVariant,
   variant,
   size,
  } 
  : ButtonProps)
   {
  const theme = useTheme()

  return(
    <ButtonBase
    styleSheet={{
      alignSelf: 'flex-start',
      alignItems: 'center',
      justifyContent: 'center',
      ...colorVariantBy(theme, colorVariant, variant),
      ...buttonSize[size],
      ...(fullWidth && {
        alignSelf: 'initial',
      }),
      ...styleSheet
    }
    }
    >
      {children}  
    </ButtonBase>
  )
}

Button.defaultProps = {
  fullWidth: false,
  size: 'md',
  variant: 'contained',
  colorVariant: 'primary',
}

Button.Base = ButtonBase;
