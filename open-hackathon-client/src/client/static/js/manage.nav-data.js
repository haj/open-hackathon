/*
 * This file is covered by the LICENSING file in the root of this project.
 */

angular.module('oh.pages', [])
  .constant('VERSION', '0.2.0')
  .value('NAV', {
    manage: [{
      name: "SETTINGS.MAIN",
      type: 1,
      navGroups: [{
        name: "SETTINGS.EDIT_ACTIVITY",
        state: "manage.edit",
        icon: 'fa-edit'
      }, {
        name: "SETTINGS.USERS",
        state: "manage.users",
        icon: 'fa-user'
      }, {
        name: "SETTINGS.ADMINISTRATORS",
        state: "manage.admin",
        icon: 'fa-user-secret'
      }, {
        name: "SETTINGS.ORGANIZERS",
        state: "manage.organizers",
        icon: 'fa-sitemap'
      }, {
        name: "SETTINGS.PRIZES",
        state: "manage.prizes",
        icon: 'fa-trophy'
      }, {
        name: "SETTINGS.AWARDS",
        state: "manage.awards",
        icon: 'fa-diamond'
      }, {
        name: "SETTINGS.NOTICES",
        state: "manage.notices",
        icon: 'fa-bullhorn'
      }]
    }, {
      name: "ADVANCED_SETTINGS.MAIN",
      type: 2,
      navGroups: [{
        name: "ADVANCED_SETTINGS.CLOUD_RESOURCES",
        state: "manage.cloud",
        icon: 'fa-upload'
      }, {
        name: "ADVANCED_SETTINGS.VIRTUAL_ENVIRONMENT",
        state: "manage.ve",
        icon: 'fa-th-large'
      }, {
        name: "ADVANCED_SETTINGS.ENVIRONMENTAL_MONITOR",
        state: "manage.monitor",
        icon: 'fa-desktop'
      }, {
        name: "ADVANCED_SETTINGS.AZURECERT",
        state: "manage.azurecert",
        icon: 'fa-cloud-upload'
      }, {
        name: "ADVANCED_SETTINGS.SERVERS",
        state: "manage.servers",
        icon: 'fa-server'
      }]
    }]
  });
