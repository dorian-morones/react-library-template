import React from "react";
import { exampleComponentProps } from "./example.types";
import { GeneratorContainer } from "./styles/general";

const ExampleComponent: React.FC<exampleComponentProps> = ({ theme }) => {

  return (
    <GeneratorContainer>
      <p>Example Component</p>
    </GeneratorContainer>
  );
};

export default ExampleComponent;
