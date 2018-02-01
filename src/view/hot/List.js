import React from 'react'
import Title from '../../component/title/Title'
import $http from '../../axios'
import {Icon} from 'antd-mobile'
import BScroll from 'better-scroll'
import WrappedComponent from '../../hoc/Index'

import './list.css'

// 定义 better-scroll 参数
const options = {
    click: true,
    scrollbar: true,
    probeType: true
}
options.pullDownRefresh = {
    threshold: 90,
    stop: 40
}
options.pullUpLoad = {
    threshold: -60,
    moreTxt: 'Load More',
    noMoreTxt: 'There is no more data'
}


class HotList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            info: {},
            list: [],
            page: 1,
            pageSize: 0,
            isLoading: true,
            show: false,
            scroller: false,
            bg: 'rgba(98,98,98,0.3)',
            load: ''
        }

        this.getDate()
    }


    componentDidUpdate() {
        if (this.state.scroller) {
            this.state.scroller.refresh()
        } else {
            this.setState({
                scroller: new BScroll(this.ist.options)
            })
        }
    }

    getDate(callback) {
        $http.get('/proxy/plist/list/?json=true', {
            params: {
                specialid: this.props.match.params.id,
                page: this.state.page
            }
        }).then(res => {
            const data = res.data
            const arr = this.state.list
            arr.push(...data.list.list.info)
            this.setState({
                info: data.info.list,
                list: arr,
                page: data.list.page,
                pageSize: data.list.pagesize
            })
            const count = arr.pagesize * arr.page
            if (count < arr.total) {
                this.setState({
                    load: 'Loding'
                })
            } else {
                this.setState({
                    load: 'no data'
                })
            }

            if (typeof callback === 'finction') {
                callback();
            }
        })
    }

   toggleDesc() {
        this.setState({
            show: !this.state.show
        })
   }

   render() {
        if (this.state.scroller) {
            this.state.scroller.on('scroll', pos => {

            })

            this.state.scroller.on('scrollEnd', pos => {

            })

            this.state.scroller.on('pullingDown', () => {
                // huoqushuju
                setTimeout(() => {
                    this.state.scroller.finshPullDown()
                    this.state.scroller.scrollTo(0,0,0)
                },1000)
            })

        }

        return(

        );
   }

}

export default HotList