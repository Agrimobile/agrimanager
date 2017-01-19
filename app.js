/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
  models: [
    'Establecimientos',
    'Actividades',
    'Lotes',
    'Secuencia',
    'Lotes_actividades',
    'Labores',
    'Tareas',
    'Labores_insumos',
    'Labores_maquinaria',
    'Labores_personal',
    'Rubros',
    'Personal',
    'Maquinaria',
    'Contratistas',
    'Depositos',
    'Insumos',
    'Campanias',
    'Lotes_coordenadas',
    'Registros_borrados'
  ],
  stores: [
    'MainMenu',
    'Establecimientos',
    'Actividades',
    'Lotes',
    'Secuencia',
    'Lotes_actividades',
    'Labores',
    'Tareas',
    'Labores_maquinaria',
    'Labores_personal',
    'Rubros',
    'Personal',
    'Maquinaria',
    'Contratistas',
    'Depositos',
    'Insumos',
    'Campanias',
    'Labores_insumos',
    'ConfigMenu',
    'Lotes_coordenadas',
    'Registros_borrados',
    'ActividadesMysql',
    'CampaniasMysql',
    'ContratistasMysql',
    'DepositosMysql',
    'EstablecimientosMysql',
    'InsumosMysql',
    'Labores_insumosMysql',
    'Labores_maquinariaMysql',
    'Labores_personalMysql',
    'LotesMysql',
    'Lotes_actividadesMysql',
    'Lotes_coordenadasMysql',
    'MaquinariaMysql',
    'PersonalMysql',
    'RubrosMysql',
    'TareasMysql',
    'LaboresMysql',
    'TiposTarea',
    'UnidadesMedida'
  ],
  views: [
    'MainContainer',
    'ActividadesPanel',
    'LotesPanel',
    'EstablecimientosPanel',
    'ActividadesForm',
    'LotesForm',
    'EstablecimientosForm',
    'Lotes_actividadesPanel',
    'AgregarLotesPanel',
    'Lotes_ActividadesForm',
    'LaboresPanel',
    'TareasPanel',
    'TareasForm',
    'LaboresForm',
    'RubrosPanel',
    'RubrosForm',
    'InsumosPanel',
    'InsumosForm',
    'ContratistasPanel',
    'ContratistasForm',
    'DepositosPanel',
    'DepositosForm',
    'PersonalPanel',
    'PersonalForm',
    'MaquinariaPanel',
    'MaquinariaForm',
    'CampaniasPanel',
    'CampaniasForm',
    'ConfigMenu',
    'MainMenu',
    'LoginForm',
    'SyncForm',
    'Mensaje',
    'MenuPanel'
  ],
  name: 'MyApp',

  launch: function() {
    Ext.create('MyApp.view.MainContainer');
  }

});
