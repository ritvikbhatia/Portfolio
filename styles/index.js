import styled from "@emotion/styled";
import theme from "./theme";

import {
  space,
  layout,
  color,
  flexbox,
  border,
  typography,
  background,
  grid,
  shadow,
  position,
  height,
  variant,
} from "styled-system";

export const Box = styled.div(
  variant({
    prop: "type",
    variants: {
      row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      column: {
        display: "flex",
        flexDirection: "column",
      },
      center: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      },
      heading: {
        width: "100%",
        marginLeft: "0",
        marginRight: "0",
        borderBottom: `3px solid ${theme.colors.blue}`,
        backgroundColor: "#f7f8fb",
        padding: "8px",
      },
      shade: {
        "&:hover": {
          WebkitFilter: "brightness(95%)",
        },
      },
    },
  }),
  space,
  color,
  grid,
  layout,
  flexbox,
  border,
  typography,
  shadow,
  position,
  background
);

export const OldButton = styled("button")(
  {
    appearance: "none",
    fontFamily: theme.fonts.DM,
    fontWeight: theme.fontWeights.semiBold,
    fontSize: "16px",
    padding: "10px 36px",
    color: theme.colors.orange,
    borderColor: theme.colors.orange,
    border: "1px solid",
    borderRadius: "4px 0 4px 0",
    backgroundColor: theme.colors.white,
    cursor: "pointer",
    width: "fit-content",
  },
  variant({
    prop: "type",
    variants: {
      tab: {
        color: "#fff",
        border: "none",
        backgroundColor: "transparent",
        fontWeight: "normal",
        "&:hover": {
          color: "#ED6B65",
        },
      },
    },
  }),
  space,
  color,
  typography,
  layout,
  flexbox,
  border
);
export const Tab = styled("button")(
  {
    appearance: "none",
    fontFamily: theme.fonts.DM,
    fontWeight: theme.fontWeights.normal,
    fontSize: "20px",
    padding: "5px 18px",
    color: theme.colors.blue,
    backgroundColor: "#f2f2f2",
    cursor: "pointer",
    border: "none",
    width: "100%",
  },
  variant({
    prop: "type",
    variants: {
      active: {
        color: "white",
        bg: "orange",
        boxShadow: "0px 4px 14px rgba(237, 107, 101, 0.9)",
      },
    },
  }),
  space,
  color,
  typography,
  layout,
  flexbox,
  border
);

export const Para = styled.p(
  {
    fontSize: theme.fontSizes[4],
    color: theme.colors.grey,
    lineHeight: "24px",
  },
  space,
  color,
  typography,
  position,
  border,
  layout
);
export const Label = styled.p(
  {
    fontSize: theme.fontSizes[4],
    color: theme.colors.grey,
    marginBottom: 0,
    marginTop: 0,
  },
  space,
  color,
  typography,
  position,
  border,
  layout
);

export const Span = styled.span(
  {
    fontSize: theme.fontSizes[4],
    color: theme.colors.grey,
    lineHeight: "24px",
  },
  space,
  color,
  typography,
  layout
);
export const Tag = styled.span(
  {
    fontSize: theme.fontSizes[4],

    borderRadius: "4px 0 4px 0",
  },
  space,
  color,
  typography,
  layout
);
export const Tags = styled.div(
  {
    fontSize: theme.fontSizes[4],
    borderRadius: "4px 0 4px 0",
    fontSize: "xx-large",
    border: "none",
  },
  space,
  color,
  typography,
  layout,
  height,
  border
);

export const H1 = styled.h1(
  {
    fontSize: theme.fontSizes[10],
    color: theme.colors.blue,
    fontFamily: theme.fonts.DM,
    fontWeight: theme.fontWeights.bold,
    lineHeight: "64px",
  },
  space,
  color,
  typography,
  position,
  border,
  layout,
  variant({
    prop: "type",
    variants: {
      SEO: {
        padding: 0,
        fontSize: "0px",
        lineHeight: 0,
        margin: 0,
      },
      fullBorder: {
        borderBottom: "4px solid",
        borderColor: "orange",
        lineHeight: "46px",
      },
      centerBorder: {
        paddingBottom: "10px",
        borderBottom: "4px solid",
        borderColor: "orange",
        width: "fit-content",
        textAlign: "center",
        lineHeight: "46px",
      },
    },
  })
);
export const H2 = styled.h2(
  {
    fontSize: theme.fontSizes[9],
    color: theme.colors.blue,
    fontFamily: theme.fonts.DM,
    fontWeight: theme.fontWeights.normal,
    lineHeight: "46px",
  },
  space,
  color,
  typography,
  position,
  border,
  layout,
  variant({
    prop: "type",
    variants: {
      fullBorder: {
        borderBottom: "4px solid",
        borderColor: "orange",
      },
      centerBorder: {
        borderBottom: "4px solid",
        borderColor: "orange",
        width: "fit-content",
        textAlign: "center",
      },
    },
  })
);
export const H3 = styled.h3(
  {
    fontSize: theme.fontSizes[8],
    color: theme.colors.blue,
    fontFamily: theme.fonts.DM,
    fontWeight: theme.fontWeights.normal,
    lineHeight: "36px",
  },
  space,
  color,
  typography,
  position,
  border,
  layout,
  variant({
    prop: "type",
    variants: {
      fullBorder: {
        paddingBottom: 12,
        borderBottom: "4px solid",
        borderColor: "orange",
      },
      centerBorder: {
        paddingBottom: 12,
        borderBottom: "4px solid",
        borderColor: "orange",
        width: "fit-content",
        textAlign: "center",
      },
    },
  })
);
export const H5 = styled.h5(
  {
    fontSize: theme.fontSizes[6],
    color: theme.colors.blue,
    fontFamily: theme.fonts.DM,
    fontWeight: theme.fontWeights.normal,
    lineHeight: "26px",
  },
  space,
  color,
  typography,
  position,
  border,
  layout
);
export const H6 = styled.h6(
  {
    fontSize: theme.fontSizes[4],
    color: theme.colors.blue,
    fontFamily: theme.fonts.DM,
    fontWeight: theme.fontWeights.normal,
    marginBottom: 0,
  },
  space,
  color,
  typography,
  position,
  border,
  layout
);

export const StyledLink = styled("a")(
  {
    fontSize: theme.fontSizes[5],
    color: theme.colors.grey,
    lineHeight: "24px",
    cursor: "pointer",
    "&:hover": {
      color: theme.colors.orange,
    },
  },
  space,
  color,
  typography,
  position,
  border,
  layout
);

export const Image = styled.img`
  ${space}
  ${color}
  ${typography}
  ${position}
  ${border}
  ${shadow}
`;
export const ResponsiveImage = styled.img`
  ${space}
  ${color}
  ${typography}
  ${position}
  ${border}
  ${shadow}
  ${layout}
`;

export const Input = styled("input")(
  {
    border: "1px solid #d3d3d3",
  },
  space,
  color,
  typography,
  layout,
  position,
  border,
  shadow
);
export const TextArea = styled("textarea")(
  {
    border: "1px solid #d3d3d3",
  },
  space,
  color,
  typography,
  layout,
  position,
  border,
  shadow
);

export function Card({ children, ...props }) {
  return (
    <MotionBox
      layout
      initial={{ y: 50, opacity: 0, boxShadow: theme.shadows.invision }}
      exit={{ opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{ ease: "easeOut", duration: 0.1 }}
      whileHover={{
        boxShadow: theme.shadows.invisionHover,
        y: -2,
      }}
      style={{ cursor: "pointer" }}
      borderRadius="lg"
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export function Bread({ children, ...props }) {
  return (
    <MotionBox
      whileHover={{ color: theme?.colors?.blue, scale: 1.05 }}
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export function StatsCard({ children, onClick, selected, bg, ...props }) {
  return (
    <MotionBox
      transition={{ ease: "easeOut", duration: 0.1 }}
      whileHover={{
        boxShadow: theme.shadows.invisionHover,
        y: -2,
      }}
      initial={{ y: 50, opacity: 0, boxShadow: theme.shadows.invision }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      type="column"
      bg={selected ? bg || "orange" : "white"}
      borderRadius="lg"
      style={{ cursor: "pointer" }}
      onClick={onClick}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
