import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: null
    };
    this.props.topics = [
      { topic: 'Hypertext Markup Language', details: 'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.' },
      { topic: 'Cascading Style Sheets', details: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.' },
      { topic: 'JavaScript', details: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.' }
    ];
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
