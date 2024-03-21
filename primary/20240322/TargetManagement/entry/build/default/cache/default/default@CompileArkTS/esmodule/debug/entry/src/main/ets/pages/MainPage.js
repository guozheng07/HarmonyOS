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
import TargetInformation from '@bundle:com.huawei.targetmanagement/entry/ets/view/TargetInformation';
import AddTargetDialog from '@bundle:com.huawei.targetmanagement/entry/ets/view/AddTargetDialog';
import TargetList from '@bundle:com.huawei.targetmanagement/entry/ets/view/TargetList';
import DataModel, { TaskItemBean } from '@bundle:com.huawei.targetmanagement/entry/ets/viewmodel/DataModel';
import { CommonConstants } from '@bundle:com.huawei.targetmanagement/entry/ets/common/constant/CommonConstant';
import getCurrentTime from '@bundle:com.huawei.targetmanagement/entry/ets/common/utils/DateUtil';
import promptAction from '@ohos:promptAction';
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__targetData = new ObservedPropertyObjectPU(DataModel.getData(), this, "targetData");
        this.__totalTasksNumber = new ObservedPropertySimplePU(0, this, "totalTasksNumber");
        this.__completedTasksNumber = new ObservedPropertySimplePU(0, this, "completedTasksNumber");
        this.__latestUpdateDate = new ObservedPropertySimplePU(CommonConstants.DEFAULT_PROGRESS_VALUE, this, "latestUpdateDate");
        this.__overAllProgressChanged = new ObservedPropertySimplePU(false, this, "overAllProgressChanged");
        this.addProvidedVar("overAllProgressChanged", this.__overAllProgressChanged);
        this.dialogController = new CustomDialogController({
            builder: () => {
                let jsDialog = new AddTargetDialog(this, {
                    onClickOk: (value) => this.saveTask(value)
                });
                jsDialog.setController(this.dialogController);
                ViewPU.create(jsDialog);
            },
            alignment: DialogAlignment.Bottom,
            offset: {
                dx: CommonConstants.DIALOG_OFFSET_X,
                dy: { "id": 16777254, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }
            },
            customStyle: true,
            autoCancel: false
        }, this);
        this.setInitiallyProvidedValue(params);
        this.declareWatch("overAllProgressChanged", this.onProgressChanged);
    }
    setInitiallyProvidedValue(params) {
        if (params.targetData !== undefined) {
            this.targetData = params.targetData;
        }
        if (params.totalTasksNumber !== undefined) {
            this.totalTasksNumber = params.totalTasksNumber;
        }
        if (params.completedTasksNumber !== undefined) {
            this.completedTasksNumber = params.completedTasksNumber;
        }
        if (params.latestUpdateDate !== undefined) {
            this.latestUpdateDate = params.latestUpdateDate;
        }
        if (params.overAllProgressChanged !== undefined) {
            this.overAllProgressChanged = params.overAllProgressChanged;
        }
        if (params.dialogController !== undefined) {
            this.dialogController = params.dialogController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__targetData.purgeDependencyOnElmtId(rmElmtId);
        this.__totalTasksNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__completedTasksNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__latestUpdateDate.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__targetData.aboutToBeDeleted();
        this.__totalTasksNumber.aboutToBeDeleted();
        this.__completedTasksNumber.aboutToBeDeleted();
        this.__latestUpdateDate.aboutToBeDeleted();
        this.__overAllProgressChanged.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get targetData() {
        return this.__targetData.get();
    }
    set targetData(newValue) {
        this.__targetData.set(newValue);
    }
    get totalTasksNumber() {
        return this.__totalTasksNumber.get();
    }
    set totalTasksNumber(newValue) {
        this.__totalTasksNumber.set(newValue);
    }
    get completedTasksNumber() {
        return this.__completedTasksNumber.get();
    }
    set completedTasksNumber(newValue) {
        this.__completedTasksNumber.set(newValue);
    }
    get latestUpdateDate() {
        return this.__latestUpdateDate.get();
    }
    set latestUpdateDate(newValue) {
        this.__latestUpdateDate.set(newValue);
    }
    get overAllProgressChanged() {
        return this.__overAllProgressChanged.get();
    }
    set overAllProgressChanged(newValue) {
        this.__overAllProgressChanged.set(newValue);
    }
    /**
     * Listening targetData.
     */
    onProgressChanged() {
        this.totalTasksNumber = this.targetData.length;
        this.completedTasksNumber = this.targetData.filter((item) => {
            return item.progressValue === CommonConstants.SLIDER_MAX_VALUE;
        }).length;
        this.latestUpdateDate = getCurrentTime();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.FULL_WIDTH);
            Column.height(CommonConstants.FULL_HEIGHT);
            Column.backgroundColor({ "id": 16777240, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.titleBar.bind(this)();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TargetInformation(this, {
                        latestUpdateDate: this.latestUpdateDate,
                        totalTasksNumber: this.totalTasksNumber,
                        completedTasksNumber: this.completedTasksNumber
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {
                        latestUpdateDate: this.latestUpdateDate,
                        totalTasksNumber: this.totalTasksNumber,
                        completedTasksNumber: this.completedTasksNumber
                    });
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.height(CommonConstants.LIST_BOARD_HEIGHT);
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new TargetList(this, {
                        targetData: this.__targetData,
                        onAddClick: () => this.dialogController.open()
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        Column.pop();
    }
    titleBar(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777235, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.width(CommonConstants.TITLE_WIDTH);
            Text.height({ "id": 16777286, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontSize({ "id": 16777285, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_LARGE);
            Text.textAlign(TextAlign.Start);
            Text.margin({
                top: { "id": 16777287, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" },
                bottom: { "id": 16777287, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
    }
    /**
     * Save the progress value and update time after you click OK in the dialog box.
     *
     * @param taskName Latest Progress Value.
     */
    saveTask(taskName) {
        if (taskName === '') {
            promptAction.showToast({
                message: { "id": 16777223, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" },
                duration: CommonConstants.TOAST_TIME,
                bottom: CommonConstants.TOAST_MARGIN_BOTTOM
            });
            return;
        }
        DataModel.addData(new TaskItemBean(taskName, 0, getCurrentTime()));
        this.targetData = DataModel.getData();
        this.overAllProgressChanged = !this.overAllProgressChanged;
        this.dialogController.close();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MainPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MainPage.js.map