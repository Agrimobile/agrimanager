/*
 * File: app/store/LaboresMysql.js
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

Ext.define('MyApp.store.LaboresMysql', {
  extend: 'Ext.data.Store',

  requires: [
    'MyApp.model.Labores',
    'Ext.data.proxy.Ajax',
    'Ext.data.reader.Json'
  ],

  config: {
    sql: 'select id,fecha,cod_lote_actividad,cod_lote,cod_area,cod_establecimiento,cod_periodo,cod_tarea,cantidad,precio_tarea as precio,cod_contratista from labores'
  },

  constructor: function(cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId: 'LaboresMysql',
      model: 'MyApp.model.Labores',
      proxy: {
        type: 'ajax',
        reader: {
          type: 'json',
          rootProperty: 'Labores'
        }
      }
    }, cfg)]);
  }
});