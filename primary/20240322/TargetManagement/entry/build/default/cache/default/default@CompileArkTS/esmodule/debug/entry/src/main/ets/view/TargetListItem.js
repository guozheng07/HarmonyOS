/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License,Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { CommonConstants } from '@bundle:com.huawei.targetmanagement/entry/ets/common/constant/CommonConstant';
import getCurrentTime from '@bundle:com.huawei.targetmanagement/entry/ets/common/utils/DateUtil';
import DataModel from '@bundle:com.huawei.targetmanagement/entry/ets/viewmodel/DataModel';
import ProgressEditPanel from '@bundle:com.huawei.targetmanagement/entry/ets/view/ProgressEditPanel';
export default class TargetListItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.taskItem = undefined;
        this.__latestProgress = new ObservedPropertySimplePU(0, this, "latestProgress");
        this.__updateDate = new ObservedPropertySimplePU('', this, "updateDate");
        this.__selectArr = new SynchedPropertyObjectTwoWayPU(params.selectArr, this, "selectArr");
        this.__isEditMode = new SynchedPropertySimpleOneWayPU(params.isEditMode, this, "isEditMode");
        this.__clickIndex = new SynchedPropertySimpleTwoWayPU(params.clickIndex, this, "clickIndex");
        this.__isExpanded = new ObservedPropertySimplePU(false, this, "isExpanded");
        this.__overAllProgressChanged = this.initializeConsume("overAllProgressChanged", "overAllProgressChanged");
        this.__sliderMode = new ObservedPropertySimplePU(CommonConstants.DEFAULT_SLIDER_MODE, this, "sliderMode");
        this.index = 0;
        this.setInitiallyProvidedValue(params);
        this.declareWatch("clickIndex", this.onClickIndexChanged);
    }
    setInitiallyProvidedValue(params) {
        if (params.taskItem !== undefined) {
            this.taskItem = params.taskItem;
        }
        if (params.latestProgress !== undefined) {
            this.latestProgress = params.latestProgress;
        }
        if (params.updateDate !== undefined) {
            this.updateDate = params.updateDate;
        }
        if (params.isEditMode !== undefined) {
            this.__isEditMode.set(params.isEditMode);
        }
        else {
            this.__isEditMode.set(false);
        }
        if (params.isExpanded !== undefined) {
            this.isExpanded = params.isExpanded;
        }
        if (params.sliderMode !== undefined) {
            this.sliderMode = params.sliderMode;
        }
        if (params.index !== undefined) {
            this.index = params.index;
        }
    }
    updateStateVars(params) {
        this.__isEditMode.reset(params.isEditMode);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__latestProgress.purgeDependencyOnElmtId(rmElmtId);
        this.__updateDate.purgeDependencyOnElmtId(rmElmtId);
        this.__selectArr.purgeDependencyOnElmtId(rmElmtId);
        this.__isEditMode.purgeDependencyOnElmtId(rmElmtId);
        this.__clickIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__isExpanded.purgeDependencyOnElmtId(rmElmtId);
        this.__sliderMode.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__latestProgress.aboutToBeDeleted();
        this.__updateDate.aboutToBeDeleted();
        this.__selectArr.aboutToBeDeleted();
        this.__isEditMode.aboutToBeDeleted();
        this.__clickIndex.aboutToBeDeleted();
        this.__isExpanded.aboutToBeDeleted();
        this.__overAllProgressChanged.aboutToBeDeleted();
        this.__sliderMode.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get latestProgress() {
        return this.__latestProgress.get();
    }
    set latestProgress(newValue) {
        this.__latestProgress.set(newValue);
    }
    get updateDate() {
        return this.__updateDate.get();
    }
    set updateDate(newValue) {
        this.__updateDate.set(newValue);
    }
    get selectArr() {
        return this.__selectArr.get();
    }
    set selectArr(newValue) {
        this.__selectArr.set(newValue);
    }
    get isEditMode() {
        return this.__isEditMode.get();
    }
    set isEditMode(newValue) {
        this.__isEditMode.set(newValue);
    }
    get clickIndex() {
        return this.__clickIndex.get();
    }
    set clickIndex(newValue) {
        this.__clickIndex.set(newValue);
    }
    get isExpanded() {
        return this.__isExpanded.get();
    }
    set isExpanded(newValue) {
        this.__isExpanded.set(newValue);
    }
    get overAllProgressChanged() {
        return this.__overAllProgressChanged.get();
    }
    set overAllProgressChanged(newValue) {
        this.__overAllProgressChanged.set(newValue);
    }
    get sliderMode() {
        return this.__sliderMode.get();
    }
    set sliderMode(newValue) {
        this.__sliderMode.set(newValue);
    }
    aboutToAppear() {
        var _a, _b;
        this.latestProgress = (_a = this.taskItem) === null || _a === void 0 ? void 0 : _a.progressValue;
        this.updateDate = (_b = this.taskItem) === null || _b === void 0 ? void 0 : _b.updateDate;
    }
    /**
     * Listening click index.
     */
    onClickIndexChanged() {
        if (this.clickIndex !== this.index) {
            this.isExpanded = false;
        }
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.Start });
            Stack.width(CommonConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Context.animation({ duration: CommonConstants.DURATION });
            Column.padding({
                left: { "id": 16777264, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" },
                top: { "id": 16777267, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" },
                bottom: { "id": 16777265, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" },
                right: this.isEditMode ? { "id": 16777260, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } : { "id": 16777264, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }
            });
            Column.height(this.isExpanded ? { "id": 16777258, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } : { "id": 16777262, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_WIDTH);
            Column.opacity(this.latestProgress === CommonConstants.SLIDER_MAX_VALUE ?
                CommonConstants.OPACITY : CommonConstants.NO_OPACITY);
            Column.borderRadius(CommonConstants.LIST_RADIUS);
            Context.animation(null);
            Column.backgroundColor(this.selectArr[this.index] ? { "id": 16777239, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } : Color.White);
            Column.onClick(() => {
                if (this.sliderMode === CommonConstants.CLICK_SLIDER_MODE) {
                    this.sliderMode = CommonConstants.DEFAULT_SLIDER_MODE;
                    return;
                }
                if (!this.isEditMode) {
                    Context.animateTo({ duration: CommonConstants.DURATION }, () => {
                        this.isExpanded = !this.isExpanded;
                    });
                    this.clickIndex = this.index;
                }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.TargetItem.bind(this)();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isExpanded) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Blank.create();
                        if (!isInitialRender) {
                            Blank.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Blank.pop();
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        __Common__.create();
                        __Common__.transition({
                            scale: {
                                x: CommonConstants.TRANSITION_ANIMATION_X,
                                y: CommonConstants.TRANSITION_ANIMATION_Y
                            }
                        });
                        if (!isInitialRender) {
                            __Common__.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    {
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            if (isInitialRender) {
                                ViewPU.create(new ProgressEditPanel(this, {
                                    slidingProgress: this.latestProgress,
                                    onCancel: () => this.isExpanded = false,
                                    onClickOK: (progress) => {
                                        this.latestProgress = progress;
                                        this.updateDate = getCurrentTime();
                                        let result = DataModel.updateProgress(this.index, this.latestProgress, this.updateDate);
                                        if (result) {
                                            this.overAllProgressChanged = !this.overAllProgressChanged;
                                        }
                                        this.isExpanded = false;
                                    },
                                    sliderMode: this.__sliderMode
                                }, undefined, elmtId));
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {
                                    slidingProgress: this.latestProgress
                                });
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                    }
                    __Common__.pop();
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isEditMode) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Row.create();
                        Row.width(CommonConstants.FULL_WIDTH);
                        Row.justifyContent(FlexAlign.End);
                        if (!isInitialRender) {
                            Row.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Checkbox.create();
                        Checkbox.select(this.selectArr[this.index]);
                        Checkbox.selectedColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                        Checkbox.width(CommonConstants.CHECKBOX_WIDTH);
                        Checkbox.margin({ right: { "id": 16777264, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
                        Checkbox.onChange((isCheck) => {
                            this.selectArr[this.index] = isCheck;
                        });
                        if (!isInitialRender) {
                            Checkbox.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Checkbox.pop();
                    Row.pop();
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Stack.pop();
    }
    TargetItem(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            var _a;
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create((_a = this.taskItem) === null || _a === void 0 ? void 0 : _a.taskName);
            Text.fontSize({ "id": 16777261, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT);
            Text.fontColor({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.width(CommonConstants.TASK_NAME_WIDTH);
            Text.textAlign(TextAlign.Start);
            Text.maxLines(CommonConstants.MAX_LINES);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.alignItems(HorizontalAlign.End);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`${this.latestProgress}%`);
            Text.fontSize({ "id": 16777261, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT);
            Text.fontColor({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.margin({ top: { "id": 16777284, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777228, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            __Text__opacityTextStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.updateDate);
            __Text__opacityTextStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * Custom transparent text styles.
 */
function __Text__opacityTextStyle() {
    Text.fontSize({ "id": 16777282, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.fontColor({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.opacity(CommonConstants.OPACITY);
    Text.fontWeight(CommonConstants.FONT_WEIGHT);
}
//# sourceMappingURL=TargetListItem.js.map