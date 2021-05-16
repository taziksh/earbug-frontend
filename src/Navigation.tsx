import * as React from 'react';
import {
  Alignment,
  AnchorButton,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider
} from '@blueprintjs/core';

const navbarStyles = {};

export interface NavigationProps {}

export class Navigation extends React.PureComponent<NavigationProps> {
  public render() {
    return (
      <Navbar style={navbarStyles}>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>Snipchat Logo here</NavbarHeading>
          <NavbarDivider />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <AnchorButton
            href="http://blueprintjs.com/docs"
            text="Docs"
            target="_blank"
            minimal={true}
            rightIcon="share"
          />
          <AnchorButton
            href="http://github.com/palantir/blueprint"
            text="Github"
            target="_blank"
            minimal={true}
            rightIcon="code"
          />
        </NavbarGroup>
      </Navbar>
    );
  }
}
