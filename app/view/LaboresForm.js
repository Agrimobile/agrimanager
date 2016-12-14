/*
 * File: app/view/LaboresForm.js
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

Ext.define('MyApp.view.LaboresForm', {
  extend: 'Ext.form.Panel',
  alias: 'widget.laboresform',

  requires: [
    'MyApp.view.LotesFormViewModel4',
    'Ext.tab.Panel',
    'Ext.tab.Tab',
    'Ext.form.field.Number',
    'Ext.form.field.ComboBox',
    'Ext.form.field.Date',
    'Ext.grid.Panel',
    'Ext.view.Table',
    'Ext.grid.column.Number',
    'Ext.form.field.Display',
    'Ext.grid.plugin.CellEditing',
    'Ext.form.Panel'
  ],

  viewModel: {
    type: 'laboresform'
  },
  itemId: 'form',
  scrollable: true,
  bodyPadding: 10,
  title: 'Labor',
  defaultListenerScope: true,

  layout: {
    type: 'vbox',
    align: 'stretch'
  },
  listeners: {
    activate: 'onFormActivate'
  },
  items: [
    {
      xtype: 'tabpanel',
      flex: 0,
      bodyPadding: 10,
      activeTab: 0,
      items: [
        {
          xtype: 'panel',
          title: 'Labor',
          items: [
            {
              xtype: 'numberfield',
              hidden: true,
              fieldLabel: 'ID',
              name: 'id',
              allowBlank: false,
              blankText: 'Este campo es obligatorio'
            },
            {
              xtype: 'combobox',
              defaultListenerScope: true,
              itemId: 'fieldTarea',
              width: '100%',
              fieldLabel: 'Tarea',
              name: 'cod_tarea',
              allowBlank: false,
              blankText: 'Este campo es obligatorio. Puedes agregar tareas ingresando en el item Tareas del menu principal',
              displayField: 'descripcion',
              forceSelection: true,
              queryMode: 'local',
              store: 'Tareas',
              valueField: 'codigo'
            },
            {
              xtype: 'datefield',
              itemId: 'fecha',
              width: '100%',
              fieldLabel: 'Fecha',
              name: 'fecha'
            },
            {
              xtype: 'numberfield',
              width: '100%',
              fieldLabel: 'Cantidad',
              name: 'cantidad'
            },
            {
              xtype: 'numberfield',
              width: '100%',
              fieldLabel: 'Precio',
              name: 'precio'
            },
            {
              xtype: 'combobox',
              defaultListenerScope: true,
              itemId: 'fieldContratista',
              width: '100%',
              fieldLabel: 'Contratista',
              name: 'cod_contratista',
              blankText: 'Este campo es obligatorio. Puedes agregar mas items ingresando en el item Contratistas del menu principal',
              displayField: 'nombre',
              forceSelection: true,
              queryMode: 'local',
              store: 'Contratistas',
              valueField: 'codigo'
            }
          ]
        },
        {
          xtype: 'panel',
          itemId: 'labores_insumos_tab',
          title: 'Insumos',
          items: [
            {
              xtype: 'gridpanel',
              itemId: 'labores_insumos_grid',
              header: false,
              title: 'InsumosGrid',
              store: 'Labores_insumos',
              listeners: {
                selectionchange: 'onGridpanelSelectionChange'
              },
              columns: [
                {
                  xtype: 'gridcolumn',
                  hidden: true,
                  dataIndex: 'estado_registro',
                  text: 'Estado Registro',
                  editor: {
                    xtype: 'textfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'id',
                  text: 'ID',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'id_labores',
                  text: 'Id Labores',
                  format: '00',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'uid',
                  text: 'Uid',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    var st = Ext.getStore("Insumos"), cod, displayValue;
                    cod = st.find("codigo",value);
                    displayValue = st.getAt(cod).get('descripcion');
                    return displayValue;
                  },
                  dataIndex: 'cod_insumo',
                  text: 'Cod Insumo',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'descripcion',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'Insumos',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'dosis',
                  text: 'Dosis',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'cantidad',
                  text: 'Cantidad',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    var st = Ext.getStore("Depositos"), cod, displayValue;
                    cod = st.find("codigo",value);
                    displayValue = st.getAt(cod).get('nombre');
                    return displayValue;
                  },
                  dataIndex: 'cod_deposito',
                  text: 'Cod Deposito',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'nombre',
                    forceSelection: true,
                    queryMode: 'local',
                    store: 'Depositos',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'gridcolumn',
                  dataIndex: 'tipo',
                  text: 'Tipo',
                  editor: {
                    xtype: 'textfield'
                  }
                }
              ],
              plugins: [
                {
                  ptype: 'cellediting'
                }
              ]
            }
          ],
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
                        var form_panel = this.up('#form');
                        var id_labores  =  form_panel.getRecord().get('id');
                        var store = Ext.getStore('Labores_insumos');
                        var newrecord = Ext.create('MyApp.model.Labores_insumos');
                        f_crud.secuencia(function(rtn){
                          if (rtn !== -1){
                            newrecord.set('id',rtn);
                            newrecord.set('id_labores', id_labores);
                            newrecord.set('tipo','T');
                            store.add(newrecord);
                          }
                        });
                      },
                      cls: '',
                      iconCls: 'x-fa fa-plus',
                      text: ''
                    },
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var grid = this.up('#labores_insumos_tab').down("#labores_insumos_grid");
                        var gridSeletedRecord = this.up('#labores_insumos_tab').down("#labores_insumos_grid").record;
                        grid.getStore().remove(gridSeletedRecord);
                      },
                      cls: '',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-trash',
                      text: ''
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          xtype: 'panel',
          itemId: 'labores_personal_tab',
          title: 'Personal',
          items: [
            {
              xtype: 'gridpanel',
              itemId: 'labores_personal_grid',
              header: false,
              title: 'PersonalGrid',
              store: 'Labores_personal',
              listeners: {
                selectionchange: 'onGridpanelSelectionChange1'
              },
              columns: [
                {
                  xtype: 'gridcolumn',
                  hidden: true,
                  dataIndex: 'estado_registro',
                  text: 'Estado Registro',
                  editor: {
                    xtype: 'textfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'id',
                  text: 'ID',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'id_labores',
                  text: 'Id Labores',
                  format: '00',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'uid',
                  text: 'Uid',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    var st = Ext.getStore("Personal"), cod, displayValue;
                    cod = st.find("codigo",value);
                    displayValue = st.getAt(cod).get('nombre');
                    return displayValue;
                  },
                  dataIndex: 'cod_personal',
                  text: 'Cod Personal',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'nombre',
                    queryMode: 'local',
                    store: 'Personal',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'cod_concepto',
                  text: 'Cod Concepto',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'cantidad',
                  text: 'Cantidad',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'precio',
                  text: 'Precio',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'importe',
                  text: 'Importe',
                  editor: {
                    xtype: 'numberfield'
                  }
                }
              ],
              plugins: [
                {
                  ptype: 'cellediting'
                }
              ]
            }
          ],
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
                        var form_panel = this.up('#form');
                        var id_labores  =  form_panel.getRecord().get('id');
                        var store = Ext.getStore('Labores_personal');
                        var newrecord = Ext.create('MyApp.model.Labores_personal');
                        f_crud.secuencia(function(rtn){
                          if (rtn !== -1){
                            newrecord.set('id',rtn);
                            newrecord.set('id_labores', id_labores);
                            newrecord.set('tipo','T');
                            store.add(newrecord);
                          }
                        });
                      },
                      cls: '',
                      iconCls: 'x-fa fa-plus',
                      text: ''
                    },
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var grid = this.up('#labores_personal_tab').down("#labores_personal_grid");
                        var gridSeletedRecord = this.up('#labores_personal_tab').down("#labores_personal_grid").record;
                        grid.getStore().remove(gridSeletedRecord);
                      },
                      cls: '',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-trash',
                      text: ''
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          xtype: 'panel',
          itemId: 'labores_maquinaria_tab',
          title: 'Maquinaria',
          items: [
            {
              xtype: 'gridpanel',
              itemId: 'labores_maquinaria_grid',
              header: false,
              title: 'My Grid Panel',
              store: 'Labores_maquinaria',
              columns: [
                {
                  xtype: 'gridcolumn',
                  hidden: true,
                  dataIndex: 'estado_registro',
                  text: 'Estado Registro',
                  editor: {
                    xtype: 'textfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'id',
                  text: 'ID',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'id_labores',
                  text: 'Id Labores',
                  format: '00',
                  editor: {
                    xtype: 'displayfield',
                    value: 'Display Field'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  hidden: true,
                  dataIndex: 'uid',
                  text: 'Uid',
                  format: '00',
                  editor: {
                    xtype: 'numberfield'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                    var st = Ext.getStore("Maquinaria"), cod, displayValue;
                    cod = st.find("codigo",value);
                    displayValue = st.getAt(cod).get('nombre');
                    return displayValue;
                  },
                  dataIndex: 'cod_maquina',
                  text: 'Cod Maquina',
                  format: '00',
                  editor: {
                    xtype: 'combobox',
                    displayField: 'nombre',
                    queryMode: 'local',
                    store: 'Maquinaria',
                    valueField: 'codigo'
                  }
                },
                {
                  xtype: 'numbercolumn',
                  dataIndex: 'cantidad',
                  text: 'Cantidad',
                  editor: {
                    xtype: 'numberfield'
                  }
                }
              ],
              plugins: [
                {
                  ptype: 'cellediting'
                }
              ]
            }
          ],
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
                        var form_panel = this.up('#form');
                        var id_labores  =  form_panel.getRecord().get('id');
                        var store = Ext.getStore('Labores_maquinaria');
                        var newrecord = Ext.create('MyApp.model.Labores_maquinaria');
                        f_crud.secuencia(function(rtn){
                          if (rtn !== -1){
                            newrecord.set('id',rtn);
                            newrecord.set('id_labores', id_labores);
                            newrecord.set('tipo','T');
                            store.add(newrecord);
                          }
                        });
                      },
                      cls: '',
                      iconCls: 'x-fa fa-plus',
                      text: ''
                    },
                    {
                      xtype: 'button',
                      handler: function(button, e) {
                        var grid = this.up('#labores_maquinaria_tab').down("#labores_maquinaria_grid");
                        var gridSeletedRecord = this.up('#labores_maquinaria_tab').down("#labores_maquinaria_grid").record;
                        grid.getStore().remove(gridSeletedRecord);
                      },
                      cls: '',
                      margin: '0 0 0 10',
                      iconCls: 'x-fa fa-trash',
                      text: ''
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
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
            var formWrapper = this.up('#form');
            var tarea_cod = this.up('#form').down("#fieldTarea").value;
            var query = "select cod_establecimiento from Lotes where codigo = " + formWrapper.parent.cod_lote;
            formWrapper.form._record.data.cod_lote_actividad = formWrapper.parent.codigo;
            formWrapper.form._record.data.cod_lote = formWrapper.parent.cod_lote;
            formWrapper.form._record.data.cod_periodo = formWrapper.parent.cod_periodo;
            f_crud.sql_select(query, function(resultSet){
              if(resultSet === -1 || !Array.isArray(resultSet)) {
                console.log("Query statement: " + query);
                throw "Database error: Check your sql statement or your WebSql instance";
              }
              else {
                formWrapper.form._record.data.cod_establecimiento = resultSet[0].cod_establecimiento;
                //f_crud.save_form(formWrapper);
                if(formWrapper.getForm().isValid()) {
                  f_crud.save_form(formWrapper);
                }
              }
            });
          },
          margins: '',
          margin: 10,
          iconCls: 'x-fa fa-check',
          text: 'Aceptar'
        },
        {
          xtype: 'button',
          handler: function(button, e) {
            f_crud.close_form(this.up("#form"));
          },
          margin: 10,
          iconCls: 'x-fa fa-remove',
          text: 'Cancelar'
        }
      ]
    }
  ],

  onFormActivate: function(component, eOpts) {
    var form_panel = this;
    var item = component.header.title.text;
    var record = form_panel.getRecord();

    //empty labores_ tables
    for (var i=1; i < form_panel.store_array.length; i++){
      f_crud.load_store(form_panel.store_array[i],'id_labores = -1');
    }

    f_crud.load_store('Depositos');
    f_crud.load_store('Insumos');
    f_crud.load_store('Personal');
    f_crud.load_store('Maquinaria');

    if(component.action === 'ADD') {
      component.setTitle('Nueva ' + item);
      var today = new Date();
      this.down('#fecha').setValue(today);
    }
    else if(component.action === 'EDIT') {
      component.setTitle('Editar ' + item);
      var id = record.get('id');
      for (var i=1; i < form_panel.store_array.length; i++){
        f_crud.load_store(form_panel.store_array[i],'id_labores = ' + id);
      }
    }
    else {
      component.setTitle(item);
    }
  },

  onGridpanelSelectionChange: function(model, selected, eOpts) {
    this.down("#labores_insumos_grid").record = selected[0];
  },

  onGridpanelSelectionChange1: function(model, selected, eOpts) {
    this.down("#labores_personal_grid").record = selected[0];
  }

});