import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: null };
  }

  setVisible(index) {
    if (this.state.visible === null) {
      this.setState({ visible: index });
    } else if (this.state.visible === index) {
      this.setState({ visible: null });
    } else {
      this.setState({ visible: index });
    }
  }

  render() {
    return (
      <div>
        {this.props.topics.map((topic, index) => (
          <div key={topic.topic}>
            <div className='outlined parent' onClick={() => this.setVisible(index)}>{topic.title}
              <h1>{topic.topic}</h1>
            </div>
            {index === this.state.visible && <div className='child'>{topic.details}</div>}
          </div>
        ))}
      </div>
    );
  }
}
