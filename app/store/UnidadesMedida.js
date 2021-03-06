/*
 * File: app/store/UnidadesMedida.js
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

Ext.define('MyApp.store.UnidadesMedida', {
  extend: 'Ext.data.Store',

  requires: [
    'Ext.data.field.String',
    'Ext.data.field.Integer'
  ],

  constructor: function(cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'UnidadesMedida',
      data: [
        {
          nombre: 'Litros',
          valor: 'Lts',
          id: 1
        },
        {
          nombre: 'Kilos',
          valor: 'Kgs',
          id: 2
        },
        {
          nombre: 'Metros',
          valor: 'Mts',
          id: 3
        },
        {
          nombre: 'Horas',
          valor: 'Horas',
          id: 4
        },
        {
          nombre: 'Metros Cuadrados',
          valor: 'M2',
          id: 5
        },
        {
          nombre: 'Metros Cubicos',
          valor: 'M4',
          id: 6
        },
        {
          nombre: 'Toneladas',
          valor: 'T',
          id: 7
        },
        {
          nombre: 'Cada Uno',
          valor: 'c/u',
          id: 8
        },
        {
          nombre: 'litros',
          valor: 'lts',
          id: 9
        },
        {
          nombre: 'kilos',
          valor: 'kgs',
          id: 10
        },
        {
          nombre: 'Horas',
          valor: 'Has',
          id: 11
        },
        {
          nombre: 'Milimetros',
          valor: 'Mm',
          id: 12
        },
        {
          nombre: 'Tarea',
          valor: 'Tarea',
          id: 13
        },
        {
          nombre: 'PesosAño',
          valor: '$ año',
          id: 14
        }
      ],
      fields: [
        {
          type: 'string',
          name: 'nombre'
        },
        {
          type: 'string',
          name: 'valor'
        },
        {
          type: 'int',
          name: 'id'
        }
      ]
    }, cfg)]);
  }
});