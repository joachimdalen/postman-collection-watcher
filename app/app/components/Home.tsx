// @flow
import * as React from 'react';
import { SideBar, SideBarMenuItem } from '@joachimdalen/devui';

type Props = {};

export default class Home extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div data-tid="container">
        <SideBar>
          <SideBarMenuItem
            label="Analytics"
            icon="fas fa-tachometer-alt"
            active
          />
          <SideBarMenuItem label="Assets" isHeader />
          <SideBarMenuItem label="Locations" icon="fas fa-building" />
          <SideBarMenuItem label="Trucks" icon="fas fa-truck" />
        </SideBar>
      </div>
    );
  }
}
