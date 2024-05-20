import React from "react";
import NextLink from "next/link";
import Text from "../Text/Text";
import { StyleSheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "styled-components";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?:
    | "primary"
    | "accent"
    | "neutral"
    | "success"
    | "warning"
    | "negative";
  colorVariantEnable?: boolean;
}

const Link = React.forwardRef(
  (
    {
      href,
      children,
      colorVariant,
      styleSheet,
      colorVariantEnable,
      ...props
    }: LinkProps,
    ref
  ) => {
    const theme = useTheme();
    const isExternlLink = href.startsWith("http");

    const currentColorSet = {
      color: theme.colors[colorVariant].x500,
      hover: {
        color: theme.colors[colorVariant].x400,
      },
      focus: {
        color: theme.colors[colorVariant].x600,
      },
    };

    const linkProps = {
      tag: 'a',
      ref,
      children,
      href,
      styleSheet: {
        textDecoration: "none",
        ...colorVariantEnable && {
          color: currentColorSet.color,
        },
        ...styleSheet,
        hover: {
          ...styleSheet?.hover,
          ...colorVariantEnable && {
            color: currentColorSet.focus.color,
          },
        },
        focus: {
          ...styleSheet?.focus,
          ...colorVariantEnable && {
            color: currentColorSet.focus.color,
          },
        },
      },
      ...props,
    };

    if (isExternlLink)
      return (
        <Text
          {...{
            target: "_blank",
            ...linkProps,
          }}
        />
      );

    return (
      <NextLink href={href} passHref>
        <Text {...linkProps} />
      </NextLink>
    );
  }
);

Link.defaultProps = {
  colorVariant: "primary",
  colorVariantEnable: true,
};

export default Link;
