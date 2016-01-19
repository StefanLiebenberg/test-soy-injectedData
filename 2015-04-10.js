// This file was automatically generated from sample.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace templates.
 * @public
 */

goog.provide('templates');
goog.provide('templates.TestCall');
goog.provide('templates.TestIfWithNullCheckInIJ');
goog.provide('templates.TestIfWithoutNullCheckInIJ');
goog.provide('templates.TestIsNonnull');
goog.provide('templates.TestLet');
goog.provide('templates.TestPrint');
goog.provide('templates.Util');

goog.require('soy');
goog.require('soydata');


templates.TestLet = function(opt_data, opt_ignored, opt_ijData) {
  var output = '';
  var isLink__soy3 = (opt_ijData.config == null) ? null : opt_ijData.config['A'];
  output += (isLink__soy3) ? 'LET IS TRUE' : 'LET IS FALSE';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  templates.TestLet.soyTemplateName = 'templates.TestLet';
}


templates.TestCall = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(templates.Util({Value: opt_ijData.config['A']}, null, opt_ijData));
};
if (goog.DEBUG) {
  templates.TestCall.soyTemplateName = 'templates.TestCall';
}


templates.TestIfWithoutNullCheckInIJ = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(((opt_ijData.config == null) ? null : opt_ijData.config['A']) ? 'LET IS TRUE' : 'LET IS FALSE');
};
if (goog.DEBUG) {
  templates.TestIfWithoutNullCheckInIJ.soyTemplateName = 'templates.TestIfWithoutNullCheckInIJ';
}


templates.TestIfWithNullCheckInIJ = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(((opt_ijData == null) ? null : (opt_ijData.config == null) ? null : opt_ijData.config['A']) ? 'LET IS TRUE' : 'LET IS FALSE');
};
if (goog.DEBUG) {
  templates.TestIfWithNullCheckInIJ.soyTemplateName = 'templates.TestIfWithNullCheckInIJ';
}


templates.TestPrint = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(soy.$$escapeHtml((opt_ijData.config == null) ? null : opt_ijData.config['A']));
};
if (goog.DEBUG) {
  templates.TestPrint.soyTemplateName = 'templates.TestPrint';
}


templates.TestIsNonnull = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((isNonnull(opt_data.ij)) ? (opt_ijData.config != null && opt_ijData.config['A']) ? 'NONNULL IS TRUE' : 'NONNULL IS FALSE' : '');
};
if (goog.DEBUG) {
  templates.TestIsNonnull.soyTemplateName = 'templates.TestIsNonnull';
}


templates.Util = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml((opt_data.Value) ? 'true' : 'false');
};
if (goog.DEBUG) {
  templates.Util.soyTemplateName = 'templates.Util';
}
