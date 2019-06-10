import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'amis/lib/themes/default.css'

import React, { Component } from 'react';
import { AMisRenderer } from './AMisRenderer';

class Basic extends Component {
  render() {
    const schema = {
        "type": "page",
        "title": "页面标题",
        "subTitle": "副标题",
        "body": {
          "type": "form",
          "title": "用户登录",
          "controls": [
            {
              "type": "text",
              "name": "username",
              "label": "用户名"
            },
            {
              "type": "password",
              "label": "内容",
              "name": "content",
              "required": true
            },
            // uncomment below reproduce err
            // { 
            //   "type": "textarea",
            //   "label": "内容",
            //   "name": "contentdddd",
            //   "required": true
            // }
          ]
        }
    }

    return <div>
      <AMisRenderer schema={schema} />
    </div>
  }
}

export default Basic

