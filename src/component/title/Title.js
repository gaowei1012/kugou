import React from 'react'
import history from '../../history' // history
import './title.css'

class Title extends React.Component {
    goback() {
        history.go(-1); // 返回上一级菜单
    }

    render() {
        return(
          <div className='title-wrap' style={{background: this.props.bg}}>
              <div className='back-icon' onClick={this.goback.bind(this)}></div>
              <div className='title'>
                  {this.props.title}
              </div>
          </div>
        );
    }
}

export default Title