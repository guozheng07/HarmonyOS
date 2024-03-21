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
export default class TargetInformation extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__latestUpdateDate = new SynchedPropertySimpleOneWayPU(params.latestUpdateDate, this, "latestUpdateDate");
        this.__totalTasksNumber = new SynchedPropertySimpleOneWayPU(params.totalTasksNumber, this, "totalTasksNumber");
        this.__completedTasksNumber = new SynchedPropertySimpleOneWayPU(params.completedTasksNumber, this, "completedTasksNumber");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.latestUpdateDate !== undefined) {
            this.__latestUpdateDate.set(params.latestUpdateDate);
        }
        else {
            this.__latestUpdateDate.set('');
        }
        if (params.totalTasksNumber !== undefined) {
            this.__totalTasksNumber.set(params.totalTasksNumber);
        }
        else {
            this.__totalTasksNumber.set(0);
        }
        if (params.completedTasksNumber !== undefined) {
            this.__completedTasksNumber.set(params.completedTasksNumber);
        }
        else {
            this.__completedTasksNumber.set(0);
        }
    }
    updateStateVars(params) {
        this.__latestUpdateDate.reset(params.latestUpdateDate);
        this.__totalTasksNumber.reset(params.totalTasksNumber);
        this.__completedTasksNumber.reset(params.completedTasksNumber);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__latestUpdateDate.purgeDependencyOnElmtId(rmElmtId);
        this.__totalTasksNumber.purgeDependencyOnElmtId(rmElmtId);
        this.__completedTasksNumber.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__latestUpdateDate.aboutToBeDeleted();
        this.__totalTasksNumber.aboutToBeDeleted();
        this.__completedTasksNumber.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get latestUpdateDate() {
        return this.__latestUpdateDate.get();
    }
    set latestUpdateDate(newValue) {
        this.__latestUpdateDate.set(newValue);
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.padding({ "id": 16777280, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Column.width(CommonConstants.MAIN_BOARD_WIDTH);
            Column.height({ "id": 16777278, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Column.backgroundColor(Color.White);
            Column.borderRadius(CommonConstants.TARGET_BORDER_RADIUS);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.TargetItem.bind(this)();
        this.OverallProgress.bind(this)();
        Column.pop();
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
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777290, "type": 20000, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Image.width({ "id": 16777277, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Image.height({ "id": 16777277, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Image.objectFit(ImageFit.Fill);
            Image.borderRadius(CommonConstants.IMAGE_BORDER_RADIUS);
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.margin({ left: CommonConstants.TARGET_MARGIN_LEFT });
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777234, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontSize({ "id": 16777279, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT_LARGE);
            Text.width(CommonConstants.TITLE_WIDTH);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777233, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            __Text__opacityTextStyle();
            Text.fontSize({ "id": 16777276, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777287, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
    }
    OverallProgress(parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(CommonConstants.FULL_WIDTH);
            Row.height({ "id": 16777271, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Row.margin({ top: { "id": 16777272, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" } });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777230, "type": 10003, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontSize({ "id": 16777246, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontColor({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT);
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
            Text.create(this.latestUpdateDate);
            __Text__opacityTextStyle();
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
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
            Stack.create();
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.completedTasksNumber.toString());
            Text.fontSize({ "id": 16777270, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT);
            Text.fontColor({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(`/${this.totalTasksNumber}`);
            Text.fontSize({ "id": 16777270, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Text.fontWeight(CommonConstants.FONT_WEIGHT);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Progress.create({
                value: this.completedTasksNumber,
                total: this.totalTasksNumber,
                type: ProgressType.Ring
            });
            Progress.color({ "id": 16777242, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Progress.style({
                strokeWidth: CommonConstants.STROKE_WIDTH
            });
            Progress.width({ "id": 16777271, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            Progress.height({ "id": 16777271, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
            if (!isInitialRender) {
                Progress.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Stack.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
/**
 * Custom Transparent Text Styles
 */
function __Text__opacityTextStyle() {
    Text.fontSize({ "id": 16777282, "type": 10002, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.fontColor({ "id": 16777245, "type": 10001, params: [], "bundleName": "com.huawei.targetmanagement", "moduleName": "entry" });
    Text.opacity(CommonConstants.OPACITY);
    Text.fontWeight(CommonConstants.FONT_WEIGHT);
}
//# sourceMappingURL=TargetInformation.js.map