
import React, { Suspense, lazy } from 'react';
import {
    render as renderSchema
} from 'amis';
import {
    toast
} from 'amis';

class AMisRendererComp extends React.Component {

    componentDidMount() {
        // toast.error('asdad', 'xx')
    }

    render() {
        const {
            schema
        } = this.props;
        console.log(this.props)
        return (
            <div>
                {renderSchema({
                ...schema,
                }, {
                    ...this.props,
                        // props
                    }, {
                        // env
                        // 这些是 amis 需要的一些接口实现
                        // 可以参考本项目里面的 Demo 部分代码。

                        updateLocation: (location/*目标地址*/, replace/*是replace，还是push？*/) => {
                            // 用来更新地址栏
                        },

                        jumpTo: (location/*目标地址*/) => {
                            // 页面跳转， actionType:  link、url 都会进来。
                        },

                        fetcher: ({
                            url,
                            method,
                            data,
                            config
                        }) => {
                            // 用来发送 Ajax 请求，建议使用 axios
                        },
                        notify: (type/**/, msg/*提示内容*/) => {
                            // 用来提示用户
                            toast[type] ? toast[type](msg, type === 'error' ? '系统错误' : '系统消息') : console.warn('[Notify]', type, msg);
                            console.log('[notify]', type, msg);
                        },
                        alert: (content/*提示信息*/) => {
                            // 另外一种提示，可以直接用系统框
                        },
                        confirm: (content/*提示信息*/) => {
                            // 确认框。
                        }
                    })}
            </div>
        );
    }
}

export const AMisRenderer = AMisRendererComp;