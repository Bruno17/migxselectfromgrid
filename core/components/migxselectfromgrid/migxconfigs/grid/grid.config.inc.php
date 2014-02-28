<?php

$base_url = $this->modx->getOption('base_url');
$tpl = '<a href="#" ><img class="controlBtn btn_after {3} {4}" src="'.$base_url.'assets/components/migx/style/images/tick.png" alt="rowselector" title="select row"></a>';

$renderer['this.renderSelectRowSelector'] = "
renderSelectRowSelector : function(val, md, rec, row, col, s) {
    var column = this.getColumnModel().getColumnAt(col);
    var value, altText, handler, classname;
    var    handler = 'this.handleRowSelector'
    value = val;
    classname = 'rowselect';
    altText = 'select' ;
    return String.format('{$tpl}', altText, altText, classname, handler, column.dataIndex, value);
}
";

$gridfunctions['this.handleRowSelector'] = "
handleRowSelector: function(n,e,col) {
    var record = this.menu.record.json;
    var tv_id = '[[+config.tv_id]]';
    var tv_id_array = tv_id.split('_');
    var win = Ext.getCmp('modx-window-mi-grid-update-' + tv_id_array[2]); 
    var form = win.fp.getForm();
    var v = win.fp.getForm().getValues();
    var fields = Ext.util.JSON.decode(v['mulititems_grid_item_fields']);
    var tvid = '';
    var fieldname = '';
    var input = ''
    if (fields.length>0){
        for (var i = 0; i < fields.length; i++) {
            tvid = (fields[i].tv_id);
            fieldname = (fields[i].field);
            input = Ext.get('tv'+tvid)
            if (input){
                input.dom.value = record[fieldname];
            }
        }
    }           
}	
";