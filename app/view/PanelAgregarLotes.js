/*
 * File: app/view/PanelAgregarLotes.js
 *
 * This file was generated by Sencha Architect version 4.0.2.
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

Ext.define('MyApp.view.PanelAgregarLotes', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.panelagregarlotes',

  requires: [
    'MyApp.view.PanelAgregarLotesViewModel',
    'Ext.panel.Tool',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.grid.column.Check',
    'Ext.form.Panel',
    'Ext.button.Button'
  ],

  viewModel: {
    type: 'panelagregarlotes'
  },
  flex: 1,
  itemId: 'form',
  title: 'Asignar Lotes',
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
      cls: 'gridAddLotes',
      itemId: 'lotesgrid',
      title: 'Lotes a agregar',
      store: 'Lotes',
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
          width: '25%',
          dataIndex: 'codigo',
          text: 'Codigo',
          format: '00'
        },
        {
          xtype: 'gridcolumn',
          width: '25%',
          dataIndex: 'nombre',
          text: 'Nombre'
        },
        {
          xtype: 'numbercolumn',
          hidden: true,
          dataIndex: 'superficie',
          text: 'Superficie'
        },
        {
          xtype: 'numbercolumn',
          width: '25%',
          dataIndex: 'cod_establecimiento',
          text: 'Cod Establecimiento',
          format: '00'
        },
        {
          xtype: 'checkcolumn',
          width: '25%',
          dataIndex: 'agregar',
          text: 'Agregar'
        }
      ],
      listeners: {
        selectionchange: 'onGridpanelSelectionChange'
      }
    }
  ],
  listeners: {
    render: 'onPanelRender'
  },
  dockedItems: [
    {
      xtype: 'form',
      dock: 'bottom',
      bodyPadding: 10,
      header: false,
      title: 'My Form',
      layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'center'
      },
      items: [
        {
          xtype: 'container',
          itemId: 'MoreBox',
          layout: {
            type: 'hbox',
            align: 'stretch',
            pack: 'center'
          },
          items: [
            {
              xtype: 'button',
              handler: function(button, e) {
                var lotesToAdd = this.up("#form");
                f_crud.save_multiple_records(lotesToAdd);
              },
              flex: 1,
              text: 'Agregar Lotes Seleccionados'
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
    console.log('item-selected');
    //console.log(selected);
    //console.log(selected.addToActivity);
  },

  onPanelRender: function(component, eOpts) {
    this.store_name = 'Lotes';
    this.model_name = 'MyApp.model.Lotes';
    //var store = Ext.getStore(this.store_name);
    //var store = Ext.getStore('Lotes_actividades');
    //this.form_store_array = [store];
    f_crud.load_store(this.store_name,'',"select *,'' as agregar from Lotes");
  }

});