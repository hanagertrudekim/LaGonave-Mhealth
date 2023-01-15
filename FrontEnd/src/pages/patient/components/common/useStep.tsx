import React, {useState} from 'react';
import { Steps } from 'antd';

export default function useStep() {
  const { Step } = Steps;

  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const StepComponents = () => {
    return (
      <>
        <Steps type="navigation" size="small" current={current} onChange={onChange} className="site-navigation-steps">
          <Step
            title="Step 1"
            subTitle="Personal information"
            status="finish"
            description="Enter personal information."
          />
          <Step title="Step 2" subTitle="Medical matters" status="process" description="Enter your care details" />
          <Step title="Step 3" subTitle="Complete Form" status="wait" description="Complete the form" />
        </Steps>
      </>
    );
  };

  return { StepComponents };
}
