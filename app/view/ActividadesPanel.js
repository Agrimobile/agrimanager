/*
 * File: app/view/ActividadesPanel.js
 *
 * This file was generated by Sencha Architect version 4.1.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.2.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.2.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.ActividadesPanel', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.actividadespanel',

  requires: [
    'MyApp.view.ActividadesPanelViewModel',
    'Ext.panel.Tool',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.grid.column.Date',
    'Ext.form.Panel',
    'Ext.button.Button'
  ],

  viewModel: {
    type: 'actividadespanel'
  },
  cls: 'gridpanel',
  flex: 1,
  scrollable: true,
  iconCls: '',
  title: 'Actividades',
  titleAlign: 'center',
  defaultListenerScope: true,

  tools: [
    {
      xtype: 'tool',
      cls: 'paneltool',
      iconCls: 'x-fa fa-arrow-left',
      listeners: {
        click: 'onToolClick'
      }
    }
  ],
  items: [
    {
      xtype: 'gridpanel',
      itemId: 'grid',
      header: false,
      title: 'Actividades',
      store: 'Actividades',
      listeners: {
        selectionchange: 'onGridpanelSelectionChange',
        itemlongpress: 'onGridItemLongpress',
        itemclick: 'onGridItemClick',
        beforerender: 'onGridBeforeRender'
      },
      columns: [
        {
          xtype: 'gridcolumn',
          hidden: true,
          dataIndex: 'estado_registro',
          text: 'Estado Registro'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'id',
          text: 'ID'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'uid',
          text: 'Uid',
          format: '00'
        },
        {
          xtype: 'numbercolumn',
          dataIndex: 'codigo',
          text: 'Codigo',
          format: '00'
        },
        {
          xtype: 'gridcolumn',
          dataIndex: 'nombre',
          text: 'Nombre'
        },
        {
          xtype: 'datecolumn',
          dataIndex: 'desde',
          text: 'Desde',
          format: 'd/m/Y'
        },
        {
          xtype: 'datecolumn',
          dataIndex: 'hasta',
          text: 'Hasta',
          format: 'd/m/Y'
        },
        {
          xtype: 'numbercolumn',
          renderer: function(value, metaData, record, rowIndex, colIndex, store) {

            return f_crud.getDisplayValue('Campanias', value, 'descripcion');
          },
          dataIndex: 'cod_periodo',
          text: 'Campaña',
          format: '00'
        }
      ]
    }
  ],
  listeners: {
    render: 'onPanelRender'
  },
  dockedItems: [
    {
      xtype: 'form',
      dock: 'bottom',
      layout: 'column',
      bodyPadding: 10,
      header: false,
      title: 'My Form',
      items: [
        {
          xtype: 'container',
          columnWidth: 1,
          itemId: 'newBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                f_crud.form_open(this.up("[cls=gridpanel]"),'ADD');
              },
              cls: '',
              iconCls: 'x-fa fa-plus',
              text: 'Nuevo'
            }
          ]
        },
        {
          xtype: 'container',
          columnWidth: 0.33,
          hidden: true,
          itemId: 'editBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                f_crud.form_open(this.up('[cls=gridpanel]'),'EDIT');
              },
              cls: '',
              margin: '0 0 0 10',
              iconCls: 'x-fa fa-pencil',
              text: 'Editar'
            }
          ]
        },
        {
          xtype: 'container',
          columnWidth: 0.33,
          hidden: true,
          itemId: 'deleteBox',
          layout: {
            type: 'hbox',
            align: 'stretch'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                var gridPanel = this.up('[cls=gridpanel]');
                var checkConfig = {
                  table: 'Lotes_actividades',
                  field: 'cod_actividad',
                  msgTitle: 'Actividad asignada',
                  message: 'No puede borrar una actividad que ya fue asignada a un lote, <br> desvincule esta actividad de los lotes a los que fue ligada'
                };
                f_crud.grid_check_delete(gridPanel,checkConfig);
              },
              cls: '',
              margin: '0 0 0 10',
              iconCls: 'x-fa fa-trash',
              text: 'Borrar'
            }
          ]
        }
      ]
    }
  ],

  onToolClick: function(tool, e, owner, eOpts) {
    var thisPanel = MyApp.main.getLayout().getActiveItem();
    MyApp.main.getLayout().prev();
    thisPanel.close();
  },

  onGridpanelSelectionChange: function(model, selected, eOpts) {
    this.record = selected[0];
  },

  onGridItemLongpress: function(dataview, record, item, index, e, eOpts) {
    var newbox = this.down("#newBox");
    var editbox = this.down("#editBox");
    var deletebox = this.down("#deleteBox");
    newbox.columnWidth = 0.33;
    newbox.layout.pack = 'end';
    newbox.hide();
    newbox.show();
    editbox.show();
    deletebox.show();
    this.longpress = true;
  },

  onGridItemClick: function(dataview, record, item, index, e, eOpts) {
    if(!this.longpress) {
        var panelClass = "MyApp.view.Lotes_actividadesPanel";
        var newPan = Ext.create(panelClass);
        newPan.parent = record.data;
        MyApp.main.add(newPan);
        MyApp.main.getLayout().setActiveItem(newPan);
    }
    this.longpress = false;
  },

  onGridBeforeRender: function(component, eOpts) {
    f_crud.renderGridWidth(component);
  },

  onPanelRender: function(component, eOpts) {
    this.store_name = 'Actividades';
    this.model_name = 'MyApp.model.Actividades';
    this.form_name  = 'MyApp.view.ActividadesForm';
    var store = Ext.getStore(this.store_name);
    this.form_store_array = [store];
    f_crud.load_store(this.store_name);
  }

});