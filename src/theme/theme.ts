import { typography } from './defaults/typografhy'
import {colors} from './defaults/color'

const theme = {
  typography,
  colors
};

export type Theme = typeof theme
export type ThemeTypographyVariants = keyof typeof typography.variants

export default theme