{
  "id":163,
  "name":"selectfromresources",
  "formtabs":"[]",
  "contextmenus":"",
  "actionbuttons":"",
  "columnbuttons":"",
  "filters":[
    {
      "MIGX_id":1,
      "name":"search",
      "label":"",
      "emptytext":"",
      "type":"textbox",
      "getlistwhere":{
        "ID":"[[+search]]",
        "OR:pagetitle:LIKE":"%[[+search]]%"
      },
      "getcomboprocessor":"",
      "combotextfield":"",
      "comboidfield":"",
      "comboparent":"",
      "default":""
    }
  ],
  "extended":{
    "migx_add":"",
    "formcaption":"Image",
    "update_win_title":"",
    "win_id":"mygallery",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "extrahandlers":"this.handleRowSelector",
    "packageName":"migxselectfromgrid",
    "classname":"modResource",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":2,
    "check_resid":"0",
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"no",
    "getlistwhere":"",
    "joins":"",
    "cmpmaincaption":"",
    "cmptabcaption":"",
    "cmptabdescription":"",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"ID",
      "dataIndex":"id",
      "renderer":"",
      "sortable":"false",
      "show_in_grid":1
    },
    {
      "MIGX_id":2,
      "header":"Pagetitle",
      "dataIndex":"pagetitle",
      "width":"",
      "sortable":true,
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":5,
      "header":"Select",
      "dataIndex":"select",
      "width":"",
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderSelectRowSelector",
      "clickaction":"switchOption",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":[
        {
          "MIGX_id":1,
          "name":"",
          "value":1,
          "clickaction":"",
          "handler":"this.selectRow",
          "image":""
        }
      ]
    },
    {
      "MIGX_id":4,
      "header":"Published",
      "dataIndex":"published",
      "renderer":"this.renderCrossTick",
      "sortable":true,
      "show_in_grid":1
    }
  ],
  "createdby":1,
  "createdon":"2014-02-27 20:23:35",
  "editedby":1,
  "editedon":"2014-02-28 07:31:29",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-02-27 01:00:00",
  "publishedby":0
}