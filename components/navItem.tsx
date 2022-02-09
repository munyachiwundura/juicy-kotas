import React, { FunctionComponent } from 'react';
import Link from 'next/link';

type Props = {
    title: string,
    link: string
};

const NavItem: FunctionComponent<Props> = (props) => {
  return (
      <div>
        <Link href={props.link}>
            <p>{props.title}</p>
        </Link>
     </div>
      )};

export default NavItem
