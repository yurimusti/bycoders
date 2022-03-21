import { LayoutProps } from "antd";
import styled from "styled-components";

import { background, layout } from "styled-system";

interface StyledProps extends LayoutProps {}

export const Container = styled.div<StyledProps>`
  height: 100vh;
  ${layout}
`;
