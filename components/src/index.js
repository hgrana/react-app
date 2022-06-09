import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';

// components
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment
          authorName="Matt"
          date="Today at 5:31pm"
          content="Very cool!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          authorName="Sam" 
          date="Today at 6:02pm" 
          content="Nice."
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment 
          authorName="Alex"
          date="Today at 7:20pm"
          content="I liked it very much!"
          avatar={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
