import React from "react";
import Send from "@mui/icons-material/Send";
import {
  Container,
  Title,
  Desc,
  InputContainer,
  Input,
  Button,
} from "./newsletterStyle";

const Newsletter: React.FC = (): React.ReactElement => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite Fraizer Product.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
