import { Button, Input, Form, Card, Checkbox } from "antd";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  padding-top: 175px;
`;

const Container = styled(Card)`
  margin-left: auto;
  margin-right: auto;
  width: 1000px;
`;

const App = () => {
  const [result, setResult] = useState("");

  const onFinish = (values) => {
    var words = values.convert.split(/\s+/);

    // if number is checked, don't add ''
    if (values.number) {
      var newWords = words.map((word) => {
        return word + ",";
      });
    } else {
      var newWords = words.map((word) => {
        return "'" + word + "',";
      });
    }

    // remove the final comma
    var lastWord = newWords[newWords.length - 1].slice(0, -1);
    newWords.splice(-1);
    newWords.push(lastWord);

    setResult(newWords);
  };

  return (
    <Wrapper>
      <Container>
        <Form
          name="test"
          onFinish={onFinish}
          initialValues={{
            number: false,
          }}
        >
          <Form.Item name="convert" label="convert">
            <Input.TextArea rows={15} />
          </Form.Item>
          <Form.Item name="number" valuePropName="checked">
            <Checkbox>Convert to number</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <p>Results: {result}</p>
      </Container>
    </Wrapper>
  );
};

export default App;
