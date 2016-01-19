// This file was automatically generated from sample.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace templates.
 * @public
 */

goog.provide('templates');
goog.provide('templates.Arcane');

goog.require('soy');
goog.require('soydata');


templates.Arcane = function(opt_data, opt_ignored) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml(opt_data.ij) + ((opt_data.Id != null) ? 'there is id! ' + soy.$$escapeHtml(opt_data.Id) : ''));
};
if (goog.DEBUG) {
  templates.Arcane.soyTemplateName = 'templates.Arcane';
}
