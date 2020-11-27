import React, {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


class ChatWidget extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  OpenChatApp = (number, itemTitle) => {

    //let url = 'whatsapp://send?text=YoYoYo';
    let message = 'Hi, I am interested in the ' + itemTitle + '.';
    let url = 'https://wa.me/' + number + '?text=' + message

    window.open(url, '_blank');
  };

  render() {

    let {
      number,
      itemTitle
    } = this.props

    return (
      <div className={'chat-widget'} onClick={() => this.OpenChatApp(number, itemTitle)}>
        <WhatsAppIcon fontSize={'large'} style={{ color: 'white' }}/>
      </div>
    );
  }
}

export default ChatWidget;
