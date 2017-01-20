/*
 * File: app/view/LotesForm.js
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

Ext.define('MyApp.view.LotesForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.lotesform',

  requires: [
    'MyApp.view.LotesFormViewModel',
    'Ext.container.Container',
    'Ext.button.Button',
    'Ext.form.field.Number'
  ],

  config: {
    initialTitle: 'lote'
  },

  viewModel: {
    type: 'lotesform'
  },
  cls: 'formpanel',
  scrollable: true,
  bodyPadding: 10,
  defaultListenerScope: true,

  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  dockedItems: [
    {
      xtype: 'container',
      dock: 'bottom',
      layout: {
        type: 'hbox',
        align: 'stretch',
        pack: 'center'
      },
      items: [
        {
          xtype: 'button',
          handler: function(button, e) {
            var formWrapper = this.up('[cls=formpanel]');
            formWrapper.form._record.data.cod_establecimiento = formWrapper.parent.codigo;
            if(formWrapper.getForm().isValid()) {
              f_crud.save_form(formWrapper);
            }
          },
          margins: '',
          margin: 10,
          iconCls: 'x-fa fa-check',
          text: 'Aceptar'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            f_crud.close_form(this.up("[cls=formpanel]"));
          },
          margin: 10,
          iconCls: 'x-fa fa-remove',
          text: 'Cancelar'
        }
      ]
    }
  ],
  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'Codigo',
      name: 'codigo',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      editable: false
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Nombre',
      name: 'nombre',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    },
    {
      xtype: 'numberfield',
      fieldLabel: 'Superficie',
      name: 'superficie',
      allowBlank: false,
      blankText: 'Este campo es obligatorio'
    }
  ],
  listeners: {
    activate: 'onFormActivate'
  },

  onFormActivate: function(component, eOpts) {
    f_crud.setFormTitle(component);
  }

});