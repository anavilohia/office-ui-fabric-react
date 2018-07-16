import * as React from 'react';
import { List } from 'office-ui-fabric-react/lib/List';
import './PropertiesTable.scss';
import { FontClassNames } from 'office-ui-fabric-react/lib/Styling';

export interface IFeedbackListProps {
  issues: string[];
}

export class FeedbackList extends React.Component<IFeedbackListProps> {
  constructor(props: IFeedbackListProps) {
    super(props);
  }

  public render(): JSX.Element | null {
    let { issues } = this.props;

    if (issues.length === 0) {
      return null;
    }

    return (
      <div className="FeedbackList">
        <List items={issues} />
      </div>
    );
  }
}
