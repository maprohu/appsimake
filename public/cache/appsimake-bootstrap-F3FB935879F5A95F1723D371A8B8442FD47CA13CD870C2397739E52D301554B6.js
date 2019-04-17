if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'appsimake-bootstrap'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'appsimake-bootstrap'.");
}
if (typeof this['appsimake-domx'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-bootstrap'. Its dependency 'appsimake-domx' was not found. Please, check whether 'appsimake-domx' is loaded prior to 'appsimake-bootstrap'.");
}
if (typeof this['appsimake-commonshr'] === 'undefined') {
  throw new Error("Error loading module 'appsimake-bootstrap'. Its dependency 'appsimake-commonshr' was not found. Please, check whether 'appsimake-commonshr' is loaded prior to 'appsimake-bootstrap'.");
}
this['appsimake-bootstrap'] = function (_, Kotlin, $module$appsimake_domx, $module$appsimake_commonshr) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var get_attr = $module$appsimake_domx.domx.get_attr_ejp6nk$;
  var Unit = Kotlin.kotlin.Unit;
  var Rx_init = $module$appsimake_commonshr.rx.Rx_init_lqp1nt$;
  var orEmpty = $module$appsimake_commonshr.common.orEmpty_rw3ye5$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var get_cls = $module$appsimake_domx.domx.get_cls_ejp6nk$;
  var get_overflowHidden = $module$appsimake_domx.styles.get_overflowHidden_kre7dp$;
  var invoke = $module$appsimake_domx.domx.invoke_inodcj$;
  var get_div = $module$appsimake_domx.domx.get_div_asww5s$;
  var css = $module$appsimake_domx.domx.css;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var get_leftRightTopBottom0 = $module$appsimake_domx.styles.get_leftRightTopBottom0_kre7dp$;
  function dataToggleDropdown($receiver) {
    get_attr($receiver).set_puj7f4$('data-toggle', 'dropdown');
  }
  function dataReferenceParent($receiver) {
    get_attr($receiver).set_puj7f4$('data-reference', 'parent');
  }
  function rxText$lambda(this$rxText) {
    return function ($receiver, it) {
      this$rxText.innerText = it;
      return Unit;
    };
  }
  function rxText($receiver, ks, rxVal) {
    rxVal.forEach_aaomyj$(ks, rxText$lambda($receiver));
  }
  function rxText_0($receiver, deps, fn) {
    rxText_1($receiver, deps.kills, fn);
  }
  function rxText_1($receiver, ks, fn) {
    var rx = Rx_init(ks, fn);
    rxText($receiver, ks, rx);
  }
  function rxTextOrEmpty$lambda(closure$fn) {
    return function ($receiver) {
      return orEmpty(closure$fn());
    };
  }
  function rxTextOrEmpty($receiver, ks, fn) {
    rxText_1($receiver, ks, rxTextOrEmpty$lambda(fn));
  }
  function setupFullScreen$lambda$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_w100($receiver_0);
    get_h100($receiver_0);
    get_overflowHidden($receiver_0);
    return Unit;
  }
  function setupFullScreen$lambda($receiver) {
    var $receiver_0 = get_cls($receiver);
    get_w100($receiver_0);
    get_h100($receiver_0);
    get_dFlex($receiver_0);
    get_flexColumn($receiver_0);
    invoke(ensureNotNull($receiver.parentElement), setupFullScreen$lambda$lambda);
    return Unit;
  }
  function setupFullScreen() {
    invoke(ensureNotNull(document.body), setupFullScreen$lambda);
  }
  function column$lambda(closure$fn) {
    return function ($receiver) {
      column_0(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  function column($receiver, fn) {
    return invoke(get_div($receiver), column$lambda(fn));
  }
  function row$lambda(closure$fn) {
    return function ($receiver) {
      row_0(get_cls($receiver));
      closure$fn($receiver);
      return Unit;
    };
  }
  function row($receiver, fn) {
    return invoke(get_div($receiver), row$lambda(fn));
  }
  var w100_metadata = new PropertyMetadata('w100');
  var w100;
  function get_w100($receiver) {
    return w100.getValue_lrcp0p$($receiver, w100_metadata);
  }
  var mw100_metadata = new PropertyMetadata('mw100');
  var mw100;
  function get_mw100($receiver) {
    return mw100.getValue_lrcp0p$($receiver, mw100_metadata);
  }
  var h100_metadata = new PropertyMetadata('h100');
  var h100;
  function get_h100($receiver) {
    return h100.getValue_lrcp0p$($receiver, h100_metadata);
  }
  var alignMiddle_metadata = new PropertyMetadata('alignMiddle');
  var alignMiddle;
  function get_alignMiddle($receiver) {
    return alignMiddle.getValue_lrcp0p$($receiver, alignMiddle_metadata);
  }
  var textDanger_metadata = new PropertyMetadata('textDanger');
  var textDanger;
  function get_textDanger($receiver) {
    return textDanger.getValue_lrcp0p$($receiver, textDanger_metadata);
  }
  var textSuccess_metadata = new PropertyMetadata('textSuccess');
  var textSuccess;
  function get_textSuccess($receiver) {
    return textSuccess.getValue_lrcp0p$($receiver, textSuccess_metadata);
  }
  var textPrimary_metadata = new PropertyMetadata('textPrimary');
  var textPrimary;
  function get_textPrimary($receiver) {
    return textPrimary.getValue_lrcp0p$($receiver, textPrimary_metadata);
  }
  var textInfo_metadata = new PropertyMetadata('textInfo');
  var textInfo;
  function get_textInfo($receiver) {
    return textInfo.getValue_lrcp0p$($receiver, textInfo_metadata);
  }
  var textMuted_metadata = new PropertyMetadata('textMuted');
  var textMuted;
  function get_textMuted($receiver) {
    return textMuted.getValue_lrcp0p$($receiver, textMuted_metadata);
  }
  var textLeft_metadata = new PropertyMetadata('textLeft');
  var textLeft;
  function get_textLeft($receiver) {
    return textLeft.getValue_lrcp0p$($receiver, textLeft_metadata);
  }
  var textReset_metadata = new PropertyMetadata('textReset');
  var textReset;
  function get_textReset($receiver) {
    return textReset.getValue_lrcp0p$($receiver, textReset_metadata);
  }
  var textJustify_metadata = new PropertyMetadata('textJustify');
  var textJustify;
  function get_textJustify($receiver) {
    return textJustify.getValue_lrcp0p$($receiver, textJustify_metadata);
  }
  var textDecorationNone_metadata = new PropertyMetadata('textDecorationNone');
  var textDecorationNone;
  function get_textDecorationNone($receiver) {
    return textDecorationNone.getValue_lrcp0p$($receiver, textDecorationNone_metadata);
  }
  var bgDanger_metadata = new PropertyMetadata('bgDanger');
  var bgDanger;
  function get_bgDanger($receiver) {
    return bgDanger.getValue_lrcp0p$($receiver, bgDanger_metadata);
  }
  var bgTransparent_metadata = new PropertyMetadata('bgTransparent');
  var bgTransparent;
  function get_bgTransparent($receiver) {
    return bgTransparent.getValue_lrcp0p$($receiver, bgTransparent_metadata);
  }
  var bgWhite_metadata = new PropertyMetadata('bgWhite');
  var bgWhite;
  function get_bgWhite($receiver) {
    return bgWhite.getValue_lrcp0p$($receiver, bgWhite_metadata);
  }
  var bgSuccess_metadata = new PropertyMetadata('bgSuccess');
  var bgSuccess;
  function get_bgSuccess($receiver) {
    return bgSuccess.getValue_lrcp0p$($receiver, bgSuccess_metadata);
  }
  var bgLight_metadata = new PropertyMetadata('bgLight');
  var bgLight;
  function get_bgLight($receiver) {
    return bgLight.getValue_lrcp0p$($receiver, bgLight_metadata);
  }
  var bgSecondary_metadata = new PropertyMetadata('bgSecondary');
  var bgSecondary;
  function get_bgSecondary($receiver) {
    return bgSecondary.getValue_lrcp0p$($receiver, bgSecondary_metadata);
  }
  var bgWarning_metadata = new PropertyMetadata('bgWarning');
  var bgWarning;
  function get_bgWarning($receiver) {
    return bgWarning.getValue_lrcp0p$($receiver, bgWarning_metadata);
  }
  var border_metadata = new PropertyMetadata('border');
  var border;
  function get_border($receiver) {
    return border.getValue_lrcp0p$($receiver, border_metadata);
  }
  var border0_metadata = new PropertyMetadata('border0');
  var border0;
  function get_border0($receiver) {
    return border0.getValue_lrcp0p$($receiver, border0_metadata);
  }
  var borderPrimary_metadata = new PropertyMetadata('borderPrimary');
  var borderPrimary;
  function get_borderPrimary($receiver) {
    return borderPrimary.getValue_lrcp0p$($receiver, borderPrimary_metadata);
  }
  var borderTop_metadata = new PropertyMetadata('borderTop');
  var borderTop;
  function get_borderTop($receiver) {
    return borderTop.getValue_lrcp0p$($receiver, borderTop_metadata);
  }
  var borderBottom_metadata = new PropertyMetadata('borderBottom');
  var borderBottom;
  function get_borderBottom($receiver) {
    return borderBottom.getValue_lrcp0p$($receiver, borderBottom_metadata);
  }
  var borderWarning_metadata = new PropertyMetadata('borderWarning');
  var borderWarning;
  function get_borderWarning($receiver) {
    return borderWarning.getValue_lrcp0p$($receiver, borderWarning_metadata);
  }
  var rounded_metadata = new PropertyMetadata('rounded');
  var rounded;
  function get_rounded($receiver) {
    return rounded.getValue_lrcp0p$($receiver, rounded_metadata);
  }
  var close_metadata = new PropertyMetadata('close');
  var close;
  function get_close($receiver) {
    return close.getValue_lrcp0p$($receiver, close_metadata);
  }
  var card_metadata = new PropertyMetadata('card');
  var card;
  function get_card($receiver) {
    return card.getValue_lrcp0p$($receiver, card_metadata);
  }
  var cardHeader_metadata = new PropertyMetadata('cardHeader');
  var cardHeader;
  function get_cardHeader($receiver) {
    return cardHeader.getValue_lrcp0p$($receiver, cardHeader_metadata);
  }
  var cardFooter_metadata = new PropertyMetadata('cardFooter');
  var cardFooter;
  function get_cardFooter($receiver) {
    return cardFooter.getValue_lrcp0p$($receiver, cardFooter_metadata);
  }
  var cardBody_metadata = new PropertyMetadata('cardBody');
  var cardBody;
  function get_cardBody($receiver) {
    return cardBody.getValue_lrcp0p$($receiver, cardBody_metadata);
  }
  var cardTitle_metadata = new PropertyMetadata('cardTitle');
  var cardTitle;
  function get_cardTitle($receiver) {
    return cardTitle.getValue_lrcp0p$($receiver, cardTitle_metadata);
  }
  var spinnerBorder_metadata = new PropertyMetadata('spinnerBorder');
  var spinnerBorder;
  function get_spinnerBorder($receiver) {
    return spinnerBorder.getValue_lrcp0p$($receiver, spinnerBorder_metadata);
  }
  var spinnerBorderSm_metadata = new PropertyMetadata('spinnerBorderSm');
  var spinnerBorderSm;
  function get_spinnerBorderSm($receiver) {
    return spinnerBorderSm.getValue_lrcp0p$($receiver, spinnerBorderSm_metadata);
  }
  var spinnerGrow_metadata = new PropertyMetadata('spinnerGrow');
  var spinnerGrow;
  function get_spinnerGrow($receiver) {
    return spinnerGrow.getValue_lrcp0p$($receiver, spinnerGrow_metadata);
  }
  var m0_metadata = new PropertyMetadata('m0');
  var m0;
  function get_m0($receiver) {
    return m0.getValue_lrcp0p$($receiver, m0_metadata);
  }
  var m1_metadata = new PropertyMetadata('m1');
  var m1;
  function get_m1($receiver) {
    return m1.getValue_lrcp0p$($receiver, m1_metadata);
  }
  var m2_metadata = new PropertyMetadata('m2');
  var m2;
  function get_m2($receiver) {
    return m2.getValue_lrcp0p$($receiver, m2_metadata);
  }
  var mt1_metadata = new PropertyMetadata('mt1');
  var mt1;
  function get_mt1($receiver) {
    return mt1.getValue_lrcp0p$($receiver, mt1_metadata);
  }
  var mr0_metadata = new PropertyMetadata('mr0');
  var mr0;
  function get_mr0($receiver) {
    return mr0.getValue_lrcp0p$($receiver, mr0_metadata);
  }
  var mr1_metadata = new PropertyMetadata('mr1');
  var mr1;
  function get_mr1($receiver) {
    return mr1.getValue_lrcp0p$($receiver, mr1_metadata);
  }
  var mr2_metadata = new PropertyMetadata('mr2');
  var mr2;
  function get_mr2($receiver) {
    return mr2.getValue_lrcp0p$($receiver, mr2_metadata);
  }
  var mr3_metadata = new PropertyMetadata('mr3');
  var mr3;
  function get_mr3($receiver) {
    return mr3.getValue_lrcp0p$($receiver, mr3_metadata);
  }
  var mr4_metadata = new PropertyMetadata('mr4');
  var mr4;
  function get_mr4($receiver) {
    return mr4.getValue_lrcp0p$($receiver, mr4_metadata);
  }
  var mr5_metadata = new PropertyMetadata('mr5');
  var mr5;
  function get_mr5($receiver) {
    return mr5.getValue_lrcp0p$($receiver, mr5_metadata);
  }
  var mx1_metadata = new PropertyMetadata('mx1');
  var mx1;
  function get_mx1($receiver) {
    return mx1.getValue_lrcp0p$($receiver, mx1_metadata);
  }
  var mx2_metadata = new PropertyMetadata('mx2');
  var mx2;
  function get_mx2($receiver) {
    return mx2.getValue_lrcp0p$($receiver, mx2_metadata);
  }
  var p0_metadata = new PropertyMetadata('p0');
  var p0;
  function get_p0($receiver) {
    return p0.getValue_lrcp0p$($receiver, p0_metadata);
  }
  var p1_metadata = new PropertyMetadata('p1');
  var p1;
  function get_p1($receiver) {
    return p1.getValue_lrcp0p$($receiver, p1_metadata);
  }
  var p2_metadata = new PropertyMetadata('p2');
  var p2;
  function get_p2($receiver) {
    return p2.getValue_lrcp0p$($receiver, p2_metadata);
  }
  var p3_metadata = new PropertyMetadata('p3');
  var p3;
  function get_p3($receiver) {
    return p3.getValue_lrcp0p$($receiver, p3_metadata);
  }
  var p4_metadata = new PropertyMetadata('p4');
  var p4;
  function get_p4($receiver) {
    return p4.getValue_lrcp0p$($receiver, p4_metadata);
  }
  var p5_metadata = new PropertyMetadata('p5');
  var p5;
  function get_p5($receiver) {
    return p5.getValue_lrcp0p$($receiver, p5_metadata);
  }
  var py1_metadata = new PropertyMetadata('py1');
  var py1;
  function get_py1($receiver) {
    return py1.getValue_lrcp0p$($receiver, py1_metadata);
  }
  var px1_metadata = new PropertyMetadata('px1');
  var px1;
  function get_px1($receiver) {
    return px1.getValue_lrcp0p$($receiver, px1_metadata);
  }
  var px2_metadata = new PropertyMetadata('px2');
  var px2;
  function get_px2($receiver) {
    return px2.getValue_lrcp0p$($receiver, px2_metadata);
  }
  var ml1_metadata = new PropertyMetadata('ml1');
  var ml1;
  function get_ml1($receiver) {
    return ml1.getValue_lrcp0p$($receiver, ml1_metadata);
  }
  var display1_metadata = new PropertyMetadata('display1');
  var display1;
  function get_display1($receiver) {
    return display1.getValue_lrcp0p$($receiver, display1_metadata);
  }
  var display2_metadata = new PropertyMetadata('display2');
  var display2;
  function get_display2($receiver) {
    return display2.getValue_lrcp0p$($receiver, display2_metadata);
  }
  var display3_metadata = new PropertyMetadata('display3');
  var display3;
  function get_display3($receiver) {
    return display3.getValue_lrcp0p$($receiver, display3_metadata);
  }
  var display4_metadata = new PropertyMetadata('display4');
  var display4;
  function get_display4($receiver) {
    return display4.getValue_lrcp0p$($receiver, display4_metadata);
  }
  var btnGroup_metadata = new PropertyMetadata('btnGroup');
  var btnGroup;
  function get_btnGroup($receiver) {
    return btnGroup.getValue_lrcp0p$($receiver, btnGroup_metadata);
  }
  var btnGroupVertical_metadata = new PropertyMetadata('btnGroupVertical');
  var btnGroupVertical;
  function get_btnGroupVertical($receiver) {
    return btnGroupVertical.getValue_lrcp0p$($receiver, btnGroupVertical_metadata);
  }
  var btnToolbar_metadata = new PropertyMetadata('btnToolbar');
  var btnToolbar;
  function get_btnToolbar($receiver) {
    return btnToolbar.getValue_lrcp0p$($receiver, btnToolbar_metadata);
  }
  var btnSecondary_metadata = new PropertyMetadata('btnSecondary');
  var btnSecondary;
  function get_btnSecondary($receiver) {
    return btnSecondary.getValue_lrcp0p$($receiver, btnSecondary_metadata);
  }
  var btnInfo_metadata = new PropertyMetadata('btnInfo');
  var btnInfo;
  function get_btnInfo($receiver) {
    return btnInfo.getValue_lrcp0p$($receiver, btnInfo_metadata);
  }
  var btnSuccess_metadata = new PropertyMetadata('btnSuccess');
  var btnSuccess;
  function get_btnSuccess($receiver) {
    return btnSuccess.getValue_lrcp0p$($receiver, btnSuccess_metadata);
  }
  var btnLight_metadata = new PropertyMetadata('btnLight');
  var btnLight;
  function get_btnLight($receiver) {
    return btnLight.getValue_lrcp0p$($receiver, btnLight_metadata);
  }
  var btnPrimary_metadata = new PropertyMetadata('btnPrimary');
  var btnPrimary;
  function get_btnPrimary($receiver) {
    return btnPrimary.getValue_lrcp0p$($receiver, btnPrimary_metadata);
  }
  var btnOutlinePrimary_metadata = new PropertyMetadata('btnOutlinePrimary');
  var btnOutlinePrimary;
  function get_btnOutlinePrimary($receiver) {
    return btnOutlinePrimary.getValue_lrcp0p$($receiver, btnOutlinePrimary_metadata);
  }
  var btnOutlineSuccess_metadata = new PropertyMetadata('btnOutlineSuccess');
  var btnOutlineSuccess;
  function get_btnOutlineSuccess($receiver) {
    return btnOutlineSuccess.getValue_lrcp0p$($receiver, btnOutlineSuccess_metadata);
  }
  var btnDanger_metadata = new PropertyMetadata('btnDanger');
  var btnDanger;
  function get_btnDanger($receiver) {
    return btnDanger.getValue_lrcp0p$($receiver, btnDanger_metadata);
  }
  var btnWarning_metadata = new PropertyMetadata('btnWarning');
  var btnWarning;
  function get_btnWarning($receiver) {
    return btnWarning.getValue_lrcp0p$($receiver, btnWarning_metadata);
  }
  var btn_metadata = new PropertyMetadata('btn');
  var btn;
  function get_btn($receiver) {
    return btn.getValue_lrcp0p$($receiver, btn_metadata);
  }
  var btnOutlineSecondary_metadata = new PropertyMetadata('btnOutlineSecondary');
  var btnOutlineSecondary;
  function get_btnOutlineSecondary($receiver) {
    return btnOutlineSecondary.getValue_lrcp0p$($receiver, btnOutlineSecondary_metadata);
  }
  var hAuto_metadata = new PropertyMetadata('hAuto');
  var hAuto;
  function get_hAuto($receiver) {
    return hAuto.getValue_lrcp0p$($receiver, hAuto_metadata);
  }
  var dBlock_metadata = new PropertyMetadata('dBlock');
  var dBlock;
  function get_dBlock($receiver) {
    return dBlock.getValue_lrcp0p$($receiver, dBlock_metadata);
  }
  var dFlex_metadata = new PropertyMetadata('dFlex');
  var dFlex;
  function get_dFlex($receiver) {
    return dFlex.getValue_lrcp0p$($receiver, dFlex_metadata);
  }
  var dNone_metadata = new PropertyMetadata('dNone');
  var dNone;
  function get_dNone($receiver) {
    return dNone.getValue_lrcp0p$($receiver, dNone_metadata);
  }
  var flexRow_metadata = new PropertyMetadata('flexRow');
  var flexRow;
  function get_flexRow($receiver) {
    return flexRow.getValue_lrcp0p$($receiver, flexRow_metadata);
  }
  var flexRowReverse_metadata = new PropertyMetadata('flexRowReverse');
  var flexRowReverse;
  function get_flexRowReverse($receiver) {
    return flexRowReverse.getValue_lrcp0p$($receiver, flexRowReverse_metadata);
  }
  var flexColumn_metadata = new PropertyMetadata('flexColumn');
  var flexColumn;
  function get_flexColumn($receiver) {
    return flexColumn.getValue_lrcp0p$($receiver, flexColumn_metadata);
  }
  var flexColumnReverse_metadata = new PropertyMetadata('flexColumnReverse');
  var flexColumnReverse;
  function get_flexColumnReverse($receiver) {
    return flexColumnReverse.getValue_lrcp0p$($receiver, flexColumnReverse_metadata);
  }
  var flexWrap_metadata = new PropertyMetadata('flexWrap');
  var flexWrap;
  function get_flexWrap($receiver) {
    return flexWrap.getValue_lrcp0p$($receiver, flexWrap_metadata);
  }
  var flexGrow1_metadata = new PropertyMetadata('flexGrow1');
  var flexGrow1;
  function get_flexGrow1($receiver) {
    return flexGrow1.getValue_lrcp0p$($receiver, flexGrow1_metadata);
  }
  var flexGrow0_metadata = new PropertyMetadata('flexGrow0');
  var flexGrow0;
  function get_flexGrow0($receiver) {
    return flexGrow0.getValue_lrcp0p$($receiver, flexGrow0_metadata);
  }
  var flexShrink0_metadata = new PropertyMetadata('flexShrink0');
  var flexShrink0;
  function get_flexShrink0($receiver) {
    return flexShrink0.getValue_lrcp0p$($receiver, flexShrink0_metadata);
  }
  var justifyContentStart_metadata = new PropertyMetadata('justifyContentStart');
  var justifyContentStart;
  function get_justifyContentStart($receiver) {
    return justifyContentStart.getValue_lrcp0p$($receiver, justifyContentStart_metadata);
  }
  var justifyContentEnd_metadata = new PropertyMetadata('justifyContentEnd');
  var justifyContentEnd;
  function get_justifyContentEnd($receiver) {
    return justifyContentEnd.getValue_lrcp0p$($receiver, justifyContentEnd_metadata);
  }
  var justifyContentCenter_metadata = new PropertyMetadata('justifyContentCenter');
  var justifyContentCenter;
  function get_justifyContentCenter($receiver) {
    return justifyContentCenter.getValue_lrcp0p$($receiver, justifyContentCenter_metadata);
  }
  var alignSelfCenter_metadata = new PropertyMetadata('alignSelfCenter');
  var alignSelfCenter;
  function get_alignSelfCenter($receiver) {
    return alignSelfCenter.getValue_lrcp0p$($receiver, alignSelfCenter_metadata);
  }
  var alignItemsCenter_metadata = new PropertyMetadata('alignItemsCenter');
  var alignItemsCenter;
  function get_alignItemsCenter($receiver) {
    return alignItemsCenter.getValue_lrcp0p$($receiver, alignItemsCenter_metadata);
  }
  var alignItemsStretch_metadata = new PropertyMetadata('alignItemsStretch');
  var alignItemsStretch;
  function get_alignItemsStretch($receiver) {
    return alignItemsStretch.getValue_lrcp0p$($receiver, alignItemsStretch_metadata);
  }
  var alignItemsStart_metadata = new PropertyMetadata('alignItemsStart');
  var alignItemsStart;
  function get_alignItemsStart($receiver) {
    return alignItemsStart.getValue_lrcp0p$($receiver, alignItemsStart_metadata);
  }
  var alignItemsEnd_metadata = new PropertyMetadata('alignItemsEnd');
  var alignItemsEnd;
  function get_alignItemsEnd($receiver) {
    return alignItemsEnd.getValue_lrcp0p$($receiver, alignItemsEnd_metadata);
  }
  var listGroup_metadata = new PropertyMetadata('listGroup');
  var listGroup;
  function get_listGroup($receiver) {
    return listGroup.getValue_lrcp0p$($receiver, listGroup_metadata);
  }
  var listGroupItem_metadata = new PropertyMetadata('listGroupItem');
  var listGroupItem;
  function get_listGroupItem($receiver) {
    return listGroupItem.getValue_lrcp0p$($receiver, listGroupItem_metadata);
  }
  var listGroupItemAction_metadata = new PropertyMetadata('listGroupItemAction');
  var listGroupItemAction;
  function get_listGroupItemAction($receiver) {
    return listGroupItemAction.getValue_lrcp0p$($receiver, listGroupItemAction_metadata);
  }
  var listGroupFlush_metadata = new PropertyMetadata('listGroupFlush');
  var listGroupFlush;
  function get_listGroupFlush($receiver) {
    return listGroupFlush.getValue_lrcp0p$($receiver, listGroupFlush_metadata);
  }
  var navbarBrand_metadata = new PropertyMetadata('navbarBrand');
  var navbarBrand;
  function get_navbarBrand($receiver) {
    return navbarBrand.getValue_lrcp0p$($receiver, navbarBrand_metadata);
  }
  var formInline_metadata = new PropertyMetadata('formInline');
  var formInline;
  function get_formInline($receiver) {
    return formInline.getValue_lrcp0p$($receiver, formInline_metadata);
  }
  var formControl_metadata = new PropertyMetadata('formControl');
  var formControl;
  function get_formControl($receiver) {
    return formControl.getValue_lrcp0p$($receiver, formControl_metadata);
  }
  var formControlFile_metadata = new PropertyMetadata('formControlFile');
  var formControlFile;
  function get_formControlFile($receiver) {
    return formControlFile.getValue_lrcp0p$($receiver, formControlFile_metadata);
  }
  var formGroup_metadata = new PropertyMetadata('formGroup');
  var formGroup;
  function get_formGroup($receiver) {
    return formGroup.getValue_lrcp0p$($receiver, formGroup_metadata);
  }
  var isInvalid_metadata = new PropertyMetadata('isInvalid');
  var isInvalid;
  function get_isInvalid($receiver) {
    return isInvalid.getValue_lrcp0p$($receiver, isInvalid_metadata);
  }
  var inputGroup_metadata = new PropertyMetadata('inputGroup');
  var inputGroup;
  function get_inputGroup($receiver) {
    return inputGroup.getValue_lrcp0p$($receiver, inputGroup_metadata);
  }
  var inputGroupAppend_metadata = new PropertyMetadata('inputGroupAppend');
  var inputGroupAppend;
  function get_inputGroupAppend($receiver) {
    return inputGroupAppend.getValue_lrcp0p$($receiver, inputGroupAppend_metadata);
  }
  var inputGroupText_metadata = new PropertyMetadata('inputGroupText');
  var inputGroupText;
  function get_inputGroupText($receiver) {
    return inputGroupText.getValue_lrcp0p$($receiver, inputGroupText_metadata);
  }
  var inputGroupPrepend_metadata = new PropertyMetadata('inputGroupPrepend');
  var inputGroupPrepend;
  function get_inputGroupPrepend($receiver) {
    return inputGroupPrepend.getValue_lrcp0p$($receiver, inputGroupPrepend_metadata);
  }
  var disabled_metadata = new PropertyMetadata('disabled');
  var disabled;
  function get_disabled($receiver) {
    return disabled.getValue_lrcp0p$($receiver, disabled_metadata);
  }
  var dropdown_metadata = new PropertyMetadata('dropdown');
  var dropdown;
  function get_dropdown($receiver) {
    return dropdown.getValue_lrcp0p$($receiver, dropdown_metadata);
  }
  var dropdownToggle_metadata = new PropertyMetadata('dropdownToggle');
  var dropdownToggle;
  function get_dropdownToggle($receiver) {
    return dropdownToggle.getValue_lrcp0p$($receiver, dropdownToggle_metadata);
  }
  var dropdownToggleSplit_metadata = new PropertyMetadata('dropdownToggleSplit');
  var dropdownToggleSplit;
  function get_dropdownToggleSplit($receiver) {
    return dropdownToggleSplit.getValue_lrcp0p$($receiver, dropdownToggleSplit_metadata);
  }
  var dropdownMenu_metadata = new PropertyMetadata('dropdownMenu');
  var dropdownMenu;
  function get_dropdownMenu($receiver) {
    return dropdownMenu.getValue_lrcp0p$($receiver, dropdownMenu_metadata);
  }
  var dropdownMenuRight_metadata = new PropertyMetadata('dropdownMenuRight');
  var dropdownMenuRight;
  function get_dropdownMenuRight($receiver) {
    return dropdownMenuRight.getValue_lrcp0p$($receiver, dropdownMenuRight_metadata);
  }
  var dropdownItem_metadata = new PropertyMetadata('dropdownItem');
  var dropdownItem;
  function get_dropdownItem($receiver) {
    return dropdownItem.getValue_lrcp0p$($receiver, dropdownItem_metadata);
  }
  var dropdownDivider_metadata = new PropertyMetadata('dropdownDivider');
  var dropdownDivider;
  function get_dropdownDivider($receiver) {
    return dropdownDivider.getValue_lrcp0p$($receiver, dropdownDivider_metadata);
  }
  var customSelect_metadata = new PropertyMetadata('customSelect');
  var customSelect;
  function get_customSelect($receiver) {
    return customSelect.getValue_lrcp0p$($receiver, customSelect_metadata);
  }
  var fontWeightBold_metadata = new PropertyMetadata('fontWeightBold');
  var fontWeightBold;
  function get_fontWeightBold($receiver) {
    return fontWeightBold.getValue_lrcp0p$($receiver, fontWeightBold_metadata);
  }
  var fontItalic_metadata = new PropertyMetadata('fontItalic');
  var fontItalic;
  function get_fontItalic($receiver) {
    return fontItalic.getValue_lrcp0p$($receiver, fontItalic_metadata);
  }
  var badge_metadata = new PropertyMetadata('badge');
  var badge;
  function get_badge($receiver) {
    return badge.getValue_lrcp0p$($receiver, badge_metadata);
  }
  var badgePill_metadata = new PropertyMetadata('badgePill');
  var badgePill;
  function get_badgePill($receiver) {
    return badgePill.getValue_lrcp0p$($receiver, badgePill_metadata);
  }
  var badgePrimary_metadata = new PropertyMetadata('badgePrimary');
  var badgePrimary;
  function get_badgePrimary($receiver) {
    return badgePrimary.getValue_lrcp0p$($receiver, badgePrimary_metadata);
  }
  var badgeSecondary_metadata = new PropertyMetadata('badgeSecondary');
  var badgeSecondary;
  function get_badgeSecondary($receiver) {
    return badgeSecondary.getValue_lrcp0p$($receiver, badgeSecondary_metadata);
  }
  var badgeWarning_metadata = new PropertyMetadata('badgeWarning');
  var badgeWarning;
  function get_badgeWarning($receiver) {
    return badgeWarning.getValue_lrcp0p$($receiver, badgeWarning_metadata);
  }
  var badgeInfo_metadata = new PropertyMetadata('badgeInfo');
  var badgeInfo;
  function get_badgeInfo($receiver) {
    return badgeInfo.getValue_lrcp0p$($receiver, badgeInfo_metadata);
  }
  var navTabs_metadata = new PropertyMetadata('navTabs');
  var navTabs;
  function get_navTabs($receiver) {
    return navTabs.getValue_lrcp0p$($receiver, navTabs_metadata);
  }
  var navItem_metadata = new PropertyMetadata('navItem');
  var navItem;
  function get_navItem($receiver) {
    return navItem.getValue_lrcp0p$($receiver, navItem_metadata);
  }
  var navLink_metadata = new PropertyMetadata('navLink');
  var navLink;
  function get_navLink($receiver) {
    return navLink.getValue_lrcp0p$($receiver, navLink_metadata);
  }
  var active_metadata = new PropertyMetadata('active');
  var active;
  function get_active($receiver) {
    return active.getValue_lrcp0p$($receiver, active_metadata);
  }
  var positionRelative_metadata = new PropertyMetadata('positionRelative');
  var positionRelative;
  function get_positionRelative($receiver) {
    return positionRelative.getValue_lrcp0p$($receiver, positionRelative_metadata);
  }
  var positionAbsolute_metadata = new PropertyMetadata('positionAbsolute');
  var positionAbsolute;
  function get_positionAbsolute($receiver) {
    return positionAbsolute.getValue_lrcp0p$($receiver, positionAbsolute_metadata);
  }
  var toast_metadata = new PropertyMetadata('toast');
  var toast;
  function get_toast($receiver) {
    return toast.getValue_lrcp0p$($receiver, toast_metadata);
  }
  var alert_metadata = new PropertyMetadata('alert');
  var alert;
  function get_alert($receiver) {
    return alert.getValue_lrcp0p$($receiver, alert_metadata);
  }
  var alertWarning_metadata = new PropertyMetadata('alertWarning');
  var alertWarning;
  function get_alertWarning($receiver) {
    return alertWarning.getValue_lrcp0p$($receiver, alertWarning_metadata);
  }
  var alertDanger_metadata = new PropertyMetadata('alertDanger');
  var alertDanger;
  function get_alertDanger($receiver) {
    return alertDanger.getValue_lrcp0p$($receiver, alertDanger_metadata);
  }
  var alertDismissable_metadata = new PropertyMetadata('alertDismissable');
  var alertDismissable;
  function get_alertDismissable($receiver) {
    return alertDismissable.getValue_lrcp0p$($receiver, alertDismissable_metadata);
  }
  var fade_metadata = new PropertyMetadata('fade');
  var fade;
  function get_fade($receiver) {
    return fade.getValue_lrcp0p$($receiver, fade_metadata);
  }
  var show_metadata = new PropertyMetadata('show');
  var show;
  function get_show($receiver) {
    return show.getValue_lrcp0p$($receiver, show_metadata);
  }
  var toastHeader_metadata = new PropertyMetadata('toastHeader');
  var toastHeader;
  function get_toastHeader($receiver) {
    return toastHeader.getValue_lrcp0p$($receiver, toastHeader_metadata);
  }
  var toastBody_metadata = new PropertyMetadata('toastBody');
  var toastBody;
  function get_toastBody($receiver) {
    return toastBody.getValue_lrcp0p$($receiver, toastBody_metadata);
  }
  function column_0($receiver) {
    get_dFlex($receiver);
    get_flexColumn($receiver);
  }
  function row_0($receiver) {
    get_dFlex($receiver);
    get_flexRow($receiver);
  }
  function flexCenter($receiver) {
    get_dFlex($receiver);
    get_justifyContentCenter($receiver);
    get_alignItemsCenter($receiver);
  }
  function flexFixedSize($receiver) {
    get_flexGrow0($receiver);
    get_flexShrink0($receiver);
  }
  function overlay($receiver) {
    get_positionAbsolute($receiver);
    get_leftRightTopBottom0($receiver);
  }
  var package$bootstrap = _.bootstrap || (_.bootstrap = {});
  package$bootstrap.dataToggleDropdown_v3gdir$ = dataToggleDropdown;
  package$bootstrap.dataReferenceParent_v3gdir$ = dataReferenceParent;
  package$bootstrap.rxText_krbx0q$ = rxText;
  package$bootstrap.rxText_uh949j$ = rxText_0;
  package$bootstrap.rxText_patdxs$ = rxText_1;
  package$bootstrap.rxTextOrEmpty_3absgp$ = rxTextOrEmpty;
  $$importsForInline$$['appsimake-commonshr'] = $module$appsimake_commonshr;
  package$bootstrap.setupFullScreen = setupFullScreen;
  package$bootstrap.column_gnmiz0$ = column;
  package$bootstrap.row_gnmiz0$ = row;
  package$bootstrap.get_w100_kre7dp$ = get_w100;
  package$bootstrap.get_mw100_kre7dp$ = get_mw100;
  package$bootstrap.get_h100_kre7dp$ = get_h100;
  package$bootstrap.get_alignMiddle_kre7dp$ = get_alignMiddle;
  package$bootstrap.get_textDanger_kre7dp$ = get_textDanger;
  package$bootstrap.get_textSuccess_kre7dp$ = get_textSuccess;
  package$bootstrap.get_textPrimary_kre7dp$ = get_textPrimary;
  package$bootstrap.get_textInfo_kre7dp$ = get_textInfo;
  package$bootstrap.get_textMuted_kre7dp$ = get_textMuted;
  package$bootstrap.get_textLeft_kre7dp$ = get_textLeft;
  package$bootstrap.get_textReset_kre7dp$ = get_textReset;
  package$bootstrap.get_textJustify_kre7dp$ = get_textJustify;
  package$bootstrap.get_textDecorationNone_kre7dp$ = get_textDecorationNone;
  package$bootstrap.get_bgDanger_kre7dp$ = get_bgDanger;
  package$bootstrap.get_bgTransparent_kre7dp$ = get_bgTransparent;
  package$bootstrap.get_bgWhite_kre7dp$ = get_bgWhite;
  package$bootstrap.get_bgSuccess_kre7dp$ = get_bgSuccess;
  package$bootstrap.get_bgLight_kre7dp$ = get_bgLight;
  package$bootstrap.get_bgSecondary_kre7dp$ = get_bgSecondary;
  package$bootstrap.get_bgWarning_kre7dp$ = get_bgWarning;
  package$bootstrap.get_border_kre7dp$ = get_border;
  package$bootstrap.get_border0_kre7dp$ = get_border0;
  package$bootstrap.get_borderPrimary_kre7dp$ = get_borderPrimary;
  package$bootstrap.get_borderTop_kre7dp$ = get_borderTop;
  package$bootstrap.get_borderBottom_kre7dp$ = get_borderBottom;
  package$bootstrap.get_borderWarning_kre7dp$ = get_borderWarning;
  package$bootstrap.get_rounded_kre7dp$ = get_rounded;
  package$bootstrap.get_close_kre7dp$ = get_close;
  package$bootstrap.get_card_kre7dp$ = get_card;
  package$bootstrap.get_cardHeader_kre7dp$ = get_cardHeader;
  package$bootstrap.get_cardFooter_kre7dp$ = get_cardFooter;
  package$bootstrap.get_cardBody_kre7dp$ = get_cardBody;
  package$bootstrap.get_cardTitle_kre7dp$ = get_cardTitle;
  package$bootstrap.get_spinnerBorder_kre7dp$ = get_spinnerBorder;
  package$bootstrap.get_spinnerBorderSm_kre7dp$ = get_spinnerBorderSm;
  package$bootstrap.get_spinnerGrow_kre7dp$ = get_spinnerGrow;
  package$bootstrap.get_m0_kre7dp$ = get_m0;
  package$bootstrap.get_m1_kre7dp$ = get_m1;
  package$bootstrap.get_m2_kre7dp$ = get_m2;
  package$bootstrap.get_mt1_kre7dp$ = get_mt1;
  package$bootstrap.get_mr0_kre7dp$ = get_mr0;
  package$bootstrap.get_mr1_kre7dp$ = get_mr1;
  package$bootstrap.get_mr2_kre7dp$ = get_mr2;
  package$bootstrap.get_mr3_kre7dp$ = get_mr3;
  package$bootstrap.get_mr4_kre7dp$ = get_mr4;
  package$bootstrap.get_mr5_kre7dp$ = get_mr5;
  package$bootstrap.get_mx1_kre7dp$ = get_mx1;
  package$bootstrap.get_mx2_kre7dp$ = get_mx2;
  package$bootstrap.get_p0_kre7dp$ = get_p0;
  package$bootstrap.get_p1_kre7dp$ = get_p1;
  package$bootstrap.get_p2_kre7dp$ = get_p2;
  package$bootstrap.get_p3_kre7dp$ = get_p3;
  package$bootstrap.get_p4_kre7dp$ = get_p4;
  package$bootstrap.get_p5_kre7dp$ = get_p5;
  package$bootstrap.get_py1_kre7dp$ = get_py1;
  package$bootstrap.get_px1_kre7dp$ = get_px1;
  package$bootstrap.get_px2_kre7dp$ = get_px2;
  package$bootstrap.get_ml1_kre7dp$ = get_ml1;
  package$bootstrap.get_display1_kre7dp$ = get_display1;
  package$bootstrap.get_display2_kre7dp$ = get_display2;
  package$bootstrap.get_display3_kre7dp$ = get_display3;
  package$bootstrap.get_display4_kre7dp$ = get_display4;
  package$bootstrap.get_btnGroup_kre7dp$ = get_btnGroup;
  package$bootstrap.get_btnGroupVertical_kre7dp$ = get_btnGroupVertical;
  package$bootstrap.get_btnToolbar_kre7dp$ = get_btnToolbar;
  package$bootstrap.get_btnSecondary_kre7dp$ = get_btnSecondary;
  package$bootstrap.get_btnInfo_kre7dp$ = get_btnInfo;
  package$bootstrap.get_btnSuccess_kre7dp$ = get_btnSuccess;
  package$bootstrap.get_btnLight_kre7dp$ = get_btnLight;
  package$bootstrap.get_btnPrimary_kre7dp$ = get_btnPrimary;
  package$bootstrap.get_btnOutlinePrimary_kre7dp$ = get_btnOutlinePrimary;
  package$bootstrap.get_btnOutlineSuccess_kre7dp$ = get_btnOutlineSuccess;
  package$bootstrap.get_btnDanger_kre7dp$ = get_btnDanger;
  package$bootstrap.get_btnWarning_kre7dp$ = get_btnWarning;
  package$bootstrap.get_btn_kre7dp$ = get_btn;
  package$bootstrap.get_btnOutlineSecondary_kre7dp$ = get_btnOutlineSecondary;
  package$bootstrap.get_hAuto_kre7dp$ = get_hAuto;
  package$bootstrap.get_dBlock_kre7dp$ = get_dBlock;
  package$bootstrap.get_dFlex_kre7dp$ = get_dFlex;
  package$bootstrap.get_dNone_kre7dp$ = get_dNone;
  package$bootstrap.get_flexRow_kre7dp$ = get_flexRow;
  package$bootstrap.get_flexRowReverse_kre7dp$ = get_flexRowReverse;
  package$bootstrap.get_flexColumn_kre7dp$ = get_flexColumn;
  package$bootstrap.get_flexColumnReverse_kre7dp$ = get_flexColumnReverse;
  package$bootstrap.get_flexWrap_kre7dp$ = get_flexWrap;
  package$bootstrap.get_flexGrow1_kre7dp$ = get_flexGrow1;
  package$bootstrap.get_flexGrow0_kre7dp$ = get_flexGrow0;
  package$bootstrap.get_flexShrink0_kre7dp$ = get_flexShrink0;
  package$bootstrap.get_justifyContentStart_kre7dp$ = get_justifyContentStart;
  package$bootstrap.get_justifyContentEnd_kre7dp$ = get_justifyContentEnd;
  package$bootstrap.get_justifyContentCenter_kre7dp$ = get_justifyContentCenter;
  package$bootstrap.get_alignSelfCenter_kre7dp$ = get_alignSelfCenter;
  package$bootstrap.get_alignItemsCenter_kre7dp$ = get_alignItemsCenter;
  package$bootstrap.get_alignItemsStretch_kre7dp$ = get_alignItemsStretch;
  package$bootstrap.get_alignItemsStart_kre7dp$ = get_alignItemsStart;
  package$bootstrap.get_alignItemsEnd_kre7dp$ = get_alignItemsEnd;
  package$bootstrap.get_listGroup_kre7dp$ = get_listGroup;
  package$bootstrap.get_listGroupItem_kre7dp$ = get_listGroupItem;
  package$bootstrap.get_listGroupItemAction_kre7dp$ = get_listGroupItemAction;
  package$bootstrap.get_listGroupFlush_kre7dp$ = get_listGroupFlush;
  package$bootstrap.get_navbarBrand_kre7dp$ = get_navbarBrand;
  package$bootstrap.get_formInline_kre7dp$ = get_formInline;
  package$bootstrap.get_formControl_kre7dp$ = get_formControl;
  package$bootstrap.get_formControlFile_kre7dp$ = get_formControlFile;
  package$bootstrap.get_formGroup_kre7dp$ = get_formGroup;
  package$bootstrap.get_isInvalid_kre7dp$ = get_isInvalid;
  package$bootstrap.get_inputGroup_kre7dp$ = get_inputGroup;
  package$bootstrap.get_inputGroupAppend_kre7dp$ = get_inputGroupAppend;
  package$bootstrap.get_inputGroupText_kre7dp$ = get_inputGroupText;
  package$bootstrap.get_inputGroupPrepend_kre7dp$ = get_inputGroupPrepend;
  package$bootstrap.get_disabled_kre7dp$ = get_disabled;
  package$bootstrap.get_dropdown_kre7dp$ = get_dropdown;
  package$bootstrap.get_dropdownToggle_kre7dp$ = get_dropdownToggle;
  package$bootstrap.get_dropdownToggleSplit_kre7dp$ = get_dropdownToggleSplit;
  package$bootstrap.get_dropdownMenu_kre7dp$ = get_dropdownMenu;
  package$bootstrap.get_dropdownMenuRight_kre7dp$ = get_dropdownMenuRight;
  package$bootstrap.get_dropdownItem_kre7dp$ = get_dropdownItem;
  package$bootstrap.get_dropdownDivider_kre7dp$ = get_dropdownDivider;
  package$bootstrap.get_customSelect_kre7dp$ = get_customSelect;
  package$bootstrap.get_fontWeightBold_kre7dp$ = get_fontWeightBold;
  package$bootstrap.get_fontItalic_kre7dp$ = get_fontItalic;
  package$bootstrap.get_badge_kre7dp$ = get_badge;
  package$bootstrap.get_badgePill_kre7dp$ = get_badgePill;
  package$bootstrap.get_badgePrimary_kre7dp$ = get_badgePrimary;
  package$bootstrap.get_badgeSecondary_kre7dp$ = get_badgeSecondary;
  package$bootstrap.get_badgeWarning_kre7dp$ = get_badgeWarning;
  package$bootstrap.get_badgeInfo_kre7dp$ = get_badgeInfo;
  package$bootstrap.get_navTabs_kre7dp$ = get_navTabs;
  package$bootstrap.get_navItem_kre7dp$ = get_navItem;
  package$bootstrap.get_navLink_kre7dp$ = get_navLink;
  package$bootstrap.get_active_kre7dp$ = get_active;
  package$bootstrap.get_positionRelative_kre7dp$ = get_positionRelative;
  package$bootstrap.get_positionAbsolute_kre7dp$ = get_positionAbsolute;
  package$bootstrap.get_toast_kre7dp$ = get_toast;
  package$bootstrap.get_alert_kre7dp$ = get_alert;
  package$bootstrap.get_alertWarning_kre7dp$ = get_alertWarning;
  package$bootstrap.get_alertDanger_kre7dp$ = get_alertDanger;
  package$bootstrap.get_alertDismissable_kre7dp$ = get_alertDismissable;
  package$bootstrap.get_fade_kre7dp$ = get_fade;
  package$bootstrap.get_show_kre7dp$ = get_show;
  package$bootstrap.get_toastHeader_kre7dp$ = get_toastHeader;
  package$bootstrap.get_toastBody_kre7dp$ = get_toastBody;
  package$bootstrap.column_kre7dp$ = column_0;
  package$bootstrap.row_kre7dp$ = row_0;
  package$bootstrap.flexCenter_kre7dp$ = flexCenter;
  package$bootstrap.flexFixedSize_kre7dp$ = flexFixedSize;
  package$bootstrap.overlay_kre7dp$ = overlay;
  w100 = css().provideDelegate_d6mtq7$(this, w100_metadata);
  mw100 = css().provideDelegate_d6mtq7$(this, mw100_metadata);
  h100 = css().provideDelegate_d6mtq7$(this, h100_metadata);
  alignMiddle = css().provideDelegate_d6mtq7$(this, alignMiddle_metadata);
  textDanger = css().provideDelegate_d6mtq7$(this, textDanger_metadata);
  textSuccess = css().provideDelegate_d6mtq7$(this, textSuccess_metadata);
  textPrimary = css().provideDelegate_d6mtq7$(this, textPrimary_metadata);
  textInfo = css().provideDelegate_d6mtq7$(this, textInfo_metadata);
  textMuted = css().provideDelegate_d6mtq7$(this, textMuted_metadata);
  textLeft = css().provideDelegate_d6mtq7$(this, textLeft_metadata);
  textReset = css().provideDelegate_d6mtq7$(this, textReset_metadata);
  textJustify = css().provideDelegate_d6mtq7$(this, textJustify_metadata);
  textDecorationNone = css().provideDelegate_d6mtq7$(this, textDecorationNone_metadata);
  bgDanger = css().provideDelegate_d6mtq7$(this, bgDanger_metadata);
  bgTransparent = css().provideDelegate_d6mtq7$(this, bgTransparent_metadata);
  bgWhite = css().provideDelegate_d6mtq7$(this, bgWhite_metadata);
  bgSuccess = css().provideDelegate_d6mtq7$(this, bgSuccess_metadata);
  bgLight = css().provideDelegate_d6mtq7$(this, bgLight_metadata);
  bgSecondary = css().provideDelegate_d6mtq7$(this, bgSecondary_metadata);
  bgWarning = css().provideDelegate_d6mtq7$(this, bgWarning_metadata);
  border = css().provideDelegate_d6mtq7$(this, border_metadata);
  border0 = css().provideDelegate_d6mtq7$(this, border0_metadata);
  borderPrimary = css().provideDelegate_d6mtq7$(this, borderPrimary_metadata);
  borderTop = css().provideDelegate_d6mtq7$(this, borderTop_metadata);
  borderBottom = css().provideDelegate_d6mtq7$(this, borderBottom_metadata);
  borderWarning = css().provideDelegate_d6mtq7$(this, borderWarning_metadata);
  rounded = css().provideDelegate_d6mtq7$(this, rounded_metadata);
  close = css().provideDelegate_d6mtq7$(this, close_metadata);
  card = css().provideDelegate_d6mtq7$(this, card_metadata);
  cardHeader = css().provideDelegate_d6mtq7$(this, cardHeader_metadata);
  cardFooter = css().provideDelegate_d6mtq7$(this, cardFooter_metadata);
  cardBody = css().provideDelegate_d6mtq7$(this, cardBody_metadata);
  cardTitle = css().provideDelegate_d6mtq7$(this, cardTitle_metadata);
  spinnerBorder = css().provideDelegate_d6mtq7$(this, spinnerBorder_metadata);
  spinnerBorderSm = css().provideDelegate_d6mtq7$(this, spinnerBorderSm_metadata);
  spinnerGrow = css().provideDelegate_d6mtq7$(this, spinnerGrow_metadata);
  m0 = css().provideDelegate_d6mtq7$(this, m0_metadata);
  m1 = css().provideDelegate_d6mtq7$(this, m1_metadata);
  m2 = css().provideDelegate_d6mtq7$(this, m2_metadata);
  mt1 = css().provideDelegate_d6mtq7$(this, mt1_metadata);
  mr0 = css().provideDelegate_d6mtq7$(this, mr0_metadata);
  mr1 = css().provideDelegate_d6mtq7$(this, mr1_metadata);
  mr2 = css().provideDelegate_d6mtq7$(this, mr2_metadata);
  mr3 = css().provideDelegate_d6mtq7$(this, mr3_metadata);
  mr4 = css().provideDelegate_d6mtq7$(this, mr4_metadata);
  mr5 = css().provideDelegate_d6mtq7$(this, mr5_metadata);
  mx1 = css().provideDelegate_d6mtq7$(this, mx1_metadata);
  mx2 = css().provideDelegate_d6mtq7$(this, mx2_metadata);
  p0 = css().provideDelegate_d6mtq7$(this, p0_metadata);
  p1 = css().provideDelegate_d6mtq7$(this, p1_metadata);
  p2 = css().provideDelegate_d6mtq7$(this, p2_metadata);
  p3 = css().provideDelegate_d6mtq7$(this, p3_metadata);
  p4 = css().provideDelegate_d6mtq7$(this, p4_metadata);
  p5 = css().provideDelegate_d6mtq7$(this, p5_metadata);
  py1 = css().provideDelegate_d6mtq7$(this, py1_metadata);
  px1 = css().provideDelegate_d6mtq7$(this, px1_metadata);
  px2 = css().provideDelegate_d6mtq7$(this, px2_metadata);
  ml1 = css().provideDelegate_d6mtq7$(this, ml1_metadata);
  display1 = css().provideDelegate_d6mtq7$(this, display1_metadata);
  display2 = css().provideDelegate_d6mtq7$(this, display2_metadata);
  display3 = css().provideDelegate_d6mtq7$(this, display3_metadata);
  display4 = css().provideDelegate_d6mtq7$(this, display4_metadata);
  btnGroup = css().provideDelegate_d6mtq7$(this, btnGroup_metadata);
  btnGroupVertical = css().provideDelegate_d6mtq7$(this, btnGroupVertical_metadata);
  btnToolbar = css().provideDelegate_d6mtq7$(this, btnToolbar_metadata);
  btnSecondary = css().provideDelegate_d6mtq7$(this, btnSecondary_metadata);
  btnInfo = css().provideDelegate_d6mtq7$(this, btnInfo_metadata);
  btnSuccess = css().provideDelegate_d6mtq7$(this, btnSuccess_metadata);
  btnLight = css().provideDelegate_d6mtq7$(this, btnLight_metadata);
  btnPrimary = css().provideDelegate_d6mtq7$(this, btnPrimary_metadata);
  btnOutlinePrimary = css().provideDelegate_d6mtq7$(this, btnOutlinePrimary_metadata);
  btnOutlineSuccess = css().provideDelegate_d6mtq7$(this, btnOutlineSuccess_metadata);
  btnDanger = css().provideDelegate_d6mtq7$(this, btnDanger_metadata);
  btnWarning = css().provideDelegate_d6mtq7$(this, btnWarning_metadata);
  btn = css().provideDelegate_d6mtq7$(this, btn_metadata);
  btnOutlineSecondary = css().provideDelegate_d6mtq7$(this, btnOutlineSecondary_metadata);
  hAuto = css().provideDelegate_d6mtq7$(this, hAuto_metadata);
  dBlock = css().provideDelegate_d6mtq7$(this, dBlock_metadata);
  dFlex = css().provideDelegate_d6mtq7$(this, dFlex_metadata);
  dNone = css().provideDelegate_d6mtq7$(this, dNone_metadata);
  flexRow = css().provideDelegate_d6mtq7$(this, flexRow_metadata);
  flexRowReverse = css().provideDelegate_d6mtq7$(this, flexRowReverse_metadata);
  flexColumn = css().provideDelegate_d6mtq7$(this, flexColumn_metadata);
  flexColumnReverse = css().provideDelegate_d6mtq7$(this, flexColumnReverse_metadata);
  flexWrap = css().provideDelegate_d6mtq7$(this, flexWrap_metadata);
  flexGrow1 = css().provideDelegate_d6mtq7$(this, flexGrow1_metadata);
  flexGrow0 = css().provideDelegate_d6mtq7$(this, flexGrow0_metadata);
  flexShrink0 = css().provideDelegate_d6mtq7$(this, flexShrink0_metadata);
  justifyContentStart = css().provideDelegate_d6mtq7$(this, justifyContentStart_metadata);
  justifyContentEnd = css().provideDelegate_d6mtq7$(this, justifyContentEnd_metadata);
  justifyContentCenter = css().provideDelegate_d6mtq7$(this, justifyContentCenter_metadata);
  alignSelfCenter = css().provideDelegate_d6mtq7$(this, alignSelfCenter_metadata);
  alignItemsCenter = css().provideDelegate_d6mtq7$(this, alignItemsCenter_metadata);
  alignItemsStretch = css().provideDelegate_d6mtq7$(this, alignItemsStretch_metadata);
  alignItemsStart = css().provideDelegate_d6mtq7$(this, alignItemsStart_metadata);
  alignItemsEnd = css().provideDelegate_d6mtq7$(this, alignItemsEnd_metadata);
  listGroup = css().provideDelegate_d6mtq7$(this, listGroup_metadata);
  listGroupItem = css().provideDelegate_d6mtq7$(this, listGroupItem_metadata);
  listGroupItemAction = css().provideDelegate_d6mtq7$(this, listGroupItemAction_metadata);
  listGroupFlush = css().provideDelegate_d6mtq7$(this, listGroupFlush_metadata);
  navbarBrand = css().provideDelegate_d6mtq7$(this, navbarBrand_metadata);
  formInline = css().provideDelegate_d6mtq7$(this, formInline_metadata);
  formControl = css().provideDelegate_d6mtq7$(this, formControl_metadata);
  formControlFile = css().provideDelegate_d6mtq7$(this, formControlFile_metadata);
  formGroup = css().provideDelegate_d6mtq7$(this, formGroup_metadata);
  isInvalid = css().provideDelegate_d6mtq7$(this, isInvalid_metadata);
  inputGroup = css().provideDelegate_d6mtq7$(this, inputGroup_metadata);
  inputGroupAppend = css().provideDelegate_d6mtq7$(this, inputGroupAppend_metadata);
  inputGroupText = css().provideDelegate_d6mtq7$(this, inputGroupText_metadata);
  inputGroupPrepend = css().provideDelegate_d6mtq7$(this, inputGroupPrepend_metadata);
  disabled = css().provideDelegate_d6mtq7$(this, disabled_metadata);
  dropdown = css().provideDelegate_d6mtq7$(this, dropdown_metadata);
  dropdownToggle = css().provideDelegate_d6mtq7$(this, dropdownToggle_metadata);
  dropdownToggleSplit = css().provideDelegate_d6mtq7$(this, dropdownToggleSplit_metadata);
  dropdownMenu = css().provideDelegate_d6mtq7$(this, dropdownMenu_metadata);
  dropdownMenuRight = css().provideDelegate_d6mtq7$(this, dropdownMenuRight_metadata);
  dropdownItem = css().provideDelegate_d6mtq7$(this, dropdownItem_metadata);
  dropdownDivider = css().provideDelegate_d6mtq7$(this, dropdownDivider_metadata);
  customSelect = css().provideDelegate_d6mtq7$(this, customSelect_metadata);
  fontWeightBold = css().provideDelegate_d6mtq7$(this, fontWeightBold_metadata);
  fontItalic = css().provideDelegate_d6mtq7$(this, fontItalic_metadata);
  badge = css().provideDelegate_d6mtq7$(this, badge_metadata);
  badgePill = css().provideDelegate_d6mtq7$(this, badgePill_metadata);
  badgePrimary = css().provideDelegate_d6mtq7$(this, badgePrimary_metadata);
  badgeSecondary = css().provideDelegate_d6mtq7$(this, badgeSecondary_metadata);
  badgeWarning = css().provideDelegate_d6mtq7$(this, badgeWarning_metadata);
  badgeInfo = css().provideDelegate_d6mtq7$(this, badgeInfo_metadata);
  navTabs = css().provideDelegate_d6mtq7$(this, navTabs_metadata);
  navItem = css().provideDelegate_d6mtq7$(this, navItem_metadata);
  navLink = css().provideDelegate_d6mtq7$(this, navLink_metadata);
  active = css().provideDelegate_d6mtq7$(this, active_metadata);
  positionRelative = css().provideDelegate_d6mtq7$(this, positionRelative_metadata);
  positionAbsolute = css().provideDelegate_d6mtq7$(this, positionAbsolute_metadata);
  toast = css().provideDelegate_d6mtq7$(this, toast_metadata);
  alert = css().provideDelegate_d6mtq7$(this, alert_metadata);
  alertWarning = css().provideDelegate_d6mtq7$(this, alertWarning_metadata);
  alertDanger = css().provideDelegate_d6mtq7$(this, alertDanger_metadata);
  alertDismissable = css().provideDelegate_d6mtq7$(this, alertDismissable_metadata);
  fade = css().provideDelegate_d6mtq7$(this, fade_metadata);
  show = css().provideDelegate_d6mtq7$(this, show_metadata);
  toastHeader = css().provideDelegate_d6mtq7$(this, toastHeader_metadata);
  toastBody = css().provideDelegate_d6mtq7$(this, toastBody_metadata);
  Kotlin.defineModule('appsimake-bootstrap', _);
  return _;
}(typeof this['appsimake-bootstrap'] === 'undefined' ? {} : this['appsimake-bootstrap'], kotlin, this['appsimake-domx'], this['appsimake-commonshr']);
