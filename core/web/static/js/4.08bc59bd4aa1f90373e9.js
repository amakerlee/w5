webpackJsonp([4],{"3SZ7":function(t,a,e){t.exports={default:e("60XL"),__esModule:!0}},"60XL":function(t,a,e){var o=e("Pz6L"),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},HINN:function(t,a){},OlBJ:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("3SZ7"),n=e.n(o),s=[{title:"分类",dataIndex:"type_name",key:"type_name",scopedSlots:{customRender:"type_name"},width:116},{title:"剧本名称",dataIndex:"name",key:"name",scopedSlots:{customRender:"name"},width:130},{title:"备注",dataIndex:"remarks",key:"remarks",scopedSlots:{customRender:"remarks"}},{title:"创建人",dataIndex:"nick_name",key:"nick_name",scopedSlots:{customRender:"nick_name"},width:90},{title:"更新时间",key:"update_time",dataIndex:"update_time",scopedSlots:{customRender:"update_time"},width:190},{title:"状态",key:"status",dataIndex:"status",scopedSlots:{customRender:"status"},width:50},{title:"操作",key:"action",scopedSlots:{customRender:"action"},width:116}],r={name:"workflowHome",data:function(){return{columns:s,loading:!1,visible_input_url:!1,data:[],so_text:"",select_type:"0",type_data:[],input_url:""}},mounted:function(){this.onLoad()},methods:{onLoad:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";this.loading=!0,this.onSelectType(),this.$http.post("/api/v1/w5/get/workflow/list",{keywords:a,type:e}).then(function(a){0==a.code?(t.data=a.data,t.loading=!1):(t.$message.error(a.msg),t.loading=!1)})},onSaveUrlInput:function(){var t=this;this.$http.post("/api/v1/w5/get/workflow/import_url",{url:this.input_url}).then(function(a){if(0==a.code){var e=a.data.data;t.addPlayBook(e),t.onCloseUrlInput()}else t.$message.error(a.msg)})},onCloseUrlInput:function(){this.visible_input_url=!1},onDown:function(t){var a=this;this.$http.post("/api/v1/w5/post/workflow/detail",{uuid:t}).then(function(t){if(0==t.code){var e,o,s,r,i=t.data.name,l=t.data.remarks;e=""===t.data.flow_json.trim()?{nodes:[],edges:[]}:JSON.parse(t.data.flow_json),o="none"===t.data.flow_data||""===t.data.flow_data.trim()||"{}"===t.data.flow_data.trim()?{}:JSON.parse(t.data.flow_data);var d,p=t.data.start_app,c=t.data.end_app,u=t.data.input_app,_=t.data.webhook_app;s="none"===t.data.local_var_data||""===t.data.local_var_data.trim()||"[]"===t.data.local_var_data.trim()?[]:JSON.parse(t.data.local_var_data),r="none"===t.data.controller_data||""===t.data.controller_data.trim()||"{}"===t.data.controller_data.trim()?{}:JSON.parse(t.data.controller_data),d=""==l.trim()?i:i+"-"+l;var h={name:i,remarks:l,start_app:p,end_app:c,input_app:u,webhook_app:_,flow_json:e,flow_data:o,local_var_data:s,controller_data:r},f=document.createElement("a");f.download=d+".json",f.style.display="none";var m=new Blob([n()(h)],{type:"application/json"});f.href=URL.createObjectURL(m),document.body.appendChild(f),f.click(),document.body.removeChild(f)}else a.$message.error(t.msg)})},handleMenuClick:function(t){1==t.key?this.$refs.inputer.click():2==t.key&&(this.visible_input_url=!0)},upload_json:function(t){var a=this,e=t.target,o=new FileReader;o.readAsText(e.files[0],"utf8"),o.onload=function(){try{var t=JSON.parse(o.result);a.addPlayBook(t)}catch(t){return a.$message.error("导入失败，请检测 W5 JSON 文件是否正确"),!1}}},addPlayBook:function(t){var a=this;if(!(t.hasOwnProperty("name")&&t.hasOwnProperty("remarks")&&t.hasOwnProperty("start_app")&&t.hasOwnProperty("end_app")&&t.hasOwnProperty("input_app")&&t.hasOwnProperty("webhook_app")&&t.hasOwnProperty("flow_json")&&t.hasOwnProperty("flow_data")&&t.hasOwnProperty("controller_data")&&t.hasOwnProperty("local_var_data")))return this.$message.error("非法格式,请检查是否为 W5 SOAR 专用 JSON 文件"),!1;for(var e=t.flow_json.nodes,o=0;o<e.length;o++){var s=e[o].img.replace(/^http:\/\/[^/]+/,"").replace(/^https:\/\/[^/]+/,""),r=this.BaseURL+s;e[o].img=r}this.$http.post("/api/v1/w5/post/workflow/add",{type:1,name:t.name,remarks:t.remarks,start_app:t.start_app,end_app:t.end_app,input_app:t.input_app,webhook_app:t.webhook_app,flow_json:n()(t.flow_json),flow_data:n()(t.flow_data),controller_data:n()(t.controller_data),local_var_data:n()(t.local_var_data)}).then(function(t){if(0==t.code){var e=t.data.uuid;a.$router.push({name:"WorkflowEdit",params:{uuid:e}})}else a.$message.error(t.msg)})},onSelectType:function(){var t=this;this.$http.post("/api/v1/w5/get/type/list",{type:1}).then(function(a){0==a.code?t.type_data=a.data:t.$message.error(a.msg)})},del:function(t){var a=this;this.$http.post("/api/v1/w5/post/workflow/del",{uuid:t}).then(function(t){0==t.code?(a.$message.success("删除成功"),a.onLoad()):a.$message.error(t.msg)})},onSearch:function(t){this.so_text=t,this.onLoad(this.so_text,this.select_type)},onSelect:function(t){this.select_type=t,this.onLoad(this.so_text,this.select_type)},tzAddPlayBook:function(){var t=this;this.$http.post("/api/v1/w5/post/workflow/add",{type:0}).then(function(a){if(0==a.code){var e=a.data.uuid;t.$router.push({name:"WorkflowEdit",params:{uuid:e}})}else t.$message.error(a.msg)})},tzUpdatePlayBook:function(t){this.$router.push({name:"WorkflowEdit",params:{uuid:t}})},onSwitch:function(t,a){var e=this,o=1;t&&(o=0),this.$http.post("/api/v1/w5/post/workflow/status",{id:a,status:o}).then(function(t){0==t.code?(e.$message.success("操作成功"),e.onLoad()):e.$message.error(t.msg)})},onFilterOption:function(t,a){return a.componentOptions.children[0].text.toLowerCase().indexOf(t.toLowerCase())>=0}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-layout-content",[e("div",{staticClass:"header_div"},[e("a-select",{staticClass:"align",staticStyle:{width:"120px"},attrs:{"show-search":"","filter-option":t.onFilterOption,"default-value":"0"},on:{change:t.onSelect}},[e("a-select-option",{attrs:{value:"0"}},[t._v("全部")]),t._v(" "),t._l(t.type_data,function(a,o){return e("a-select-option",{key:o,attrs:{value:a.id}},[t._v(t._s(a.name))])})],2),t._v(" "),e("a-input-search",{staticClass:"align",staticStyle:{width:"200px"},attrs:{placeholder:"请输入剧本名称"},on:{search:t.onSearch}}),t._v(" "),e("a-dropdown",[e("a-menu",{attrs:{slot:"overlay"},on:{click:t.handleMenuClick},slot:"overlay"},[e("a-menu-item",{key:"1"},[e("a-icon",{attrs:{type:"upload"}}),t._v(" 本地导入\n                ")],1),t._v(" "),e("a-menu-item",{key:"2"},[e("a-icon",{attrs:{type:"cloud-upload"}}),t._v(" 云端导入\n                ")],1)],1),t._v(" "),e("a-button",{staticClass:"align btn_add",attrs:{type:"primary",icon:"plus-circle"},on:{click:t.tzAddPlayBook}},[t._v("创建剧本\n                "),e("a-icon",{attrs:{type:"down"}})],1)],1)],1),t._v(" "),e("a-table",{attrs:{rowKey:"id",columns:t.columns,"data-source":t.data,loading:t.loading},scopedSlots:t._u([{key:"type_name",fn:function(a){return e("a-tag",{attrs:{color:"#7d838c"}},[t._v("\n            "+t._s(a)+"\n        ")])}},{key:"name",fn:function(a){return e("span",{},[e("b",[t._v(t._s(a))])])}},{key:"nick_name",fn:function(a){return e("a-tag",{attrs:{color:"blue"}},[t._v("\n            "+t._s(a)+"\n        ")])}},{key:"update_time",fn:function(a){return e("span",{},[t._v("\n            "+t._s(t.Dayjs(a).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"create_time",fn:function(a){return e("span",{},[t._v("\n            "+t._s(t.Dayjs(a).subtract(8,"hour").format("YYYY-MM-DD HH:mm:ss"))+"\n        ")])}},{key:"remarks",fn:function(a){return e("span",{},[t._v("\n            "+t._s(a)+"\n        ")])}},{key:"status",fn:function(a,o){return e("div",{},[e("a-switch",0===a?{attrs:{"default-checked":""},on:{click:function(a){return t.onSwitch(a,o.id)}}}:{on:{click:function(a){return t.onSwitch(a,o.id)}}},[e("a-icon",{attrs:{slot:"checkedChildren",type:"check"},slot:"checkedChildren"}),t._v(" "),e("a-icon",{attrs:{slot:"unCheckedChildren",type:"close"},slot:"unCheckedChildren"})],1)],1)}},{key:"action",fn:function(a,o){return e("span",{},[e("a-space",{attrs:{size:"small"}},[e("a-tooltip",{attrs:{placement:"left"}},[e("template",{slot:"title"},[e("span",[t._v("删除")])]),t._v(" "),e("a-popconfirm",{attrs:{title:"是否要删除该剧本?","ok-text":"是","cancel-text":"否"},on:{confirm:function(a){return t.del(o.uuid)}}},[e("a-icon",{staticClass:"pointer",attrs:{type:"delete"}})],1)],2),t._v(" "),e("span",[t._v("|")]),t._v(" "),e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("编辑")])]),t._v(" "),e("a-icon",{staticClass:"pointer",attrs:{type:"form"},on:{click:function(a){return t.tzUpdatePlayBook(o.uuid)}}})],2),t._v(" "),e("span",[t._v("|")]),t._v(" "),e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[e("span",[t._v("导出")])]),t._v(" "),e("a-icon",{staticClass:"pointer",attrs:{type:"cloud-download"},on:{click:function(a){return t.onDown(o.uuid)}}})],2)],1)],1)}}])}),t._v(" "),e("a-modal",{attrs:{title:"云端导入",cancelText:"关闭",okText:"导入",width:600,visible:t.visible_input_url},on:{ok:t.onSaveUrlInput,cancel:t.onCloseUrlInput}},[e("a-row",{attrs:{gutter:16}},[e("a-col",{attrs:{span:24}},[e("a-input",{attrs:{placeholder:"请输入 W5 JSON 地址"},model:{value:t.input_url,callback:function(a){t.input_url=a},expression:"input_url"}},[e("a-icon",{attrs:{slot:"prefix",type:"global"},slot:"prefix"})],1)],1)],1)],1),t._v(" "),e("input",{ref:"inputer",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json"},on:{change:t.upload_json}})],1)},staticRenderFns:[]};var l=e("Mz/3")(r,i,!1,function(t){e("HINN")},"data-v-fc9eeffe",null);a.default=l.exports}});