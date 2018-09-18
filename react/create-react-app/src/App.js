import React, { Component, Fragment } from 'react';
import { Tabs, Carousel } from 'antd-mobile';
import styles from './App.less';

class App extends Component {

  constructor() {
    super();
    this.state = {
      tabs: [
        { title: 'First Tab' },
        { title: 'Second Tab' },
        { title: 'Third Tab' },
      ],
      data: ['1', '2', '3']
    };
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <Fragment>
        <div className={styles.content}>
          <Tabs tabs={this.state.tabs}
            initalPage={'t2'}
          >
            <div className={styles.childs} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
              <Carousel
                autoplay={false}
                infinite
                className={styles['slider_am_carousel']}
              >
                {this.state.data.map(val => (
                  <a
                    key={val}
                    href="http://www.alipay.com"
                    className={styles['slider_am_carousel']}
                  >
                  <h3>不显示</h3>
                  </a>
                ))}
              </Carousel>
            </div>
            <div className={styles.childs} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div className={styles.childs} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
        </div>
      </Fragment>
    );
  }
}

export default App;
