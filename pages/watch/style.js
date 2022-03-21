import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  padding: 64px;
`;

export const VideoContainer = styled.div`
  flex: 5;
  padding: 32px;
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  border-radius: 20px;
`;

export const Title = styled.span`
  font-family: "Roboto";
  font-size: 28px;
  font-weight: bold;
`;

export const ChannelTitle = styled.span`
  font-family: "Roboto";
  font-size: 20px;
  color: #444;
`;

export const Description = styled.span`
  font-family: "Roboto";
  font-size: 14px;
  color: #444;
`;

export const VideoRelated = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 24px;
  margin-left: 12px;
  display: flex;
  background: #f1f1f1;
  border-radius: 20px;
  align-items: center;
`;
