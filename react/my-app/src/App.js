import React, {
  Component
} from 'react';
import logo from './logo.svg';
import {
  Button,
  Slider,
  Carousel,
  WingBlank,
  WhiteSpace
} from 'antd-mobile';
import './App.less';

class App extends Component {

  state = {
    data: ['1', '2', '3'],
    imgHeight: 374,
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }

  log = (name) => {
    return (value) => {
      console.log(`${name}: ${value}`);
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </div>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
            </a>
          ))}
        </Carousel>
        <Button>Start</Button>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="sub-title">Slider</p>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={26}
            min={0}
            max={30}
            onChange={this.log('change')}
            onAfterChange={this.log('afterChange')}
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="sub-title">Disabled slider</p>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={26}
            min={0}
            max={30}
            disabled
            onChange={this.log('change')}
            onAfterChange={this.log('afterChange')}
          />
        </WingBlank>
        <WhiteSpace size="lg" />
        <WingBlank size="lg">
          <p className="sub-title">Slider with customized color</p>
          <Slider
            style={{ marginLeft: 30, marginRight: 30 }}
            defaultValue={26}
            min={0}
            max={30}
            trackStyle={{
              backgroundColor: 'red',
              height: '5px',
            }}
            railStyle={{
              backgroundColor: 'blue',
              height: '5px',
            }}
            handleStyle={{
              borderColor: 'blue',
              height: '14px',
              width: '14px',
              marginLeft: '-7px',
              marginTop: '-4.5px',
              backgroundColor: 'blue',
            }}
          />
        </WingBlank>
      </div>
    );
  }
}

export default App;