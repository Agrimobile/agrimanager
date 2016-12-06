/*
 * File: app/model/Labores.js
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

Ext.define('MyApp.model.Labores', {
  extend: 'Ext.data.Model',

  requires: [
    'Ext.data.field.Integer',
    'Ext.data.field.String',
    'Ext.data.field.Date'
  ],

  identifier: {
    type: 'uuid'
  },

  fields: [
    {
      type: 'int',
      name: 'uid'
    },
    {
      type: 'int',
      name: 'id'
    },
    {
      type: 'int',
      sincronizar: 'false',
      name: 'id_origen'
    },
    {
      type: 'string',
      name: 'estado_registro'
    },
    {
      type: 'date',
      name: 'fecha'
    },
    {
      type: 'int',
      name: 'cod_lote_actividad'
    },
    {
      type: 'int',
      name: 'cod_lote'
    },
    {
      type: 'int',
      name: 'cod_area'
    },
    {
      type: 'int',
      name: 'cod_establecimiento'
    },
    {
      type: 'int',
      name: 'cod_periodo'
    },
    {
      type: 'int',
      name: 'cod_tarea'
    },
    {
      type: 'string',
      name: 'cantidad'
    },
    {
      type: 'string',
      name: 'precio'
    },
    {
      type: 'string',
      name: 'propia'
    },
    {
      type: 'int',
      name: 'cod_contratista'
    }
  ]
});