import * as React from 'react';

type Props = {
  increment: () => void;
  incrementIfOdd: () => void;
  incrementAsync: () => void;
  decrement: () => void;
  counter: number;
};

export default class Counter extends React.Component<Props> {
  props: Props;

  render() {

    return <div>e</div>;
  }
}
