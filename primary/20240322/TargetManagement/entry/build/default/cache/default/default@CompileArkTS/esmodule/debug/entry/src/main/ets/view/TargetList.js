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
import TargetListItem from '@bundle:com.huawei.targetmanagement/entry/ets/view/TargetListItem';
import { CommonConstants } from '@bundle:com.huawei.targetmanagement/entry/ets/common/constant/CommonConstant';
import DataModel from '@bundle:com.huawei.targetmanagement/entry/ets/viewmodel/DataModel';
export default class TargetList extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__overAllProgressChanged = this.initializeConsume("overAllProgressChanged", "overAllProgressChanged");
        this.__isEditMode = new ObservedPropertySimplePU(false, this, "isEditMode");
        this.__selectArray = new ObservedPropertyObjectPU([], this, "selectArray");
        this.__clickIndex = new ObservedPropertySimplePU(CommonConstants.DEFAULT_CLICK_INDEX, this, "clickIndex");
        this.__selectAll = new ObservedPropertySimplePU(false, this, "selectAll");
        this.__targetData = new SynchedPropertyObjectTwoWayPU(params.targetData, this, "targetData");
        this.onAddClick = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.isEditMode !== undefined) {
            this.isEditMode = params.isEditMode;
        }
        if (params.selectArray !== undefined) {
            this.selectArray = params.selectArray;
        }
        if (params.clickIndex !== undefined) {
            this.clickIndex = params.clickIndex;
        }
        if (params.selectAll !== undefined) {
            this.selectAll = params.selectAll;
        }
        if (params.onAddClick !== undefined) {
            this.onAddClick = params.onAddClick;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isEditMode.purgeDependencyOnElmtId(rmElmtId);
        this.__selectArray.purgeDependencyOnElmtId(rmElmtId);
        this.__clickIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__selectAll.purgeDependencyOnElmtId(rmElmtId);
        this.__targetData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__overAllProgressChanged.aboutToBeDeleted();
        this.__isEditMode.aboutToBeDeleted();
        this.__selectArray.aboutToBeDeleted();
        this.__clickIndex.aboutToBeDeleted();
        this.__selectAll.aboutToBeDeleted();
        this.__targetData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get overAllProgressChanged() {
        return this.__overAllProgressChanged.get();
    }
    set overAllProgressChanged(newValue) {
        this.__overAllProgressChanged.set(newValue);
    }
    get isEditMode() {
        return this.__isEditMode.get();
    }
    set isEditMode(newValue) {
        this.__isEditMode.set(newValue);
    }
    get selectArray() {
        return this.__selectArray.get();
    }
    set selectArray(newValue) {
        this.__selectArray.set(newValue);
    }
    get clickIndex() {
        return this.__clickIndex.get();
    }
    set clickIndex(newValue) {
        this.__clickIndex.set(newValue);
    }
    get selectAll() {
        return this.__selectAll.get();
    }
    set selectAll(newValue) {
        this.__selectAll.set(newValue);
    }
    get targetData() {
        return this.__targetData.get();
    }
    set targetData(newValue) {
        this.__targetData.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.MAIN_BOARD_WIDTH);
            Column.height(CommonConstants.FULL_HEIGHT);
            Column.padding({ top: { "id": 16777269, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.height({ "id": 16777259, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Row.padding({
                left: { "id": 16777264, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" },
                right: { "id": 16777266, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777232, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontSize({ "id": 16777273, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_LARGE);
            Text.fontColor({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
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
            If.create();
            if (this.targetData.length > 0) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        If.create();
                        if (this.isEditMode) {
                            this.ifElseBranchUpdateFunction(0, () => {
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create({ "id": 16777222, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                                    __Text__operateTextStyle({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                                    Text.margin({ left: { "id": 16777268, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
                                    Text.onClick(() => {
                                        this.selectAll = false;
                                        this.isEditMode = false;
                                        this.selectAllOrCancel(false);
                                    });
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create({ "id": 16777231, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                                    __Text__operateTextStyle({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                                    Text.margin({
                                        left: { "id": 16777268, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }
                                    });
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Checkbox.create();
                                    Checkbox.select(this.isSelectAll());
                                    Checkbox.selectedColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                                    Checkbox.width(CommonConstants.CHECKBOX_WIDTH);
                                    Checkbox.onClick(() => {
                                        this.selectAll = !this.selectAll;
                                        this.selectAllOrCancel(this.selectAll);
                                    });
                                    if (!isInitialRender) {
                                        Checkbox.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Checkbox.pop();
                            });
                        }
                        else {
                            this.ifElseBranchUpdateFunction(1, () => {
                                this.observeComponentCreation((elmtId, isInitialRender) => {
                                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                    Text.create({ "id": 16777226, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                                    __Text__operateTextStyle({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                                    Text.onClick(() => {
                                        this.isEditMode = true;
                                        this.selectAllOrCancel(false);
                                    });
                                    if (!isInitialRender) {
                                        Text.pop();
                                    }
                                    ViewStackProcessor.StopGetAccessRecording();
                                });
                                Text.pop();
                            });
                        }
                        if (!isInitialRender) {
                            If.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    If.pop();
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
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: CommonConstants.LIST_SPACE });
            List.edgeEffect(EdgeEffect.None);
            List.margin({ top: { "id": 16777263, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            List.width(CommonConstants.FULL_WIDTH);
            List.height(CommonConstants.LIST_HEIGHT);
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = (_item, index) => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new TargetListItem(this, {
                                        taskItem: item,
                                        index: index,
                                        selectArr: this.__selectArray,
                                        isEditMode: this.isEditMode,
                                        clickIndex: this.__clickIndex
                                    }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        isEditMode: this.isEditMode
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new TargetListItem(this, {
                                        taskItem: item,
                                        index: index,
                                        selectArr: this.__selectArray,
                                        isEditMode: this.isEditMode,
                                        clickIndex: this.__clickIndex
                                    }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        isEditMode: this.isEditMode
                                    });
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            this.forEachUpdateFunction(elmtId, this.targetData, forEachItemGenFunction, (item) => JSON.stringify(item), true, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
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
            If.create();
            if (this.isEditMode) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Button.createWithLabel({ "id": 16777225, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                        Button.opacity(this.isSelectRows() ? CommonConstants.NO_OPACITY : CommonConstants.OPACITY);
                        Button.enabled(this.isSelectRows() ? true : false);
                        __Button__operateButtonStyle({ "id": 16777243, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                        Button.onClick(() => {
                            this.deleteSelected();
                            this.selectAllOrCancel(false);
                            this.selectAll = false;
                        });
                        if (!isInitialRender) {
                            Button.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Button.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Button.createWithLabel({ "id": 16777220, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                        __Button__operateButtonStyle({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
                        Button.onClick(() => {
                            if (this.onAddClick !== undefined) {
                                this.onAddClick();
                            }
                        });
                        if (!isInitialRender) {
                            Button.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Button.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
    }
    /**
     * Delete the selected item and exit the editing mode.
     */
    deleteSelected() {
        DataModel.deleteData(this.selectArray);
        this.targetData = DataModel.getData();
        this.overAllProgressChanged = !this.overAllProgressChanged;
        this.isEditMode = false;
    }
    /**
     * Select or deselect all.
     *
     * @param selectStatus true: Select all. Otherwise, deselect all.
     */
    selectAllOrCancel(selectStatus) {
        let newSelectArray = [];
        this.targetData.forEach(() => {
            newSelectArray.push(selectStatus);
        });
        this.selectArray = newSelectArray;
    }
    /**
     * Whether to select all.
     */
    isSelectAll() {
        if (this.selectArray.length === 0) {
            return false;
        }
        let deSelectCount = this.selectArray.filter((selected) => selected === false).length;
        if (deSelectCount === 0) {
            this.selectAll = true;
            return true;
        }
        this.selectAll = false;
        return false;
    }
    /**
     * Check whether there are selected rows.
     */
    isSelectRows() {
        return this.selectArray.filter((selected) => selected === true).length !== 0;
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * Custom text button style.
 */
function __Text__operateTextStyle(color) {
    Text.fontSize({ "id": 16777281, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.fontColor(color);
    Text.lineHeight({ "id": 16777283, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.fontWeight(CommonConstants.FONT_WEIGHT);
}
/**
 * Custom button style.
 */
function __Button__operateButtonStyle(color) {
    Button.width({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Button.height({ "id": 16777247, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Button.fontSize({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Button.fontWeight(CommonConstants.FONT_WEIGHT);
    Button.fontColor(color);
    Button.backgroundColor({ "id": 16777236, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
}
//# sourceMappingURL=TargetList.js.map