/*
 * File: app/view/ActividadesForm.js
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

Ext.define('MyApp.view.ActividadesForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.actividadesform',

  requires: [
    'MyApp.view.ActividadesFormViewModel',
    'Ext.form.field.ComboBox',
    'Ext.form.field.Date',
    'Ext.form.field.Display',
    'Ext.container.Container',
    'Ext.button.Button'
  ],

  viewModel: {
    type: 'actividadesform'
  },
  cls: 'formpanel',
  flex: 1,
  bodyPadding: 10,
  title: 'Actividad',
  defaultListenerScope: true,

  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'Código',
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
      xtype: 'combobox',
      itemId: 'fieldPeriodo',
      fieldLabel: 'Campaña',
      name: 'cod_periodo',
      allowBlank: false,
      blankText: 'Este campo es obligatorio. Puedes agregar nuevos rubros ingresando en el item Rubros del menu principal',
      displayField: 'descripcion',
      forceSelection: true,
      queryMode: 'local',
      store: 'Campanias',
      valueField: 'codigo'
    },
    {
      xtype: 'datefield',
      itemId: 'desde',
      fieldLabel: 'Desde',
      name: 'desde',
      invalidText: '{0} No es un formato valido de fecha - Deberia tener el formato {1}',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      format: 'Y-m-d'
    },
    {
      xtype: 'datefield',
      itemId: 'hasta',
      fieldLabel: 'hasta',
      name: 'hasta',
      invalidText: '{0} No es un formato valido de fecha - Deberia tener el formato {1}',
      allowBlank: false,
      blankText: 'Este campo es obligatorio',
      format: 'Y-m-d'
    },
    {
      xtype: 'displayfield',
      cls: 'warning-message',
      itemId: 'warning-message',
      value: ''
    }
  ],
  dockedItems: [
    {
      xtype: 'container',
      flex: 1,
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
            var formWrapper = this.up("[cls=formpanel]"),
              desde = formWrapper.down("#desde").value,
              hasta = formWrapper.down("#hasta").value,
              warning = "<b>Importante</b>: el valor del campo <i>Desde</i> debería ser antes que <i>Hasta</i>";
            if(desde <= hasta){
              formWrapper.down("[cls=warning-message]").setValue("");
              if(formWrapper.getForm().isValid()) {
                f_crud.save_form(formWrapper);
              }
            }
            else {
              formWrapper.down("[cls=warning-message]").setValue(warning);
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
  listeners: {
    activate: 'onFormActivate'
  },

  onFormActivate: function(component, eOpts) {
    var item = component.header.title.text;
    if(component.action === 'ADD') {
      component.setTitle('Nueva ' + item);
    }
    else if(component.action === 'EDIT') {
      component.setTitle('Editar ' + item);
    }
    else {
      component.setTitle(item);
    }
  }

});